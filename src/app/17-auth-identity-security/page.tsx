import Link from 'next/link';
import DocsLayout from '../DocsLayout';

export default function AuthIdentitySecurityGuide() {
  return (
    <DocsLayout>
      <main className="max-w-3xl mx-auto py-8 px-4">
        <nav className="mb-4 text-sm text-gray-500 flex items-center gap-2">
          <a href="/" className="text-primary-600 hover:underline">Docs</a>
          <span>›</span>
          <span>Authentication & Security</span>
        </nav>

        <div className="bg-gradient-to-br from-primary-900 via-primary-900 to-accent-500 text-white rounded-2xl p-6 mb-8 border-l-4 border-accent-400">
          <h1 className="text-3xl font-bold mb-2">Authentication, Identity, and Security</h1>
          <p className="opacity-90">Implement and operate login, 2FA, RBAC, sessions, and profile security controls consistently.</p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-3">Implemented Modules</h2>
        <ul className="list-disc ml-6 mb-8">
          <li><strong>Authentication</strong> - login/register/logout, OTP, session management</li>
          <li><strong>Two-Factor Authentication (2FA)</strong> - setup, challenge, recovery codes</li>
          <li><strong>Role-Based Access Control</strong> - role templates and capability gates</li>
          <li><strong>Profile Security Controls</strong> - password, sessions, and security preferences</li>
        </ul>

        <h2 className="text-xl font-bold mt-10 mb-3">Recommended Setup Order</h2>
        <ol className="list-decimal ml-6 mb-8">
          <li>Configure role templates and core capabilities first.</li>
          <li>Enable 2FA policy for admin and finance-sensitive roles.</li>
          <li>Validate session revoke and password reset flows.</li>
          <li>Run role-based menu checks in admin and resident views.</li>
        </ol>

        <h2 className="text-xl font-bold mt-10 mb-3">Cross-Layer Contract Checks</h2>
        <ul className="list-disc ml-6 mb-8">
          <li><strong>API:</strong> Keep auth payload and error shape stable across login, refresh, and session endpoints.</li>
          <li><strong>App:</strong> Use capability-driven rendering and route guards, not static role assumptions only.</li>
          <li><strong>Mobile:</strong> Keep OTP and session behavior aligned with backend auth responses.</li>
        </ul>

        <h2 className="text-xl font-bold mt-10 mb-3">Security Checklist</h2>
        <ul className="list-disc ml-6 mb-10">
          <li>Use 2FA for privileged roles.</li>
          <li>Review active sessions regularly and revoke unknown devices.</li>
          <li>Audit permission-denied events and failed logins from logs dashboards.</li>
        </ul>

        <div className="flex justify-between mt-12 gap-4">
          <Link href="/16-platform-console" className="bg-white border rounded px-4 py-2 hover:bg-primary-50 transition">← Platform Console</Link>
          <Link href="/18-hardware-access" className="bg-white border rounded px-4 py-2 hover:bg-primary-50 transition">Hardware Access →</Link>
        </div>
      </main>
    </DocsLayout>
  );
}
