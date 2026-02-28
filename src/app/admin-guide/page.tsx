import DocsLayout from '../DocsLayout';

export default function AdminGuide() {
  return (
    <DocsLayout>
      <main className="prose mx-auto py-8">
        <nav className="mb-4 text-sm text-gray-500 flex items-center gap-2">
          <a href="/" className="text-blue-600 hover:underline">Docs</a>
          <span>›</span>
          <span>Admin Guide</span>
        </nav>

        <div className="bg-blue-50 border border-blue-200 rounded p-6 mb-6">
          <h1 className="text-2xl font-bold mb-2">Admin Guide</h1>
          <p>Complete guide for Society Admins, Committee Members, and Managers to configure and manage GateFlux.</p>
        </div>

      <h2 id="accessing-admin-panel">Accessing the Admin Panel</h2>
      <ol className="steps list-decimal pl-6 mb-6">
        <li>Open your web browser and go to your society's GateFlux admin URL</li>
        <li>Enter your email and password</li>
        <li>You'll see the Admin Dashboard with society overview</li>
      </ol>
      <div className="bg-blue-50 border border-blue-200 rounded p-4 mb-6">
        <div className="font-semibold mb-2 flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
          First-time setup
        </div>
        <p>If this is your first login, you'll be asked to set a new password. Use a strong password with at least 8 characters.</p>
      </div>

      <h2 id="dashboard-overview">Dashboard Overview</h2>
      <p>Your dashboard shows key metrics at a glance:</p>
      <ul className="mb-6">
        <li><strong>Today's Visitors</strong> – Number of check-ins today</li>
        <li><strong>Currently Inside</strong> – Visitors present in the society right now</li>
        <li><strong>Overstaying</strong> – Visitors who have exceeded expected duration</li>
        <li><strong>Pending Approvals</strong> – Walk-in visitors waiting for resident response</li>
      </ul>

      {/* Mock design for Admin Dashboard */}
      <div className="mockup mb-8">
        <div className="bg-white border rounded shadow p-4 max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <div className="font-bold text-xl"><span className="text-blue-700">Gate</span>Flux Admin</div>
            <div className="flex items-center gap-2">
              <span className="text-gray-700">Green Valley Society</span>
              <span className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-600 to-yellow-500 flex items-center justify-center text-white text-xs font-bold">AD</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            <div className="bg-white rounded-lg p-4 text-center shadow">
              <div className="text-2xl font-bold text-blue-700">47</div>
              <div className="text-xs text-gray-500">Today's Visitors</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow">
              <div className="text-2xl font-bold text-green-600">12</div>
              <div className="text-xs text-gray-500">Currently Inside</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow">
              <div className="text-2xl font-bold text-yellow-600">3</div>
              <div className="text-xs text-gray-500">Overstaying</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow">
              <div className="text-2xl font-bold text-pink-600">156</div>
              <div className="text-xs text-gray-500">Active Residents</div>
            </div>
          </div>
          <div className="font-semibold text-base mb-2">Recent Activity</div>
          <div className="bg-gray-50 border rounded p-2 divide-y">
            <div className="flex items-center py-2">
              <span className="w-2 h-2 rounded-full bg-green-400 mr-2"></span>
              <span className="text-xs">Amazon Delivery checked in to B-205</span>
              <span className="ml-auto text-xs text-gray-400">2 min ago</span>
            </div>
            <div className="flex items-center py-2">
              <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
              <span className="text-xs">Walk-in approved for A-101</span>
              <span className="ml-auto text-xs text-gray-400">5 min ago</span>
            </div>
            <div className="flex items-center py-2">
              <span className="w-2 h-2 rounded-full bg-gray-400 mr-2"></span>
              <span className="text-xs">Guest checked out from C-302</span>
              <span className="ml-auto text-xs text-gray-400">8 min ago</span>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-gray-400 mt-2">Mock design: Admin Dashboard</div>
      </div>

      <h2 id="managing-residents">Managing Residents</h2>
      <h3 id="adding-a-new-resident">Adding a New Resident</h3>
      <ol className="steps list-decimal pl-6 mb-6">
        <li>Go to <strong>Staff</strong> → <strong>Residents</strong> in the sidebar</li>
        <li>Click <strong>Add Resident</strong></li>
        <li>Fill in the details:
          <ul className="list-disc pl-6">
            <li>Name</li>
            <li>Email (optional)</li>
            <li>Phone number (required for app login)</li>
            <li>Flat/Unit number</li>
            <li>Type: Owner or Tenant</li>
          </ul>
        </li>
        <li>Click <strong>Save</strong></li>
      </ol>
      <p>The resident will receive an SMS with instructions to download the app and log in.</p>

      {/* Mock design for Residents Table */}
      <div className="mockup mb-8">
        <div className="bg-white border rounded shadow p-4 max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <div className="font-bold text-base">Residents (156)</div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded text-xs font-semibold">+ Add Resident</button>
          </div>
          <table className="w-full text-xs border rounded">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-2 text-left">Name</th>
                <th className="py-2 px-2 text-left">Flat</th>
                <th className="py-2 px-2 text-left">Phone</th>
                <th className="py-2 px-2 text-left">Type</th>
                <th className="py-2 px-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-semibold">Raj Patel</td>
                <td>A-101</td>
                <td>98765-43210</td>
                <td>Owner</td>
                <td><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Active</span></td>
              </tr>
              <tr>
                <td className="font-semibold">Priya Sharma</td>
                <td>A-102</td>
                <td>98765-43211</td>
                <td>Tenant</td>
                <td><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Active</span></td>
              </tr>
              <tr>
                <td className="font-semibold">Amit Kumar</td>
                <td>B-205</td>
                <td>98765-43212</td>
                <td>Owner</td>
                <td><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Active</span></td>
              </tr>
              <tr>
                <td className="font-semibold">Meera Joshi</td>
                <td>C-302</td>
                <td>98765-43213</td>
                <td>Owner</td>
                <td><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Pending</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="text-center text-xs text-gray-400 mt-2">Mock design: Residents Table</div>
      </div>

      <h3 id="editing-resident-details">Editing Resident Details</h3>
      <ol className="steps list-decimal pl-6 mb-6">
        <li>Go to <strong>Staff</strong> → <strong>Residents</strong></li>
        <li>Find the resident using search or filters</li>
        <li>Click on the resident's row</li>
        <li>Click <strong>Edit</strong></li>
        <li>Update details and click <strong>Save</strong></li>
      </ol>

      <h3 id="removing-a-resident">Removing a Resident</h3>
      <ol className="steps list-decimal pl-6 mb-6">
        <li>Go to <strong>Staff</strong> → <strong>Residents</strong></li>
        <li>Find and select the resident</li>
        <li>Click <strong>Delete</strong> or <strong>Deactivate</strong></li>
        <li>Confirm the action</li>
      </ol>
      <div className="bg-yellow-50 border border-yellow-200 rounded p-4 mb-6">
        <div className="font-semibold mb-2 flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          Deactivate vs Delete
        </div>
        <p><strong>Deactivate</strong> preserves history and prevents login. Use this when a tenant moves out. <strong>Delete</strong> removes all data permanently. Use only for duplicate entries.</p>
      </div>

      <h2 id="managing-security-staff">Managing Security Staff</h2>
      <h3 id="adding-a-security-guard">Adding a Security Guard</h3>
      <ol className="steps list-decimal pl-6 mb-6">
        <li>Go to <strong>Staff</strong> → <strong>Security</strong></li>
        <li>Click <strong>Add Guard</strong></li>
        <li>Enter their name and phone number</li>
        <li>Assign them to a gate (if you have multiple)</li>
        <li>Set their shift schedule</li>
        <li>Click <strong>Save</strong></li>
      </ol>
      <p>The guard will receive login credentials via SMS.</p>

      <h3 id="managing-shifts">Managing Shifts</h3>
      <ol className="steps list-decimal pl-6 mb-6">
        <li>Go to <strong>Staff</strong> → <strong>Security</strong> → <strong>Shifts</strong></li>
        <li>View the weekly schedule</li>
        <li>Click on a slot to assign or change guards</li>
        <li>Save changes</li>
      </ol>

      <h2 id="managing-providers">Managing Providers</h2>
      <p>Providers are common delivery and service companies that visitors can select:</p>
      <h3>Viewing Providers</h3>
      <ol className="steps list-decimal pl-6 mb-6">
        <li>Go to <strong>Providers</strong> in the sidebar</li>
        <li>You'll see a list of all providers</li>
        <li><strong>Global</strong> providers (Amazon, Swiggy, etc.) are available to all societies</li>
        <li><strong>Community</strong> providers are specific to your society</li>
      </ol>

      <h3>Adding a Community Provider</h3>
      <p>Add local service providers specific to your society:</p>
      <ol className="steps list-decimal pl-6 mb-6">
        <li>Go to <strong>Providers</strong></li>
        <li>Click <strong>Add Provider</strong></li>
        <li>Enter:
          <ul className="list-disc pl-6">
            <li>Name (e.g., "Local Plumber - Sharma")</li>
            <li>Category: Delivery, Service, Cab, or Other</li>
            <li>Logo URL (optional)</li>
          </ul>
        </li>
        <li>Click <strong>Add Provider</strong></li>
      </ol>

      <h3>Enabling/Disabling Providers</h3>
      <p>Control which providers appear for selection:</p>
      <ol className="steps list-decimal pl-6 mb-6">
        <li>Go to <strong>Providers</strong></li>
        <li>Find the provider</li>
        <li>Click <strong>Enable</strong> or <strong>Disable</strong></li>
      </ol>

      <h2 id="visitor-analytics">Visitor Analytics</h2>
      <p>Monitor visitor patterns and security insights:</p>
      <ol className="steps list-decimal pl-6 mb-6">
        <li>Go to <strong>Visitors</strong> in the sidebar</li>
        <li>Click the <strong>Analytics</strong> tab</li>
      </ol>
      <h3>Available Reports</h3>
      <ul className="mb-6">
        <li><strong>Total Visitors</strong> – Count for selected date range</li>
        <li><strong>Currently Inside</strong> – Live count of visitors in society</li>
        <li><strong>Overstaying</strong> – Visitors who exceeded expected duration</li>
        <li><strong>By Visitor Type</strong> – Breakdown by Guest, Delivery, Service, Cab</li>
        <li><strong>Top Providers</strong> – Most frequent delivery/service companies</li>
        <li><strong>Peak Hours</strong> – Busiest times for visitor traffic</li>
      </ul>
      <h3>Exporting Data</h3>
      <ol className="steps list-decimal pl-6 mb-6">
        <li>Go to <strong>Visitors</strong></li>
        <li>Apply any filters (date, type, flat)</li>
        <li>Click <strong>Export</strong></li>
        <li>Choose format: Excel or PDF</li>
      </ol>

      <h2 id="posting-notices">Posting Notices</h2>
      <p>Send announcements to all residents:</p>
      <ol className="steps list-decimal pl-6 mb-6">
        <li>Go to <strong>Notices</strong> in the sidebar</li>
        <li>Click <strong>New Notice</strong></li>
        <li>Enter:
          <ul className="list-disc pl-6">
            <li>Title</li>
            <li>Content</li>
            <li>Category (Maintenance, Event, Security, General)</li>
            <li>Urgency level</li>
          </ul>
        </li>
        <li>Choose notification options:
          <ul className="list-disc pl-6">
            <li><strong>Push notification</strong> – Send immediately to all phones</li>
            <li><strong>Email</strong> – Send email to all residents</li>
            <li><strong>SMS</strong> – Send text message (for urgent notices)</li>
          </ul>
        </li>
        <li>Click <strong>Publish</strong></li>
      </ol>

      <h2 id="handling-complaints">Handling Complaints</h2>
      <p>Manage resident complaints and requests:</p>
      <ol className="steps list-decimal pl-6 mb-6">
        <li>Go to <strong>Complaints</strong> in the sidebar</li>
        <li>See all complaints sorted by status (Open, In Progress, Resolved)</li>
        <li>Click on a complaint to view details</li>
        <li>Add comments to communicate with the resident</li>
        <li>Update status as you work on it</li>
        <li>Mark as <strong>Resolved</strong> when complete</li>
      </ol>

      <h2 id="society-settings">Society Settings</h2>
      <h3>General Settings</h3>
      <ol className="steps list-decimal pl-6 mb-6">
        <li>Go to <strong>Settings</strong> in the sidebar</li>
        <li>Update society details:
          <ul className="list-disc pl-6">
            <li>Society name and address</li>
            <li>Contact information</li>
            <li>Working hours</li>
            <li>Logo</li>
          </ul>
        </li>
        <li>Click <strong>Save</strong></li>
      </ol>

      <h3>Gate Settings</h3>
      <ol className="steps list-decimal pl-6 mb-6">
        <li>Go to <strong>Settings</strong> → <strong>Gates</strong></li>
        <li>Add or edit entry points</li>
        <li>Set operating hours for each gate</li>
        <li>Configure vehicle entry rules</li>
      </ol>

      <h3>Notification Settings</h3>
      <p>Control how notifications are sent:</p>
      <ol className="steps list-decimal pl-6 mb-6">
        <li>Go to <strong>Settings</strong> → <strong>Notifications</strong></li>
        <li>Configure:
          <ul className="list-disc pl-6">
            <li>Check-in/check-out notifications</li>
            <li>Approval request timeout</li>
            <li>Overstay alert threshold</li>
          </ul>
        </li>
      </ol>

      <h2 id="managing-your-account">Managing Your Account</h2>
      <h3>Changing Your Password</h3>
      <ol className="steps list-decimal pl-6 mb-6">
        <li>Click your profile icon (top-right)</li>
        <li>Select <strong>Profile</strong></li>
        <li>Click <strong>Change Password</strong></li>
        <li>Enter current and new password</li>
        <li>Click <strong>Save</strong></li>
      </ol>

      <h3>Adding More Admins</h3>
      <ol className="steps list-decimal pl-6 mb-6">
        <li>Go to <strong>Settings</strong> → <strong>Admins</strong></li>
        <li>Click <strong>Invite Admin</strong></li>
        <li>Enter email and select role:
          <ul className="list-disc pl-6">
            <li><strong>Society Admin</strong> – Full access</li>
            <li><strong>Committee Member</strong> – Limited admin access</li>
            <li><strong>Manager</strong> – Day-to-day operations only</li>
          </ul>
        </li>
        <li>Click <strong>Send Invite</strong></li>
      </ol>

      <h2 id="audit-logs">Audit Logs & Activity Tracking</h2>
      <p>GateFlux maintains comprehensive audit logs for accountability and security. Every important action is recorded automatically.</p>
      <h3>What Gets Logged</h3>
      <p>The system automatically tracks:</p>
      <ul className="mb-6">
        <li><strong>User Activities</strong> – Logins, logouts, failed login attempts, password changes</li>
        <li><strong>Visitor Records</strong> – Check-ins, check-outs, approvals, rejections</li>
        <li><strong>Financial Actions</strong> – Invoices created, payments recorded, refunds processed</li>
        <li><strong>Administrative Changes</strong> – Resident additions/removals, unit ownership transfers, staff changes</li>
        <li><strong>Security Events</strong> – Blacklist updates, vehicle registrations, guard device registrations</li>
        <li><strong>Configuration Changes</strong> – Society settings, billing configuration, notification preferences</li>
      </ul>

      <h3>Viewing Activity Logs</h3>
      <ol className="steps list-decimal pl-6 mb-6">
        <li>Go to <strong>Analytics</strong> in the sidebar</li>
        <li>Click <strong>View All Activity</strong> at the bottom of the Recent Activity section</li>
        <li>Use filters to narrow down:
          <ul className="list-disc pl-6">
            <li><strong>Search</strong> – Find specific activities by keyword</li>
            <li><strong>Action Type</strong> – Filter by create, update, delete, login, etc.</li>
            <li><strong>Severity</strong> – Info, warning, or critical events</li>
            <li><strong>Date Range</strong> – Specify start and end dates</li>
          </ul>
        </li>
      </ol>
      <div className="bg-blue-50 border border-blue-200 rounded p-4 mb-6">
        <div className="font-semibold mb-2 flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
          Access Control
        </div>
        <p>Audit logs are only visible to Society Admins and Committee Members with the <strong>audit.logs_view</strong> permission. Regular residents cannot access these logs.</p>
      </div>

      <h3>Exporting Audit Logs</h3>
      <ol className="steps list-decimal pl-6 mb-6">
        <li>Navigate to the Activity Log page</li>
        <li>Apply any filters you need (date range, action type, etc.)</li>
        <li>Click the <strong>Export</strong> button in the top right</li>
        <li>Download as CSV for spreadsheet analysis</li>
      </ol>

      <h3>Security Events</h3>
      <p>Pay special attention to these events:</p>
      <ul className="mb-6">
        <li><strong>Failed login attempts</strong> – May indicate unauthorized access attempts</li>
        <li><strong>Permission denied events</strong> – Users trying to access restricted features</li>
        <li><strong>Blacklist changes</strong> – Track who was added or removed from the blacklist</li>
        <li><strong>Admin role changes</strong> – Monitor privilege escalations</li>
      </ul>
      <div className="bg-yellow-50 border border-yellow-200 rounded p-4 mb-6">
        <div className="font-semibold mb-2 flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          Tamper Protection
        </div>
        <p>Audit logs cannot be edited or deleted through the application. Each log entry includes a cryptographic checksum to detect any unauthorized modifications.</p>
      </div>

      <h2 id="best-practices">Best Practices</h2>
      <ul className="mb-6">
        <li><strong>Keep resident data updated</strong> – Remove moved-out tenants promptly</li>
        <li><strong>Review analytics weekly</strong> – Identify security patterns</li>
        <li><strong>Review audit logs regularly</strong> – Check for suspicious activities and failed logins</li>
        <li><strong>Follow up on overstaying visitors</strong> – Check daily reports</li>
        <li><strong>Respond to complaints quickly</strong> – Aim for first response within 24 hours</li>
        <li><strong>Post regular notices</strong> – Keep residents informed about society matters</li>
        <li><strong>Export audit logs monthly</strong> – Keep offline records for compliance</li>
      </ul>
    </main>
    </DocsLayout>
  );
}
