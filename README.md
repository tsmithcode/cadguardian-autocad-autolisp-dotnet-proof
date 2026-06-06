<p align="left">
  <a href="https://www.cadguardian.com/">
    <img src="assets/cad-guardian-logo-highlighted.png" alt="CAD Guardian logo" width="120">
  </a>
</p>

# AutoCAD, AutoLISP, and .NET Quick-Start Automation Kit

CAD Guardian Pareto quick-start automation kit for drafters, CAD automation peers, technical interviews, and buyer-facing business-case discussions.

> This CAD library is in development. This is an early public preview for feedback on the best business case, workflow shape, and proof path.

## Live site

- GitHub Pages: https://tsmithcode.github.io/cadguardian-autocad-autolisp-dotnet-proof/
- Download ZIP: https://github.com/tsmithcode/cadguardian-autocad-autolisp-dotnet-proof/archive/refs/heads/main.zip
- CAD Guardian: https://www.cadguardian.com/
- TSmithCode.ai: https://www.tsmithcode.ai/
- Service page: https://www.cadguardian.com/services/autocad-autolisp-dotnet

## Why this exists

Find the first repeated drawing-package check worth automating, then keep DWG mutation inside an AutoCAD runtime until layers, text, attributes, plots, and review rules are proven.

## Fast run

```bash
npm run doctor
npm run verify
npm run demo
dotnet build quickstart
```

`npm run demo` runs the C# quickstart and writes `reports/quickstart-report.json`.

## What is worth reusing

- `quickstart/Program.cs`: a small C# package-readiness engine with fixture receipts, Pareto checks, native runtime gates, and a JSON report.
- `native/`: optional API/runtime examples for the licensed CAD environment.
- `fixtures/public/`: approved public CAD fixtures only.
- `docs/USER_GUIDE.md`: how to run and adapt the kit.
- `docs/INTERVIEW_SCRIPT.md`: how to explain the business case without guessing.

## STAR story

**Situation:** A CAD team has trusted AutoCAD routines, but standards, layers, attributes, plots, and support paths are too fragile to automate blindly.

**Task:** Prove a request package can be validated before AutoLISP or AutoCAD .NET changes drawings.

**Action:** Scan public DXF/DWG fixtures, classify runtime needs, produce checks drafters recognize, and show the native handoff points.

**Result:** A reviewer can run the kit, inspect the report, and decide which AutoLISP command or AutoCAD .NET adapter deserves the first funded slice.

## Pareto checks

- **Layer and entity inventory:** Stops a script rescue from changing drawings before the team knows which layers and entities are actually in scope. Handoff: AutoLISP `tblsearch` / `ssget`, then AutoCAD .NET `LayerTable` and `BlockTableRecord`.
- **Text and title-block surface:** Catches the repeated note/title-block checks that usually create manual cleanup. Handoff: AutoLISP `entget`, AutoCAD .NET `DBText`, `MText`, and `AttributeReference`.
- **DWG native runtime gate:** Prevents false confidence from public parsers when full AutoCAD behavior, CTB/STB, xrefs, fonts, or COM behavior matters. Handoff: Licensed AutoCAD desktop worker, AutoLISP routine, or managed .NET command.

## API and runtime signals

- ssget
- entget
- tblsearch
- entmod
- command
- Document
- Database
- Transaction
- BlockTable
- BlockTableRecord
- LayerTable
- DBText
- AttributeReference

## Public fixture boundary

Only approved public sample files are bundled. No client files, private drawings, credentials, raw opportunity notes, or license-uncertain CAD assets are included.
