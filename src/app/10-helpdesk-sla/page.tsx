import Link from 'next/link';
import DocsLayout from '../DocsLayout';

export default function HelpdeskSLA() {
  return (
    <DocsLayout>
      <main className="max-w-3xl mx-auto py-8 px-4">
        <nav className="mb-4 text-sm text-gray-500 flex items-center gap-2">
          <a href="/" className="text-primary-600 hover:underline">Docs</a>
          <span>›</span>
          <span>Helpdesk & SLA</span>
        </nav>

        <div className="bg-gradient-to-br from-primary-900 via-primary-900 to-accent-500 text-white rounded-2xl p-6 mb-8 border-l-4 border-accent-400">
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
        <p className="mb-6">Society admins can configure SLA rules per complaint category from <strong>Settings → Helpdesk → SLA Configuration</strong>. Set how quickly complaints must be acknowledged and resolved based on their type and priority.</p>

        <h3 className="text-lg font-semibold mt-8 mb-2">SLA Parameters</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border text-sm">
            <thead className="bg-primary-900 text-white">
              <tr>
                <th className="px-4 py-2">Parameter</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Default</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-primary-50">
                <td className="px-4 py-2">First Response Time</td>
                <td className="px-4 py-2">Maximum hours to acknowledge complaint</td>
                <td className="px-4 py-2">24 hours</td>
              </tr>
              <tr className="even:bg-primary-50">
                <td className="px-4 py-2">Resolution Time</td>
                <td className="px-4 py-2">Maximum hours to resolve complaint</td>
                <td className="px-4 py-2">72 hours</td>
              </tr>
              <tr className="even:bg-primary-50">
                <td className="px-4 py-2">Priority</td>
                <td className="px-4 py-2">Default priority for category</td>
                <td className="px-4 py-2">Medium</td>
              </tr>
              <tr className="even:bg-primary-50">
                <td className="px-4 py-2">Business Hours Only</td>
                <td className="px-4 py-2">Count only business hours toward SLA timers</td>
                <td className="px-4 py-2">Off</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold mt-8 mb-2">Priority Levels</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border text-sm">
            <thead className="bg-primary-900 text-white">
              <tr>
                <th className="px-4 py-2">Priority</th>
                <th className="px-4 py-2">Response Time</th>
                <th className="px-4 py-2">Resolution Time</th>
                <th className="px-4 py-2">Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-primary-50">
                <td className="px-4 py-2 font-bold text-red-700">Critical</td>
                <td className="px-4 py-2">1 hour</td>
                <td className="px-4 py-2">4 hours</td>
                <td className="px-4 py-2">Fire safety, water main burst</td>
              </tr>
              <tr className="even:bg-primary-50">
                <td className="px-4 py-2 font-bold text-accent-700">High</td>
                <td className="px-4 py-2">4 hours</td>
                <td className="px-4 py-2">24 hours</td>
                <td className="px-4 py-2">Elevator breakdown, power outage</td>
              </tr>
              <tr className="even:bg-primary-50">
                <td className="px-4 py-2 font-bold text-primary-700">Medium</td>
                <td className="px-4 py-2">24 hours</td>
                <td className="px-4 py-2">72 hours</td>
                <td className="px-4 py-2">Plumbing issues, intercom repair</td>
              </tr>
              <tr className="even:bg-primary-50">
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
        <div className="bg-primary-50 border-l-4 border-primary-400 p-4 rounded mb-6">
          <strong>Automatic Escalation Flow:</strong>
          <ol className="list-decimal ml-6 mt-2">
            <li><strong>Level 1:</strong> Assigned to Committee Member (after SLA breach)</li>
            <li><strong>Level 2:</strong> Escalated to Secretary (after 24 more hours)</li>
            <li><strong>Level 3:</strong> Escalated to President (after 24 more hours)</li>
          </ol>
        </div>

        <p className="mb-6">Escalation rules can be customized per SLA configuration from <strong>Settings → Helpdesk → Escalation Rules</strong>. You can set which role is notified at each escalation level and how many hours after a breach the escalation triggers.</p>

        <h2 className="text-xl font-bold mt-10 mb-3">Manual Escalation</h2>
        <p className="mb-6">Admins and authorized users can manually escalate a complaint at any time. Open the complaint detail page, click <strong>Escalate</strong>, and provide a reason. The complaint is immediately moved to the next escalation level and the responsible user is notified.</p>

        <h2 className="text-xl font-bold mt-10 mb-3">SLA Metrics</h2>
        <p className="mb-6">View SLA performance from <strong>Reports → SLA Metrics</strong>. Metrics include overall compliance rate, average first response time, average resolution time, and per-category breakdowns showing which complaint types are most frequently breached.</p>

        <h2 className="text-xl font-bold mt-10 mb-3">Automatic Escalation</h2>
        <p className="mb-6">GateFlux automatically checks for overdue complaints every 30 minutes and triggers escalations based on your configured rules. No manual action is required — the system handles escalation continuously in the background.</p>

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
            <thead className="bg-primary-900 text-white">
              <tr>
                <th className="px-4 py-2">Action</th>
                <th className="px-4 py-2">Required Capability</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-primary-50">
                <td className="px-4 py-2">View SLA configurations</td>
                <td className="px-4 py-2"><code>helpdesk.sla_view</code></td>
              </tr>
              <tr className="even:bg-primary-50">
                <td className="px-4 py-2">Manage SLA configurations</td>
                <td className="px-4 py-2"><code>helpdesk.sla_manage</code></td>
              </tr>
              <tr className="even:bg-primary-50">
                <td className="px-4 py-2">View all tickets</td>
                <td className="px-4 py-2"><code>helpdesk.tickets_view_all</code></td>
              </tr>
              <tr className="even:bg-primary-50">
                <td className="px-4 py-2">Escalate tickets</td>
                <td className="px-4 py-2"><code>helpdesk.tickets_escalate</code></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-between mt-12 gap-4">
          <Link href="/9-finance" className="bg-white border rounded px-4 py-2 hover:bg-primary-50 transition">← Finance & Expenses</Link>
          <Link href="/11-dashboards" className="bg-white border rounded px-4 py-2 hover:bg-primary-50 transition">Role-Based Dashboards →</Link>
        </div>
      </main>
    </DocsLayout>
  );
}
