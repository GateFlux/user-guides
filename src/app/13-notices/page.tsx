import Link from 'next/link';
import DocsLayout from '../DocsLayout';

export default function Notices() {
  return (
    <DocsLayout>
      <main className="max-w-3xl mx-auto py-8 px-4">
        <nav className="mb-4 text-sm text-gray-500 flex items-center gap-2">
          <a href="/" className="text-primary-600 hover:underline">Docs</a>
          <span>›</span>
          <span>Notices and Announcements</span>
        </nav>

        <div className="bg-gradient-to-br from-primary-900 via-primary-900 to-accent-500 text-white rounded-2xl p-6 mb-8 border-l-4 border-accent-400">
          <h1 className="text-3xl font-bold mb-2">Notices and Announcements Guide</h1>
          <p className="opacity-90">Create and manage communication for residents with pinning and expiry support.</p>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-3">Overview</h2>
        <p className="mb-4">The Notices module allows admins to publish announcements, maintenance alerts, event updates, and urgent information for residents.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">When to Use This</h2>
        <ul className="list-disc ml-6 mb-6">
          <li>Important society announcements</li>
          <li>Planned service interruptions</li>
          <li>Community event communication</li>
          <li>Urgent alerts</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-3">How to Use</h2>
        <ol className="list-decimal ml-6 mb-6">
          <li>Open <strong>Notices</strong> (`/notices`).</li>
          <li>Click <strong>Create Notice</strong>.</li>
          <li>Enter title and content.</li>
          <li>Select type, priority, and audience.</li>
          <li>Set optional expiry date and pin option.</li>
          <li>Publish notice.</li>
          <li>Use row actions to view, edit, pin/unpin, or delete.</li>
        </ol>

        <h2 className="text-xl font-bold mt-8 mb-3">Field Descriptions</h2>
        <ul className="list-disc ml-6 mb-6">
          <li><strong>Title</strong> (required): Notice heading.</li>
          <li><strong>Content</strong> (required): Full message body.</li>
          <li><strong>Type</strong>: announcement, maintenance, event, info, urgent.</li>
          <li><strong>Priority</strong>: normal, high, urgent.</li>
          <li><strong>Target Audience</strong>: group of users receiving notice.</li>
          <li><strong>Expires At</strong>: Optional notice expiry date.</li>
          <li><strong>Pinned</strong>: Shows important notice on top.</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-3">Validation Rules</h2>
        <ul className="list-disc ml-6 mb-6">
          <li>Title is required.</li>
          <li>Content is required.</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-3">Example</h2>
        <p className="mb-6">Post a water shutdown update with high priority, set tomorrow as expiry date, and pin it so residents see it first.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">Tips</h2>
        <ul className="list-disc ml-6 mb-6">
          <li>Use short, clear titles.</li>
          <li>Set expiry date for temporary notices.</li>
          <li>Pin only truly critical notices.</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-3">Common Mistakes</h2>
        <ul className="list-disc ml-6 mb-10">
          <li>Publishing urgent notice without pinning.</li>
          <li>Forgetting expiry date on temporary alerts.</li>
          <li>Using generic titles that residents cannot identify quickly.</li>
        </ul>

        <div className="flex justify-between mt-12 gap-4">
          <Link href="/12-complaints" className="bg-white border rounded px-4 py-2 hover:bg-primary-50 transition">← Complaints</Link>
          <Link href="/14-amenities" className="bg-white border rounded px-4 py-2 hover:bg-primary-50 transition">Amenities →</Link>
        </div>
      </main>
    </DocsLayout>
  );
}
