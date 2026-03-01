import DocsLayout from '../DocsLayout';

export default function FAQ() {
  return (
    <DocsLayout>
      <main className="prose mx-auto py-8">
        <nav className="mb-4 text-sm text-gray-500 flex items-center gap-2">
          <a href="/" className="text-primary-600 hover:underline">Help Center</a>
          <span>›</span>
          <span>FAQ</span>
        </nav>

        <div className="bg-primary-50 border border-primary-200 rounded p-6 mb-6">
          <h1 className="text-2xl font-bold mb-2">Frequently Asked Questions</h1>
          <p>Quick answers to common questions about using GateFlux.</p>
        </div>

        <h2>For Residents</h2>
        <div className="mb-8">
          <details className="mb-2 border rounded p-3">
            <summary className="font-semibold cursor-pointer">How do I pre-approve a visitor?</summary>
            <div className="mt-2">
              <ol className="list-decimal pl-6">
                <li>Open the GateFlux app and tap <strong>Visitors</strong></li>
                <li>Tap the + button → <strong>Add Visitor</strong></li>
                <li>Enter the visitor's name, phone number, visit date, and expected time</li>
                <li>Tap <strong>Create</strong> — the visitor receives a QR code by SMS</li>
              </ol>
              <p>The security guard scans the QR code for instant entry. <a href="/resident-guide">Learn more</a></p>
            </div>
          </details>

          <details className="mb-2 border rounded p-3">
            <summary className="font-semibold cursor-pointer">Can I let in a delivery without pre-approving?</summary>
            <div className="mt-2">
              <p>Yes. When the delivery person arrives, the security guard will send you a real-time notification asking for approval. Tap <strong>Allow</strong> or <strong>Deny</strong> directly from the notification — no need to open the app.</p>
            </div>
          </details>

          <details className="mb-2 border rounded p-3">
            <summary className="font-semibold cursor-pointer">How do I set up recurring access for my maid or driver?</summary>
            <div className="mt-2">
              <ol className="list-decimal pl-6">
                <li>Go to <strong>Visitors</strong> → <strong>Add Visitor</strong></li>
                <li>Enable the <strong>Recurring Access</strong> toggle</li>
                <li>Set the days (e.g., Mon–Sat) and time window (e.g., 7–10 AM)</li>
                <li>Tap <strong>Save</strong> — they receive a single QR code that works daily</li>
              </ol>
              <p>You can revoke access at any time from the visitor's profile.</p>
            </div>
          </details>

          <details className="mb-2 border rounded p-3">
            <summary className="font-semibold cursor-pointer">How do I pay my maintenance dues?</summary>
            <div className="mt-2">
              <ol className="list-decimal pl-6">
                <li>Open the app and go to <strong>My Dues</strong> or <strong>Finance</strong></li>
                <li>View your outstanding invoices</li>
                <li>Tap <strong>Pay Now</strong> to pay online</li>
                <li>A receipt is automatically generated</li>
              </ol>
            </div>
          </details>

          <details className="mb-2 border rounded p-3">
            <summary className="font-semibold cursor-pointer">How do I file a complaint?</summary>
            <div className="mt-2">
              <ol className="list-decimal pl-6">
                <li>Go to <strong>Complaints</strong> in the app</li>
                <li>Tap <strong>New Complaint</strong></li>
                <li>Fill in the title, description, category, and priority</li>
                <li>Submit — you'll get status updates as the admin works on it</li>
              </ol>
            </div>
          </details>

          <details className="mb-2 border rounded p-3">
            <summary className="font-semibold cursor-pointer">How do I book an amenity (gym, pool, clubhouse)?</summary>
            <div className="mt-2">
              <ol className="list-decimal pl-6">
                <li>Go to <strong>Amenities</strong> in the app</li>
                <li>Select the facility you want to book</li>
                <li>Pick a date and time slot from the availability calendar</li>
                <li>Confirm the booking — you'll receive a notification when approved</li>
              </ol>
            </div>
          </details>

          <details className="mb-2 border rounded p-3">
            <summary className="font-semibold cursor-pointer">How do I view society notices?</summary>
            <div className="mt-2">
              <p>Go to <strong>Notices</strong> in the app. Active notices appear in the main list with pinned notices at the top. Tap any notice to read the full content. You also receive a push notification whenever a new notice is published.</p>
            </div>
          </details>

          <details className="mb-2 border rounded p-3">
            <summary className="font-semibold cursor-pointer">I can see a visitor arrived but I didn't get a notification. Why?</summary>
            <div className="mt-2">
              <ul className="list-disc pl-6">
                <li>Check that push notifications are enabled for GateFlux in your phone settings</li>
                <li>Make sure you have an active internet connection</li>
                <li>If the visitor was pre-approved with a QR code, the guard checks them in directly — you still get a notification but may have missed it. Check the app's visitor log.</li>
              </ul>
            </div>
          </details>
        </div>

        <h2>For Security Guards</h2>
        <div className="mb-8">
          <details className="mb-2 border rounded p-3">
            <summary className="font-semibold cursor-pointer">A visitor doesn't have a QR code. What do I do?</summary>
            <div className="mt-2">
              <ol className="list-decimal pl-6">
                <li>Search the visitor's name or phone in the <strong>Expected Visitors</strong> list</li>
                <li>If found, verify their ID and check them in manually</li>
                <li>If not found, tap <strong>Manual Entry</strong>, fill in their details, and tap <strong>Request Approval</strong></li>
                <li>Wait for the resident to approve via the app — this usually takes under 2 minutes</li>
              </ol>
            </div>
          </details>

          <details className="mb-2 border rounded p-3">
            <summary className="font-semibold cursor-pointer">The resident is not responding to the approval request. What should I do?</summary>
            <div className="mt-2">
              <ol className="list-decimal pl-6">
                <li>Wait 2 minutes for the request to time out</li>
                <li>Tap <strong>Call Resident</strong> in the app to phone them directly</li>
                <li>If no response after calling, ask the visitor to contact the resident themselves</li>
                <li>Do not allow entry without approval</li>
              </ol>
            </div>
          </details>

          <details className="mb-2 border rounded p-3">
            <summary className="font-semibold cursor-pointer">The QR code won't scan. What do I do?</summary>
            <div className="mt-2">
              <ul className="list-disc pl-6">
                <li>Ensure the QR code isn't blurry or damaged — ask the visitor to increase screen brightness</li>
                <li>Try adjusting the distance and lighting when scanning</li>
                <li>Use <strong>Search</strong> to find the visitor by name or phone instead</li>
              </ul>
            </div>
          </details>

          <details className="mb-2 border rounded p-3">
            <summary className="font-semibold cursor-pointer">A visitor has been inside much longer than expected. What should I do?</summary>
            <div className="mt-2">
              <p>GateFlux will show an <strong>Overstaying</strong> badge on visitors who've been inside too long (1 hour for deliveries/cabs, 4 hours for guests/services). When you see this:</p>
              <ol className="list-decimal pl-6">
                <li>Note how long they've been inside in the <strong>Currently Inside</strong> tab</li>
                <li>Consider calling the resident to confirm they're still expected</li>
                <li>Check them out when they leave via the <strong>Check Out</strong> button</li>
              </ol>
            </div>
          </details>

          <details className="mb-2 border rounded p-3">
            <summary className="font-semibold cursor-pointer">How do I handle an emergency vehicle (ambulance, fire, police)?</summary>
            <div className="mt-2">
              <ol className="list-decimal pl-6">
                <li>Allow immediate entry — do not delay for system approval</li>
                <li>Record the entry afterward: tap <strong>Manual Entry</strong> → select <strong>Emergency</strong> type</li>
                <li>Inform your supervisor and the society admin</li>
              </ol>
            </div>
          </details>
        </div>

        <h2>Account & App</h2>
        <div className="mb-8">
          <details className="mb-2 border rounded p-3">
            <summary className="font-semibold cursor-pointer">I didn't receive the OTP. What should I do?</summary>
            <div className="mt-2">
              <ol className="list-decimal pl-6">
                <li>Wait 60 seconds — OTPs can be delayed by the network</li>
                <li>Tap <strong>Resend OTP</strong></li>
                <li>Make sure you entered the correct phone number with country code</li>
                <li>Check that your phone has mobile network signal</li>
                <li>If still not received, contact your society admin or email <a href="mailto:support@gateflux.co">support@gateflux.co</a></li>
              </ol>
            </div>
          </details>

          <details className="mb-2 border rounded p-3">
            <summary className="font-semibold cursor-pointer">How do I change my password?</summary>
            <div className="mt-2">
              <ol className="list-decimal pl-6">
                <li>Go to <strong>Profile</strong> → <strong>Security</strong> → <strong>Change Password</strong></li>
                <li>Enter your current password and then the new password twice</li>
                <li>Click <strong>Save</strong></li>
              </ol>
              <p>If you forgot your password, use <strong>Forgot Password</strong> on the login page to reset it via email.</p>
            </div>
          </details>

          <details className="mb-2 border rounded p-3">
            <summary className="font-semibold cursor-pointer">How do I update my phone number or email?</summary>
            <div className="mt-2">
              <p>Contact your society admin to update your registered phone number, as it is used for login. You can update your email yourself from <strong>Profile</strong> → <strong>Edit Profile</strong>.</p>
            </div>
          </details>

          <details className="mb-2 border rounded p-3">
            <summary className="font-semibold cursor-pointer">The app is slow or not loading. What should I do?</summary>
            <div className="mt-2">
              <ol className="list-decimal pl-6">
                <li>Check your internet connection — switch between Wi-Fi and mobile data</li>
                <li>Close the app completely and reopen it</li>
                <li>Restart your phone if the problem persists</li>
                <li>Check if there's a newer version of the app and update it</li>
              </ol>
            </div>
          </details>
        </div>

        <h2>Security & Privacy</h2>
        <div className="mb-8">
          <details className="mb-2 border rounded p-3">
            <summary className="font-semibold cursor-pointer">What is Two-Factor Authentication (2FA)?</summary>
            <div className="mt-2">
              <p>2FA adds an extra layer of security. After logging in, you must enter a 6-digit code from an authenticator app (Google Authenticator, Authy, etc.). Enable it from <strong>Profile</strong> → <strong>Security</strong> → <strong>Two-Factor Authentication</strong>. Highly recommended for all admin accounts.</p>
            </div>
          </details>

          <details className="mb-2 border rounded p-3">
            <summary className="font-semibold cursor-pointer">Who can see my visitor history?</summary>
            <div className="mt-2">
              <p>Only you (the resident) and society admins with the appropriate permission can view your visitor history. Security guards can see the current visit log but not historical records for other flats.</p>
            </div>
          </details>

          <details className="mb-2 border rounded p-3">
            <summary className="font-semibold cursor-pointer">Are visitor photos and ID documents stored securely?</summary>
            <div className="mt-2">
              <p>Yes. All photos and ID proofs are encrypted at rest and in transit. Access is controlled by time-limited signed URLs that expire after 10 minutes. Only authorized personnel can view captured media.</p>
            </div>
          </details>
        </div>

        <h2>For Admins</h2>
        <div className="mb-8">
          <details className="mb-2 border rounded p-3">
            <summary className="font-semibold cursor-pointer">How do I add a new resident?</summary>
            <div className="mt-2">
              <ol className="list-decimal pl-6">
                <li>Go to <strong>Residents</strong> in the admin panel</li>
                <li>Click <strong>Add Resident</strong></li>
                <li>Enter their name, phone number, flat number, and type (owner/tenant)</li>
                <li>Click <strong>Save</strong> — they receive an SMS to set up their account</li>
              </ol>
              <p><a href="/admin-guide">See the full Admin Guide</a></p>
            </div>
          </details>

          <details className="mb-2 border rounded p-3">
            <summary className="font-semibold cursor-pointer">How do I add a security guard?</summary>
            <div className="mt-2">
              <ol className="list-decimal pl-6">
                <li>Go to <strong>Staff</strong> → <strong>Security</strong></li>
                <li>Click <strong>Add Guard</strong></li>
                <li>Enter their name, phone number, and assigned gate</li>
                <li>Set their shift schedule and click <strong>Save</strong></li>
              </ol>
              <p>The guard receives login credentials via SMS.</p>
            </div>
          </details>

          <details className="mb-2 border rounded p-3">
            <summary className="font-semibold cursor-pointer">A resident moved out. What should I do?</summary>
            <div className="mt-2">
              <ol className="list-decimal pl-6">
                <li>Go to <strong>Residents</strong> and find their profile</li>
                <li>Click <strong>Deactivate</strong> (not Delete) to preserve history</li>
                <li>Their recurring visitor access is automatically revoked</li>
                <li>Add the new resident to the same flat</li>
              </ol>
            </div>
          </details>

          <details className="mb-2 border rounded p-3">
            <summary className="font-semibold cursor-pointer">How do I view audit logs?</summary>
            <div className="mt-2">
              <ol className="list-decimal pl-6">
                <li>Go to <strong>Analytics</strong> in the sidebar</li>
                <li>Click <strong>View All Activity</strong> at the bottom of the Recent Activity section</li>
                <li>Use filters: action type, severity, date range, or keyword search</li>
                <li>Export to CSV if needed</li>
              </ol>
            </div>
          </details>

          <details className="mb-2 border rounded p-3">
            <summary className="font-semibold cursor-pointer">How do I approve or reject a high-value expense?</summary>
            <div className="mt-2">
              <ol className="list-decimal pl-6">
                <li>Go to <strong>Finance</strong> → <strong>Pending Approvals</strong></li>
                <li>Click on the expense to review details and the attached receipt</li>
                <li>Click <strong>Approve</strong> or <strong>Reject</strong> with a comment</li>
              </ol>
              <p>Expenses above ₹50,000 also require President approval after Treasurer approval.</p>
            </div>
          </details>
        </div>

        <div className="bg-primary-100 border border-primary-200 rounded p-4 mt-8">
          <div className="font-semibold mb-2 flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            Still have questions?
          </div>
          <p>
            Contact your society admin, or reach GateFlux support at <a href="mailto:support@gateflux.co">support@gateflux.co</a>.
          </p>
        </div>
      </main>
    </DocsLayout>
  );
}
