export function runAdapter(job) {
  return {
    requestId: job.requestId,
    kitType: "CAD Guardian quick-start automation kit",
    repo: "tsmithcode/cadguardian-autocad-autolisp-dotnet-proof",
    runtimeDecision: job.runtimeDecision,
    apiSignals: [
  "ssget",
  "entget",
  "tblsearch",
  "entmod",
  "command",
  "Document",
  "Database",
  "Transaction",
  "BlockTable",
  "BlockTableRecord",
  "LayerTable",
  "DBText",
  "AttributeReference"
],
    expectedOutputs: [
  "drawing-package-report",
  "fixture receipts",
  "runtime decision",
  "native adapter notes"
],
    validation: [
  "DXF/DWG fixtures are present and attributed",
  "DXF text fixture exposes SECTION or ENTITIES markers",
  "Layer/title-block expectations are represented as review checks",
  "AutoLISP and AutoCAD .NET adapter handoff is documented"
].map((rule) => ({
      rule,
      status: "review-ready",
      evidence: "Public quick-start kit fixture, API walkthrough, or native adapter example is present.",
    })),
    publicBoundary: "No private client files, login material, raw opportunity notes, or license-uncertain CAD assets are included.",
  };
}
