import Link from 'next/link';
import DocsLayout from '../DocsLayout';

export default function Dashboards() {
  return (
    <DocsLayout>
      <main className="max-w-3xl mx-auto py-8 px-4">
        <nav className="mb-4 text-sm text-gray-500 flex items-center gap-2">
          <a href="/" className="text-primary-600 hover:underline">Docs</a>
          <span>›</span>
          <span>Role-Based Dashboards</span>
        </nav>

        <div className="bg-gradient-to-br from-primary-900 via-primary-900 to-accent-500 text-white rounded-2xl p-6 mb-8 border-l-4 border-accent-400">
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

        <h2 className="text-xl font-bold mt-10 mb-3">Dynamic Navigation</h2>
        <p className="mb-6">The GateFlux navigation menu automatically adapts based on your role. When you log in, the app shows only the modules and actions you have permission to access. A security guard sees gate and visitor management options; a treasurer sees finance and collection modules; a resident sees dues, visitors, and complaints.</p>

        <h2 className="text-xl font-bold mt-10 mb-3">Executive Dashboard</h2>
        <p className="mb-4">The President has access to a specialized executive dashboard with aggregated KPIs. Access it from <strong>Dashboard → Executive View</strong>. It includes:</p>
        <ul className="list-disc ml-6 mb-8">
          <li><strong>Financial Summary</strong> — Revenue, collections rate, outstanding dues, and net cashflow for the current month</li>
          <li><strong>Pending Approvals</strong> — High-value expenses and other items awaiting approval</li>
          <li><strong>Critical Alerts</strong> — SLA breaches, overdue complaints, and urgent items</li>
          <li><strong>Governance Summary</strong> — Open motions and upcoming AGM details</li>
          <li><strong>Operational KPIs</strong> — Complaint resolution stats and visitor counts</li>
        </ul>

        <h2 className="text-xl font-bold mt-10 mb-3">Visitor Analytics Dashboard</h2>
        <p className="mb-4">Security committee members can access visitor analytics from <strong>Reports → Visitor Analytics</strong>. Available analytics include:</p>
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
            <thead className="bg-primary-900 text-white">
              <tr>
                <th className="px-4 py-2">Role</th>
                <th className="px-4 py-2">Primary Modules</th>
                <th className="px-4 py-2">Admin Access</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-primary-50">
                <td className="px-4 py-2 font-bold">President</td>
                <td className="px-4 py-2">Executive Dashboard, All Modules</td>
                <td className="px-4 py-2">Full Settings</td>
              </tr>
              <tr className="even:bg-primary-50">
                <td className="px-4 py-2 font-bold">Treasurer</td>
                <td className="px-4 py-2">Finance, Collections, Budget</td>
                <td className="px-4 py-2">Financial Settings</td>
              </tr>
              <tr className="even:bg-primary-50">
                <td className="px-4 py-2 font-bold">Secretary</td>
                <td className="px-4 py-2">Helpdesk, AGM, Notices</td>
                <td className="px-4 py-2">Admin Panel</td>
              </tr>
              <tr className="even:bg-primary-50">
                <td className="px-4 py-2 font-bold">Committee Member</td>
                <td className="px-4 py-2">Reports, Complaints, Governance</td>
                <td className="px-4 py-2">Limited</td>
              </tr>
              <tr className="even:bg-primary-50">
                <td className="px-4 py-2 font-bold">Owner</td>
                <td className="px-4 py-2">Dues, Visitors, Governance</td>
                <td className="px-4 py-2">None</td>
              </tr>
              <tr className="even:bg-primary-50">
                <td className="px-4 py-2 font-bold">Tenant</td>
                <td className="px-4 py-2">Dues, Visitors, Complaints</td>
                <td className="px-4 py-2">None</td>
              </tr>
              <tr className="even:bg-primary-50">
                <td className="px-4 py-2 font-bold">Guard</td>
                <td className="px-4 py-2">Gate, Visitors, Entry Logs</td>
                <td className="px-4 py-2">None</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold mt-10 mb-3">Dashboard Widgets</h2>
        <p className="mb-4">Each role's dashboard shows a curated set of widgets relevant to their responsibilities:</p>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border text-sm">
            <thead className="bg-primary-900 text-white">
              <tr>
                <th className="px-4 py-2">Widget</th>
                <th className="px-4 py-2">Roles</th>
                <th className="px-4 py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-primary-50">
                <td className="px-4 py-2">Financial Summary</td>
                <td className="px-4 py-2">President, Treasurer</td>
                <td className="px-4 py-2">Revenue, collections, cashflow</td>
              </tr>
              <tr className="even:bg-primary-50">
                <td className="px-4 py-2">Pending Approvals</td>
                <td className="px-4 py-2">President, Treasurer, Secretary</td>
                <td className="px-4 py-2">Items awaiting approval</td>
              </tr>
              <tr className="even:bg-primary-50">
                <td className="px-4 py-2">Complaint Stats</td>
                <td className="px-4 py-2">Secretary, Committee</td>
                <td className="px-4 py-2">Open/resolved complaints</td>
              </tr>
              <tr className="even:bg-primary-50">
                <td className="px-4 py-2">Visitor Stats</td>
                <td className="px-4 py-2">Committee, Guard</td>
                <td className="px-4 py-2">Today's visitor count</td>
              </tr>
              <tr className="even:bg-primary-50">
                <td className="px-4 py-2">My Dues</td>
                <td className="px-4 py-2">Owner, Tenant</td>
                <td className="px-4 py-2">Outstanding payments</td>
              </tr>
              <tr className="even:bg-primary-50">
                <td className="px-4 py-2">Upcoming Visitors</td>
                <td className="px-4 py-2">Owner, Tenant</td>
                <td className="px-4 py-2">Expected visitors today</td>
              </tr>
              <tr className="even:bg-primary-50">
                <td className="px-4 py-2">Gate Activity</td>
                <td className="px-4 py-2">Guard</td>
                <td className="px-4 py-2">Recent entry/exit logs</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-between mt-12 gap-4">
          <Link href="/10-helpdesk-sla" className="bg-white border rounded px-4 py-2 hover:bg-primary-50 transition">← Helpdesk & SLA</Link>
          <Link href="/7-faq" className="bg-white border rounded px-4 py-2 hover:bg-primary-50 transition">FAQ →</Link>
        </div>
      </main>
    </DocsLayout>
  );
}
