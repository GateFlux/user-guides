'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navGroups = [
  {
    label: 'General',
    items: [
      { href: '/1-getting-started', label: 'Getting Started' },
      { href: '/4-society-signup', label: 'Society Signup & Verification' },
      { href: '/7-faq', label: 'FAQ' },
    ],
  },
  {
    label: 'Resident',
    items: [
      { href: '/resident-guide', label: 'Resident Guide' },
      { href: '/3-visitor-management', label: 'Visitor Management' },
      { href: '/14-amenities', label: 'Amenities & Bookings' },
      { href: '/12-complaints', label: 'Complaints & Maintenance' },
      { href: '/13-notices', label: 'Notices & Announcements' },
      { href: '/8-governance', label: 'Governance & Elections' },
    ],
  },
  {
    label: 'Security Guard',
    items: [
      { href: '/security-guard-guide', label: 'Security Guard Guide' },
    ],
  },
  {
    label: 'Admin',
    items: [
      { href: '/admin-guide', label: 'Admin Guide' },
      { href: '/2-user-management', label: 'User Management' },
      { href: '/9-finance', label: 'Finance & Expenses' },
      { href: '/10-helpdesk-sla', label: 'Helpdesk & SLA' },
      { href: '/11-dashboards', label: 'Role-Based Dashboards' },
      { href: '/15-staff-vendors', label: 'Staff & Vendors' },
      { href: '/16-platform-console', label: 'Platform Console' },
      { href: '/17-auth-identity-security', label: 'Auth & Security' },
      { href: '/18-hardware-access', label: 'Hardware Access' },
      { href: '/19-enterprise-features', label: 'Enterprise Features' },
      { href: '/20-society-settings-workspace', label: 'Settings Workspace' },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="sidebar bg-white border-r w-full md:w-64 p-4 md:fixed md:top-16 md:h-[calc(100vh-4rem)] overflow-y-auto">
      <nav>
        {navGroups.map(({ label, items }) => (
          <div key={label} className="mb-4">
            <div className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">
              {label}
            </div>
            <ul className="space-y-0.5">
              {items.map(({ href, label: itemLabel }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`block px-3 py-2 rounded hover:bg-primary-50 transition font-medium ${pathname.startsWith(href) ? 'bg-primary-100 text-primary-900 font-bold' : 'text-neutral-800'}`}
                  >
                    {itemLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
