import DocsLayout from '../DocsLayout';

export default function Configuration() {
  return (
    <DocsLayout>
      <main className="max-w-3xl mx-auto py-8 px-4">
        <nav className="mb-4 text-sm text-gray-500 flex items-center gap-2">
          <a href="/" className="text-primary-600 hover:underline">Docs</a>
          <span>›</span>
          <span>Society Settings</span>
        </nav>

        <div className="bg-primary-50 border border-primary-200 rounded p-6 mb-6">
          <h1 className="text-2xl font-bold mb-2">Society Settings Guide</h1>
          <p>Configure society profile, legal details, bank settings, invoice defaults, documents, and notification preferences.</p>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-3">Overview</h2>
        <p className="mb-4">Society Settings is an admin-only page with section-wise save. Each section is saved independently, so you can update one area without changing everything else.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">When to Use This</h2>
        <ul className="list-disc ml-6 mb-6">
          <li>During society onboarding</li>
          <li>When registration or tax details change</li>
          <li>When bank account or payment modes change</li>
          <li>Before starting invoice cycles</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-3">How to Use</h2>
        <ol className="list-decimal ml-6 mb-6">
          <li>Open <strong>Settings</strong> from sidebar (`/settings`).</li>
          <li>Select a section from the left panel.</li>
          <li>Update fields in that section.</li>
          <li>Click <strong>Save Society Settings</strong>.</li>
          <li>Move to next section and repeat.</li>
        </ol>

        <h2 className="text-xl font-bold mt-8 mb-3">Field Descriptions</h2>

        <h3 className="text-lg font-semibold mt-6 mb-2">Society Profile</h3>
        <ul className="list-disc ml-6 mb-4">
          <li><strong>Society Name</strong> (required): Official name.</li>
          <li><strong>Society Short Name</strong>: Short display name.</li>
          <li><strong>Tenant Subdomain</strong>: Read-only tenant identifier.</li>
          <li><strong>Society Type</strong>: Housing, apartment, villa, or commercial.</li>
          <li><strong>Registration Number</strong>: Official registration ID.</li>
          <li><strong>Formation Date</strong>: Society formation date.</li>
          <li><strong>Society Logo</strong>: Logo upload field.</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2">Address and Contact</h3>
        <ul className="list-disc ml-6 mb-4">
          <li><strong>Address</strong></li>
          <li><strong>City</strong></li>
          <li><strong>State</strong></li>
          <li><strong>Pincode</strong></li>
          <li><strong>Society Phone</strong></li>
          <li><strong>Society Email</strong></li>
          <li><strong>Website</strong></li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2">Compliance and Legal</h3>
        <ul className="list-disc ml-6 mb-4">
          <li><strong>GST Number</strong></li>
          <li><strong>PAN Number</strong></li>
          <li><strong>Registration Authority</strong></li>
          <li><strong>Registration State</strong></li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2">Banking Details</h3>
        <ul className="list-disc ml-6 mb-4">
          <li><strong>Bank Name</strong></li>
          <li><strong>Account Holder Name</strong></li>
          <li><strong>Account Number</strong></li>
          <li><strong>IFSC Code</strong></li>
          <li><strong>UPI ID</strong></li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2">Payment Methods</h3>
        <ul className="list-disc ml-6 mb-4">
          <li><strong>Bank Transfer</strong></li>
          <li><strong>UPI</strong></li>
          <li><strong>Cash</strong></li>
          <li><strong>Cheque</strong></li>
          <li><strong>Online Gateway</strong></li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2">Invoice Settings</h3>
        <ul className="list-disc ml-6 mb-4">
          <li><strong>Invoice Prefix</strong></li>
          <li><strong>Receipt Prefix</strong></li>
          <li><strong>Invoice Starting Number</strong></li>
          <li><strong>Financial Year Start</strong></li>
          <li><strong>Default Currency</strong></li>
          <li><strong>GST Enabled</strong></li>
          <li><strong>GST Rate</strong></li>
          <li><strong>SAC Code</strong></li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2">Documents</h3>
        <ul className="list-disc ml-6 mb-4">
          <li><strong>Registration Certificate</strong></li>
          <li><strong>GST Certificate</strong></li>
          <li><strong>PAN Card</strong></li>
          <li><strong>Society Bye Laws</strong></li>
          <li><strong>Cancelled Cheque</strong></li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2">Notification Preferences</h3>
        <ul className="list-disc ml-6 mb-6">
          <li><strong>Email Notifications</strong></li>
          <li><strong>SMS Notifications</strong></li>
          <li><strong>WhatsApp Notifications</strong></li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-3">Validation Rules</h2>
        <ul className="list-disc ml-6 mb-6">
          <li><strong>Society Name</strong> is required in profile section.</li>
          <li><strong>Society Email</strong> must be a valid email format.</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-3">Example</h2>
        <p className="mb-6">If your society changes bank account, update Banking Details first, save it, then review Invoice Settings before next billing cycle.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">Tips</h2>
        <ul className="list-disc ml-6 mb-6">
          <li>Save each section before moving to the next.</li>
          <li>Keep legal and tax values exactly as in official records.</li>
          <li>Use clear prefixes for invoice and receipt numbering.</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-3">Common Mistakes</h2>
        <ul className="list-disc ml-6 mb-10">
          <li>Switching section without saving changes.</li>
          <li>Entering invalid contact email format.</li>
          <li>Enabling GST without proper GST rate and SAC code.</li>
        </ul>
      </main>
    </DocsLayout>
  );
}
