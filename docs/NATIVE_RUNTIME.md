# Native Runtime

The public kit runs without licensed CAD software. The examples in `native/` are intentionally optional.

## Runtime decision

Use C# for package validation, AutoLISP for command automation, and AutoCAD .NET when typed DWG object access is required.

## Native/API examples

- native/autolisp/CADG_LAYER_AUDIT.lsp
- native/autocad-dotnet/CadGuardianCommand.cs

## Rule

Do not claim native geometry mutation, conversion, plotting, PDM state changes, or model edits unless a local tool receipt is produced with approved files and tooling.
