import DocsLayout from '../DocsLayout';

export default function VisitorManagement() {
  return (
    <DocsLayout>
      <main className="prose mx-auto py-8">
        <nav className="mb-4 text-sm text-gray-500 flex items-center gap-2">
          <a href="/" className="text-primary-600 hover:underline">Help Center</a>
          <span>›</span>
          <span>Visitor Management</span>
        </nav>

        <div className="bg-primary-50 border border-primary-200 rounded p-6 mb-6">
          <h1 className="text-2xl font-bold mb-2">Visitor Management Guide</h1>
          <p>Comprehensive visitor management — pre-approvals, check-ins, QR codes, recurring access, vehicle entry, and real-time tracking.</p>
        </div>

        <h2>Overview</h2>
        <p>GateFlux gives residents full control over who enters their flat, while security guards manage the physical gate. Every visitor is logged, tracked, and accountable.</p>

        <h2>Visitor Types</h2>
        <table className="table-auto border-collapse w-full mb-8">
          <thead>
            <tr className="bg-primary-900 text-white">
              <th className="border px-2 py-1">Type</th>
              <th className="border px-2 py-1">Description</th>
              <th className="border px-2 py-1">Typical Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border px-2 py-1 font-semibold">Guest</td><td className="border px-2 py-1">Personal visitors to residents</td><td className="border px-2 py-1">Hours to days</td></tr>
            <tr className="bg-primary-50"><td className="border px-2 py-1 font-semibold">Delivery</td><td className="border px-2 py-1">E-commerce, food, courier</td><td className="border px-2 py-1">15–30 min</td></tr>
            <tr><td className="border px-2 py-1 font-semibold">Cab</td><td className="border px-2 py-1">Taxi, Uber, Ola</td><td className="border px-2 py-1">5–15 min</td></tr>
            <tr className="bg-primary-50"><td className="border px-2 py-1 font-semibold">Service</td><td className="border px-2 py-1">Plumber, electrician, AC technician</td><td className="border px-2 py-1">1–4 hours</td></tr>
            <tr><td className="border px-2 py-1 font-semibold">Vendor</td><td className="border px-2 py-1">Regular service providers</td><td className="border px-2 py-1">30 min – 2 hours</td></tr>
            <tr className="bg-primary-50"><td className="border px-2 py-1 font-semibold">Emergency</td><td className="border px-2 py-1">Ambulance, fire, police</td><td className="border px-2 py-1">Immediate entry</td></tr>
          </tbody>
        </table>

        <h2 id="pre-approving-a-visitor">Pre-Approving a Visitor</h2>
        <p>Pre-approval lets your guest arrive and enter without a phone call at the gate. They receive a QR code by SMS that the security guard scans for instant check-in.</p>

        <h3>From the Mobile App</h3>
        <ol className="steps list-decimal pl-6 mb-6">
          <li>Open the GateFlux app and tap <strong>Visitors</strong></li>
          <li>Tap <strong>Add Visitor</strong> (the + button)</li>
          <li>Enter visitor details:
            <ul className="list-disc pl-6">
              <li><strong>Name</strong> — Visitor's full name</li>
              <li><strong>Phone</strong> — Visitor's mobile number (they receive the QR via SMS)</li>
              <li><strong>Type</strong> — Guest, Delivery, Service, Cab, etc.</li>
              <li><strong>Visit Date</strong> — Expected arrival date</li>
              <li><strong>Time Window</strong> — Allowed entry window (e.g., 3 PM – 6 PM)</li>
            </ul>
          </li>
          <li>Tap <strong>Create</strong></li>
        </ol>
        <p>Your visitor receives an SMS with the QR code. When they arrive, the guard scans it — no calls needed. You still get a notification when they check in.</p>

        <div className="bg-green-50 border border-green-200 rounded p-4 mb-6">
          <strong>Tip:</strong> Pre-approve deliveries for the full day (9 AM – 8 PM) so delivery partners can enter without you needing to respond each time.
        </div>

        <h2 id="managing-recurring-visitors">Managing Recurring Visitors</h2>
        <p>For domestic helpers, drivers, or regular visitors, set up recurring access so they don't need a new QR code for every visit.</p>

        <h3>Setting Up Recurring Access</h3>
        <ol className="steps list-decimal pl-6 mb-6">
          <li>Go to <strong>Visitors</strong> → <strong>Add Visitor</strong></li>
          <li>Fill in the visitor's details</li>
          <li>Enable the <strong>Recurring Access</strong> toggle</li>
          <li>Set the schedule:
            <ul className="list-disc pl-6">
              <li><strong>Days</strong> — Which days of the week (e.g., Mon–Sat)</li>
              <li><strong>Time Window</strong> — Allowed entry hours (e.g., 7 AM – 10 AM)</li>
              <li><strong>Valid Until</strong> — Optional end date for the access</li>
            </ul>
          </li>
          <li>Tap <strong>Save</strong></li>
        </ol>
        <p>The visitor receives a single QR code that works for every approved visit within the schedule. Revoke access anytime by opening their profile and tapping <strong>Cancel Access</strong>.</p>

        <table className="table-auto border-collapse w-full mb-8 text-sm">
          <thead>
            <tr className="bg-primary-900 text-white">
              <th className="border px-2 py-1">Use Case</th>
              <th className="border px-2 py-1">Suggested Schedule</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border px-2 py-1">Maid / domestic helper</td><td className="border px-2 py-1">Mon–Sat, 7:00–10:00 AM</td></tr>
            <tr className="bg-primary-50"><td className="border px-2 py-1">Driver</td><td className="border px-2 py-1">Mon–Fri, 7:00–9:00 AM & 5:00–8:00 PM</td></tr>
            <tr><td className="border px-2 py-1">Cook</td><td className="border px-2 py-1">Daily, 8:00–10:00 AM & 6:00–8:00 PM</td></tr>
            <tr className="bg-primary-50"><td className="border px-2 py-1">Regular vendor</td><td className="border px-2 py-1">Specific days, business hours</td></tr>
          </tbody>
        </table>

        <h2>Gate Check-In Process</h2>

        <h3>Pre-Approved Visitors — QR Code (Fastest)</h3>
        <ol className="steps list-decimal pl-6 mb-6">
          <li>Visitor shows their QR code at the gate (on phone or printed)</li>
          <li>Security guard taps <strong>Scan QR</strong> and points the camera at it</li>
          <li>The app shows visitor name, flat number, and valid time window</li>
          <li>Guard verifies identity and taps <strong>Check In</strong></li>
          <li>Resident receives a push notification confirming entry</li>
        </ol>

        <h3>Pre-Approved Visitors — Search by Name or Phone</h3>
        <ol className="steps list-decimal pl-6 mb-6">
          <li>Guard taps the <strong>Search</strong> icon</li>
          <li>Enters the visitor's name, phone, or flat number</li>
          <li>Finds the matching entry and taps <strong>Check In</strong></li>
        </ol>

        <h3>Walk-In Visitors (No Pre-Approval)</h3>
        <ol className="steps list-decimal pl-6 mb-6">
          <li>Guard enters visitor details manually (name, phone, flat, type)</li>
          <li>Taps <strong>Request Approval</strong></li>
          <li>Resident receives a push notification with visitor details</li>
          <li>Resident taps <strong>Allow</strong> or <strong>Deny</strong></li>
          <li>If allowed, guard checks them in and resident is notified</li>
        </ol>

        <div className="bg-accent-50 border border-accent-200 rounded p-4 mb-6">
          <strong>Note:</strong> Walk-in approval requests expire after 2 minutes. If the resident doesn't respond, the guard can call them directly using the <strong>Call Resident</strong> button in the app.
        </div>

        <h2>Checking Out Visitors</h2>
        <p>When a visitor leaves, the guard checks them out:</p>
        <ol className="steps list-decimal pl-6 mb-6">
          <li>Guard opens the <strong>Currently Inside</strong> tab</li>
          <li>Finds the visitor by name or flat</li>
          <li>Taps <strong>Check Out</strong></li>
          <li>Resident receives a notification confirming the visitor has left</li>
        </ol>

        <h2>Vehicle Entry</h2>
        <p>When checking in a visitor with a vehicle, the guard can log the registration number. This creates an audit trail and helps in case of any incidents.</p>

        <h3>Registering Your Own Vehicle</h3>
        <ol className="steps list-decimal pl-6 mb-6">
          <li>Go to <strong>Profile</strong> → <strong>My Vehicles</strong></li>
          <li>Tap <strong>Add Vehicle</strong></li>
          <li>Enter the registration number and vehicle type (car, bike, etc.)</li>
          <li>Save — your vehicle is recognized at the gate and logged automatically</li>
        </ol>

        <h2>Visitor History</h2>
        <p>View your complete visitor log from <strong>Visitors</strong> → <strong>History</strong>. The log shows:</p>
        <ul>
          <li>Visitor name, type, and purpose</li>
          <li>Check-in and check-out times with duration</li>
          <li>Which gate was used (for societies with multiple gates)</li>
          <li>Approval method — QR code, manual approval, or walk-in</li>
          <li>Vehicle number if logged</li>
        </ul>
        <p>Filter the history by date range, visitor type, or flat number to find specific records.</p>

        <h2>Overstaying Alerts</h2>
        <p>GateFlux automatically flags visitors who stay beyond expected time:</p>
        <ul>
          <li><strong>Delivery / Cab</strong> — Flagged after 1 hour inside</li>
          <li><strong>Guest / Service</strong> — Flagged after 4 hours inside</li>
        </ul>
        <p>You receive a notification when your visitor is flagged as overstaying. Confirm with the guard or contact your visitor directly.</p>

        <h2>Blocking a Visitor</h2>
        <ol className="steps list-decimal pl-6 mb-6">
          <li>Open <strong>Visitors</strong> → <strong>History</strong></li>
          <li>Find the visitor's past record</li>
          <li>Tap the menu (⋮) → <strong>Block Visitor</strong></li>
          <li>Confirm — the visitor is now on your block list</li>
        </ol>
        <p>Blocked visitors are flagged at the gate. The security guard is notified and will deny entry automatically.</p>

        <h2>For Admins — Visitor Analytics</h2>
        <p>Admins access visitor analytics from <strong>Visitors</strong> → <strong>Analytics</strong>:</p>
        <ul>
          <li><strong>Daily visitor count</strong> — Total visitors per day over a selected period</li>
          <li><strong>Currently inside</strong> — Live count of visitors present in the society</li>
          <li><strong>Visitor type breakdown</strong> — Guest, delivery, service, cab percentages</li>
          <li><strong>Peak hours</strong> — Busiest entry times across the day</li>
          <li><strong>Top providers</strong> — Most frequent delivery/service companies</li>
          <li><strong>Gate-wise stats</strong> — Entries per gate for multi-gate societies</li>
        </ul>
        <p>Export data to Excel or PDF using the <strong>Export</strong> button on the Visitors page.</p>
      </main>
    </DocsLayout>
  );
}
