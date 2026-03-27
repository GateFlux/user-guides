import Link from 'next/link';

const guideGroups = [
  {
    label: 'Resident',
    color: 'bg-blue-50 border-blue-200',
    headerColor: 'text-blue-800',
    items: [
      { href: '/resident-guide', label: 'Resident Guide', desc: 'App overview, login, and daily features' },
      { href: '/3-visitor-management', label: 'Visitor Management', desc: 'Pre-approvals, QR codes, walk-ins, history' },
      { href: '/14-amenities', label: 'Amenities & Bookings', desc: 'Book gym, pool, clubhouse, and more' },
      { href: '/12-complaints', label: 'Complaints & Maintenance', desc: 'File complaints and track resolutions' },
      { href: '/13-notices', label: 'Notices & Announcements', desc: 'View and manage society notices' },
      { href: '/8-governance', label: 'Governance & Elections', desc: 'AGMs, digital voting, committee elections' },
    ],
  },
  {
    label: 'Security Guard',
    color: 'bg-purple-50 border-purple-200',
    headerColor: 'text-purple-800',
    items: [
      { href: '/security-guard-guide', label: 'Security Guard Guide', desc: 'Gate operations, check-ins, QR scanning' },
    ],
  },
  {
    label: 'Admin',
    color: 'bg-amber-50 border-amber-200',
    headerColor: 'text-amber-800',
    items: [
      { href: '/admin-guide', label: 'Admin Guide', desc: 'Society setup, residents, and settings' },
      { href: '/2-user-management', label: 'User Management', desc: 'Roles, permissions, and resident profiles' },
      { href: '/9-finance', label: 'Finance & Expenses', desc: 'Dues, expenses, budgets, and reports' },
      { href: '/10-helpdesk-sla', label: 'Helpdesk & SLA', desc: 'SLA configuration and escalation rules' },
      { href: '/11-dashboards', label: 'Role-Based Dashboards', desc: 'Dynamic navigation and dashboard widgets' },
      { href: '/15-staff-vendors', label: 'Staff & Vendors', desc: 'Staff management, vendors, and work orders' },
      { href: '/16-platform-console', label: 'Platform Console', desc: 'Tenant lifecycle, plans, inboxes, and provider health' },
      { href: '/17-auth-identity-security', label: 'Auth & Security', desc: 'Authentication, 2FA, RBAC, and session security' },
      { href: '/18-hardware-access', label: 'Hardware Access', desc: 'RFID and boom barrier LPR operational flows' },
      { href: '/19-enterprise-features', label: 'Enterprise Features', desc: 'SSO, white-label, integrations, and multi-property' },
      { href: '/20-society-settings-workspace', label: 'Settings Workspace', desc: 'Billing, documents, notifications, and preferences' },
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-8 px-2 md:px-8">
      <section className="bg-gradient-to-br from-primary-900 via-primary-900 to-accent-500 text-white rounded-2xl p-10 pb-16 mb-10 text-center relative overflow-hidden border-b-4 border-accent-400">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">GateFlux Help Center</h1>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-4">Find guides and answers for using GateFlux to manage security, finance, governance, and society operations.</p>
        <p className="text-sm md:text-base opacity-80 max-w-2xl mx-auto mb-8">Current implementation baseline: 57 modules across 15 categories spanning web, connected APIs, mobile apps, and hardware integrations.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link href="/1-getting-started" className="bg-white text-primary-900 font-semibold rounded px-6 py-3 shadow hover:bg-primary-50 transition">Get Started</Link>
          <Link href="/7-faq" className="bg-white/10 text-white border border-white/30 font-semibold rounded px-6 py-3 hover:bg-white/20 transition">Browse FAQ</Link>
        </div>
      </section>

      <h2 className="text-2xl font-bold mb-4">I am a...</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <Link href="/resident-guide" className="bg-white border rounded-xl p-6 flex flex-col items-center hover:shadow-lg transition">
          <div className="mb-3"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></div>
          <h3 className="font-semibold text-lg mb-1">Resident</h3>
          <p className="text-gray-500 text-sm">Pre-approve visitors, track deliveries, view notices, and manage your account.</p>
        </Link>
        <Link href="/security-guard-guide" className="bg-white border rounded-xl p-6 flex flex-col items-center hover:shadow-lg transition">
          <div className="mb-3"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div>
          <h3 className="font-semibold text-lg mb-1">Security Guard</h3>
          <p className="text-gray-500 text-sm">Check visitors in and out, scan QR codes, request approvals, and manage the gate.</p>
        </Link>
        <Link href="/admin-guide" className="bg-white border rounded-xl p-6 flex flex-col items-center hover:shadow-lg transition">
          <div className="mb-3"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg></div>
          <h3 className="font-semibold text-lg mb-1">Society Admin</h3>
          <p className="text-gray-500 text-sm">Manage residents, security staff, providers, complaints, and society settings.</p>
        </Link>
      </div>

      <div className="mb-2">
        <Link href="/1-getting-started" className="inline-block bg-primary-50 border border-primary-200 rounded-lg px-4 py-2 text-sm font-semibold text-primary-900 hover:bg-primary-100 transition mb-6">Quick Start Guide →</Link>
        <Link href="/4-society-signup" className="ml-0 md:ml-3 inline-block bg-white border border-primary-200 rounded-lg px-4 py-2 text-sm font-semibold text-primary-900 hover:bg-primary-50 transition mb-6">Society Signup Guide →</Link>
      </div>

      {guideGroups.map(({ label, color, headerColor, items }) => (
        <section key={label} className={`border rounded-xl p-6 mb-6 ${color}`}>
          <h2 className={`text-lg font-bold mb-4 ${headerColor}`}>{label} Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {items.map(({ href, label: itemLabel, desc }) => (
              <Link key={href} href={href} className="bg-white border rounded-lg p-4 hover:shadow transition">
                <div className="font-semibold text-sm text-primary-900 mb-1">{itemLabel}</div>
                <div className="text-xs text-gray-500">{desc}</div>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <section className="bg-primary-50 border rounded-xl p-6 mb-10">
        <h2 className="text-xl font-bold mb-4">Common Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link href="/resident-guide#pre-approving-a-visitor" className="flex items-center gap-3 p-3 bg-white rounded border hover:border-primary-400 transition">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
            How do I pre-approve a visitor?
          </Link>
          <Link href="/security-guard-guide#checking-in-a-walk-in-visitor" className="flex items-center gap-3 p-3 bg-white rounded border hover:border-primary-400 transition">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
            How do I check in a walk-in visitor?
          </Link>
          <Link href="/admin-guide#adding-a-new-resident" className="flex items-center gap-3 p-3 bg-white rounded border hover:border-primary-400 transition">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            How do I add a new resident?
          </Link>
          <Link href="/resident-guide#managing-recurring-visitors" className="flex items-center gap-3 p-3 bg-white rounded border hover:border-primary-400 transition">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>
            How do I set up recurring visitor access?
          </Link>
          <Link href="/security-guard-guide#overstaying-visitors" className="flex items-center gap-3 p-3 bg-white rounded border hover:border-primary-400 transition">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            What about overstaying visitors?
          </Link>
          <Link href="/7-faq" className="flex items-center gap-3 p-3 bg-white rounded border hover:border-primary-400 transition">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
            App not working?
          </Link>
          <Link href="/admin-guide#audit-logs" className="flex items-center gap-3 p-3 bg-white rounded border hover:border-primary-400 transition">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            How do I view audit logs?
          </Link>
        </div>
      </section>

      {/* For Developers section hidden as requested */}

      <footer className="text-center text-gray-400 mt-12 pt-8 border-t">
        <p className="font-bold">GateFlux Help Center | Last updated: March 2026</p>
        <p>Need help? Contact your society admin or email <a href="mailto:support@gateflux.co" className="underline">support@gateflux.co</a></p>
      </footer>
    </main>
  );
}
