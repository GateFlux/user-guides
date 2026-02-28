import DocsLayout from '../DocsLayout';

export default function Governance() {
  return (
    <DocsLayout>
      <main className="prose mx-auto py-8">
        <nav className="mb-4 text-sm text-gray-500 flex items-center gap-2">
          <a href="/" className="text-blue-600 hover:underline">Docs</a>
          <span>›</span>
          <span>Governance & Elections</span>
        </nav>

        <div className="bg-blue-50 border border-blue-200 rounded p-6 mb-6">
          <h1 className="text-2xl font-bold mb-2">Governance & Elections Guide</h1>
          <p>Manage AGMs, digital voting, elections, and nominations for your housing society.</p>
        </div>

        <div className="bg-blue-100 border border-blue-200 rounded p-4 mb-6">
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
      <p>Only users with <code>governance.agm_manage</code> capability can create AGMs.</p>
      <div className="bg-gray-100 border border-gray-200 rounded p-4 mb-4">
        <div className="text-xs font-mono text-gray-600 mb-1">POST /api/v1/governance/admin/agms</div>
        <pre className="overflow-x-auto text-xs bg-gray-50 p-2 rounded"><code>{`POST /api/v1/governance/admin/agms\nAuthorization: Bearer <token>\nContent-Type: application/json\n\n{\n    "title": "Annual General Meeting 2026",\n    "meeting_date": "2026-03-15",\n    "meeting_time": "10:00",\n    "venue": "Society Clubhouse, Ground Floor",\n    "agenda": [\n        "Approval of previous meeting minutes",\n        "Financial report presentation",\n        "Election of new committee members",\n        "Maintenance fee revision proposal"\n    ],\n    "quorum_percentage": 51,\n    "rsvp_deadline": "2026-03-10"\n}`}</code></pre>
      </div>
      <h3>Publishing AGM Notice</h3>
      <p>Once created, publish the AGM notice to notify all owners:</p>
      <div className="bg-gray-100 border border-gray-200 rounded p-4 mb-4">
        <div className="text-xs font-mono text-gray-600 mb-1">{'POST /api/v1/governance/admin/agms/{agm_id}/publish-notice'}</div>
        <pre className="overflow-x-auto text-xs bg-gray-50 p-2 rounded"><code>{`POST /api/v1/governance/admin/agms/{agm_id}/publish-notice\nAuthorization: Bearer <token>`}</code></pre>
      </div>
      <h3>Owner RSVP</h3>
      <p>Owners can RSVP for the AGM or assign a proxy:</p>
      <div className="bg-gray-100 border border-gray-200 rounded p-4 mb-4">
        <div className="text-xs font-mono text-gray-600 mb-1">{'POST /api/v1/governance/agms/{agm_id}/rsvp'}</div>
        <pre className="overflow-x-auto text-xs bg-gray-50 p-2 rounded"><code>{`POST /api/v1/governance/agms/{agm_id}/rsvp\nAuthorization: Bearer <token>\nContent-Type: application/json\n\n{\n    "attending": true,\n    "proxy_to": null\n}`}</code></pre>
      </div>
    </main>
        </DocsLayout >
      );
    }
