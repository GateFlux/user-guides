import Link from 'next/link';
import DocsLayout from '../DocsLayout';

export default function PlatformConsoleGuide() {
  return (
    <DocsLayout>
      <main className="max-w-3xl mx-auto py-8 px-4">
        <nav className="mb-4 text-sm text-gray-500 flex items-center gap-2">
          <a href="/" className="text-primary-600 hover:underline">Docs</a>
          <span>›</span>
          <span>Platform Console</span>
        </nav>

        <div className="bg-gradient-to-br from-primary-900 via-primary-900 to-accent-500 text-white rounded-2xl p-6 mb-8 border-l-4 border-accent-400">
          <h1 className="text-3xl font-bold mb-2">Platform Console Guide</h1>
          <p className="opacity-90">Operate platform-wide modules for tenant lifecycle, plans, inbound requests, and provider health.</p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-3">Implemented Modules</h2>
        <ul className="list-disc ml-6 mb-8">
          <li><strong>Platform Overview Dashboard</strong> - cross-tenant KPIs and operations view</li>
          <li><strong>Tenant Lifecycle Management</strong> - provision and manage societies</li>
          <li><strong>Plans, Requests & Inboxes</strong> - pricing plans, demo requests, contact inbox</li>
          <li><strong>Platform Providers & Health</strong> - provider catalog and uptime controls</li>
        </ul>

        <h2 className="text-xl font-bold mt-10 mb-3">Daily Workflow</h2>
        <ol className="list-decimal ml-6 mb-8">
          <li>Open <strong>Platform Dashboard</strong> and review top KPIs.</li>
          <li>Process pending <strong>tenant onboarding actions</strong> from Tenant Lifecycle.</li>
          <li>Review <strong>demo and contact inbox queues</strong> and assign follow-up owners.</li>
          <li>Verify <strong>provider health and endpoints</strong> before business hours.</li>
        </ol>

        <h2 className="text-xl font-bold mt-10 mb-3">Cross-Layer Notes</h2>
        <ul className="list-disc ml-6 mb-8">
          <li><strong>API:</strong> Platform endpoints return normalized response structure and audit-safe metadata.</li>
          <li><strong>App:</strong> Platform console screens consume the same tenant and plan contracts.</li>
          <li><strong>Mobile:</strong> Impact is indirect; mobile behavior changes when tenant/plan status changes.</li>
        </ul>

        <h2 className="text-xl font-bold mt-10 mb-3">Operational Guardrails</h2>
        <ul className="list-disc ml-6 mb-10">
          <li>Do not edit tenant plans without checking active usage constraints.</li>
          <li>Always review health and provider status before enabling tenant-facing features.</li>
          <li>For onboarding incidents, use tenant-level audit trails before retrying provisioning.</li>
        </ul>

        <div className="flex justify-between mt-12 gap-4">
          <Link href="/15-staff-vendors" className="bg-white border rounded px-4 py-2 hover:bg-primary-50 transition">← Staff & Vendors</Link>
          <Link href="/17-auth-identity-security" className="bg-white border rounded px-4 py-2 hover:bg-primary-50 transition">Auth & Security →</Link>
        </div>
      </main>
    </DocsLayout>
  );
}
