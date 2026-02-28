import DocsLayout from '../DocsLayout';

export default function FAQ() {
  return (
    <DocsLayout>
      <main className="prose mx-auto py-8">
        <nav className="mb-4 text-sm text-gray-500 flex items-center gap-2">
          <a href="/" className="text-blue-600 hover:underline">Help Center</a>
          <span>›</span>
          <span>FAQ</span>
        </nav>

        <div className="bg-blue-50 border border-blue-200 rounded p-6 mb-6">
          <h1 className="text-2xl font-bold mb-2">Frequently Asked Questions</h1>
          <p>Quick answers to common questions about using GateFlux.</p>
        </div>

        {/* FAQ sections would be implemented as interactive accordions in React. For brevity, only the structure and a few sample questions are shown here. */}
        <h2>For Residents</h2>
        <div className="mb-8">
          <details className="mb-2">
            <summary className="font-semibold cursor-pointer">How do I pre-approve a visitor?</summary>
            <ol className="list-decimal pl-6">
              <li>Open the GateFlux app and tap <strong>Add Visitor</strong></li>
              <li>Enter the visitor's name and phone number</li>
              <li>Choose a visit date and expected time</li>
              <li>Tap <strong>Create</strong> to generate a QR code</li>
            </ol>
            <p>The visitor will receive an SMS with entry instructions. <a href="/resident-guide">Learn more</a></p>
          </details>
          <details className="mb-2">
            <summary className="font-semibold cursor-pointer">Can I let in a delivery without pre-approving?</summary>
            <p>Yes! When the delivery person arrives, the security guard will send you a notification requesting approval. You can approve or deny directly from the notification or the app.</p>
          </details>
          {/* ...more FAQ items... */}
        </div>

        <h2>For Security Guards</h2>
        <div className="mb-8">
          <details className="mb-2">
            <summary className="font-semibold cursor-pointer">A visitor doesn't have a QR code. What do I do?</summary>
          <ol className="list-decimal pl-6">
            <li>Search for the visitor's name or phone in the <strong>Expected Visitors</strong> list</li>
            <li>If found, verify their ID and check them in manually</li>
            <li>If not found, register them as a <strong>Walk-in</strong> and request approval from the resident</li>
          </ol>
        </details>
        {/* ...more FAQ items... */}
      </div>

      <h2>Account & App</h2>
      <div className="mb-8">
        <details className="mb-2">
          <summary className="font-semibold cursor-pointer">I didn't receive the OTP. What should I do?</summary>
          <ol className="list-decimal pl-6">
            <li>Wait 60 seconds (OTPs can be delayed)</li>
            <li>Tap "Resend OTP"</li>
            <li>Make sure you entered the correct phone number</li>
            <li>Check that your phone has network signal</li>
            <li>If still not received, contact your society admin</li>
          </ol>
        </details>
        {/* ...more FAQ items... */}
      </div>

      <h2>Security & Privacy</h2>
      <div className="mb-8">
        <details className="mb-2">
          <summary className="font-semibold cursor-pointer">What is Two-Factor Authentication (2FA)?</summary>
          <p>Two-Factor Authentication adds an extra layer of security to your account. After entering your password, you'll need to provide a 6-digit code from an authenticator app (like Google Authenticator or Microsoft Authenticator) to log in.</p>
        </details>
        {/* ...more FAQ items... */}
      </div>

      <h2>For Admins</h2>
      <div className="mb-8">
        <details className="mb-2">
          <summary className="font-semibold cursor-pointer">How do I add a new resident?</summary>
          <ol className="list-decimal pl-6">
            <li>Go to <strong>Residents</strong> in the admin panel</li>
            <li>Click <strong>Add Resident</strong></li>
            <li>Enter their name, phone number, and flat number</li>
            <li>Click <strong>Save</strong></li>
          </ol>
          <p>The resident can now log in using their phone number. <a href="/admin-guide">Learn more</a></p>
        </details>
        {/* ...more FAQ items... */}
      </div>

      <div className="bg-blue-100 border border-blue-200 rounded p-4 mt-8">
        <div className="font-semibold mb-2 flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
          Still have questions?
        </div>
        <p>
          Check the <a href="/6-troubleshooting">Troubleshooting guide</a> for technical issues, or contact your society admin. You can also reach GateFlux support at <a href="mailto:support@gateflux.co">support@gateflux.co</a>.
        </p>
      </div>
    </main>
        </DocsLayout >
      );
    }
