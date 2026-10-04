import type { Metadata } from 'next'
import Link from 'next/link'
import JourneyTable from '@/components/k/JourneyTable'
import ConfiguredInspector from '@/components/k/ConfiguredInspector'
import BreachLoop from '@/components/k/BreachLoop'
import ProductConsole from '@/components/k/ProductConsole'
import { Arrow, Close, PageHero, StackDiagram, demo } from '@/components/k/ui'
import { ARCH, STACK_IN, STACK_OUT } from '@/components/k/content'

export const metadata: Metadata = {
  title: 'Platform capabilities — Kaska',
  description:
    'The capabilities and architecture of Kaska Exposure Management Platform™: asset-centric intelligence, dual-path acquisition, exposure and risk, control validation, compliance and evidence, Kaska Agents, governed response and resilience — before, during and after a breach.',
}

/* Each capability section answers the same five questions, so a technical reader
   can compare them: what it provides, how it works, what it reads, why it matters,
   what changes for the customer. */
function Cap({
  n, kicker, title, lede, capability, how, intel, why, benefit, outcome, tone = 's-white', children,
}: {
  n: string
  kicker: string
  title: React.ReactNode
  lede: string
  capability: string
  how: string
  intel: string
  why: string
  benefit: string
  outcome: string
  tone?: string
  children?: React.ReactNode
}) {
  return (
    <section className={`${tone} sec`} id={kicker.toLowerCase().replace(/[^a-z]+/g, '-')}>
      <div className="wrap">
        <div className="split">
          <div>
            <span className="kicker">{n} · {kicker}</span>
            <h2 className="h2 mt-s">{title}</h2>
          </div>
          <p className="lede">{lede}</p>
        </div>
        {children}
        <div className="cols3 mt-m">
          <div><b>What it provides</b><p>{capability}</p></div>
          <div><b>How it works</b><p>{how}</p></div>
          <div><b>Intelligence it uses</b><p>{intel}</p></div>
        </div>
        <div className="cols3 mt-m">
          <div><b>Why it matters</b><p>{why}</p></div>
          <div><b>Business benefit</b><p>{benefit}</p></div>
          <div><b>What changes for you</b><p>{outcome}</p></div>
        </div>
      </div>
    </section>
  )
}

export default function Page() {
  return (
    <>
      <PageHero
        split
        kicker="Kaska Exposure Management Platform™"
        title={<>Unified cyber risk intelligence <em>around the assets that matter</em>.</>}
        lede="Kaska sits above the security stack you already own and turns distributed security intelligence into one asset-centric risk and resilience view — before, during and after a breach."
      >
        <div className="ctas mt-m">
          <Link className="btn btn-go" href={demo('em')}>Request a Demo<Arrow /></Link>
          <Link className="btn btn-q" href="/exposure-management">About Kaska EM</Link>
        </div>
      </PageHero>

      {/* 02 · HOW KASKA WORKS */}
      <section className="s-deep sec" id="how-kaska-works">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">02 · Architecture</span>
              <h2 className="h2 mt-s">Five layers, <em>one direction</em>.</h2>
            </div>
            <p className="lede">Signals come in at the bottom. Understanding, decisions and evidence come out at the top. Nothing is scanned or enforced by Kaska itself; it works through the tools you already run.</p>
          </div>
          <div className="arch">
            {ARCH.map((l) => (
              <div key={l.t} className={`lyr ${l.k}`}>
                <div className="ln">{l.n}<b>{l.t}</b></div>
                <div className="lv">{l.v.map((v) => <span key={v}>{v}</span>)}</div>
              </div>
            ))}
          </div>
          <div className="split mt-m">
            <div>
              <span className="kicker">The Command Center</span>
              <h3 className="h3 mt-s">One model. Three vantage points.</h3>
            </div>
            <p className="lede">
              Above the five layers sits the Command Center — Executive Dashboard, Incident Command and
              Intelligence Search. The same intelligence is read differently depending on where you stand.
              An executive opens the dashboard and sees posture, exposure and resilience in business terms.
              A responder opens incident command and sees the affected assets, the control that failed and
              the actions available. An auditor searches the intelligence and finds the evidence behind any
              figure, with its provenance attached. One model, three vantage points — not three products
              that have to be reconciled.
            </p>
          </div>
        </div>
      </section>

      {/* 03 · ASSET-CENTRIC INTELLIGENCE */}
      <Cap
        n="03" kicker="Asset-Centric Intelligence" tone="s-white"
        title={<>Every signal resolves to <em>an asset</em>.</>}
        lede="A finding without an owner is a ticket. A finding attached to a specific asset — with its criticality, its software, its controls and its exposure — is a decision."
        capability="One golden record per asset, assembled from every connected source: what it is, who owns it, how critical it is to the business, what software it carries and what is supposed to protect it."
        how="Every connector's output passes through one normalisation gate that stamps the tenant and the provenance of each record before it reaches the graph. Records describing the same asset from different tools are resolved into one."
        intel="Cloud, endpoint, firewall, vulnerability, network access, backup, key management, external attack surface and OT sources, each contributing what it genuinely knows."
        why="Ten tools produce ten partial inventories. None of them can tell you which system matters most."
        benefit="Security findings stop being a queue and become a ranked set of decisions with owners."
        outcome="You can answer what is at risk, who owns it and how badly it matters, from one place."
      />

      {/* 04 · INTELLIGENCE ACQUISITION */}
      <Cap
        n="04" kicker="Intelligence Acquisition" tone="s-deep"
        title={<>Two kinds of data. <em>Only one comes from your SIEM.</em></>}
        lede="Both are required to answer whether a control is actually working. Only one of them is available from an aggregator."
        capability="Two acquisition paths. Event data: already-correlated incidents from IBM QRadar, Microsoft Sentinel, Splunk and CrowdStrike XDR. Control and OEM intelligence: control validation, posture, misconfigurations, vulnerabilities, findings and alerts read directly from each security tool's API."
        how="Kaska does not re-correlate raw events; that is the SIEM's job and it is already done well. Each connector declares what it can and cannot determine, so absent data is recorded as absent rather than assumed."
        intel="Alongside both paths: external attack surface intelligence, the Kaska vulnerability database, asset and software bill-of-materials intelligence, and MITRE ATT&CK-based threat intelligence."
        why="An incident tells you what happened. It cannot tell you whether the control that should have stopped it was enforced."
        benefit="You keep your SIEM, and still get the control answer it was never designed to give."
        outcome="One intelligence model fed by the whole stack, without replacing any of it."
      >
        <div className="mt-m">
          <StackDiagram
            inputs={STACK_IN}
            outputs={STACK_OUT}
            title={['Dual-path', 'acquisition']}
            inLabel="Your existing security stack"
            outLabel="One connected picture for"
          />
        </div>
      </Cap>

      {/* 05 · EXPOSURE & RISK */}
      <Cap
        n="05" kicker="Exposure and Risk" tone="s-white"
        title={<>Exposure, weighted by <em>what actually matters</em>.</>}
        lede="Risk expressed in business terms, with the method visible and the calibration state shown beside every estimate."
        capability="FAIR-based cyber risk quantification on the asset graph: Annual Loss Expectancy, Monte Carlo value-at-risk including correlated portfolio VaR, return on security investment, attack-path analysis and exploitability-weighted exposure."
        how="Risk is computed from asset criticality, measured control effectiveness and live exposure, so the multipliers are driven by validated control state rather than a questionnaire. Attack paths show which exposures chain toward critical systems."
        intel="Asset criticality and business context, control validation results, vulnerability and software composition intelligence, exploit-probability scoring."
        why="A colour-coded heat map cannot be argued in a budget meeting, and a number without a method cannot be defended in an audit."
        benefit="A risk figure the board can act on, with a method you can show to an auditor or an insurer."
        outcome="Security investment argued in business terms rather than in red, amber and green."
      />

      {/* 06 · CONTROL VALIDATION */}
      <Cap
        n="06" kicker="Control Validation" tone="s-deep"
        title={<>Configured doesn&apos;t mean <em>protected</em>.</>}
        lede="An MFA policy can exist and still not apply to the accounts that matter. An EDR agent can be deployed and still sit in detection-only mode."
        capability="Continuous validation across 31 control domains — identity and access, privileged access, endpoint, firewall and network, cloud, email, data protection, backup, vulnerability management, OT/ICS, application security, key management and more, each with domain-specific checks rather than a generic template."
        how="Configuration becomes evidence, evidence becomes validation, validation becomes a gap with risk context. A severity gate means a critical gap can never aggregate into a passing score, and a domain with no data reads not assessed rather than green."
        intel="Configuration and posture read directly from each tool's API, against control definitions mapped to CIS, NIST, ISO and the applicable Indian regulatory frameworks."
        why="Most organisations assume a deployed control is a working control. The gap between the two is where breaches happen."
        benefit="You discover a control is not working before an attacker does, and before an auditor does."
        outcome="Specific, evidenced, owned gaps — instead of an assumption that deployment equals protection."
      >
        <div className="mt-m"><ConfiguredInspector /></div>
      </Cap>

      {/* 07 · COMPLIANCE & EVIDENCE */}
      <Cap
        n="07" kicker="Compliance and Evidence" tone="s-white"
        title={<>One validated control. <em>Many requirements.</em></>}
        lede="Compliance and security share the same underlying evidence base — the configuration state of the controls themselves."
        capability="17 regulatory and standards frameworks on a shared control crosswalk: RBI, DPDPA, CERT-In, SEBI CSCRF, IRDAI, CEA, NCIIPC and MeitY alongside ISO 27001, NIST CSF, PCI-DSS, SOC 2, GDPR, HIPAA, FISMA and CIS Controls v8."
        how="Compliance reads the real control-validation result and maps each finding to the framework controls it satisfies. Controls with no assessed check are excluded from scoring rather than counted as compliant."
        intel="Control validation findings and their evidence, mapped through the framework crosswalk."
        why="Compliance is usually operated as a separate workload, re-gathering evidence the security team already holds."
        benefit="One validated control satisfies clauses across several frameworks simultaneously, so the evidence base is shared rather than rebuilt."
        outcome="Audit answers that come from measurement, assembled continuously instead of in the fortnight before the audit."
      />

      {/* 08 · VULNERABILITY & xBOM */}
      <Cap
        n="08" kicker="Vulnerability and xBOM Intelligence" tone="s-deep"
        title={<>Know what you run, <em>and what in it is exploitable</em>.</>}
        lede="Software supply-chain risk, expressed as exposure on a specific system rather than a line in a report."
        capability="Software composition analysis correlated to vulnerability intelligence: CycloneDX and SPDX ingestion, component inventory, version-range correlation, licence-risk findings, and a CERT-In Technical Guidelines v2.0 scorecard alongside RBI, MeitY, EO 14028 and EU CRA framing."
        how="Components bind to the assets that run them. A vulnerability is then weighted by whether it is known to be exploited, how likely exploitation is, and how critical the asset carrying it happens to be."
        intel="Customer-supplied bills of materials, CVE, KEV and EPSS vulnerability intelligence, and the asset graph."
        why="You cannot defend software you cannot enumerate, and most organisations cannot enumerate it."
        benefit="Software supply-chain risk becomes a regulatory deliverable built from inputs you already have."
        outcome="Component risk, ranked by exploitability and by the importance of the system carrying it."
      />

      {/* 09 · THREAT INTELLIGENCE */}
      <Cap
        n="09" kicker="Threat Intelligence" tone="s-white"
        title={<>Weighted by what attackers <em>actually use</em>.</>}
        lede="Severity tells you how bad a vulnerability could be. Exploitation pressure tells you whether to care this week."
        capability="MITRE ATT&CK-based threat intelligence across enterprise, ICS and ATLAS technique coverage, known-exploited vulnerability catalogues, exploit-probability scoring and external attack surface intelligence."
        how="Ingested on a schedule without customer credentials and held as platform-wide reference data, then used to weight exposure and to map incidents to adversary technique."
        intel="Public threat intelligence sources, adversary technique catalogues and exploit-probability data."
        why="A backlog ranked by severity alone sends your team to the wrong work."
        benefit="Remediation effort goes to the small set of issues under real exploitation pressure."
        outcome="Fewer priorities, each of which you can justify."
      />

      {/* 10 · PRE-BREACH RISK INTELLIGENCE */}
      <section className="s-deep sec" id="pre-breach-risk-intelligence">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">10 · Pre-Breach Risk Intelligence</span>
              <h2 className="h2 mt-s">Understand and <em>prepare</em>.</h2>
            </div>
            <p className="lede">
              Five groups of intelligence, all written to the same asset record. Most security work begins when an
              alert fires. By then the conditions that allowed the attack have been in place for weeks.
            </p>
          </div>
          <div className="cols3 mt-m">
            <div><b>Risk &amp; Exposure</b><p>Exposure register · risk quantification · business impact</p></div>
            <div><b>Asset Intelligence</b><p>Asset inventory · bill of materials (xBOM) · data risk · OT/ICS security · GenAI risk · user behaviour</p></div>
            <div><b>Threat &amp; Exposure</b><p>Attack paths · threat intelligence · threat hunting · threat simulation · threat forecast · external attack surface · MITRE ATT&amp;CK</p></div>
          </div>
          <div className="cols3 mt-m">
            <div><b>Controls &amp; Compliance</b><p>Control validation · compliance · check library · Zero Trust posture · vulnerabilities</p></div>
            <div><b>Resilience &amp; Third-Party</b><p>Cyber resilience scoring against NIST CSF · vendor risk portfolio</p></div>
            <div><b>How it works</b><p>Connectors build the asset record. Controls are validated against each asset. Unvalidated controls, vulnerabilities and misconfigurations become exposure. Attack paths show which of those chain toward critical systems. Threat intelligence weights them. Risk quantification converts the result into business terms.</p></div>
          </div>
          <div className="cols3 mt-m">
            <div><b>Why it matters</b><p>The misconfigured control, the open path and the over-privileged account are all present long before the alert.</p></div>
            <div><b>Business benefit</b><p>Act on the conditions that make a breach possible, rather than on the alert that says one has started.</p></div>
            <div><b>What changes for you</b><p>Gaps are found and closed while they are still cheap to fix.</p></div>
          </div>
        </div>
      </section>

      {/* 11 · REAL-TIME BREACH INTELLIGENCE */}
      <section className="s-white sec" id="real-time-breach-intelligence">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">11 · Real-Time Breach Intelligence</span>
              <h2 className="h2 mt-s">Contextualise, prioritise <em>and respond</em>.</h2>
            </div>
            <p className="lede">
              Your SIEM or XDR correlates events into an incident and hands it to Kaska. Kaska does not repeat that
              work. It adds the five things the SIEM has no structural way of knowing.
            </p>
          </div>
          <div className="cols3 mt-m">
            <div><b>Which assets</b><p>The systems affected, and how critical each one is to the business.</p></div>
            <div><b>Which controls failed</b><p>The incident attributed to the specific control gaps that allowed it.</p></div>
            <div><b>What else is exposed</b><p>Vulnerabilities, software components and attack paths on those same assets, from the same graph.</p></div>
          </div>
          <div className="cols3 mt-m">
            <div><b>What it is worth</b><p>Business impact and financial exposure, in the terms the decision will be made in.</p></div>
            <div><b>What may be done</b><p>A case with a named owner and a governed action, inside approved boundaries.</p></div>
            <div><b>Already in place</b><p>Because the pre-breach intelligence was built beforehand, the context is there the moment the signal arrives rather than assembled after it.</p></div>
          </div>
          <div className="cols3 mt-m">
            <div><b>Why it matters</b><p>Your SIEM saw what happened. It cannot tell you which control was supposed to stop it, or what that failure is worth.</p></div>
            <div><b>Business benefit</b><p>Decisions made with the context already assembled, instead of gathered across ten consoles while the clock runs.</p></div>
            <div><b>What changes for you</b><p>A decisive call in minutes, with the reasoning recorded.</p></div>
          </div>
        </div>
      </section>

      {/* 12 · POST-BREACH RESILIENCE */}
      <section className="s-deep sec" id="post-breach-resilience">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">12 · Post-Breach Resilience</span>
              <h2 className="h2 mt-s">Close the gap permanently, <em>and prove it</em>.</h2>
            </div>
            <p className="lede">
              Most organisations survive an incident and change nothing structural. The same weakness is still there
              for the next attacker.
            </p>
          </div>
          <div className="mt-m"><BreachLoop initial={2} /></div>
          <div className="cols4 mt-m">
            <div><b>Incident reconstruction</b><p>The timeline, entry point, lateral movement and the assets involved at each step.</p></div>
            <div><b>Symptom versus control failure</b><p>What your tools detected, separated from what actually allowed it — attributed to the specific pre-breach gap, with an owner.</p></div>
            <div><b>Evidence</b><p>Every response action and approval sealed into a tamper-evident chain, so the record is verifiable rather than narrated.</p></div>
            <div><b>Recovery</b><p>Recovery steps orchestrated against the affected assets, with backup integrity and recovery readiness assessed as part of the plan.</p></div>
          </div>
          <div className="cols4 mt-m">
            <div><b>Revalidation</b><p>The control that failed is re-validated. A case may close only when the fix is confirmed, not when it is asserted.</p></div>
            <div><b>Risk reassessment</b><p>Risk recomputed on the updated asset model, and attack paths re-counted to confirm the route is actually broken.</p></div>
            <div><b>Resilience score movement</b><p>The resilience score and compliance position move with the result, so improvement is visible rather than claimed.</p></div>
            <div><b>Updating the asset graph</b><p>The closed case writes back. Next time Kaska assesses that asset, what was learned here is already part of the picture.</p></div>
          </div>
          <div className="cols3 mt-m">
            <div><b>Why it matters</b><p>An incident you survive but do not learn from is an incident you will have again.</p></div>
            <div><b>Business benefit</b><p>A defensible record for the regulator, the board and the insurer — and a measurable improvement rather than a claimed one.</p></div>
            <div><b>What changes for you</b><p>The same class of attack does not succeed twice, and you can show precisely why.</p></div>
          </div>
        </div>
      </section>

      {/* 13 · KASKA AGENTS */}
      <section className="s-dark sec" id="kaska-agents">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">13 · Kaska Agents</span>
              <h2 className="h2 mt-s">AI-assisted. Governed by humans. <em>Proven by evidence.</em></h2>
            </div>
            <p className="lede">
              Kaska does not stop at telling you what is wrong. Its agents work against the same asset-centric
              intelligence that drives risk, control validation and exposure — validating, investigating,
              prioritising, responding and verifying across the breach lifecycle.
            </p>
          </div>

          <p className="note mt-m">Observe → Validate → Prioritize → Govern → Act → Seal → Revalidate</p>

          <div className="cols3 mt-m">
            <div><b>Before a breach</b><p>Validate controls across 31 domains · model attack paths to critical assets · simulate adversary techniques · detect drift from a known-good posture · forecast where exposure is building.</p></div>
            <div><b>During a breach</b><p>Investigate the incident through a structured eight-phase analysis · enrich with asset, control and vulnerability context · map to MITRE ATT&amp;CK · prioritise by business impact · open a case with a named owner · execute the approved response.</p></div>
            <div><b>After a breach</b><p>Seal every action into the evidence chain · reproduce the incident timeline · orchestrate recovery steps · re-validate the control that failed · confirm the fix held before the case closes.</p></div>
          </div>

          <div className="split mt-m">
            <div>
              <span className="kicker">Governance</span>
              <h3 className="h3 mt-s">Not a setting. <em>The architecture.</em></h3>
            </div>
            <p className="lede">
              Before any action runs, Kaska evaluates it against the risk of the action itself, the criticality of the
              asset it touches, whether it can be reversed, and the autonomy level you have set. The answer is either
              proceed, or a named person at this level must approve — and Kaska tells you which, and why.
            </p>
          </div>

          <div className="cols4 mt-m">
            <div><b>Four autonomy levels</b><p>Manual, assisted, auto-low-risk and auto. Kaska ships on assisted.</p></div>
            <div><b>Irreversible actions</b><p>Treated separately, and never auto-execute by default.</p></div>
            <div><b>Safety floor</b><p>A hard floor that forces approval regardless of configuration.</p></div>
            <div><b>Explainable</b><p>Every decision returns the rule that produced it, in language a reviewer can read.</p></div>
          </div>

          <div className="cols4 mt-m">
            <div><b>Control validation</b><p>Reads each tool directly and reports whether a control is enforced across 31 domains. Produces findings; takes no action.</p></div>
            <div><b>Investigation</b><p>An eight-phase incident investigation that enriches, correlates, maps to MITRE ATT&amp;CK and recommends a response. Structured by design, so the same incident produces the same reasoning. Recommends only.</p></div>
            <div><b>Response</b><p>Executes the approved action through the tools you already run — isolating an endpoint, blocking an address, revoking cloud permissions, quarantining mail. Executes only when a named human has approved.</p></div>
            <div><b>Verification</b><p>Re-checks the control after remediation and confirms the system is both secure and recoverable before a case may close. An indeterminate result fails the gate.</p></div>
          </div>

          <p className="note mt-m">
            Kaska combines structured automation, governed autonomy and AI-based explanation where it genuinely
            helps — with a human approving what executes, and an evidence trail proving what happened.
          </p>
        </div>
      </section>

      {/* 14 · GOVERNED RESPONSE & ORCHESTRATION */}
      <Cap
        n="14" kicker="Governed Response and Orchestration" tone="s-warm"
        title={<>Speed, <em>without surrendering control</em>.</>}
        lede="Automation you can defend in an audit, because the rule that allowed it is explicit and recorded."
        capability="Case creation and assignment, prioritisation, approval workflow with required approver tiers and timeouts, playbook execution (built-in and customer-defined), and response actions across EDR, firewall, identity, PAM, cloud, DNS, email, backup, SIEM and ticketing."
        how="Every action is evaluated against its own risk, the criticality tier of the asset it touches, whether it is reversible, and the tenant's autonomy level. The engine returns either proceed or approval required at this tier, together with the reason."
        intel="The case, the asset record, control state, the configured autonomy policy and the approver directory."
        why="Automation without governance is unsellable to anyone accountable for a production environment."
        benefit="Response at machine speed, inside boundaries a named person set and a reviewer can inspect."
        outcome="Faster containment, with a defensible answer to why each action was permitted."
      >
        <div className="mt-m"><JourneyTable /></div>
      </Cap>

      {/* 15 · EVIDENCE & AUDITABILITY */}
      <Cap
        n="15" kicker="Evidence and Auditability" tone="s-dark"
        title={<>Proof that survives <em>the person who made it</em>.</>}
        lede="Finding → Case → Approval → Action → Evidence → Verification → Revalidation, with every step sealed."
        capability="A tamper-evident record of everything that happened: each case event hashed and chained to its predecessor, so the sequence cannot be altered after the fact."
        how="Each event is hashed with SHA-256 and chained from a genesis root, written under a lock so the chain cannot fork. Altering any earlier event breaks every hash that follows it."
        intel="Case events, approvals, executed actions, verification results and their provenance."
        why="An audit trail that can be edited is not an audit trail."
        benefit="An auditor, a regulator or an insurer can verify the record rather than trust your account of it."
        outcome="What was done, by whom and under what approval, is provable rather than asserted."
      >
        <div className="mt-m"><ProductConsole initialView="evi" /></div>
      </Cap>

      {/* 16 · RESILIENCE */}
      <Cap
        n="16" kicker="Resilience" tone="s-white"
        title={<>One number the board and the SOC <em>both recognise</em>.</>}
        lede="Resilience is the objective. Controls are the means, and evidence is how you tell the difference between the two."
        capability="A resilience view scored across preparedness, detection capability, response speed, recovery capacity and continuity assurance, with board-ready reporting in plain language."
        how="The console and the board report read the same resilience view, so they cannot disagree. Areas without evidence are reported as such rather than hidden."
        intel="Control validation state, exposure, incident history, recovery readiness and the evidence chain."
        why="A board paper assembled by hand each quarter is out of date before it is presented, and cannot be traced back to anything."
        benefit="Improvement you can demonstrate over successive quarters, from the same evidence that runs the platform."
        outcome="One position on resilience, consistent wherever it is read."
      />

      {/* 17 · INTEGRATIONS */}
      <section className="s-deep sec" id="integrations">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">17 · Integrations</span>
              <h2 className="h2 mt-s">Above the stack <em>you already run</em>.</h2>
            </div>
            <p className="lede">
              Cloud-delivered tools connect through vendor APIs with no agent or appliance. Tools behind the perimeter
              reach Kaska through one light, outbound-only collector. Read-only access wherever possible, and
              connector credentials encrypted at rest.
            </p>
          </div>
          <div className="cols4 mt-m">
            <div><b>SIEM / XDR</b><p>Already-correlated incidents and events</p></div>
            <div><b>Identity &amp; PAM</b><p>Accounts, entitlements, privileged access</p></div>
            <div><b>Endpoint</b><p>Agent coverage, policy and posture</p></div>
            <div><b>Network &amp; Firewall</b><p>Rulebase, segmentation, exposure</p></div>
          </div>
          <div className="cols4 mt-m">
            <div><b>Cloud</b><p>Posture, entitlements and configuration</p></div>
            <div><b>Vulnerability Management</b><p>Findings bound to assets</p></div>
            <div><b>Email</b><p>Protection state and detections</p></div>
            <div><b>Application Security</b><p>Software findings and composition</p></div>
          </div>
          <div className="cols4 mt-m">
            <div><b>Data Protection</b><p>Classification, encryption and access</p></div>
            <div><b>Backup &amp; Recovery</b><p>Immutability, retention, recovery readiness</p></div>
            <div><b>OT / ICS</b><p>Zones, segmentation and device posture</p></div>
            <div><b>Ticketing &amp; Notification</b><p>Where the work and the alerts already go</p></div>
          </div>
          <p className="note mt-m">Tell us the tools you run and we will confirm integration fit for each.</p>
          <Link className="more mt-m" href="/integrations">How Kaska connects</Link>
        </div>
      </section>

      {/* 18 · BUSINESS BENEFITS & CUSTOMER OUTCOMES */}
      <section className="s-warm sec" id="business-benefits">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">18 · Benefits and outcomes</span>
              <h2 className="h2 mt-s">What changes <em>when this is in place</em>.</h2>
            </div>
            <p className="lede">Technical capability matters only to the degree it changes what your organisation can see, decide and prove.</p>
          </div>
          <div className="cols3 mt-m">
            <div><b>Understand what is actually at risk</b><p>Control state measured from the tools themselves, not inferred from a deployment record.</p></div>
            <div><b>Understand why the risk exists</b><p>Every figure carries its source and its state, so a conclusion can be examined rather than accepted.</p></div>
            <div><b>Prioritise what matters</b><p>Ranking combines asset criticality, control effectiveness and live exploitability.</p></div>
          </div>
          <div className="cols3 mt-m">
            <div><b>Validate whether controls work</b><p>31 domains, evidence on every finding, and unmeasured controls reported as unmeasured.</p></div>
            <div><b>Reduce fragmented decisions</b><p>One record and one evidence trail instead of reconciling ten consoles.</p></div>
            <div><b>Respond through governed workflows</b><p>Named approval, explicit boundaries, execution through the tools you already run.</p></div>
          </div>
          <div className="cols3 mt-m">
            <div><b>Prove what was done</b><p>A tamper-evident chain covering every approval and every action.</p></div>
            <div><b>Verify that remediation held</b><p>A case closes only when the fix is confirmed, not when it is claimed.</p></div>
            <div><b>Improve resilience continuously</b><p>Every closed case updates the shared model, so the same weakness does not recur.</p></div>
          </div>

          <div className="split mt-l">
            <div>
              <span className="kicker">By audience</span>
              <h3 className="h3 mt-s">Who gets <em>what</em>.</h3>
            </div>
            <p className="lede">The same intelligence, read for the question each role is accountable for.</p>
          </div>
          <div className="cols4 mt-m">
            <div><b>CISO</b><p>Know which controls are genuinely enforced, where the gaps are, and be able to defend both answers under questioning.</p></div>
            <div><b>Board</b><p>A plain-language position on cyber risk and resilience, in business terms, without a translation layer.</p></div>
            <div><b>Security Operations</b><p>Incident context assembled before the call is made, and response executed inside approved boundaries.</p></div>
            <div><b>Risk and GRC</b><p>Risk derived from measured control effectiveness rather than from a survey, updated continuously.</p></div>
          </div>
          <div className="cols3 mt-m">
            <div><b>Audit and Compliance</b><p>One validated control satisfying clauses across multiple frameworks, with verifiable evidence attached to each.</p></div>
            <div><b>IT and Infrastructure</b><p>Gaps that are specific, owned and actionable, with the remediation path and its approval already defined.</p></div>
            <div><b>Business owners</b><p>Clarity on which systems carry the most consequence, and what is being done about them.</p></div>
          </div>
        </div>
      </section>

      <Close title={<>See the capabilities on <em>your</em> questions.</>} text="Tell us what you need to prove, to leadership or to a regulator. We'll show you how Kaska EM approaches it." />
    </>
  )
}
