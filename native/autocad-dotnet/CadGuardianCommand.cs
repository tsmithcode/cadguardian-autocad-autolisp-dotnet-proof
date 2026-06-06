// Optional native example. Requires AutoCAD .NET references and a licensed AutoCAD runtime.
using Autodesk.AutoCAD.ApplicationServices;
using Autodesk.AutoCAD.DatabaseServices;
using Autodesk.AutoCAD.EditorInput;
using Autodesk.AutoCAD.Runtime;

public sealed class CadGuardianCommands
{
    [CommandMethod("CADG_QS_AUDIT")]
    public void AuditDrawingPackage()
    {
        Document doc = Application.DocumentManager.MdiActiveDocument;
        Database db = doc.Database;
        Editor editor = doc.Editor;

        using Transaction tr = db.TransactionManager.StartTransaction();
        BlockTable blockTable = (BlockTable)tr.GetObject(db.BlockTableId, OpenMode.ForRead);
        BlockTableRecord modelSpace = (BlockTableRecord)tr.GetObject(blockTable[BlockTableRecord.ModelSpace], OpenMode.ForRead);
        LayerTable layers = (LayerTable)tr.GetObject(db.LayerTableId, OpenMode.ForRead);

        var textCount = 0;
        foreach (ObjectId id in modelSpace)
        {
            Entity entity = (Entity)tr.GetObject(id, OpenMode.ForRead);
            if (entity is DBText or MText) textCount++;
            if (entity is BlockReference blockReference)
            {
                foreach (ObjectId attributeId in blockReference.AttributeCollection)
                {
                    _ = (AttributeReference)tr.GetObject(attributeId, OpenMode.ForRead);
                }
            }
        }

        editor.WriteMessage($"\nCAD Guardian audit: layers={layers.Count}, text={textCount}");
        tr.Commit();
    }
}
