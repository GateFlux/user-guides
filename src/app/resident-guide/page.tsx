import DocsLayout from '../DocsLayout';

export default function ResidentGuide() {
  return (
    <DocsLayout>
      <main className="prose mx-auto py-8">
        <nav className="mb-4 text-sm text-gray-500 flex items-center gap-2">
          <a href="/" className="text-blue-600 hover:underline">Docs</a>
          <span>›</span>
          <span>Resident Guide</span>
        </nav>

        <div className="bg-blue-50 border border-blue-200 rounded p-6 mb-6">
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

      <div className="bg-blue-100 border border-blue-200 rounded p-4 mb-6">
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
      <div className="bg-blue-100 border border-blue-200 rounded p-4 mb-6">
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
    </main>
        </DocsLayout>
      );
    }
