# AutoCAD, AutoLISP, and .NET Quick-Start Automation Kit

CAD Guardian quick-start automation kit for peer walkthroughs, technical interviews, and buyer-facing business-case discussions.

> This CAD library is in development. This is an early public preview for feedback on the best business case, workflow shape, and proof path.

## STAR story

**Situation:** A CAD team has trusted AutoCAD routines, but standards, layers, attributes, plots, and support paths are too fragile to automate blindly.

**Task:** Create a public-safe quickstart that proves a request package can be validated before a native AutoLISP or AutoCAD .NET adapter changes drawings.

**Action:** Scan approved GDAL DXF/DWG fixtures, classify runtime needs, produce validation checks, and show native command scaffolds for AutoLISP and AutoCAD .NET.

**Result:** Peers and technical interviewers can run the public kit, inspect the report, then discuss where a licensed AutoCAD runtime would take over.

## Fast run

```bash
npm run doctor
npm run verify
npm run demo
dotnet build quickstart
dotnet run --project quickstart
```

The C# quickstart writes `reports/quickstart-report.json`. The Node demo writes `reports/demo-validation-report.json`.

## What is included

- Runnable C# quickstart in `quickstart/`.
- Optional native/runtime examples in `native/`.
- Safe public fixtures in `fixtures/public/`.
- STAR story, API walkthrough, native runtime notes, interview script, and expected outcome docs.

## Workflow

- Order or workflow request
- DXF/DWG fixture inventory
- Layer and text validation
- AutoLISP command decision
- AutoCAD .NET adapter decision
- Drawing package report
- Drafter review
- Accepted or corrected output

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

## Service page

https://www.cadguardian.com/services/autocad-autolisp-dotnet
