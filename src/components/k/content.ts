// Shared site copy: one source for content that appears on more than one page.

export const CAPABILITIES = [
  { t: 'Asset Intelligence', d: 'One inventory of what you run, who owns it and how critical it is, assembled from the tools you already have.', layer: 'Asset foundation' },
  { t: 'Asset Graph & xBOM', d: 'Relationships between assets, identities and software components, including SBOM-based software inventory.', layer: 'Asset foundation' },
  { t: 'Exposure Management', d: 'Vulnerabilities, misconfigurations and public exposure in context: known-exploited flaws first, attached to the assets they affect.', layer: 'Analytics core' },
  { t: 'Control Validation', d: 'Checks whether each security control is enforced as intended, not only configured, across identity, endpoint, cloud, network, email and more.', layer: 'Analytics core' },
  { t: 'Cyber Risk Quantification', d: 'A FAIR-based model designed to express exposure in business terms, with its calibration state shown alongside every estimate.', layer: 'Analytics core' },
  { t: 'Compliance & Evidence', d: 'Control evidence mapped to the regulatory and industry frameworks you report against, with its provenance kept.', layer: 'Analytics core' },
  { t: 'Detection & Response', d: 'Incidents from your SIEM or XDR connected to the same asset, exposure and control context used before the breach.', layer: 'Orchestration' },
  { t: 'Investigation & Case Management', d: 'Cases with owners, timelines and evidence, so every finding and incident is worked to a verified close.', layer: 'Orchestration' },
  { t: 'Governed Response & Orchestration', d: 'Playbooks and response actions that follow policy, with human approval where it matters and an audit trail throughout.', layer: 'Orchestration' },
  { t: 'Resilience & Reporting', d: 'A resilience view and plain-language reporting for leadership, built from the same evidence as the console.', layer: 'Dashboard' },
]

export const ARCH = [
  { k: 'top', n: '05', t: 'Exposure & Resilience Dashboard', v: ['Executive view', 'Risk & resilience', 'Compliance posture', 'Board reporting'] },
  { k: '', n: '04', t: 'Orchestration & Case Management', v: ['Cases', 'Approvals', 'Governed actions', 'Playbooks', 'Audit trail'] },
  { k: 'core', n: '03', t: 'Kaska AI & Analytics Core', v: ['Control validation', 'Risk quantification (FAIR)', 'Prioritisation', 'AI-assisted investigation'] },
  { k: '', n: '02', t: 'Asset Intelligence Foundation', v: ['Asset graph', 'Criticality', 'Ownership', 'Software (xBOM)'] },
  { k: 'base', n: '01', t: 'Data & Signal Ingestion', v: ['SIEM / XDR', 'Endpoint', 'Identity', 'Cloud', 'Vulnerability', 'Threat intelligence'] },
]

export const SPINE = [
  { t: 'Asset', d: 'What exists, who owns it, how critical it is.' },
  { t: 'Exposure', d: 'Vulnerabilities, misconfigurations and public reach.' },
  { t: 'Control', d: 'Whether the protection is enforced, not assumed.' },
  { t: 'Risk', d: 'Exposure and control state, in business context.' },
  { t: 'Action / Case', d: 'An owner, a governed change, a record.', cls: 'act' },
  { t: 'Evidence', d: 'What was done, with its source.' },
  { t: 'Reassessment', d: 'Re-validate what changed.' },
  { t: 'Resilience', d: 'A stronger position each cycle.', cls: 'res' },
]

export const FRAMEWORKS = ['RBI', 'SEBI CSCRF', 'IRDAI', 'CERT-In', 'DPDP', 'NCIIPC', 'CEA', 'ISO 27001', 'NIST CSF', 'CIS Controls v8', 'PCI DSS', 'IEC 62443']

export const SECTORS = [
  { id: 'enterprise', t: 'Enterprise', d: 'IT / ITES, pharma and manufacturing: broad security stacks that still need one answer on what is actually exposed.', ctx: 'DPDP · ISO 27001 · NIST CSF' },
  { id: 'bfsi', t: 'BFSI', d: 'Banks, NBFCs and insurers, where regulators and boards expect control evidence, and payment workflows attract fraud.', ctx: 'RBI · SEBI CSCRF · IRDAI' },
  { id: 'government', t: 'Government / PSU', d: 'Departments and public-sector undertakings working under CERT-In obligations and strict hosting requirements.', ctx: 'CERT-In · NCIIPC · MeitY' },
  { id: 'defence', t: 'Defence', d: 'Restricted environments that demand local control of data and rigorous assurance of every control.', ctx: 'Assessed case by case' },
  { id: 'critical-infrastructure', t: 'Critical Infrastructure', d: 'Power, energy and regulated sectors that must secure IT and OT together.', ctx: 'CEA · IEC 62443 · NCIIPC' },
]

export const SOLUTIONS = [
  'Managed Security Services', 'SOC / MDR', 'VAPT', 'GRC', 'IAM / PAM', 'Data Security', 'Application Security',
  'Network Security', 'Cloud Security', 'OT Security', 'Incident Response & Recovery', 'Security Architecture',
  'Advisory', 'Implementation', 'Managed Device Support',
]

// Home · Kaska as the intelligence layer
export const STACK_IN = ['SIEM / XDR', 'EDR', 'IAM / PAM', 'Cloud', 'Vulnerability', 'Network', 'Email', 'Data', 'GRC']
export const STACK_VERBS = ['Understand', 'Correlate', 'Validate', 'Quantify', 'Prioritise', 'Act', 'Prove', 'Reassess']
export const STACK_OUT = ['CISO', 'Security team', 'Board', 'Regulator']

export const INTEL_INPUTS = [
  { t: 'Assets', d: 'What exists, who owns it and how critical it is.' },
  { t: 'Identities', d: 'Who and what can reach it, and with which privileges.' },
  { t: 'Exposures', d: 'Vulnerabilities, misconfigurations and public reach.' },
  { t: 'Controls', d: 'Whether the protections in place actually hold.' },
  { t: 'Threats', d: 'Known-exploited flaws and attacker techniques.' },
  { t: 'Relationships', d: 'How assets, identities and access paths connect.' },
  { t: 'Business context', d: 'What each asset supports, and what its loss would mean.' },
  { t: 'Evidence', d: 'Where every fact came from, and how current it is.' },
]

// Home · before a breach: the conditions that make an exposure matter (illustrative example in `e`)
export const CONDITIONS = [
  { t: 'Exposure', e: 'A known-exploited flaw' },
  { t: 'Asset criticality', e: 'on a payments system' },
  { t: 'Control weakness', e: 'where MFA is not enforced' },
  { t: 'Threat', e: 'using a technique in active use' },
  { t: 'Relationship', e: 'reachable from a user workstation, where supported' },
  { t: 'Business context', e: 'supporting customer payments' },
]
export const NEXT_STEPS = [
  { t: 'Connected risk', d: 'The combination that makes the exposure matter, designed to be expressed in business terms.' },
  { t: 'Prioritise', d: 'The few conditions most likely to matter, first.' },
  { t: 'Act', d: 'A case, an owner and a governed change.', cls: 'act' },
  { t: 'Verify', d: 'Re-validated, so reduced exposure is shown, not assumed.', cls: 'res' },
]

// Home · technology ecosystem. Every vendor maps to a connector in
// services/data-ingestion/connector-framework/connectors. Only Okta is live-proven (V1);
// the rest are implemented and unit-tested, so the section carries a validation qualifier.
export const ECOSYSTEM: [string, string[]][] = [
  ['Identity', ['Okta', 'Microsoft Entra ID', 'Ping Identity', 'SailPoint', 'CyberArk']],
  ['Endpoint', ['Microsoft Defender', 'CrowdStrike', 'SentinelOne', 'Trend Micro']],
  ['SIEM / security operations', ['Microsoft Sentinel', 'Splunk', 'IBM QRadar', 'Google Security Operations (Chronicle)']],
  ['Network', ['Palo Alto Networks', 'Fortinet', 'Check Point', 'Cisco']],
  ['Cloud', ['AWS', 'Microsoft Azure', 'Google Cloud']],
  ['Email', ['Microsoft Defender for Office 365', 'Proofpoint', 'Mimecast']],
  ['Vulnerability', ['Tenable', 'Qualys', 'Rapid7']],
  ['Application security', ['Checkmarx', 'Veracode', 'OpenText Fortify', 'HCL AppScan']],
]
