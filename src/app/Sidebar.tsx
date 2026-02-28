'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/1-getting-started', label: 'Getting Started' },
  { href: '/2-user-management', label: 'User Management' },
  { href: '/3-visitor-management', label: 'Visitor Management' },
  { href: '/5-configuration', label: 'Configuration' },
  { href: '/6-troubleshooting', label: 'Troubleshooting' },
  { href: '/7-faq', label: 'FAQ' },
  { href: '/8-governance', label: 'Governance' },
  { href: '/9-finance', label: 'Finance' },
  { href: '/10-helpdesk-sla', label: 'Helpdesk & SLA' },
  { href: '/11-dashboards', label: 'Dashboards' },
  { href: '/admin-guide', label: 'Admin Guide' },
  { href: '/Deployment-Guide', label: 'Deployment Guide' },
  { href: '/resident-guide', label: 'Resident Guide' },
  { href: '/security-guard-guide', label: 'Security Guard Guide' },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="sidebar bg-white border-r w-full md:w-64 p-4 md:fixed md:h-full overflow-y-auto">
      <nav>
        <ul className="space-y-1">
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`block px-3 py-2 rounded hover:bg-blue-50 transition font-medium ${pathname.startsWith(href) ? 'bg-blue-100 text-blue-900 font-bold' : 'text-gray-800'}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
