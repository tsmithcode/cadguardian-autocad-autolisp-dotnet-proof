<p align="left">
  <a href="https://www.cadguardian.com/autocad-automation-consulting">
    <img src="assets/cad-guardian-logo-highlighted.png" alt="CAD Guardian logo" width="120">
  </a>
</p>

# AutoCAD, AutoLISP, and .NET Public Runnable Evaluation Kit

Canonical consulting path: [AutoCAD automation consulting](https://www.cadguardian.com/autocad-automation-consulting)

Live proof page: [GitHub Pages](https://tsmithcode.github.io/cadguardian-autocad-autolisp-dotnet-proof/) | [Download ZIP](https://github.com/tsmithcode/cadguardian-autocad-autolisp-dotnet-proof/archive/refs/heads/main.zip) | [CAD Guardian](https://www.cadguardian.com/) | [TSmithCode.ai](https://www.tsmithcode.ai/)

This public runnable evaluation kit shows how CAD Guardian evaluates an AutoCAD automation opportunity before any private drawing is touched. It scans approved public DXF/DWG fixtures, reports layer/entity and text/title-block evidence, and keeps DWG mutation behind a licensed AutoCAD native runtime gate.

## CAD Guardian procurement fit

- Legal/procurement entity: CAD Guardian LLC, Delaware LLC.
- Primary classification: NAICS 541512 Computer Systems Design Services; SIC 7373 Computer Integrated Systems Design.
- Secondary implementation fit: NAICS 541511 Custom Computer Programming Services when the engagement includes custom software, API, desktop, reporting, or integration work.
- Public offer fit: Drawing/Document Automation Slice; Quote Automation Prototype; Implementation Build Slice.
- Canonical consulting path: [AutoCAD automation consulting](https://www.cadguardian.com/autocad-automation-consulting).
- Public runnable proof kit available; private customer artifacts are not exposed.
- GitHub social preview asset: `assets/github-social-preview.png` with SVG source at `assets/github-social-preview.svg`.

## Best for

- CAD managers deciding whether a repeated drawing-package check is ready for automation.
- Technical evaluators who want evidence of AutoCAD, AutoLISP, and .NET judgment before sharing private files.
- Procurement buyers and technical reviewers who need a fast proof artifact with commands, report output, source boundaries, and native-runtime limits.

## Decision this proves

Run this repo to decide whether the first funded slice should become an AutoLISP command, an AutoCAD .NET adapter, or a private-sample discovery pass.

The proof focuses on three checks:

- **Layer and entity inventory:** Stops a script rescue from changing drawings before the team knows which layers and entities are actually in scope. Native handoff: AutoLISP `tblsearch` / `ssget`, then AutoCAD .NET `LayerTable` and `BlockTableRecord`.
- **Text and title-block surface:** Catches the repeated note/title-block checks that usually create manual cleanup. Native handoff: AutoLISP `entget`, AutoCAD .NET `DBText`, `MText`, and `AttributeReference`.
- **DWG native runtime gate:** Prevents false confidence from public parsers when full AutoCAD behavior, CTB/STB, xrefs, fonts, or COM behavior matters. Native handoff: licensed AutoCAD desktop worker, AutoLISP routine, or managed .NET command.

## Run locally

```bash
npm run doctor
npm run verify
npm run demo
npm run quickstart:build
npm run sanitize
```

The repo keeps package commands stable. `npm run demo` runs the C# quickstart:

```bash
dotnet run --project quickstart
```

## Expected output

`npm run demo` writes:

```text
reports/quickstart-report.json
```

The report includes:

- `Status`: `ready-for-private-sample` or `needs-review`.
- `Fixtures`: approved public fixture receipts with size and SHA-256.
- `ParetoChecks`: layer/entity inventory, text/title-block surface, and DWG native runtime gate.
- `ReusableRoutines`: small adaptation points for fixture inventory, rule evaluation, and native runtime gating.
- `ApiSignals`: AutoLISP and AutoCAD .NET vocabulary for the next technical conversation.

Typical console signal:

```text
AutoCAD, AutoLISP, and .NET Quick-Start Automation Kit
Status: ready-for-private-sample
Pareto checks: 3
Reusable routines: 3
Report: reports/quickstart-report.json
```

## Proof boundary

This is an evaluator-first public proof, not a private production deployment. It demonstrates how CAD Guardian separates public fixture evidence from licensed AutoCAD execution and private drawing review.

The business impact is intentionally narrow: find the first repeated drawing-package check worth automating, then keep DWG mutation inside an AutoCAD runtime until layers, text, attributes, plots, and review rules are proven.

## What to send

For a private follow-up, send only approved review material:

- One trusted drawing package or a redacted representative sample.
- The repeated check that currently burns drafter time.
- Accepted output examples, including layer, text, title-block, plot, or review expectations.
- The target runtime preference: AutoLISP command, AutoCAD .NET command, desktop worker, or mixed handoff.

Do not send credentials, private notes, unapproved CAD fixtures, or client files until access and handling rules are approved.

## Related CAD Guardian page

[AutoCAD automation consulting](https://www.cadguardian.com/autocad-automation-consulting)

## Native runtime boundary

Public DXF fixtures can support lightweight text scans. DWG behavior remains AutoCAD-runtime gated because trusted automation may depend on full Autodesk behavior, CTB/STB plotting, xrefs, fonts, COM behavior, transactions, document locking, and managed command execution.

Native examples live in:

- `native/autolisp/CADG_LAYER_AUDIT.lsp`
- `native/autocad-dotnet/CadGuardianCommand.cs`

API and runtime signals covered by the proof:

```text
ssget
entget
tblsearch
entmod
command
Document
Database
Transaction
BlockTable
BlockTableRecord
LayerTable
DBText
AttributeReference
```

## Public fixture boundary

Only approved public sample files are bundled:

- `fixtures/public/gdal/assorted.dxf`: entity and layer smoke fixture from OSGeo GDAL test data.
- `fixtures/public/gdal/text.dxf`: text entity validation fixture from OSGeo GDAL test data.
- `fixtures/public/gdal/line_r2000.dwg`: DWG package-presence fixture; geometry inspection remains AutoCAD-runtime gated.

No client files, private drawings, credentials, raw opportunity notes, private names, or license-uncertain CAD assets are included.
