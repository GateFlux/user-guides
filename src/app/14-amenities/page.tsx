import Link from 'next/link';
import DocsLayout from '../DocsLayout';

export default function Amenities() {
  return (
    <DocsLayout>
      <main className="max-w-3xl mx-auto py-8 px-4">
        <nav className="mb-4 text-sm text-gray-500 flex items-center gap-2">
          <a href="/" className="text-primary-600 hover:underline">Help Center</a>
          <span>›</span>
          <span>Amenities & Bookings</span>
        </nav>

        <div className="bg-gradient-to-br from-primary-900 via-primary-900 to-accent-500 text-white rounded-2xl p-6 mb-8 border-l-4 border-accent-400">
          <h1 className="text-3xl font-bold mb-2">Amenities & Bookings</h1>
          <p className="opacity-90">Book society amenities like the gym, swimming pool, clubhouse, and more — all from the app.</p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-3">Overview</h2>
        <ul className="list-disc ml-6 mb-8">
          <li><strong>Browse Amenities</strong> — See all available facilities and their details</li>
          <li><strong>Book a Slot</strong> — Reserve a time slot for gym, pool, clubhouse, etc.</li>
          <li><strong>Approval Workflow</strong> — Some amenities require admin approval before confirming</li>
          <li><strong>Booking History</strong> — View your upcoming and past bookings</li>
        </ul>

        <h2 className="text-xl font-bold mt-10 mb-3">Booking an Amenity (Residents)</h2>
        <ol className="list-decimal ml-6 mb-6">
          <li>Navigate to <strong>Amenities</strong> in the app</li>
          <li>Browse the list of available facilities</li>
          <li>Tap the amenity you want to book</li>
          <li>View the <strong>availability calendar</strong> to find an open slot</li>
          <li>Select your preferred date and time</li>
          <li>Confirm the booking</li>
        </ol>
        <p className="mb-4">You will receive a confirmation notification once your booking is approved. Some amenities are auto-approved; others require admin confirmation.</p>

        <h2 className="text-xl font-bold mt-10 mb-3">Booking Statuses</h2>
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
                <td className="px-4 py-2">Booking submitted, awaiting admin approval</td>
              </tr>
              <tr className="even:bg-primary-50">
                <td className="px-4 py-2 font-semibold text-green-700">Approved</td>
                <td className="px-4 py-2">Booking confirmed — you're good to go</td>
              </tr>
              <tr className="even:bg-primary-50">
                <td className="px-4 py-2 font-semibold text-red-700">Rejected</td>
                <td className="px-4 py-2">Booking declined — choose a different slot</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold mt-10 mb-3">Managing Amenities (Admins)</h2>

        <h3 className="text-lg font-semibold mt-6 mb-2">Approving or Rejecting Bookings</h3>
        <ol className="list-decimal ml-6 mb-6">
          <li>Go to <strong>Amenities</strong> in the admin panel</li>
          <li>Open the <strong>Bookings</strong> view</li>
          <li>Review pending booking requests</li>
          <li>Click <strong>Approve</strong> or <strong>Reject</strong> for each booking</li>
          <li>The resident is notified automatically</li>
        </ol>

        <h3 className="text-lg font-semibold mt-6 mb-2">Configuring an Amenity</h3>
        <ol className="list-decimal ml-6 mb-6">
          <li>Go to <strong>Amenities</strong> → <strong>Manage Amenities</strong></li>
          <li>Select an amenity or click <strong>Add Amenity</strong></li>
          <li>Set:
            <ul className="list-disc ml-6 mt-2">
              <li><strong>Name</strong> — e.g., "Swimming Pool", "Gym", "Party Hall"</li>
              <li><strong>Type</strong> — gym, pool, garden, parking, clubhouse, etc.</li>
              <li><strong>Availability</strong> — Operating hours and days</li>
              <li><strong>Pricing</strong> — Per-hour or per-session charges (if applicable)</li>
              <li><strong>Approval Required</strong> — Toggle on/off for auto-approval</li>
              <li><strong>Capacity</strong> — Maximum number of simultaneous bookings</li>
            </ul>
          </li>
          <li>Save changes</li>
        </ol>

        <div className="bg-primary-50 border border-primary-200 rounded p-4 mb-8">
          <strong>Tip:</strong> Enable <strong>Auto-approval</strong> for amenities like the gym (low risk) and require manual approval for the clubhouse or party hall (higher demand, needs coordination).
        </div>

        <div className="flex justify-between mt-12 gap-4">
          <Link href="/13-notices" className="bg-white border rounded px-4 py-2 hover:bg-primary-50 transition">← Notices</Link>
          <Link href="/15-staff-vendors" className="bg-white border rounded px-4 py-2 hover:bg-primary-50 transition">Staff & Vendors →</Link>
        </div>
      </main>
    </DocsLayout>
  );
}
