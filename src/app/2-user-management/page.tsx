import React from 'react';
import DocsLayout from '../DocsLayout';

export default function UserManagement() {
  return (
    <DocsLayout>
      <main className="prose mx-auto py-8">
        <nav className="mb-4 text-sm text-gray-500 flex items-center gap-2">
          <a href="/" className="text-primary-600 hover:underline">Docs</a>
          <span>›</span>
          <span>User Management</span>
        </nav>

        <div className="bg-primary-50 border border-primary-200 rounded p-6 mb-6">
          <h1 className="text-2xl font-bold mb-2">User Management Guide</h1>
          <p>Learn how to manage users, roles, permissions, and resident profiles in GateFlux.</p>
        </div>

        <h2>Overview</h2>
        <p>This guide covers user management in GateFlux, including creating users, managing roles and permissions, and handling resident profiles.</p>

        <h2>User Types</h2>
        <p>GateFlux manages several types of users:</p>
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="feature-card p-4 bg-white border rounded shadow">
            <h4 className="flex items-center gap-2 font-semibold">System Users</h4>
            <p>Super Admins, Society Admins, Committee Members with admin panel access.</p>
          </div>
          <div className="feature-card p-4 bg-white border rounded shadow">
            <h4 className="flex items-center gap-2 font-semibold">Residents</h4>
            <p>Flat Owners, Tenants, and Family Members residing in the society.</p>
          </div>
          <div className="feature-card p-4 bg-white border rounded shadow">
            <h4 className="flex items-center gap-2 font-semibold">Operational Users</h4>
            <p>Security Guards and Society Staff managing daily operations.</p>
          </div>
        </div>

        <h2>Managing System Users</h2>

        <h3>Creating a New Admin User</h3>
        <ol className="steps list-decimal pl-6 mb-6">
          <li>Navigate to <strong>Settings</strong> → <strong>User Management</strong></li>
          <li>Click <strong>Add New User</strong></li>
          <li>Fill in user details (name, email, phone)</li>
          <li>Assign the appropriate role</li>
          <li>Click <strong>Save</strong></li>
        </ol>

        <h3>User Roles and Permissions</h3>
        <p>GateFlux implements a comprehensive Role-Based Access Control (RBAC) system with 12 predefined role templates and 120+ granular capabilities.</p>

        <h4>Role Templates</h4>
        <div className="overflow-x-auto mb-8">
          <table className="table-auto border-collapse w-full text-xs">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-2 py-1">Role</th>
                <th className="border px-2 py-1">Level</th>
                <th className="border px-2 py-1">Scope</th>
                <th className="border px-2 py-1">Key Capabilities</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border px-2 py-1 font-semibold">Super Admin</td><td className="border px-2 py-1">100</td><td className="border px-2 py-1">Platform</td><td className="border px-2 py-1">Full system access, manage all societies</td></tr>
              <tr><td className="border px-2 py-1 font-semibold">Society Admin</td><td className="border px-2 py-1">90</td><td className="border px-2 py-1">Society</td><td className="border px-2 py-1">Full society access, manage roles</td></tr>
              <tr><td className="border px-2 py-1 font-semibold">President</td><td className="border px-2 py-1">80</td><td className="border px-2 py-1">Society</td><td className="border px-2 py-1">Governance, approvals, executive dashboard</td></tr>
              <tr><td className="border px-2 py-1 font-semibold">Vice President</td><td className="border px-2 py-1">75</td><td className="border px-2 py-1">Society</td><td className="border px-2 py-1">Governance, complaints, reporting</td></tr>
              <tr><td className="border px-2 py-1 font-semibold">Treasurer</td><td className="border px-2 py-1">70</td><td className="border px-2 py-1">Society</td><td className="border px-2 py-1">Finance, expense approval, collections</td></tr>
              <tr><td className="border px-2 py-1 font-semibold">Secretary</td><td className="border px-2 py-1">65</td><td className="border px-2 py-1">Society</td><td className="border px-2 py-1">AGM management, notices, helpdesk</td></tr>
              <tr><td className="border px-2 py-1 font-semibold">Joint Secretary</td><td className="border px-2 py-1">60</td><td className="border px-2 py-1">Society</td><td className="border px-2 py-1">Helpdesk, complaints, notices</td></tr>
              <tr><td className="border px-2 py-1 font-semibold">Committee Member</td><td className="border px-2 py-1">50</td><td className="border px-2 py-1">Society</td><td className="border px-2 py-1">Reports, complaints, governance voting</td></tr>
              <tr><td className="border px-2 py-1 font-semibold">Owner</td><td className="border px-2 py-1">30</td><td className="border px-2 py-1">Flat</td><td className="border px-2 py-1">Visitors, dues, governance participation</td></tr>
              <tr><td className="border px-2 py-1 font-semibold">Tenant</td><td className="border px-2 py-1">20</td><td className="border px-2 py-1">Flat</td><td className="border px-2 py-1">Visitors, dues, complaints (no governance)</td></tr>
              <tr><td className="border px-2 py-1 font-semibold">Security Guard</td><td className="border px-2 py-1">15</td><td className="border px-2 py-1">Gate</td><td className="border px-2 py-1">Gate operations, visitor management</td></tr>
              <tr><td className="border px-2 py-1 font-semibold">Facility Staff</td><td className="border px-2 py-1">10</td><td className="border px-2 py-1">Facility</td><td className="border px-2 py-1">Amenity bookings, common area access</td></tr>
            </tbody>
          </table>
        </div>

        <h4>Capability Modules</h4>
        <p>Capabilities are organized into modules:</p>
        <div className="overflow-x-auto mb-8">
          <table className="table-auto border-collapse w-full text-xs">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-2 py-1">Module</th>
                <th className="border px-2 py-1">Example Capabilities</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border px-2 py-1 font-semibold">visitors</td><td className="border px-2 py-1"><code>visitors.create</code>, <code>visitors.checkin</code>, <code>visitors.approve</code></td></tr>
              <tr><td className="border px-2 py-1 font-semibold">finance</td><td className="border px-2 py-1"><code>finance.view</code>, <code>finance.approve</code>, <code>finance.budget_manage</code></td></tr>
              <tr><td className="border px-2 py-1 font-semibold">governance</td><td className="border px-2 py-1"><code>governance.vote</code>, <code>governance.agm_manage</code>, <code>governance.elections_manage</code></td></tr>
              <tr><td className="border px-2 py-1 font-semibold">helpdesk</td><td className="border px-2 py-1"><code>helpdesk.create</code>, <code>helpdesk.assign</code>, <code>helpdesk.sla_configure</code></td></tr>
              <tr><td className="border px-2 py-1 font-semibold">users</td><td className="border px-2 py-1"><code>users.view</code>, <code>users.create</code>, <code>users.roles_manage</code></td></tr>
              <tr><td className="border px-2 py-1 font-semibold">settings</td><td className="border px-2 py-1"><code>settings.view</code>, <code>settings.society_manage</code></td></tr>
            </tbody>
          </table>
        </div>

        <h4>Assigning Roles</h4>
        <p>To assign a role to a user, navigate to <strong>Settings → User Management</strong>, open the user's profile, and select a role from the <strong>Role</strong> dropdown. Changes take effect immediately.</p>

        <h4>Owner vs Tenant Permissions</h4>
        <div className="overflow-x-auto mb-8">
          <table className="table-auto border-collapse w-full text-xs">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-2 py-1">Feature</th>
                <th className="border px-2 py-1">Owner</th>
                <th className="border px-2 py-1">Tenant</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border px-2 py-1">Pre-approve visitors</td><td className="border px-2 py-1">Yes</td><td className="border px-2 py-1">Yes</td></tr>
              <tr><td className="border px-2 py-1">View/pay dues</td><td className="border px-2 py-1">Yes</td><td className="border px-2 py-1">Yes</td></tr>
              <tr><td className="border px-2 py-1">File complaints</td><td className="border px-2 py-1">Yes</td><td className="border px-2 py-1">Yes</td></tr>
              <tr><td className="border px-2 py-1">Vote in AGM</td><td className="border px-2 py-1">Yes</td><td className="border px-2 py-1">No</td></tr>
              <tr><td className="border px-2 py-1">Stand for election</td><td className="border px-2 py-1">Yes</td><td className="border px-2 py-1">No</td></tr>
              <tr><td className="border px-2 py-1">Nominate candidates</td><td className="border px-2 py-1">Yes</td><td className="border px-2 py-1">No</td></tr>
              <tr><td className="border px-2 py-1">View financials</td><td className="border px-2 py-1">Summary only</td><td className="border px-2 py-1">No</td></tr>
            </tbody>
          </table>
        </div>

        <h2>Resident Profiles</h2>
        <h3>Resident Profile Fields</h3>
        <div className="overflow-x-auto mb-8">
          <table className="table-auto border-collapse w-full text-xs">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-2 py-1">Field</th>
                <th className="border px-2 py-1">Type</th>
                <th className="border px-2 py-1">Required</th>
                <th className="border px-2 py-1">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border px-2 py-1">Name</td><td className="border px-2 py-1">Text</td><td className="border px-2 py-1">Yes</td><td className="border px-2 py-1">Full name of resident</td></tr>
              <tr><td className="border px-2 py-1">Email</td><td className="border px-2 py-1">Email</td><td className="border px-2 py-1">Yes</td><td className="border px-2 py-1">Email address (must be unique)</td></tr>
              <tr><td className="border px-2 py-1">Phone</td><td className="border px-2 py-1">Phone</td><td className="border px-2 py-1">Yes</td><td className="border px-2 py-1">Contact number</td></tr>
              <tr><td className="border px-2 py-1">Type</td><td className="border px-2 py-1">Select</td><td className="border px-2 py-1">Yes</td><td className="border px-2 py-1">Owner, Tenant, or Family Member</td></tr>
              <tr><td className="border px-2 py-1">Primary Resident</td><td className="border px-2 py-1">Toggle</td><td className="border px-2 py-1">Yes</td><td className="border px-2 py-1">Primary contact for the flat</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Importing Residents via CSV</h3>
        <p>Admins can bulk-import residents by uploading a CSV file from <strong>Residents → Import</strong>. The file must follow this format:</p>
        <div className="bg-gray-100 border border-gray-200 rounded p-4 mb-4">
          <div className="text-xs font-mono text-gray-600 mb-1">CSV Format</div>
          <pre className="overflow-x-auto text-xs bg-gray-50 p-2 rounded"><code>{`flat_number,name,email,phone,type,is_primary
A-101,John Doe,john@example.com,+91-9876543210,owner,true
A-102,Jane Smith,jane@example.com,+91-9876543211,tenant,true`}</code></pre>
        </div>

        <h3>Exporting User Data</h3>
        <p>To export resident data, navigate to <strong>Residents → Export</strong> and choose the CSV format. The download will include all resident profiles for your society.</p>

        <h2>Domestic Help Management</h2>
        <h3>Registering Domestic Help</h3>
        <p>Residents can register domestic helpers linked to their flat from <strong>My Flat → Domestic Help → Add Helper</strong>. Enter the helper's name, phone number, and service type. Once registered, the helper will appear in the security guard's check-in list for fast entry.</p>

        <h4>Service Types</h4>
        <div className="overflow-x-auto mb-8">
          <table className="table-auto border-collapse w-full text-xs">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-2 py-1">Type</th>
                <th className="border px-2 py-1">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border px-2 py-1"><code>maid</code></td><td className="border px-2 py-1">Cleaning, cooking</td></tr>
              <tr><td className="border px-2 py-1"><code>driver</code></td><td className="border px-2 py-1">Vehicle driving</td></tr>
              <tr><td className="border px-2 py-1"><code>cook</code></td><td className="border px-2 py-1">Cooking only</td></tr>
              <tr><td className="border px-2 py-1"><code>gardener</code></td><td className="border px-2 py-1">Gardening</td></tr>
              <tr><td className="border px-2 py-1"><code>nurse</code></td><td className="border px-2 py-1">Medical care</td></tr>
              <tr><td className="border px-2 py-1"><code>tutor</code></td><td className="border px-2 py-1">Education</td></tr>
              <tr><td className="border px-2 py-1"><code>other</code></td><td className="border px-2 py-1">Other services</td></tr>
            </tbody>
          </table>
        </div>

        <h2>User Authentication</h2>
        <h3>Password Reset</h3>
        <p>To reset your password, click <strong>Forgot Password</strong> on the login page and enter your registered email address. You will receive a password reset link via email. Click the link and enter your new password to complete the reset.</p>

        <h3>Changing Password</h3>
        <p>To change your password while logged in, navigate to <strong>Profile → Security → Change Password</strong>. Enter your current password and then your new password twice to confirm.</p>

        <h3>Two-Factor Authentication (2FA)</h3>
        <p>GateFlux supports TOTP-based Two-Factor Authentication for enhanced account security.</p>
        <h4>Enabling 2FA</h4>
        <ol className="steps list-decimal pl-6 mb-6">
          <li>Navigate to <strong>Profile → Security</strong></li>
          <li>Click <strong>Enable Two-Factor Authentication</strong></li>
          <li>Scan the QR code with your authenticator app (Google Authenticator, Authy, etc.)</li>
          <li>Enter the generated 6-digit code to verify and activate 2FA</li>
        </ol>

        <h2>Best Practices</h2>
        <div className="bg-primary-50 border border-primary-200 rounded p-4 mb-6">
          <div className="font-semibold mb-2 flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            Security Best Practices
          </div>
          <ul className="list-disc pl-6">
            <li><strong>Enable Two-Factor Authentication</strong> - Highly recommended for all admin users</li>
            <li><strong>Use strong passwords</strong> - Minimum 8 characters with mixed case, numbers, and symbols</li>
            <li><strong>Regular audits</strong> - Review user access quarterly</li>
            <li><strong>Immediate deactivation</strong> - Disable accounts for moved-out residents</li>
            <li><strong>Verify contact information</strong> - Ensure phone numbers and emails are current</li>
            <li><strong>Photo verification</strong> - Maintain updated photos for residents and staff</li>
          </ul>
        </div>
      </main>
    </DocsLayout>
  );
}
