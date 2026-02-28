import Link from 'next/link';
import DocsLayout from '../DocsLayout';

export default function Dashboards() {
  return (
    <DocsLayout>
      <main className="max-w-3xl mx-auto py-8 px-4">
        <nav className="mb-4 text-sm text-gray-500 flex items-center gap-2">
          <a href="/" className="text-blue-600 hover:underline">Docs</a>
          <span>›</span>
          <span>Role-Based Dashboards</span>
        </nav>

        <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-yellow-500 text-white rounded-2xl p-6 mb-8 border-l-4 border-yellow-400">
          <h1 className="text-3xl font-bold mb-2">Role-Based Dashboards</h1>
          <p className="opacity-90">Dynamic navigation and dashboards tailored to each user's role and capabilities.</p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-3">Overview</h2>
        <ul className="list-disc ml-6 mb-8">
          <li><strong>Dynamic Navigation</strong> - Menu items filtered by user capabilities</li>
          <li><strong>Quick Actions</strong> - Role-specific action buttons</li>
          <li><strong>Dashboard Widgets</strong> - Customized widgets per role</li>
          <li><strong>Executive Dashboard</strong> - High-level KPIs for President</li>
        </ul>

        <h2 className="text-xl font-bold mt-10 mb-3">Dashboard Types</h2>
        <div className="feature-grid mb-8">
          <div className="feature-card">
            <h4 className="flex items-center gap-2 font-semibold text-lg mb-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
              President Dashboard
            </h4>
            <p>Executive overview with financial KPIs, pending approvals, and critical alerts.</p>
          </div>
          <div className="feature-card">
            <h4 className="flex items-center gap-2 font-semibold text-lg mb-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              Treasurer Dashboard
            </h4>
            <p>Financial console with expense approvals, collections, and budget tracking.</p>
          </div>
          <div className="feature-card">
            <h4 className="flex items-center gap-2 font-semibold text-lg mb-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              Secretary Dashboard
            </h4>
            <p>Administrative view with complaints, AGM management, and notices.</p>
          </div>
          <div className="feature-card">
            <h4 className="flex items-center gap-2 font-semibold text-lg mb-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              Guard Dashboard
            </h4>
            <p>Gate operations with visitor approvals, QR scanning, and entry logs.</p>
          </div>
          <div className="feature-card">
            <h4 className="flex items-center gap-2 font-semibold text-lg mb-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              Resident Dashboard
            </h4>
            <p>Personal view with dues, visitors, complaints, and notices.</p>
          </div>
          <div className="feature-card">
            <h4 className="flex items-center gap-2 font-semibold text-lg mb-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              Committee Dashboard
            </h4>
            <p>Committee overview with reports, pending items, and governance.</p>
          </div>
        </div>

        <h2 className="text-xl font-bold mt-10 mb-3">Dynamic Navigation API</h2>

        <h3 className="text-lg font-semibold mt-8 mb-2">Get Navigation Menu</h3>
        <p>Retrieve navigation menu filtered by user's capabilities:</p>
        <div className="code-block mb-6">
          <span className="code-label">HTTP</span>
          <pre className="bg-gray-900 text-gray-100 rounded p-4 overflow-x-auto text-sm"><code>{`GET /api/v1/me/navigation\nAuthorization: Bearer <token>`}</code></pre>
        </div>
        <p className="mb-2 font-semibold">Response:</p>
        <div className="code-block mb-6">
          <span className="code-label">JSON</span>
          <pre className="bg-gray-900 text-gray-100 rounded p-4 overflow-x-auto text-xs"><code>{`{\n    "success": true,\n    "data": {\n        "primary": [\n            {\n                "key": "dashboard",\n                "label": "Dashboard",\n                "icon": "home",\n                "route": "/dashboard"\n            },\n            {\n                "key": "visitors",\n                "label": "Visitors",\n                "icon": "users",\n                "route": "/visitors"\n            }\n        ],\n        "secondary": [\n            {\n                "key": "governance",\n                "label": "Governance",\n                "icon": "vote",\n                "route": "/governance",\n                "children": [\n                    {"key": "agms", "label": "AGMs", "route": "/governance/agms"},\n                    {"key": "voting", "label": "Voting", "route": "/governance/voting"}\n                ]\n            }\n        ],\n        "admin": [\n            {\n                "key": "settings",\n                "label": "Settings",\n                "icon": "settings",\n                "route": "/settings"\n            }\n        ]\n    }\n}`}</code></pre>
        </div>

        <h3 className="text-lg font-semibold mt-8 mb-2">Get Quick Actions</h3>
        <p>Role-specific quick action buttons:</p>
        <div className="code-block mb-6">
          <span className="code-label">HTTP</span>
          <pre className="bg-gray-900 text-gray-100 rounded p-4 overflow-x-auto text-sm"><code>{`GET /api/v1/me/quick-actions\nAuthorization: Bearer <token>`}</code></pre>
        </div>
        <p className="mb-2 font-semibold">Example Response (Treasurer):</p>
        <div className="code-block mb-6">
          <span className="code-label">JSON</span>
          <pre className="bg-gray-900 text-gray-100 rounded p-4 overflow-x-auto text-xs"><code>{`{\n    "success": true,\n    "data": [\n        {\n            "key": "approve_expenses",\n            "label": "Pending Approvals",\n            "icon": "check-circle",\n            "route": "/expenses/pending",\n            "badge": 3\n        },\n        {\n            "key": "generate_invoices",\n            "label": "Generate Invoices",\n            "icon": "file-text",\n            "route": "/invoices/generate"\n        },\n        {\n            "key": "view_collections",\n            "label": "View Collections",\n            "icon": "dollar-sign",\n            "route": "/payments"\n        }\n    ]\n}`}</code></pre>
        </div>

        <h3 className="text-lg font-semibold mt-8 mb-2">Get Dashboard Widgets</h3>
        <div className="code-block mb-6">
          <span className="code-label">HTTP</span>
          <pre className="bg-gray-900 text-gray-100 rounded p-4 overflow-x-auto text-sm"><code>{`GET /api/v1/me/dashboard-widgets\nAuthorization: Bearer <token>`}</code></pre>
        </div>

        <h3 className="text-lg font-semibold mt-8 mb-2">Complete UI Configuration</h3>
        <p>Get all UI configuration in a single call:</p>
        <div className="code-block mb-6">
          <span className="code-label">HTTP</span>
          <pre className="bg-gray-900 text-gray-100 rounded p-4 overflow-x-auto text-sm"><code>{`GET /api/v1/me/ui-config\nAuthorization: Bearer <token>`}</code></pre>
        </div>
        <p>Returns navigation, quick actions, and widgets combined.</p>

        <h2 className="text-xl font-bold mt-10 mb-3">Executive Dashboard</h2>
        <p>The President has access to a specialized executive dashboard with aggregated KPIs:</p>
        <div className="code-block mb-6">
          <span className="code-label">HTTP</span>
          <pre className="bg-gray-900 text-gray-100 rounded p-4 overflow-x-auto text-sm"><code>{`GET /api/v1/executive/dashboard\nAuthorization: Bearer <token>`}</code></pre>
        </div>
        <p className="mb-2 font-semibold">Response:</p>
        <div className="code-block mb-6">
          <span className="code-label">JSON</span>
          <pre className="bg-gray-900 text-gray-100 rounded p-4 overflow-x-auto text-xs"><code>{`{\n    "success": true,\n    "data": {\n        "financial_summary": {\n            "revenue": {\n                "this_month": 450000,\n                "last_month": 420000,\n                "change_percent": 7.1\n            },\n            "collections": {\n                "this_month": 380000,\n                "rate": 84.4\n            },\n            "outstanding": {\n                "total": 250000,\n                "overdue": 85000,\n                "overdue_percent": 34.0\n            },\n            "net_cashflow": 120000\n        },\n        "pending_approvals": {\n            "expenses": {\n                "count": 3,\n                "high_value_items": [\n                    {\n                        "id": "uuid",\n                        "description": "CCTV System Upgrade",\n                        "amount": 125000\n                    }\n                ]\n            },\n            "total_items": 5\n        },\n        "critical_alerts": {\n            "alerts": [\n                {\n                    "type": "sla_breach",\n                    "severity": "high",\n                    "message": "2 complaints have breached SLA",\n                    "count": 2\n                },\n                {\n                    "type": "expense_approval",\n                    "severity": "medium",\n                    "message": "3 high-value expenses awaiting approval",\n                    "count": 3\n                }\n            ],\n            "critical_count": 0,\n            "high_count": 1,\n            "total_count": 2\n        },\n        "governance_summary": {\n            "open_motions": 2,\n            "upcoming_agm": {\n                "id": "uuid",\n                "title": "Annual General Meeting 2026",\n                "meeting_date": "2026-03-15"\n            }\n        },\n        "operational_kpis": {\n            "complaints": {\n                "new_this_month": 12,\n                "resolved_this_month": 10,\n                "open_count": 5,\n                "avg_resolution_hours": 28.5\n            },\n            "visitors": {\n                "today": 45,\n                "this_week": 312\n            }\n        }\n    }\n}`}</code></pre>
        </div>

        <h3 className="text-lg font-semibold mt-8 mb-2">Executive Dashboard Endpoints</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border text-sm">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="px-4 py-2">Endpoint</th>
                <th className="px-4 py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-blue-50">
                <td className="px-4 py-2"><code>GET /executive/dashboard</code></td>
                <td className="px-4 py-2">Complete executive dashboard</td>
              </tr>
              <tr className="even:bg-blue-50">
                <td className="px-4 py-2"><code>GET /executive/financial-summary</code></td>
                <td className="px-4 py-2">Financial KPIs only</td>
              </tr>
              <tr className="even:bg-blue-50">
                <td className="px-4 py-2"><code>GET /executive/pending-approvals</code></td>
                <td className="px-4 py-2">All pending approval items</td>
              </tr>
              <tr className="even:bg-blue-50">
                <td className="px-4 py-2"><code>GET /executive/critical-alerts</code></td>
                <td className="px-4 py-2">Critical alerts requiring attention</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold mt-10 mb-3">Visitor Analytics Dashboard</h2>
        <p>Security committee members can access visitor analytics:</p>
        <div className="code-block mb-6">
          <span className="code-label">HTTP</span>
          <pre className="bg-gray-900 text-gray-100 rounded p-4 overflow-x-auto text-sm"><code>{`GET /api/v1/visitor-analytics/dashboard\nAuthorization: Bearer <token>`}</code></pre>
        </div>
        <p className="mb-2 font-semibold">Available Analytics:</p>
        <ul className="list-disc ml-6 mb-8">
          <li>Daily visitor trends</li>
          <li>Peak hour analysis</li>
          <li>Visitor purpose breakdown</li>
          <li>Gate-wise statistics</li>
          <li>Recurring visitor analytics</li>
          <li>Real-time visitor count</li>
        </ul>

        <h2 className="text-xl font-bold mt-10 mb-3">Navigation by Role</h2>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border text-sm">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="px-4 py-2">Role</th>
                <th className="px-4 py-2">Primary Modules</th>
                <th className="px-4 py-2">Admin Access</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-blue-50">
                <td className="px-4 py-2 font-bold">President</td>
                <td className="px-4 py-2">Executive Dashboard, All Modules</td>
                <td className="px-4 py-2">Full Settings</td>
              </tr>
              <tr className="even:bg-blue-50">
                <td className="px-4 py-2 font-bold">Treasurer</td>
                <td className="px-4 py-2">Finance, Collections, Budget</td>
                <td className="px-4 py-2">Financial Settings</td>
              </tr>
              <tr className="even:bg-blue-50">
                <td className="px-4 py-2 font-bold">Secretary</td>
                <td className="px-4 py-2">Helpdesk, AGM, Notices</td>
                <td className="px-4 py-2">Admin Panel</td>
              </tr>
              <tr className="even:bg-blue-50">
                <td className="px-4 py-2 font-bold">Committee Member</td>
                <td className="px-4 py-2">Reports, Complaints, Governance</td>
                <td className="px-4 py-2">Limited</td>
              </tr>
              <tr className="even:bg-blue-50">
                <td className="px-4 py-2 font-bold">Owner</td>
                <td className="px-4 py-2">Dues, Visitors, Governance</td>
                <td className="px-4 py-2">None</td>
              </tr>
              <tr className="even:bg-blue-50">
                <td className="px-4 py-2 font-bold">Tenant</td>
                <td className="px-4 py-2">Dues, Visitors, Complaints</td>
                <td className="px-4 py-2">None</td>
              </tr>
              <tr className="even:bg-blue-50">
                <td className="px-4 py-2 font-bold">Guard</td>
                <td className="px-4 py-2">Gate, Visitors, Entry Logs</td>
                <td className="px-4 py-2">None</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold mt-10 mb-3">Widget Types</h2>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border text-sm">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="px-4 py-2">Widget</th>
                <th className="px-4 py-2">Roles</th>
                <th className="px-4 py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-blue-50">
                <td className="px-4 py-2"><code>financial_summary</code></td>
                <td className="px-4 py-2">President, Treasurer</td>
                <td className="px-4 py-2">Revenue, collections, cashflow</td>
              </tr>
              <tr className="even:bg-blue-50">
                <td className="px-4 py-2"><code>pending_approvals</code></td>
                <td className="px-4 py-2">President, Treasurer, Secretary</td>
                <td className="px-4 py-2">Items awaiting approval</td>
              </tr>
              <tr className="even:bg-blue-50">
                <td className="px-4 py-2"><code>complaint_stats</code></td>
                <td className="px-4 py-2">Secretary, Committee</td>
                <td className="px-4 py-2">Open/resolved complaints</td>
              </tr>
              <tr className="even:bg-blue-50">
                <td className="px-4 py-2"><code>visitor_stats</code></td>
                <td className="px-4 py-2">Committee, Guard</td>
                <td className="px-4 py-2">Today's visitor count</td>
              </tr>
              <tr className="even:bg-blue-50">
                <td className="px-4 py-2"><code>my_dues</code></td>
                <td className="px-4 py-2">Owner, Tenant</td>
                <td className="px-4 py-2">Outstanding payments</td>
              </tr>
              <tr className="even:bg-blue-50">
                <td className="px-4 py-2"><code>upcoming_visitors</code></td>
                <td className="px-4 py-2">Owner, Tenant</td>
                <td className="px-4 py-2">Expected visitors today</td>
              </tr>
              <tr className="even:bg-blue-50">
                <td className="px-4 py-2"><code>gate_activity</code></td>
                <td className="px-4 py-2">Guard</td>
                <td className="px-4 py-2">Recent entry/exit logs</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-between mt-12 gap-4">
          <Link href="/10-helpdesk-sla" className="bg-white border rounded px-4 py-2 hover:bg-blue-50 transition">← Helpdesk & SLA</Link>
          <Link href="/6-troubleshooting" className="bg-white border rounded px-4 py-2 hover:bg-blue-50 transition">Troubleshooting →</Link>
        </div>
      </main>
    </DocsLayout>
  );
}
