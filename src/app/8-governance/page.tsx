import DocsLayout from '../DocsLayout';

export default function Governance() {
  return (
    <DocsLayout>
      <main className="prose mx-auto py-8">
        <nav className="mb-4 text-sm text-gray-500 flex items-center gap-2">
          <a href="/" className="text-primary-600 hover:underline">Docs</a>
          <span>›</span>
          <span>Governance & Elections</span>
        </nav>

        <div className="bg-primary-50 border border-primary-200 rounded p-6 mb-6">
          <h1 className="text-2xl font-bold mb-2">Governance & Elections Guide</h1>
          <p>Manage AGMs, digital voting, elections, and nominations for your housing society.</p>
        </div>

        <div className="bg-primary-100 border border-primary-200 rounded p-4 mb-6">
          <strong>Owner-Only Access:</strong> Governance features are restricted to unit owners. Tenants cannot access voting, elections, or audit documents.
        </div>

        <h2>Overview</h2>
        <ul>
          <li><strong>AGM Management</strong> - Schedule, publish notices, track RSVP and quorum</li>
          <li><strong>Digital Voting</strong> - Secure voting on motions and resolutions</li>
          <li><strong>Elections</strong> - Committee elections with nomination workflow</li>
          <li><strong>Audit Access</strong> - Financial document access for owners</li>
        </ul>

        <h2>Owner vs Tenant Access</h2>
        <table className="table-auto border-collapse w-full mb-8">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-2 py-1">Feature</th>
              <th className="border px-2 py-1">Owner</th>
              <th className="border px-2 py-1">Co-Owner</th>
              <th className="border px-2 py-1">Tenant</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border px-2 py-1">View AGM Details</td><td className="border px-2 py-1">✅</td><td className="border px-2 py-1">✅</td><td className="border px-2 py-1">❌</td></tr>
            <tr><td className="border px-2 py-1">Cast Votes</td><td className="border px-2 py-1">✅</td><td className="border px-2 py-1">✅</td><td className="border px-2 py-1">❌</td></tr>
            <tr><td className="border px-2 py-1">Contest Elections</td><td className="border px-2 py-1">✅</td><td className="border px-2 py-1">✅</td><td className="border px-2 py-1">❌</td></tr>
            <tr><td className="border px-2 py-1">View Audit Ledger</td><td className="border px-2 py-1">✅</td><td className="border px-2 py-1">✅</td><td className="border px-2 py-1">❌</td></tr>
            <tr><td className="border px-2 py-1">File Nominations</td><td className="border px-2 py-1">✅</td><td className="border px-2 py-1">✅</td><td className="border px-2 py-1">❌</td></tr>
          </tbody>
        </table>

        <h2>AGM Management</h2>
        <h3>Creating an AGM (Secretary)</h3>
        <p>Only users with the <strong>AGM Manage</strong> capability (Secretary and above) can create AGMs. Navigate to <strong>Governance → AGMs → New AGM</strong> and fill in the meeting details: title, date, time, venue, agenda items, quorum percentage, and RSVP deadline.</p>

        <h3>Publishing AGM Notice</h3>
        <p>Once created, publish the AGM notice to notify all owners. Open the AGM detail page and click <strong>Publish Notice</strong>. All eligible owners will receive a push notification and email with the full meeting details.</p>

        <h3>Owner RSVP</h3>
        <p>Owners can RSVP for the AGM from the <strong>Governance</strong> section in the app. They can mark themselves as attending or assign a proxy to vote on their behalf before the RSVP deadline.</p>

        <h3>Tracking Quorum</h3>
        <p>The admin dashboard shows a live RSVP count against the configured quorum percentage. If quorum is not met before the deadline, the admin is alerted and can send reminder notifications to non-responding owners from the AGM detail page.</p>

        <h2>Digital Voting</h2>
        <p>GateFlux supports secure digital voting on AGM motions and resolutions. Votes are recorded with a timestamp and are immutable once submitted.</p>

        <h3>For Admins — Creating a Motion</h3>
        <ol className="steps list-decimal pl-6 mb-6">
          <li>Open the AGM from <strong>Governance → AGMs</strong></li>
          <li>Click <strong>Add Motion</strong></li>
          <li>Enter the motion title and description</li>
          <li>Set the voting type — <strong>Simple Majority</strong> (more than 50%) or <strong>Special Resolution</strong> (typically 75%+)</li>
          <li>Set the voting window (start and end date/time)</li>
          <li>Click <strong>Save</strong> — owners are notified when voting opens</li>
        </ol>

        <h3>For Owners — Casting a Vote</h3>
        <ol className="steps list-decimal pl-6 mb-6">
          <li>Go to <strong>Governance</strong> in the app</li>
          <li>Open the active AGM and tap the motion you want to vote on</li>
          <li>Read the motion description carefully</li>
          <li>Tap <strong>For</strong>, <strong>Against</strong>, or <strong>Abstain</strong></li>
          <li>Confirm your vote — it cannot be changed once submitted</li>
        </ol>

        <div className="bg-primary-100 border border-primary-200 rounded p-4 mb-6">
          <strong>Proxy Voting:</strong> If you cannot attend or vote directly, you can assign a proxy from <strong>Governance → My RSVP → Assign Proxy</strong> before the RSVP deadline. Your proxy must also be a registered owner in the society.
        </div>

        <h3>Viewing Results</h3>
        <p>Once the voting window closes, results are published automatically on the AGM page. The results show:</p>
        <ul>
          <li>Total eligible voters and votes cast</li>
          <li>For / Against / Abstain counts and percentages</li>
          <li>Whether the motion passed or failed based on the required threshold</li>
        </ul>

        <h2>Elections</h2>
        <p>Committee elections are held through GateFlux to elect society office bearers — President, Secretary, Treasurer, and committee members.</p>

        <h3>For Admins — Setting Up an Election</h3>
        <ol className="steps list-decimal pl-6 mb-6">
          <li>Go to <strong>Governance → Elections → New Election</strong></li>
          <li>Enter the election title, description, and the positions being contested</li>
          <li>Set the nomination window (when owners can file their candidacy)</li>
          <li>Set the voting window (when owners cast their votes)</li>
          <li>Configure the eligibility rules (e.g., owner must have no overdue dues to vote)</li>
          <li>Click <strong>Publish</strong> — all owners are notified about the upcoming election</li>
        </ol>

        <h3>For Owners — Filing a Nomination</h3>
        <ol className="steps list-decimal pl-6 mb-6">
          <li>Go to <strong>Governance → Elections</strong></li>
          <li>Open the active election and tap <strong>File Nomination</strong></li>
          <li>Select the position you are contesting</li>
          <li>Enter a brief candidate statement (optional)</li>
          <li>Submit — your candidacy is visible to all eligible voters once the nomination window closes</li>
        </ol>

        <table className="table-auto border-collapse w-full mb-8 text-sm">
          <thead>
            <tr className="bg-primary-900 text-white">
              <th className="border px-2 py-1">Phase</th>
              <th className="border px-2 py-1">Who Acts</th>
              <th className="border px-2 py-1">What Happens</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border px-2 py-1">Nomination Period</td><td className="border px-2 py-1">Owners</td><td className="border px-2 py-1">Eligible owners file their candidacy for contested positions</td></tr>
            <tr className="bg-primary-50"><td className="border px-2 py-1">Candidate Review</td><td className="border px-2 py-1">Admin</td><td className="border px-2 py-1">Admin reviews and approves nominations, publishes the candidate list</td></tr>
            <tr><td className="border px-2 py-1">Voting Period</td><td className="border px-2 py-1">Owners</td><td className="border px-2 py-1">All eligible owners cast one vote per contested position</td></tr>
            <tr className="bg-primary-50"><td className="border px-2 py-1">Results</td><td className="border px-2 py-1">System</td><td className="border px-2 py-1">Results are published automatically; winners are notified</td></tr>
          </tbody>
        </table>

        <h3>For Owners — Voting in an Election</h3>
        <ol className="steps list-decimal pl-6 mb-6">
          <li>Go to <strong>Governance → Elections</strong> when the voting window is open</li>
          <li>Open the election and review the candidate list for each position</li>
          <li>Tap your preferred candidate for each position</li>
          <li>Review your selections and tap <strong>Submit Votes</strong></li>
          <li>Your votes are recorded — you cannot vote again once submitted</li>
        </ol>

        <h2>Audit Access for Owners</h2>
        <p>Owners have read-only access to key financial documents for transparency. From <strong>Governance → Audit Documents</strong>, owners can view:</p>
        <ul>
          <li>Monthly income and expense statements</li>
          <li>Annual financial reports</li>
          <li>AGM meeting minutes and resolutions</li>
          <li>Approved expense records</li>
        </ul>
        <p>Documents can be downloaded as PDF directly from the audit document list.</p>
      </main>
    </DocsLayout>
  );
}
