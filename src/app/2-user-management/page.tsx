import React from 'react';
import DocsLayout from '../DocsLayout';

export default function UserManagement() {
  return (
    <DocsLayout>
      <main className="prose mx-auto py-8">
        <nav className="mb-4 text-sm text-gray-500 flex items-center gap-2">
          <a href="/" className="text-blue-600 hover:underline">Docs</a>
          <span>›</span>
          <span>User Management</span>
        </nav>

        <div className="bg-blue-50 border border-blue-200 rounded p-6 mb-6">
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
        <p><strong>Via API:</strong></p>
        <div className="bg-gray-100 border border-gray-200 rounded p-4 mb-4">
          <div className="text-xs font-mono text-gray-600 mb-1">POST /api/admin/users</div>
          <pre className="overflow-x-auto text-xs bg-gray-50 p-2 rounded"><code>{`POST /api/admin/users
Authorization: Bearer <admin_token>
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "SecurePassword123",
  "role": "society_admin",
  "society_id": 1
}`}</code></pre>
        </div>
        <p><strong>Via Web Dashboard:</strong></p>
        <ol className="steps list-decimal pl-6 mb-6">
          <li>Navigate to <strong>Settings</strong> → <strong>User Management</strong></li>
          <li>Click <strong>Add New User</strong></li>
          <li>Fill in user details</li>
          <li>Assign appropriate role</li>
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
        <div className="bg-gray-100 border border-gray-200 rounded p-4 mb-4">
          <div className="text-xs font-mono text-gray-600 mb-1">{'POST /api/v1/users/{user_id}/roles'}</div>
          <pre className="overflow-x-auto text-xs bg-gray-50 p-2 rounded"><code>{`POST /api/v1/users/{user_id}/roles
Authorization: Bearer <token>
Content-Type: application/json

{
  "role_template": "treasurer",
  "society_id": "uuid"
}`}</code></pre>
        </div>

        <h4>Check User Capabilities</h4>
        <div className="bg-gray-100 border border-gray-200 rounded p-4 mb-4">
          <div className="text-xs font-mono text-gray-600 mb-1">GET /api/v1/me/capabilities</div>
          <pre className="overflow-x-auto text-xs bg-gray-50 p-2 rounded"><code>{`GET /api/v1/me/capabilities
Authorization: Bearer <token>`}</code></pre>
        </div>
        <p><strong>Response:</strong></p>
        <div className="bg-gray-100 border border-gray-200 rounded p-4 mb-4">
          <div className="text-xs font-mono text-gray-600 mb-1">JSON</div>
          <pre className="overflow-x-auto text-xs bg-gray-50 p-2 rounded"><code>{`{
  "success": true,
  "data": {
    "role": "treasurer",
    "level": 70,
    "capabilities": [
      "finance.view",
      "finance.approve",
      "finance.budget_manage",
      "finance.collections_view",
      "expenses.view",
      "expenses.approve"
    ]
  }
}`}</code></pre>
        </div>

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
              <tr><td className="border px-2 py-1"><code>name</code></td><td className="border px-2 py-1">string</td><td className="border px-2 py-1">Yes</td><td className="border px-2 py-1">Full name of resident</td></tr>
              <tr><td className="border px-2 py-1"><code>email</code></td><td className="border px-2 py-1">string</td><td className="border px-2 py-1">Yes</td><td className="border px-2 py-1">Email address (must be unique)</td></tr>
              <tr><td className="border px-2 py-1"><code>phone</code></td><td className="border px-2 py-1">string</td><td className="border px-2 py-1">Yes</td><td className="border px-2 py-1">Contact number</td></tr>
              <tr><td className="border px-2 py-1"><code>type</code></td><td className="border px-2 py-1">enum</td><td className="border px-2 py-1">Yes</td><td className="border px-2 py-1"><code>owner</code>, <code>tenant</code>, <code>family_member</code></td></tr>
              <tr><td className="border px-2 py-1"><code>is_primary</code></td><td className="border px-2 py-1">boolean</td><td className="border px-2 py-1">Yes</td><td className="border px-2 py-1">Primary resident for the flat</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Importing Residents via CSV</h3>
        <p><strong>CSV Format:</strong></p>
        <div className="bg-gray-100 border border-gray-200 rounded p-4 mb-4">
          <div className="text-xs font-mono text-gray-600 mb-1">CSV</div>
          <pre className="overflow-x-auto text-xs bg-gray-50 p-2 rounded"><code>{`flat_number,name,email,phone,type,is_primary
A-101,John Doe,john@example.com,+91-9876543210,owner,true
A-102,Jane Smith,jane@example.com,+91-9876543211,tenant,true`}</code></pre>
        </div>

        <h3>Exporting User Data</h3>
        <div className="bg-gray-100 border border-gray-200 rounded p-4 mb-4">
          <div className="text-xs font-mono text-gray-600 mb-1">{'GET /api/societies/{society_id}/residents/export?format=csv'}</div>
          <pre className="overflow-x-auto text-xs bg-gray-50 p-2 rounded"><code>{`GET /api/societies/{society_id}/residents/export?format=csv
Authorization: Bearer <token>`}</code></pre>
        </div>

        <h2>Domestic Help Management</h2>
        <h3>Registering Domestic Help</h3>
        <p>Domestic helpers are linked to specific flats:</p>
        <div className="bg-gray-100 border border-gray-200 rounded p-4 mb-4">
          <div className="text-xs font-mono text-gray-600 mb-1">{'POST /api/flats/{flat_id}/domestic-help'}</div>
          <pre className="overflow-x-auto text-xs bg-gray-50 p-2 rounded"><code>{`POST /api/flats/{flat_id}/domestic-help
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Helper Name",
  "phone": "+91-9876543214",
  "service_type": "maid"
}`}</code></pre>
        </div>
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
        <p><strong>Request Password Reset:</strong></p>
        <div className="bg-gray-100 border border-gray-200 rounded p-4 mb-4">
          <div className="text-xs font-mono text-gray-600 mb-1">POST /api/auth/forgot-password</div>
          <pre className="overflow-x-auto text-xs bg-gray-50 p-2 rounded"><code>{`POST /api/auth/forgot-password
Content-Type: application/json

{
  "email": "user@example.com"
}`}</code></pre>
        </div>
        <p><strong>Reset Password with Token:</strong></p>
        <div className="bg-gray-100 border border-gray-200 rounded p-4 mb-4">
          <div className="text-xs font-mono text-gray-600 mb-1">POST /api/auth/reset-password</div>
          <pre className="overflow-x-auto text-xs bg-gray-50 p-2 rounded"><code>{`POST /api/auth/reset-password
Content-Type: application/json

{
  "email": "user@example.com",
  "token": "reset_token_from_email",
  "password": "NewSecurePassword123",
  "password_confirmation": "NewSecurePassword123"
}`}</code></pre>
        </div>

        <h3>Changing Password</h3>
        <div className="bg-gray-100 border border-gray-200 rounded p-4 mb-4">
          <div className="text-xs font-mono text-gray-600 mb-1">POST /api/auth/change-password</div>
          <pre className="overflow-x-auto text-xs bg-gray-50 p-2 rounded"><code>{`POST /api/auth/change-password
Authorization: Bearer <token>
Content-Type: application/json

{
  "current_password": "OldPassword123",
  "password": "NewPassword123",
  "password_confirmation": "NewPassword123"
}`}</code></pre>
        </div>

        <h3>Two-Factor Authentication (2FA)</h3>
        <p>GateFlux supports TOTP-based Two-Factor Authentication for enhanced account security.</p>
        <h4>Enabling 2FA</h4>
        <ol className="steps list-decimal pl-6 mb-6">
          <li>Navigate to <strong>Profile → Security</strong> or <strong>/security/two-factor</strong></li>
          <li>Click "Enable Two-Factor Authentication"</li>
          <li>Scan the QR code with your authenticator app</li>
          <li>Enter the generated code to verify</li>
        </ol>

        <h2>Best Practices</h2>
        <div className="bg-blue-50 border border-blue-200 rounded p-4 mb-6">
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
