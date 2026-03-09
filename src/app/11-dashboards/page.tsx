import Link from 'next/link';
import DocsLayout from '../DocsLayout';

export default function Dashboards() {
  return (
    <DocsLayout>
      <main className="max-w-3xl mx-auto py-8 px-4">
        <nav className="mb-4 text-sm text-gray-500 flex items-center gap-2">
          <a href="/" className="text-primary-600 hover:underline">Docs</a>
          <span>›</span>
          <span>Dashboards and Reports</span>
        </nav>

        <div className="bg-gradient-to-br from-primary-900 via-primary-900 to-accent-500 text-white rounded-2xl p-6 mb-8 border-l-4 border-accent-400">
          <h1 className="text-3xl font-bold mb-2">Dashboard and Reports Guide</h1>
          <p className="opacity-90">Use Dashboard for daily operations and Analytics for reports and export.</p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-3">Dashboard</h2>

        <h3 className="text-xl font-semibold mt-6 mb-2">Overview</h3>
        <p className="mb-4">Dashboard gives a live overview of your society. It includes summary cards, financial health, service requests, security activity, and community activity.</p>

        <h3 className="text-xl font-semibold mt-6 mb-2">When to Use This</h3>
        <ul className="list-disc ml-6 mb-6">
          <li>Start-of-day operations review</li>
          <li>Quick check of pending approvals and open requests</li>
          <li>Daily review of collections and outstanding dues</li>
          <li>Monitoring visitor and security movement</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">How to Use</h3>
        <ol className="list-decimal ml-6 mb-6">
          <li>Open <strong>Dashboard</strong> from the sidebar.</li>
          <li>Review top summary cards.</li>
          <li>Check <strong>Financial Health</strong> metrics and chart.</li>
          <li>Check <strong>Service Requests</strong> and latest items.</li>
          <li>Check <strong>Security Access</strong> and <strong>Community Activity</strong>.</li>
          <li>Use quick action buttons to open detailed modules.</li>
        </ol>

        <h3 className="text-xl font-semibold mt-6 mb-2">Field Descriptions</h3>
        <p className="mb-2"><strong>Top Summary Cards</strong></p>
        <ul className="list-disc ml-6 mb-4">
          <li><strong>Users / Residents</strong>: Total users in your tenant.</li>
          <li><strong>Units / Buildings</strong>: Unit and block level summary.</li>
          <li><strong>Collections / Dues</strong>: Money collected and pending.</li>
          <li><strong>Other Operational Cards</strong>: Role-based key counts.</li>
        </ul>

        <p className="mb-2"><strong>Financial Health</strong></p>
        <ul className="list-disc ml-6 mb-4">
          <li><strong>Monthly Collected</strong></li>
          <li><strong>Outstanding Dues</strong></li>
          <li><strong>Collection Rate</strong></li>
          <li><strong>Invoices This Month</strong></li>
        </ul>

        <p className="mb-2"><strong>Service Requests</strong></p>
        <ul className="list-disc ml-6 mb-4">
          <li><strong>Open</strong></li>
          <li><strong>In Progress</strong></li>
          <li><strong>Resolved (7 days)</strong></li>
          <li><strong>Latest List</strong>: Recent requests with status and time.</li>
        </ul>

        <p className="mb-2"><strong>Security and Community</strong></p>
        <ul className="list-disc ml-6 mb-6">
          <li><strong>Visitors Today</strong>, <strong>Deliveries Today</strong>, <strong>Pending Approvals</strong></li>
          <li><strong>Announcements</strong>, <strong>Events</strong>, <strong>Polls</strong>, <strong>Amenity Bookings</strong></li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Example</h3>
        <p className="mb-6">If pending approvals are high and service requests are increasing, open Gate and Maintenance modules immediately from quick actions and clear urgent items first.</p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Tips</h3>
        <ul className="list-disc ml-6 mb-6">
          <li>Check Dashboard at least twice daily.</li>
          <li>Watch trend direction, not only totals.</li>
          <li>Use quick actions to reduce navigation time.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Common Mistakes</h3>
        <ul className="list-disc ml-6 mb-8">
          <li>Ignoring pending approvals until end of day.</li>
          <li>Reading summary cards only without opening detail modules.</li>
          <li>Not tracking overdue trend over multiple days.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-3">Reports (Analytics)</h2>

        <h3 className="text-xl font-semibold mt-6 mb-2">Overview</h3>
        <p className="mb-4">Analytics provides report-style insights across visitors, finance, complaints, occupancy, and activity. You can export report data to CSV.</p>

        <h3 className="text-xl font-semibold mt-6 mb-2">When to Use This</h3>
        <ul className="list-disc ml-6 mb-6">
          <li>Weekly and monthly management review</li>
          <li>Committee meetings and performance tracking</li>
          <li>Exporting report data for sharing</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">How to Use</h3>
        <ol className="list-decimal ml-6 mb-6">
          <li>Open <strong>Analytics</strong> from the sidebar (`/analytics`).</li>
          <li>Select date range: 7, 30, 90 days, or 12 months.</li>
          <li>Review KPI cards and charts.</li>
          <li>Click <strong>Export</strong> to download CSV.</li>
        </ol>

        <h3 className="text-xl font-semibold mt-6 mb-2">Field Descriptions</h3>
        <ul className="list-disc ml-6 mb-6">
          <li><strong>Date Range</strong>: Reporting window.</li>
          <li><strong>Total Visitors</strong> and <strong>Approval Rate</strong>.</li>
          <li><strong>Collection Metrics</strong>: collected, pending, overdue.</li>
          <li><strong>Open Complaints</strong> and <strong>Resolution Rate</strong>.</li>
          <li><strong>Occupancy Rate</strong>.</li>
          <li><strong>Complaints by Category</strong>.</li>
          <li><strong>Recent Activity</strong>.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Tips</h3>
        <ul className="list-disc ml-6 mb-6">
          <li>Keep the same date range each month for fair comparison.</li>
          <li>Export before review meetings.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Common Mistakes</h3>
        <ul className="list-disc ml-6 mb-8">
          <li>Comparing reports from different date ranges.</li>
          <li>Ignoring overdue data while focusing only on collections.</li>
        </ul>

        <div className="flex justify-between mt-12 gap-4">
          <Link href="/10-helpdesk-sla" className="bg-white border rounded px-4 py-2 hover:bg-primary-50 transition">← Helpdesk & SLA</Link>
          <Link href="/7-faq" className="bg-white border rounded px-4 py-2 hover:bg-primary-50 transition">FAQ →</Link>
        </div>
      </main>
    </DocsLayout>
  );
}
