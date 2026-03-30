import Link from 'next/link';
import DocsLayout from '../DocsLayout';

export default function SocietySettingsWorkspaceGuide() {
  return (
    <DocsLayout>
      <main className="max-w-3xl mx-auto py-8 px-4">
        <nav className="mb-4 text-sm text-gray-500 flex items-center gap-2">
          <a href="/" className="text-primary-600 hover:underline">Docs</a>
          <span>›</span>
          <span>Society Settings Workspace</span>
        </nav>

        <div className="bg-gradient-to-br from-primary-900 via-primary-900 to-accent-500 text-white rounded-2xl p-6 mb-8 border-l-4 border-accent-400">
          <h1 className="text-3xl font-bold mb-2">Society Settings Workspace Guide</h1>
          <p className="opacity-90">Configure operational settings for profile, billing, documents, notifications, and user preferences.</p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-3">Implemented Modules</h2>
        <ul className="list-disc ml-6 mb-8">
          <li><strong>Society Settings Workspace</strong> - profile, compliance, banking, operations</li>
          <li><strong>Billing & Subscription Settings</strong> - invoice preferences and subscription controls</li>
          <li><strong>Document & Notification Controls</strong> - policy and communication settings</li>
          <li><strong>User Preferences & Help</strong> - user-specific defaults and guided help</li>
        </ul>

        <h2 className="text-xl font-bold mt-10 mb-3">Setup Checklist</h2>
        <ol className="list-decimal ml-6 mb-8">
          <li>Complete society profile and compliance details.</li>
          <li>Configure payment method and billing defaults.</li>
          <li>Set document retention and visibility rules.</li>
          <li>Define notification channels and recipient scopes.</li>
          <li>Validate role-based access to settings sections.</li>
        </ol>

        <h2 className="text-xl font-bold mt-10 mb-3">Cross-Layer Consistency</h2>
        <ul className="list-disc ml-6 mb-8">
          <li><strong>API:</strong> Settings endpoints should enforce tenant and role policy uniformly.</li>
          <li><strong>App:</strong> Settings UI must remain capability-gated and section-specific.</li>
          <li><strong>Mobile:</strong> User preference surfaces should mirror notification and profile policy.</li>
        </ul>

        <h2 className="text-xl font-bold mt-10 mb-3">Validation Before Go-Live</h2>
        <ul className="list-disc ml-6 mb-10">
          <li>Run a permissions matrix check for admin, committee, resident, and staff roles.</li>
          <li>Verify billing and subscription updates are reflected in usage dashboards.</li>
          <li>Confirm notification policy behavior with test users across channels.</li>
        </ul>

        <div className="flex justify-between mt-12 gap-4">
          <Link href="/19-enterprise-features" className="bg-white border rounded px-4 py-2 hover:bg-primary-50 transition">← Enterprise Features</Link>
          <Link href="/7-faq" className="bg-white border rounded px-4 py-2 hover:bg-primary-50 transition">FAQ →</Link>
        </div>
      </main>
    </DocsLayout>
  );
}
