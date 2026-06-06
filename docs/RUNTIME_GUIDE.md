# Runtime Guide

## Public runtime

The default kit runs with local .NET and does not require licensed CAD software.

```bash
dotnet run --project quickstart
```

## Native runtime

Use C# for package validation, AutoLISP for command-level drafting automation, and AutoCAD .NET when typed DWG object access is required.

Native examples are intentionally optional. They should be used only inside the matching licensed CAD environment after the package boundary is proven.

## Native handoff points

- **Layer and entity inventory:** AutoLISP `tblsearch` / `ssget`, then AutoCAD .NET `LayerTable` and `BlockTableRecord`.
- **Text and title-block surface:** AutoLISP `entget`, AutoCAD .NET `DBText`, `MText`, and `AttributeReference`.
- **DWG native runtime gate:** Licensed AutoCAD desktop worker, AutoLISP routine, or managed .NET command.
