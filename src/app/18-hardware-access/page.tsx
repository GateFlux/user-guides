import Link from 'next/link';
import DocsLayout from '../DocsLayout';

export default function HardwareAccessGuide() {
  return (
    <DocsLayout>
      <main className="max-w-3xl mx-auto py-8 px-4">
        <nav className="mb-4 text-sm text-gray-500 flex items-center gap-2">
          <a href="/" className="text-primary-600 hover:underline">Docs</a>
          <span>›</span>
          <span>Hardware Access Integrations</span>
        </nav>

        <div className="bg-gradient-to-br from-primary-900 via-primary-900 to-accent-500 text-white rounded-2xl p-6 mb-8 border-l-4 border-accent-400">
          <h1 className="text-3xl font-bold mb-2">Hardware Access Integrations</h1>
          <p className="opacity-90">Operate RFID and boom barrier with LPR while keeping guard workflows and API events in sync.</p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-3">Implemented Modules</h2>
        <ul className="list-disc ml-6 mb-8">
          <li><strong>RFID Integration</strong> - reader registration, tag scans, reader status</li>
          <li><strong>Boom Barrier & LPR</strong> - auto-open triggers, status checks, activity logs</li>
        </ul>

        <h2 className="text-xl font-bold mt-10 mb-3">Commissioning Flow</h2>
        <ol className="list-decimal ml-6 mb-8">
          <li>Register hardware device in gate operations with location metadata.</li>
          <li>Validate connectivity and status heartbeat.</li>
          <li>Run test tag scan / test plate detection against sandbox entries.</li>
          <li>Confirm event logs are stored and visible in admin reports.</li>
        </ol>

        <h2 className="text-xl font-bold mt-10 mb-3">Failure Handling</h2>
        <ul className="list-disc ml-6 mb-8">
          <li>If hardware check fails, fallback to guard manual verification.</li>
          <li>Keep retry/backoff in integration adapters; avoid duplicate open commands.</li>
          <li>Review incident timeline from activity logs before replaying events.</li>
        </ul>

        <h2 className="text-xl font-bold mt-10 mb-3">Cross-Layer Notes</h2>
        <ul className="list-disc ml-6 mb-10">
          <li><strong>API:</strong> Hardware events should be tenant-scoped and audit-logged.</li>
          <li><strong>App:</strong> Gate operators need clear status, override, and fallback UI.</li>
          <li><strong>Mobile:</strong> Security app remains the manual fallback path during hardware downtime.</li>
        </ul>

        <div className="flex justify-between mt-12 gap-4">
          <Link href="/17-auth-identity-security" className="bg-white border rounded px-4 py-2 hover:bg-primary-50 transition">← Auth & Security</Link>
          <Link href="/19-enterprise-features" className="bg-white border rounded px-4 py-2 hover:bg-primary-50 transition">Enterprise Features →</Link>
        </div>
      </main>
    </DocsLayout>
  );
}
