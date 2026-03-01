import Link from 'next/link';
import DocsLayout from '../DocsLayout';

export default function Complaints() {
  return (
    <DocsLayout>
      <main className="max-w-3xl mx-auto py-8 px-4">
        <nav className="mb-4 text-sm text-gray-500 flex items-center gap-2">
          <a href="/" className="text-primary-600 hover:underline">Help Center</a>
          <span>›</span>
          <span>Complaints & Maintenance</span>
        </nav>

        <div className="bg-gradient-to-br from-primary-900 via-primary-900 to-accent-500 text-white rounded-2xl p-6 mb-8 border-l-4 border-accent-400">
          <h1 className="text-3xl font-bold mb-2">Complaints & Maintenance</h1>
          <p className="opacity-90">File complaints, report maintenance issues, track progress, and manage resolutions for your society.</p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-3">Overview</h2>
        <ul className="list-disc ml-6 mb-8">
          <li><strong>Complaints</strong> — Report issues against common areas or specific units</li>
          <li><strong>Maintenance Requests</strong> — Submit and track facility maintenance work</li>
          <li><strong>Escalation</strong> — Complaints can be escalated based on SLA rules</li>
          <li><strong>Tracking</strong> — Monitor status from open through resolution</li>
        </ul>

        <h2 className="text-xl font-bold mt-10 mb-3">Complaints</h2>

        <h3 className="text-lg font-semibold mt-6 mb-2">Filing a Complaint</h3>
        <ol className="list-decimal ml-6 mb-6">
          <li>Navigate to <strong>Complaints</strong> in the main menu</li>
          <li>Click <strong>New Complaint</strong></li>
          <li>Fill in the details:
            <ul className="list-disc ml-6 mt-2">
              <li><strong>Title</strong> — Brief summary of the issue</li>
              <li><strong>Description</strong> — Full details of the problem</li>
              <li><strong>Category</strong> — Plumbing, electrical, noise, etc.</li>
              <li><strong>Priority</strong> — Low, medium, high, or critical</li>
              <li><strong>Type</strong> — General/common area issue, or against a specific unit</li>
            </ul>
          </li>
          <li>Click <strong>Submit</strong></li>
        </ol>

        <h3 className="text-lg font-semibold mt-6 mb-2">Complaint Statuses</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border text-sm">
            <thead className="bg-primary-900 text-white">
              <tr>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-primary-50">
                <td className="px-4 py-2 font-semibold text-primary-700">Open</td>
                <td className="px-4 py-2">Complaint filed, awaiting assignment</td>
              </tr>
              <tr className="even:bg-primary-50">
                <td className="px-4 py-2 font-semibold text-accent-700">In Progress</td>
                <td className="px-4 py-2">Assigned and being worked on</td>
              </tr>
              <tr className="even:bg-primary-50">
                <td className="px-4 py-2 font-semibold text-green-700">Resolved</td>
                <td className="px-4 py-2">Issue resolved, pending confirmation</td>
              </tr>
              <tr className="even:bg-primary-50">
                <td className="px-4 py-2 font-semibold text-neutral-500">Closed</td>
                <td className="px-4 py-2">Confirmed resolved and closed</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-2">Tracking Your Complaints</h3>
        <p className="mb-4">Residents can view their complaints from <strong>Complaints</strong> in the app. The list shows the status, priority, and last update for each complaint. Tap any complaint to see the full thread, including admin comments and updates.</p>

        <div className="bg-primary-50 border border-primary-200 rounded p-4 mb-6">
          <strong>Critical Alert:</strong> If you have a complaint marked as <strong>Critical</strong> (e.g., water leak, fire hazard), it is flagged immediately in the admin dashboard for urgent attention.
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-2">For Admins — Managing Complaints</h3>
        <ol className="list-decimal ml-6 mb-6">
          <li>Open <strong>Complaints</strong> from the admin menu</li>
          <li>Use tabs to filter: <strong>All / Open / In Progress / Resolved</strong></li>
          <li>Click a complaint to view details, add a comment, or update the status</li>
          <li>To escalate, click <strong>Escalate</strong> and confirm — this moves the complaint to the next level per your SLA rules</li>
          <li>To resolve, click <strong>Mark Resolved</strong> and add a resolution note</li>
        </ol>

        <h2 className="text-xl font-bold mt-10 mb-3">Maintenance Requests</h2>
        <p className="mb-4">Maintenance requests track facility repair and upkeep work. Unlike complaints (which report an issue), maintenance requests are used by admins and staff to manage scheduled and reactive maintenance jobs.</p>

        <h3 className="text-lg font-semibold mt-6 mb-2">Submitting a Maintenance Request</h3>
        <ol className="list-decimal ml-6 mb-6">
          <li>Navigate to <strong>Maintenance</strong> in the admin panel</li>
          <li>Click <strong>New Request</strong></li>
          <li>Fill in:
            <ul className="list-disc ml-6 mt-2">
              <li><strong>Title</strong> — What needs to be done</li>
              <li><strong>Category</strong> — Plumbing, electrical, HVAC, carpentry, painting, or general</li>
              <li><strong>Priority</strong> — High, medium, or low</li>
              <li><strong>Unit</strong> — Which flat or common area the work applies to</li>
              <li><strong>Description</strong> — Details of the work required</li>
            </ul>
          </li>
          <li>Assign a technician from your registered staff list (optional at creation)</li>
          <li>Click <strong>Submit</strong></li>
        </ol>

        <h3 className="text-lg font-semibold mt-6 mb-2">Assigning & Completing Work</h3>
        <ol className="list-decimal ml-6 mb-6">
          <li>Open a pending maintenance request</li>
          <li>Click <strong>Assign Technician</strong> and select a staff member</li>
          <li>The status changes to <strong>In Progress</strong></li>
          <li>Once the work is done, click <strong>Mark Complete</strong></li>
        </ol>

        <h3 className="text-lg font-semibold mt-6 mb-2">Maintenance Statuses</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border text-sm">
            <thead className="bg-primary-900 text-white">
              <tr>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-primary-50">
                <td className="px-4 py-2 font-semibold text-primary-700">Pending</td>
                <td className="px-4 py-2">Request logged, technician not yet assigned</td>
              </tr>
              <tr className="even:bg-primary-50">
                <td className="px-4 py-2 font-semibold text-accent-700">In Progress</td>
                <td className="px-4 py-2">Technician assigned and work underway</td>
              </tr>
              <tr className="even:bg-primary-50">
                <td className="px-4 py-2 font-semibold text-green-700">Completed</td>
                <td className="px-4 py-2">Work finished and marked complete</td>
              </tr>
              <tr className="even:bg-primary-50">
                <td className="px-4 py-2 font-semibold text-neutral-500">Cancelled</td>
                <td className="px-4 py-2">Request cancelled before completion</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-between mt-12 gap-4">
          <Link href="/11-dashboards" className="bg-white border rounded px-4 py-2 hover:bg-primary-50 transition">← Dashboards</Link>
          <Link href="/13-notices" className="bg-white border rounded px-4 py-2 hover:bg-primary-50 transition">Notices →</Link>
        </div>
      </main>
    </DocsLayout>
  );
}
