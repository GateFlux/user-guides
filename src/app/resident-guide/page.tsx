import DocsLayout from '../DocsLayout';

export default function ResidentGuide() {
  return (
    <DocsLayout>
      <main className="prose mx-auto py-8">
        <nav className="mb-4 text-sm text-gray-500 flex items-center gap-2">
          <a href="/" className="text-primary-600 hover:underline">Docs</a>
          <span>›</span>
          <span>Resident Guide</span>
        </nav>

        <div className="bg-primary-50 border border-primary-200 rounded p-6 mb-6">
          <h1 className="text-2xl font-bold mb-2">Resident Guide</h1>
          <p>Learn how to use GateFlux to manage visitors, track deliveries, and stay connected with your society.</p>
        </div>

      <h2 id="getting-the-app">Getting the App</h2>
      <p>Download the GateFlux Resident app from your device's app store:</p>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <li className="bg-gray-100 border border-gray-200 rounded p-4">
          <strong>iOS (iPhone/iPad):</strong> Search for "GateFlux Resident" in the App Store and tap <strong>Get</strong>.
        </li>
        <li className="bg-gray-100 border border-gray-200 rounded p-4">
          <strong>Android:</strong> Search for "GateFlux Resident" in Google Play and tap <strong>Install</strong>.
        </li>
      </ul>

      <h2 id="logging-in">Logging In for the First Time</h2>
      <ol className="steps list-decimal pl-6 mb-6">
        <li>Open the app and tap <strong>Get Started</strong></li>
        <li>Enter your phone number – Use the number registered with your society</li>
        <li>Enter the OTP – You'll receive a 6-digit code via SMS</li>
        <li>Select your flat – If you have multiple units, choose the one you want to manage</li>
        <li>You're in! – You'll see your dashboard with visitor activity</li>
      </ol>

      {/* Mockup: App login screen */}
      <div className="mockup mb-8 not-prose">
        <div className="bg-white border rounded-xl shadow-md p-6 max-w-xs mx-auto">
          <div className="text-center mb-5">
            <div className="mx-auto mb-3 w-14 h-14 rounded-2xl bg-primary-900 flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <div className="font-bold text-base">GateFlux Resident</div>
            <div className="text-xs text-gray-500 mt-1">Enter your phone number</div>
          </div>
          <div className="mb-3">
            <div className="border rounded-lg px-3 py-2.5 flex items-center gap-2 bg-gray-50 text-sm">
              <span className="font-medium text-gray-600">+91</span>
              <div className="w-px h-4 bg-gray-300"/>
              <span className="text-gray-400">98765 43210</span>
            </div>
          </div>
          <div className="mb-4">
            <div className="text-xs text-gray-500 mb-1.5">Enter OTP</div>
            <div className="flex gap-1.5 justify-center">
              {['7','4','2','8','1','9'].map((d, i) => (
                <div key={i} className={`w-9 h-11 rounded-lg border-2 flex items-center justify-center font-bold ${i === 5 ? 'border-primary-500 text-primary-900 bg-primary-50' : 'border-gray-200 text-gray-700'}`}>{d}</div>
              ))}
            </div>
          </div>
          <button className="w-full bg-primary-900 text-white rounded-lg py-2.5 text-sm font-semibold">Verify & Sign In</button>
        </div>
        <div className="text-center text-xs text-gray-400 mt-2">Mock design: App login & OTP verification</div>
      </div>

      <div className="bg-primary-100 border border-primary-200 rounded p-4 mb-6">
        <div className="font-semibold mb-2 flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
          Can't log in?
        </div>
        <p>Make sure your phone number is registered with your society office. Contact your society admin if you need help.</p>
      </div>

      <h2 id="web-portal-login">Using the Web Portal</h2>
      <p>In addition to the mobile app, residents can also access GateFlux through a web browser. The web portal offers two login methods:</p>
      <h3>Method 1: Email & Password</h3>
      <ol className="steps list-decimal pl-6 mb-6">
        <li>Open your browser and go to your society's GateFlux URL</li>
        <li>Select the "Email" tab on the login page</li>
        <li>Enter your email and password</li>
        <li>Click "Sign in"</li>
      </ol>
      <h3>Method 2: Mobile OTP (Residents Only)</h3>
      <p>For a passwordless login experience, residents can use their registered mobile number:</p>
      <ol className="steps list-decimal pl-6 mb-6">
        <li>Open your browser and go to your society's GateFlux URL</li>
        <li>Select the "Mobile OTP" tab on the login page</li>
        <li>Enter your phone number with country code (e.g., +91 for India)</li>
        <li>Click "Send OTP" – You'll receive a 6-digit code via SMS</li>
        <li>Enter the OTP in the verification field</li>
        <li>Click "Verify & Login" – You'll be logged in automatically</li>
      </ol>
      <div className="bg-primary-100 border border-primary-200 rounded p-4 mb-6">
        <div className="font-semibold mb-2 flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          OTP Login Availability
        </div>
        <p>Mobile OTP login is available <strong>only for residents, owners, and tenants</strong>. Admins and security staff should use email/password login.</p>
      </div>
      <div className="bg-green-100 border border-green-200 rounded p-4 mb-6">
        <div className="font-semibold mb-2 flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          OTP will expire
        </div>
        <p>The OTP code is valid for <strong>5 minutes</strong>. If it expires, click "Resend OTP" to get a new code. You can request a new OTP after the countdown timer completes.</p>
      </div>
      {/* Mockup: Web portal dashboard */}
      <div className="mockup mb-8 not-prose">
        <div className="rounded-xl border border-neutral-200 overflow-hidden shadow-md max-w-lg mx-auto">
          <div className="bg-neutral-100 border-b px-4 py-2 flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-neutral-300"/>
              <div className="w-3 h-3 rounded-full bg-neutral-300"/>
              <div className="w-3 h-3 rounded-full bg-neutral-300"/>
            </div>
            <div className="flex-1 bg-white rounded border border-neutral-200 px-3 py-0.5 text-xs text-neutral-400">app.gateflux.co/dashboard</div>
          </div>
          <div className="bg-primary-900 px-4 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="font-bold text-white text-sm">GateFlux</span>
              <nav className="flex gap-4 text-xs">
                <span className="text-white border-b border-accent-400 pb-0.5">Dashboard</span>
                <span className="text-white/50">Visitors</span>
                <span className="text-white/50">Notices</span>
              </nav>
            </div>
            <div className="w-7 h-7 rounded-full bg-accent-500 flex items-center justify-center text-white text-xs font-bold">R</div>
          </div>
          <div className="bg-neutral-50 p-4">
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="bg-white rounded-lg p-3 border shadow-sm">
                <div className="text-xs text-gray-500 mb-1">Today's Visitors</div>
                <div className="text-2xl font-bold text-primary-900">12</div>
                <div className="text-xs text-green-600 mt-1">↑ 3 expected</div>
              </div>
              <div className="bg-white rounded-lg p-3 border shadow-sm">
                <div className="text-xs text-gray-500 mb-1">Pending</div>
                <div className="text-2xl font-bold text-accent-500">2</div>
                <div className="text-xs text-gray-400 mt-1">Need approval</div>
              </div>
              <div className="bg-white rounded-lg p-3 border shadow-sm">
                <div className="text-xs text-gray-500 mb-1">Deliveries</div>
                <div className="text-2xl font-bold text-primary-700">5</div>
                <div className="text-xs text-gray-400 mt-1">This week</div>
              </div>
            </div>
            <div className="bg-white rounded-lg border p-3">
              <div className="text-xs font-semibold text-gray-400 mb-2">RECENT VISITORS</div>
              <div className="flex items-center justify-between py-1 text-xs">
                <span className="font-medium text-gray-800">Priya Sharma</span>
                <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Checked in</span>
              </div>
              <div className="flex items-center justify-between py-1 text-xs border-t">
                <span className="font-medium text-gray-800">Amazon Delivery</span>
                <span className="bg-accent-100 text-accent-700 px-2 py-0.5 rounded-full">Pending</span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-gray-400 mt-2">Mock design: Resident web portal dashboard</div>
      </div>

      <h2 id="pre-approving-a-visitor">Pre-Approving a Visitor</h2>
      <p>Pre-approval lets your guest walk in without you being called at the gate. They get a QR code that the security guard scans for instant entry.</p>
      <ol className="steps list-decimal pl-6 mb-6">
        <li>Tap <strong>Visitors</strong> → <strong>Add Visitor</strong> (+ button)</li>
        <li>Enter the visitor's name, phone number, visit date, and time window</li>
        <li>Tap <strong>Create</strong></li>
      </ol>
      <p>The visitor receives an SMS with their QR code. You'll get a push notification when they check in. <a href="/3-visitor-management">Full visitor management guide →</a></p>

      <h2 id="managing-recurring-visitors">Setting Up Recurring Visitor Access</h2>
      <p>For maids, drivers, and regular helpers — give them a QR code that works on a schedule so you don't need to create a new one every time.</p>
      <ol className="steps list-decimal pl-6 mb-6">
        <li>Tap <strong>Visitors</strong> → <strong>Add Visitor</strong></li>
        <li>Fill in their details and enable <strong>Recurring Access</strong></li>
        <li>Set the days and time window (e.g., Mon–Sat, 7–10 AM)</li>
        <li>Tap <strong>Save</strong> — they receive a single reusable QR code</li>
      </ol>
      <p>Revoke access anytime by opening their profile and tapping <strong>Cancel Access</strong>.</p>

      <h2 id="approving-walk-in-visitors">Approving Walk-In Visitors</h2>
      <p>When a visitor arrives without a QR code, the security guard will send you an approval request. You'll receive a push notification showing the visitor's name and details.</p>
      <ul className="mb-6">
        <li>Tap <strong>Allow</strong> to let them in</li>
        <li>Tap <strong>Deny</strong> to turn them away</li>
      </ul>
      <p>You can also respond from the <strong>Visitors</strong> section in the app if you missed the notification.</p>

      <h2 id="paying-dues">Paying Maintenance Dues</h2>
      <ol className="steps list-decimal pl-6 mb-6">
        <li>Open the app and go to <strong>My Dues</strong> or <strong>Finance</strong></li>
        <li>View your outstanding invoices and due dates</li>
        <li>Tap <strong>Pay Now</strong> on any invoice to pay online</li>
        <li>A digital receipt is generated immediately after payment</li>
      </ol>
      <p>You can also download past receipts from the <strong>Payment History</strong> tab.</p>

      <h2 id="filing-complaints">Filing a Complaint</h2>
      <ol className="steps list-decimal pl-6 mb-6">
        <li>Go to <strong>Complaints</strong> in the app</li>
        <li>Tap <strong>New Complaint</strong></li>
        <li>Enter a title, description, category (plumbing, electrical, noise, etc.), and priority</li>
        <li>Tap <strong>Submit</strong></li>
      </ol>
      <p>You'll receive status updates as the admin works on your complaint. Tap any complaint to view comments or track progress.</p>

      <h2 id="booking-amenities">Booking Amenities</h2>
      <ol className="steps list-decimal pl-6 mb-6">
        <li>Go to <strong>Amenities</strong> in the app</li>
        <li>Browse available facilities (gym, pool, clubhouse, etc.)</li>
        <li>Tap the amenity you want to book and view the availability calendar</li>
        <li>Select a date and time slot, then tap <strong>Book</strong></li>
        <li>You'll receive a confirmation once approved</li>
      </ol>

      <h2 id="viewing-notices">Viewing Society Notices</h2>
      <p>Notices from your society appear in the <strong>Notices</strong> section of the app. Pinned notices always appear at the top. Tap any notice to read the full content. You receive a push notification whenever a new notice is published.</p>

      <h2 id="registering-domestic-help">Registering Domestic Helpers</h2>
      <p>Register your maids, drivers, and other helpers so they appear in the guard's system for faster check-ins.</p>
      <ol className="steps list-decimal pl-6 mb-6">
        <li>Go to <strong>My Flat</strong> → <strong>Domestic Help</strong></li>
        <li>Tap <strong>Add Helper</strong></li>
        <li>Enter their name, phone number, and service type (maid, driver, cook, etc.)</li>
        <li>Save — they now appear in the guard's domestic help list</li>
      </ol>

      <h2 id="profile-settings">Managing Your Profile</h2>
      <ul className="mb-6">
        <li><strong>Edit Profile</strong> — Update your name, email, and flat details from <strong>Profile → Edit Profile</strong></li>
        <li><strong>Change Password</strong> — Go to <strong>Profile → Security → Change Password</strong></li>
        <li><strong>My Vehicles</strong> — Register your vehicles from <strong>Profile → My Vehicles</strong></li>
        <li><strong>Notification Preferences</strong> — Control which notifications you receive from <strong>Profile → Notifications</strong></li>
        <li><strong>Two-Factor Authentication</strong> — Enable 2FA from <strong>Profile → Security</strong> for enhanced account protection</li>
      </ul>
    </main>
        </DocsLayout>
      );
    }
