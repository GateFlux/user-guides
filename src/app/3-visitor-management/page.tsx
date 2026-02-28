import DocsLayout from '../DocsLayout';

export default function VisitorManagement() {
  return (
    <DocsLayout>
      <main className="prose mx-auto py-8">
        <nav className="mb-4 text-sm text-gray-500 flex items-center gap-2">
          <a href="/" className="text-blue-600 hover:underline">Docs</a>
          <span>›</span>
          <span>Visitor Management</span>
        </nav>

        <div className="bg-blue-50 border border-blue-200 rounded p-6 mb-6">
          <h1 className="text-2xl font-bold mb-2">Visitor Management Guide</h1>
          <p>Comprehensive visitor management with pre-approvals, check-ins, and real-time notifications.</p>
        </div>

        <h2>Overview</h2>
        <p>GateFlux provides comprehensive visitor management capabilities, allowing residents to pre-approve visitors, security to manage check-ins, and administrators to monitor visitor activity across the society.</p>

        <h2>Visitor Types</h2>
        <table className="table-auto border-collapse w-full mb-8">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-2 py-1">Type</th>
              <th className="border px-2 py-1">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border px-2 py-1 font-semibold">Guest</td><td className="border px-2 py-1">Personal visitors to residents</td></tr>
            <tr><td className="border px-2 py-1 font-semibold">Delivery</td><td className="border px-2 py-1">E-commerce, food delivery, courier</td></tr>
            <tr><td className="border px-2 py-1 font-semibold">Cab</td><td className="border px-2 py-1">Taxi, rideshare services</td></tr>
            <tr><td className="border px-2 py-1 font-semibold">Service</td><td className="border px-2 py-1">Repair, maintenance, utility workers</td></tr>
            <tr><td className="border px-2 py-1 font-semibold">Vendor</td><td className="border px-2 py-1">Regular service providers</td></tr>
            <tr><td className="border px-2 py-1 font-semibold">Emergency</td><td className="border px-2 py-1">Medical, fire, police</td></tr>
          </tbody>
        </table>

        <h2>Pre-Approving Visitors</h2>

        <h3>Resident Pre-Approval (Mobile App)</h3>
        <p>Residents can pre-approve expected visitors through the mobile app:</p>
        <ol className="steps list-decimal pl-6 mb-6">
          <li>Open GateFlux mobile app</li>
          <li>Navigate to <strong>Visitors</strong> → <strong>Add Visitor</strong></li>
          <li>Enter visitor details</li>
          <li>Set expected arrival time</li>
          <li>Submit for approval</li>
        </ol>


        <h2>Gate Check-In Process</h2>

        <h3>Security Guard Check-In</h3>
        <p>When a visitor arrives at the gate:</p>


      </main>
    </DocsLayout>
  );
}
