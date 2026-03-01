import Link from 'next/link';
import DocsLayout from '../DocsLayout';

export default function StaffVendors() {
  return (
    <DocsLayout>
      <main className="max-w-3xl mx-auto py-8 px-4">
        <nav className="mb-4 text-sm text-gray-500 flex items-center gap-2">
          <a href="/" className="text-primary-600 hover:underline">Help Center</a>
          <span>›</span>
          <span>Staff & Vendors</span>
        </nav>

        <div className="bg-gradient-to-br from-primary-900 via-primary-900 to-accent-500 text-white rounded-2xl p-6 mb-8 border-l-4 border-accent-400">
          <h1 className="text-3xl font-bold mb-2">Staff & Vendors</h1>
          <p className="opacity-90">Manage society staff, track attendance, register vendors, and assign work orders.</p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-3">Overview</h2>
        <ul className="list-disc ml-6 mb-8">
          <li><strong>Staff Management</strong> — Add staff, manage roles, and track attendance</li>
          <li><strong>Vendor Management</strong> — Register vendors, manage contracts, track performance</li>
          <li><strong>Work Orders</strong> — Create and assign tasks to staff or vendors</li>
        </ul>

        <h2 className="text-xl font-bold mt-10 mb-3">Staff Management</h2>

        <h3 className="text-lg font-semibold mt-6 mb-2">Adding a Staff Member</h3>
        <ol className="list-decimal ml-6 mb-6">
          <li>Navigate to <strong>Staff</strong> in the admin panel</li>
          <li>Click <strong>Add Staff</strong></li>
          <li>Enter:
            <ul className="list-disc ml-6 mt-2">
              <li><strong>Name</strong>, <strong>Phone</strong>, <strong>Email</strong></li>
              <li><strong>Role</strong> — Guard, cleaner, electrician, plumber, gardener, etc.</li>
              <li><strong>Hire Date</strong></li>
            </ul>
          </li>
          <li>Click <strong>Save</strong></li>
        </ol>
        <p className="mb-6">The staff member's profile is created and they can be assigned to maintenance requests and work orders.</p>

        <h3 className="text-lg font-semibold mt-6 mb-2">Attendance Tracking</h3>
        <p className="mb-4">GateFlux tracks staff check-in and check-out times automatically when staff members use the gate. Admins can view attendance records per staff member from their profile page:</p>
        <ol className="list-decimal ml-6 mb-6">
          <li>Open <strong>Staff</strong> from the admin menu</li>
          <li>Click on a staff member's name</li>
          <li>View the <strong>Attendance</strong> tab showing daily check-in/out records</li>
        </ol>

        <h3 className="text-lg font-semibold mt-6 mb-2">Staff Roles</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border text-sm">
            <thead className="bg-primary-900 text-white">
              <tr>
                <th className="px-4 py-2">Role</th>
                <th className="px-4 py-2">Typical Responsibilities</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-primary-50">
                <td className="px-4 py-2">Security Guard</td>
                <td className="px-4 py-2">Gate management, visitor check-in/out</td>
              </tr>
              <tr className="even:bg-primary-50">
                <td className="px-4 py-2">Cleaner</td>
                <td className="px-4 py-2">Common area cleaning</td>
              </tr>
              <tr className="even:bg-primary-50">
                <td className="px-4 py-2">Electrician</td>
                <td className="px-4 py-2">Electrical maintenance and repairs</td>
              </tr>
              <tr className="even:bg-primary-50">
                <td className="px-4 py-2">Plumber</td>
                <td className="px-4 py-2">Plumbing maintenance and repairs</td>
              </tr>
              <tr className="even:bg-primary-50">
                <td className="px-4 py-2">Gardener</td>
                <td className="px-4 py-2">Landscaping and garden upkeep</td>
              </tr>
              <tr className="even:bg-primary-50">
                <td className="px-4 py-2">Facility Manager</td>
                <td className="px-4 py-2">Oversees all facility operations</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold mt-10 mb-3">Vendor Management</h2>
        <p className="mb-4">Vendors are external companies and contractors hired for services like pest control, elevator maintenance, or CCTV installation.</p>

        <h3 className="text-lg font-semibold mt-6 mb-2">Adding a Vendor</h3>
        <ol className="list-decimal ml-6 mb-6">
          <li>Navigate to <strong>Vendors</strong> in the admin panel</li>
          <li>Click <strong>Add Vendor</strong></li>
          <li>Enter:
            <ul className="list-disc ml-6 mt-2">
              <li><strong>Company Name</strong> and <strong>Contact Person</strong></li>
              <li><strong>Phone</strong> and <strong>Email</strong></li>
              <li><strong>Category</strong> — Plumbing, electrical, HVAC, security, housekeeping, landscaping, pest control, elevator</li>
              <li><strong>Address</strong>, <strong>GST Number</strong>, <strong>PAN Number</strong></li>
            </ul>
          </li>
          <li>Click <strong>Save</strong></li>
        </ol>

        <h3 className="text-lg font-semibold mt-6 mb-2">Vendor Statuses</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border text-sm">
            <thead className="bg-primary-900 text-white">
              <tr>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-primary-50">
                <td className="px-4 py-2 font-semibold text-accent-700">Pending</td>
                <td className="px-4 py-2">Vendor registered, under review</td>
              </tr>
              <tr className="even:bg-primary-50">
                <td className="px-4 py-2 font-semibold text-green-700">Active</td>
                <td className="px-4 py-2">Approved vendor, can be assigned work</td>
              </tr>
              <tr className="even:bg-primary-50">
                <td className="px-4 py-2 font-semibold text-neutral-500">Inactive</td>
                <td className="px-4 py-2">Vendor not currently used</td>
              </tr>
              <tr className="even:bg-primary-50">
                <td className="px-4 py-2 font-semibold text-red-700">Blacklisted</td>
                <td className="px-4 py-2">Vendor banned from future work</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-2">Vendor Ratings & Performance</h3>
        <p className="mb-6">Each vendor profile shows their star rating, total jobs completed, active contracts, and contract value. Use this data to evaluate vendor performance and make informed renewal decisions.</p>

        <h2 className="text-xl font-bold mt-10 mb-3">Work Orders</h2>
        <p className="mb-4">Work orders are tasks assigned to staff or vendors for specific jobs — from fixing a light in the lobby to servicing the elevator.</p>

        <h3 className="text-lg font-semibold mt-6 mb-2">Creating a Work Order</h3>
        <ol className="list-decimal ml-6 mb-6">
          <li>Navigate to <strong>Work Orders</strong> in the admin panel</li>
          <li>Click <strong>New Work Order</strong></li>
          <li>Fill in:
            <ul className="list-disc ml-6 mt-2">
              <li><strong>Title</strong> and <strong>Description</strong> of the task</li>
              <li><strong>Priority</strong> — High, medium, or low</li>
              <li><strong>Assign To</strong> — Select a staff member or vendor</li>
              <li><strong>Due Date</strong> — When the task should be completed</li>
            </ul>
          </li>
          <li>Click <strong>Submit</strong></li>
        </ol>

        <h3 className="text-lg font-semibold mt-6 mb-2">Tracking Work Orders</h3>
        <p className="mb-4">Use the tabs to filter work orders by status: <strong>All / Pending / In Progress / Completed</strong>. Click any work order to see its full details, add comments, or update the status.</p>

        <h3 className="text-lg font-semibold mt-6 mb-2">Work Order Statuses</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border text-sm">
            <thead className="bg-primary-900 text-white">
              <tr>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-primary-50">
                <td className="px-4 py-2 font-semibold text-primary-700">Pending</td>
                <td className="px-4 py-2">Created, not yet started</td>
              </tr>
              <tr className="even:bg-primary-50">
                <td className="px-4 py-2 font-semibold text-accent-700">In Progress</td>
                <td className="px-4 py-2">Work has begun</td>
              </tr>
              <tr className="even:bg-primary-50">
                <td className="px-4 py-2 font-semibold text-green-700">Completed</td>
                <td className="px-4 py-2">Task finished and marked complete</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-between mt-12 gap-4">
          <Link href="/14-amenities" className="bg-white border rounded px-4 py-2 hover:bg-primary-50 transition">← Amenities</Link>
          <Link href="/7-faq" className="bg-white border rounded px-4 py-2 hover:bg-primary-50 transition">FAQ →</Link>
        </div>
      </main>
    </DocsLayout>
  );
}
