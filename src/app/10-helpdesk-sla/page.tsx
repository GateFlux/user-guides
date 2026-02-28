import Link from 'next/link';
import DocsLayout from '../DocsLayout';

export default function HelpdeskSLA() {
  return (
    <DocsLayout>
      <main className="max-w-3xl mx-auto py-8 px-4">
        <nav className="mb-4 text-sm text-gray-500 flex items-center gap-2">
          <a href="/" className="text-blue-600 hover:underline">Docs</a>
          <span>›</span>
          <span>Helpdesk & SLA</span>
        </nav>

        <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-yellow-500 text-white rounded-2xl p-6 mb-8 border-l-4 border-yellow-400">
          <h1 className="text-3xl font-bold mb-2">Helpdesk & SLA Management</h1>
          <p className="opacity-90">Configure SLA rules, manage complaint escalations, and track resolution metrics.</p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-3">Overview</h2>
        <ul className="list-disc ml-6 mb-8">
          <li><strong>SLA Configuration</strong> - Set response and resolution times per category</li>
          <li><strong>Automatic Escalation</strong> - Overdue complaints escalate automatically</li>
          <li><strong>Escalation Hierarchy</strong> - Committee Member → Secretary → President</li>
          <li><strong>SLA Metrics</strong> - Track compliance and performance</li>
        </ul>

        <h2 className="text-xl font-bold mt-10 mb-3">SLA Configuration</h2>

        <h3 className="text-lg font-semibold mt-8 mb-2">Creating SLA Configuration</h3>
        <p>Configure SLA for a complaint category:</p>
        <div className="code-block mb-6">
          <span className="code-label">HTTP</span>
          <pre className="bg-gray-900 text-gray-100 rounded p-4 overflow-x-auto text-sm"><code>{`POST /api/v1/sla/configurations\nAuthorization: Bearer <token>\nContent-Type: application/json\n\n{\n    "complaint_category_id": "uuid-of-category",\n    "name": "Plumbing Issues SLA",\n    "first_response_hours": 4,\n    "resolution_hours": 48,\n    "priority": "high",\n    "is_active": true\n}`}</code></pre>
        </div>

        <h3 className="text-lg font-semibold mt-8 mb-2">SLA Parameters</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border text-sm">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="px-4 py-2">Parameter</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Default</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-blue-50">
                <td className="px-4 py-2"><code>first_response_hours</code></td>
                <td className="px-4 py-2">Maximum hours to acknowledge complaint</td>
                <td className="px-4 py-2">24 hours</td>
              </tr>
              <tr className="even:bg-blue-50">
                <td className="px-4 py-2"><code>resolution_hours</code></td>
                <td className="px-4 py-2">Maximum hours to resolve complaint</td>
                <td className="px-4 py-2">72 hours</td>
              </tr>
              <tr className="even:bg-blue-50">
                <td className="px-4 py-2"><code>priority</code></td>
                <td className="px-4 py-2">Default priority for category</td>
                <td className="px-4 py-2">medium</td>
              </tr>
              <tr className="even:bg-blue-50">
                <td className="px-4 py-2"><code>business_hours_only</code></td>
                <td className="px-4 py-2">Count only business hours</td>
                <td className="px-4 py-2">false</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold mt-8 mb-2">Priority Levels</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border text-sm">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="px-4 py-2">Priority</th>
                <th className="px-4 py-2">Response Time</th>
                <th className="px-4 py-2">Resolution Time</th>
                <th className="px-4 py-2">Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-blue-50">
                <td className="px-4 py-2 font-bold text-red-700">Critical</td>
                <td className="px-4 py-2">1 hour</td>
                <td className="px-4 py-2">4 hours</td>
                <td className="px-4 py-2">Fire safety, water main burst</td>
              </tr>
              <tr className="even:bg-blue-50">
                <td className="px-4 py-2 font-bold text-yellow-700">High</td>
                <td className="px-4 py-2">4 hours</td>
                <td className="px-4 py-2">24 hours</td>
                <td className="px-4 py-2">Elevator breakdown, power outage</td>
              </tr>
              <tr className="even:bg-blue-50">
                <td className="px-4 py-2 font-bold text-blue-700">Medium</td>
                <td className="px-4 py-2">24 hours</td>
                <td className="px-4 py-2">72 hours</td>
                <td className="px-4 py-2">Plumbing issues, intercom repair</td>
              </tr>
              <tr className="even:bg-blue-50">
                <td className="px-4 py-2 font-bold text-green-700">Low</td>
                <td className="px-4 py-2">48 hours</td>
                <td className="px-4 py-2">168 hours</td>
                <td className="px-4 py-2">Painting, landscaping requests</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold mt-10 mb-3">Escalation Rules</h2>

        <h3 className="text-lg font-semibold mt-8 mb-2">Default Escalation Hierarchy</h3>
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded mb-6">
          <strong>Automatic Escalation Flow:</strong>
          <ol className="list-decimal ml-6 mt-2">
            <li><strong>Level 1:</strong> Assigned to Committee Member (after SLA breach)</li>
            <li><strong>Level 2:</strong> Escalated to Secretary (after 24 more hours)</li>
            <li><strong>Level 3:</strong> Escalated to President (after 24 more hours)</li>
          </ol>
        </div>

        <h3 className="text-lg font-semibold mt-8 mb-2">Adding Escalation Rules</h3>
        <p>Customize escalation for specific SLA configurations:</p>
        <div className="code-block mb-6">
          <span className="code-label">HTTP</span>
          <pre className="bg-gray-900 text-gray-100 rounded p-4 overflow-x-auto text-sm"><code>{`POST /api/v1/sla/configurations/{{sla_id}}/rules\nAuthorization: Bearer <token>\nContent-Type: application/json\n\n{\n    "escalation_level": 1,\n    "hours_after_breach": 0,\n    "escalate_to_role": "committee_member",\n    "notify_via": ["email", "push"],\n    "is_active": true\n}`}</code></pre>
        </div>

        <h3 className="text-lg font-semibold mt-8 mb-2">Escalation Parameters</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border text-sm">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="px-4 py-2">Parameter</th>
                <th className="px-4 py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-blue-50">
                <td className="px-4 py-2"><code>escalation_level</code></td>
                <td className="px-4 py-2">Level number (1, 2, 3, etc.)</td>
              </tr>
              <tr className="even:bg-blue-50">
                <td className="px-4 py-2"><code>hours_after_breach</code></td>
                <td className="px-4 py-2">Hours after SLA breach to escalate</td>
              </tr>
              <tr className="even:bg-blue-50">
                <td className="px-4 py-2"><code>escalate_to_role</code></td>
                <td className="px-4 py-2">Role to escalate to (committee_member, secretary, president)</td>
              </tr>
              <tr className="even:bg-blue-50">
                <td className="px-4 py-2"><code>notify_via</code></td>
                <td className="px-4 py-2">Notification channels: email, push, sms</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold mt-10 mb-3">Manual Escalation</h2>
        <p>Manually escalate a complaint when needed:</p>
        <div className="code-block mb-6">
          <span className="code-label">HTTP</span>
          <pre className="bg-gray-900 text-gray-100 rounded p-4 overflow-x-auto text-sm"><code>{`POST /api/v1/complaints/{{complaint_id}}/manual-escalate\nAuthorization: Bearer <token>\nContent-Type: application/json\n\n{\n    "reason": "Resident has reported the issue persists despite vendor visit"\n}`}</code></pre>
        </div>

        <h2 className="text-xl font-bold mt-10 mb-3">SLA Metrics</h2>

        <h3 className="text-lg font-semibold mt-8 mb-2">View SLA Performance</h3>
        <div className="code-block mb-6">
          <span className="code-label">HTTP</span>
          <pre className="bg-gray-900 text-gray-100 rounded p-4 overflow-x-auto text-sm"><code>{`GET /api/v1/sla/metrics\nAuthorization: Bearer <token>`}</code></pre>
        </div>
        <p className="mb-2 font-semibold">Response:</p>
        <div className="code-block mb-6">
          <span className="code-label">JSON</span>
          <pre className="bg-gray-900 text-gray-100 rounded p-4 overflow-x-auto text-xs"><code>{`{\n    "success": true,\n    "data": {\n        "period": "2026-02",\n        "metrics": {\n            "total_complaints": 45,\n            "sla_met": 38,\n            "sla_breached": 7,\n            "sla_compliance_rate": 84.4,\n            "avg_first_response_hours": 3.2,\n            "avg_resolution_hours": 28.5\n        },\n        "by_category": [\n            {\n                "category": "Plumbing",\n                "total": 12,\n                "sla_met": 10,\n                "compliance_rate": 83.3\n            },\n            {\n                "category": "Electrical",\n                "total": 8,\n                "sla_met": 7,\n                "compliance_rate": 87.5\n            }\n        ],\n        "escalation_stats": {\n            "level_1_escalations": 7,\n            "level_2_escalations": 3,\n            "level_3_escalations": 1\n        }\n    }\n}`}</code></pre>
        </div>

        <h2 className="text-xl font-bold mt-10 mb-3">Escalation History</h2>
        <p>View escalation history for a specific complaint:</p>
        <div className="code-block mb-6">
          <span className="code-label">HTTP</span>
          <pre className="bg-gray-900 text-gray-100 rounded p-4 overflow-x-auto text-sm"><code>{`GET /api/v1/complaints/{{complaint_id}}/escalations\nAuthorization: Bearer <token>`}</code></pre>
        </div>
        <p className="mb-2 font-semibold">Response:</p>
        <div className="code-block mb-6">
          <span className="code-label">JSON</span>
          <pre className="bg-gray-900 text-gray-100 rounded p-4 overflow-x-auto text-xs"><code>{`{\n    "success": true,\n    "data": [\n        {\n            "id": "uuid",\n            "from_level": 0,\n            "to_level": 1,\n            "escalated_to_role": "committee_member",\n            "escalated_to_user": {\n                "id": "uuid",\n                "name": "Ramesh Kumar"\n            },\n            "reason": "SLA breach - Resolution time exceeded",\n            "created_at": "2026-02-15T14:30:00Z"\n        },\n        {\n            "id": "uuid",\n            "from_level": 1,\n            "to_level": 2,\n            "escalated_to_role": "secretary",\n            "escalated_to_user": {\n                "id": "uuid",\n                "name": "Priya Sharma"\n            },\n            "reason": "No resolution after first escalation",\n            "created_at": "2026-02-16T14:30:00Z"\n        }\n    ]\n}`}</code></pre>
        </div>

        <h2 className="text-xl font-bold mt-10 mb-3">Automatic Escalation Job</h2>
        <p>GateFlux runs an automatic escalation job every 30 minutes to check for overdue complaints and trigger escalations.</p>

        <h3 className="text-lg font-semibold mt-8 mb-2">Manual Trigger (CLI)</h3>
        <p>Administrators can manually trigger the escalation check:</p>
        <div className="code-block mb-6">
          <span className="code-label">BASH</span>
          <pre className="bg-gray-900 text-gray-100 rounded p-4 overflow-x-auto text-sm"><code>{`# Dry run (preview only)\nphp artisan complaints:escalate --dry-run\n\n# Execute escalations\nphp artisan complaints:escalate`}</code></pre>
        </div>

        <h2 className="text-xl font-bold mt-10 mb-3">Notification Flow</h2>
        <p>When a complaint is escalated, notifications are sent to:</p>
        <ol className="list-decimal ml-6 mb-8">
          <li>The user the complaint is escalated to</li>
          <li>The original complainant (resident)</li>
          <li>Previous assignee (optional)</li>
        </ol>

        <h2 className="text-xl font-bold mt-10 mb-3">Required Capabilities</h2>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border text-sm">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="px-4 py-2">Action</th>
                <th className="px-4 py-2">Required Capability</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-blue-50">
                <td className="px-4 py-2">View SLA configurations</td>
                <td className="px-4 py-2"><code>helpdesk.sla_view</code></td>
              </tr>
              <tr className="even:bg-blue-50">
                <td className="px-4 py-2">Manage SLA configurations</td>
                <td className="px-4 py-2"><code>helpdesk.sla_manage</code></td>
              </tr>
              <tr className="even:bg-blue-50">
                <td className="px-4 py-2">View all tickets</td>
                <td className="px-4 py-2"><code>helpdesk.tickets_view_all</code></td>
              </tr>
              <tr className="even:bg-blue-50">
                <td className="px-4 py-2">Escalate tickets</td>
                <td className="px-4 py-2"><code>helpdesk.tickets_escalate</code></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-between mt-12 gap-4">
          <Link href="/9-finance" className="bg-white border rounded px-4 py-2 hover:bg-blue-50 transition">← Finance & Expenses</Link>
          <Link href="/11-dashboards" className="bg-white border rounded px-4 py-2 hover:bg-blue-50 transition">Role-Based Dashboards →</Link>
        </div>
      </main>
    </DocsLayout>
  );
}
