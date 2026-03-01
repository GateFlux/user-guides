import Link from 'next/link';
import DocsLayout from '../DocsLayout';

export default function Notices() {
  return (
    <DocsLayout>
      <main className="max-w-3xl mx-auto py-8 px-4">
        <nav className="mb-4 text-sm text-gray-500 flex items-center gap-2">
          <a href="/" className="text-primary-600 hover:underline">Help Center</a>
          <span>›</span>
          <span>Notices & Announcements</span>
        </nav>

        <div className="bg-gradient-to-br from-primary-900 via-primary-900 to-accent-500 text-white rounded-2xl p-6 mb-8 border-l-4 border-accent-400">
          <h1 className="text-3xl font-bold mb-2">Notices & Announcements</h1>
          <p className="opacity-90">Post, manage, and view society notices and announcements for all residents.</p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-3">Overview</h2>
        <ul className="list-disc ml-6 mb-8">
          <li><strong>Notice Types</strong> — Announcements, maintenance, events, info, and urgent</li>
          <li><strong>Audience Targeting</strong> — Send to all residents, owners only, or tenants only</li>
          <li><strong>Pinning</strong> — Pin important notices to the top</li>
          <li><strong>Expiry</strong> — Set an expiration date for time-sensitive notices</li>
        </ul>

        <h2 className="text-xl font-bold mt-10 mb-3">Viewing Notices (Residents)</h2>
        <p className="mb-4">Residents can view notices from the <strong>Notices</strong> section in the app. The list shows:</p>
        <ul className="list-disc ml-6 mb-6">
          <li>Pinned notices at the top (marked with a pin icon)</li>
          <li>Active notices sorted by date, newest first</li>
          <li>Expired notices in a separate <strong>Expired</strong> tab</li>
        </ul>
        <p className="mb-6">Tap any notice to read the full content. Urgent notices are highlighted with a red badge.</p>

        <h2 className="text-xl font-bold mt-10 mb-3">Creating a Notice (Admins)</h2>
        <p className="mb-4">Only users with notice management permissions (Secretary, Society Admin, and above) can create notices.</p>
        <ol className="list-decimal ml-6 mb-6">
          <li>Navigate to <strong>Notices</strong> in the admin menu</li>
          <li>Click <strong>Create Notice</strong></li>
          <li>Fill in:
            <ul className="list-disc ml-6 mt-2">
              <li><strong>Title</strong> — Clear, descriptive heading</li>
              <li><strong>Content</strong> — Full notice body</li>
              <li><strong>Type</strong> — Choose from announcement, maintenance, event, info, or urgent</li>
              <li><strong>Priority</strong> — Normal, high, or urgent</li>
              <li><strong>Target Audience</strong> — All residents, owners only, or tenants only</li>
              <li><strong>Expiry Date</strong> — Optional. The notice will auto-move to Expired after this date</li>
            </ul>
          </li>
          <li>Click <strong>Publish</strong></li>
        </ol>
        <p className="mb-6">Residents receive a push notification immediately when a new notice is published.</p>

        <h2 className="text-xl font-bold mt-10 mb-3">Notice Types</h2>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border text-sm">
            <thead className="bg-primary-900 text-white">
              <tr>
                <th className="px-4 py-2">Type</th>
                <th className="px-4 py-2">Use For</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-primary-50">
                <td className="px-4 py-2 font-semibold">Announcement</td>
                <td className="px-4 py-2">General society updates and news</td>
              </tr>
              <tr className="even:bg-primary-50">
                <td className="px-4 py-2 font-semibold">Maintenance</td>
                <td className="px-4 py-2">Planned maintenance, water/power shutdowns</td>
              </tr>
              <tr className="even:bg-primary-50">
                <td className="px-4 py-2 font-semibold">Event</td>
                <td className="px-4 py-2">Community events, gatherings, festivals</td>
              </tr>
              <tr className="even:bg-primary-50">
                <td className="px-4 py-2 font-semibold">Info</td>
                <td className="px-4 py-2">Informational updates, reminders</td>
              </tr>
              <tr className="even:bg-primary-50">
                <td className="px-4 py-2 font-semibold">Urgent</td>
                <td className="px-4 py-2">Emergency alerts, critical information</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold mt-10 mb-3">Managing Notices</h2>

        <h3 className="text-lg font-semibold mt-6 mb-2">Pinning a Notice</h3>
        <p className="mb-4">Pin important notices so they always appear at the top of the list. Open the notice and click <strong>Pin</strong>. To unpin, click <strong>Unpin</strong>. Multiple notices can be pinned at the same time.</p>

        <h3 className="text-lg font-semibold mt-6 mb-2">Editing a Notice</h3>
        <p className="mb-4">Open the notice and click <strong>Edit</strong>. All fields can be updated after publishing. Residents who have already read the notice will see the updated content on their next visit.</p>

        <h3 className="text-lg font-semibold mt-6 mb-2">Deleting a Notice</h3>
        <p className="mb-6">Open the notice and click <strong>Delete</strong>. This permanently removes the notice. Consider setting an expiry date instead of deleting, to keep a record.</p>

        <div className="bg-primary-50 border border-primary-200 rounded p-4 mb-8">
          <strong>Tip:</strong> Use the <strong>Expiry Date</strong> field for time-sensitive notices (e.g., water shutdown on a specific day). The notice moves to the Expired tab automatically, keeping your active list clean.
        </div>

        <div className="flex justify-between mt-12 gap-4">
          <Link href="/12-complaints" className="bg-white border rounded px-4 py-2 hover:bg-primary-50 transition">← Complaints & Maintenance</Link>
          <Link href="/14-amenities" className="bg-white border rounded px-4 py-2 hover:bg-primary-50 transition">Amenities →</Link>
        </div>
      </main>
    </DocsLayout>
  );
}
