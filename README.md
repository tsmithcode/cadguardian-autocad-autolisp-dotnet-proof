# AutoCAD, AutoLISP, and .NET Automation Proof

CAD Guardian proof repo for technical interviews, buyer reviews, and peer walkthroughs.

> This CAD library is in development. This is an early public preview for feedback on the best business case, workflow shape, and proof path.

## Story
A technical buyer asks whether a trusted AutoCAD routine can become a governed service path without breaking layers, blocks, attributes, plots, or drafter trust.

## Business case
The useful slice is not a broad CAD platform rebuild. It is a request package, a command/runtime boundary, a validation report, and a handoff a drafter can inspect.

## Workflow
- Order or workflow request
- Job API contract
- DXF/DWG source inventory
- AutoLISP command surface
- AutoCAD .NET adapter boundary
- Validation report
- Drafter review
- Accepted or corrected output

## Stack vocabulary
- AutoCAD
- AutoLISP
- AutoCAD .NET
- ObjectARX
- DXF/DWG
- API job boundary

## Run

```bash
npm run doctor
npm run verify
npm run demo
npm run sanitize
```

Expected demo output: `reports/demo-validation-report.json` with a review-ready status, validation checks, stop conditions, and the public CAD data boundary.

## Runtime model
This repo is tiered:

- Public demo: runs anywhere with Node.js and synthetic fixtures.
- Optional native/runtime check: `npm run runtime:check` reports whether local CAD/API tooling appears available.
- Real CAD files: stay in an AgentOps-controlled private library unless explicitly approved for a private runtime receipt.

## Guides
- [User guide](docs/USER_GUIDE.md)
- [Runtime guide](docs/RUNTIME_GUIDE.md)
- [API references](docs/API_REFERENCES.md)
- [Expected outcome](docs/EXPECTED_OUTCOME.md)
- [Development preview warning](docs/DEVELOPMENT_PREVIEW.md)

## Official references
- [Autodesk APS Automation APIs](https://aps.autodesk.com/automation-apis) - Cloud-compatible batch automation and work-item framing.
- [AutoCAD API overview](https://aps.autodesk.com/developer/overview/autocad-api) - AutoCAD API surface and automation positioning.
- [AutoCAD ObjectARX, .NET, and AutoLISP help](https://help.autodesk.com/view/OARX/2025/ENU/) - AutoLISP, managed .NET, and ObjectARX runtime vocabulary.
- [AWS API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html) - API front door, status endpoints, and service boundary discussion.
- [AWS Step Functions](https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html) - State-machine orchestration, retries, and staged workflow discussion.
- [Azure Functions](https://learn.microsoft.com/en-us/azure/azure-functions/functions-overview) - Event-driven job/API shape when the platform standard is Azure.
- [Azure Service Bus](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-overview) - Queue and service-bus vocabulary for async CAD work.

## Public CAD data boundary
GDAL MIT DXF samples and catalog-only DWG references stay in the AgentOps public CAD library. This repo includes manifests and synthetic job data, not raw DWG files.

This repository is built for public proof. It includes source inventory manifests, synthetic input fixtures, validation examples, and adapter code shaped for walkthroughs. It does not include private drawings, proprietary project files, login material, raw opportunity notes, or native CAD files that AgentOps marks catalog-only.

## Related service page
https://www.cadguardian.com/services/autocad-autolisp-dotnet
