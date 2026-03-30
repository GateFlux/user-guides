import Link from 'next/link';
import DocsLayout from '../DocsLayout';

export default function EnterpriseFeaturesGuide() {
  return (
    <DocsLayout>
      <main className="max-w-3xl mx-auto py-8 px-4">
        <nav className="mb-4 text-sm text-gray-500 flex items-center gap-2">
          <a href="/" className="text-primary-600 hover:underline">Docs</a>
          <span>›</span>
          <span>Enterprise Features</span>
        </nav>

        <div className="bg-gradient-to-br from-primary-900 via-primary-900 to-accent-500 text-white rounded-2xl p-6 mb-8 border-l-4 border-accent-400">
          <h1 className="text-3xl font-bold mb-2">Enterprise Features Guide</h1>
          <p className="opacity-90">Operate advanced enterprise capabilities for identity, branding, and multi-property organizations.</p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-3">Implemented Modules</h2>
        <ul className="list-disc ml-6 mb-8">
          <li><strong>White-Label Branding</strong> - logo, color, domain, branded communication</li>
          <li><strong>Advanced Integrations</strong> - ERP/accounting sync and high-volume connectors</li>
          <li><strong>Single Sign-On (SSO)</strong> - SAML/OAuth identity provider integration</li>
          <li><strong>Multi-Property Management</strong> - centralized operations across communities</li>
        </ul>

        <h2 className="text-xl font-bold mt-10 mb-3">Rollout Sequence</h2>
        <ol className="list-decimal ml-6 mb-8">
          <li>Finalize tenant identity and RBAC mapping before SSO activation.</li>
          <li>Apply white-label assets only after domain and email templates are validated.</li>
          <li>Enable integrations in staging and verify data sync + retry behavior.</li>
          <li>Activate multi-property dashboards once tenant boundaries are confirmed.</li>
        </ol>

        <h2 className="text-xl font-bold mt-10 mb-3">Operational Controls</h2>
        <ul className="list-disc ml-6 mb-10">
          <li>Use explicit tenant scoping for every enterprise-level report/export.</li>
          <li>Review failed sync and webhook retries daily.</li>
          <li>Keep SSO fallback login path documented for incident response.</li>
        </ul>

        <div className="flex justify-between mt-12 gap-4">
          <Link href="/18-hardware-access" className="bg-white border rounded px-4 py-2 hover:bg-primary-50 transition">← Hardware Access</Link>
          <Link href="/20-society-settings-workspace" className="bg-white border rounded px-4 py-2 hover:bg-primary-50 transition">Settings Workspace →</Link>
        </div>
      </main>
    </DocsLayout>
  );
}
