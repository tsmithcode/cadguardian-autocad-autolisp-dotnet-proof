# Runtime Guide

## Default public runtime

The default runtime is Node.js plus synthetic fixtures:

```bash
npm run doctor
npm run verify
npm run demo
```

Expected output: `reports/demo-validation-report.json`.

## Optional native/runtime path

Run:

```bash
npm run runtime:check
```

This command only reports visible local runtime hints. It does not prove CAD execution.

## Runtime decision for this proof

AutoLISP command first, AutoCAD .NET wrapper only when typed object access is required.

## AgentOps boundary

GDAL MIT DXF samples and catalog-only DWG references stay in the AgentOps public CAD library. This repo includes manifests and synthetic job data, not raw DWG files.

Native CAD files, private client material, credentials, source-system exports, and raw opportunity notes stay outside this public repo.
