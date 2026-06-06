export function chooseRuntime(job) {
  const needsTypedAccess = job.validationRules.some((rule) => rule.includes('title block'));
  return needsTypedAccess ? 'AutoCAD .NET adapter' : 'AutoLISP command surface';
}


export function runAdapter(job) {
  return {
    requestId: job.requestId,
    runtimeDecision: job.runtimeDecision,
    expectedOutputs: job.expectedOutputs,
    validation: job.validationRules.map((rule) => ({
      rule,
      status: "review-ready",
      evidence: "Synthetic fixture only. Run local CAD checks against AgentOps-approved source files for tool receipts.",
    })),
    publicBoundary: "No private client files, login material, raw opportunity notes, or catalog-only native CAD binaries are included.",
  };
}
