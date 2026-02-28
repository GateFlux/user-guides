
import DocsLayout from '../DocsLayout';

export default function GettingStarted() {
  return (
    <DocsLayout>
      <main className="prose mx-auto py-8">
        <nav className="mb-4 text-sm text-gray-500 flex items-center gap-2">
          <a href="/" className="text-blue-600 hover:underline">Help Center</a>
          <span>›</span>
          <span>Getting Started</span>
        </nav>

        <div className="bg-blue-50 border border-blue-200 rounded p-6 mb-6">
          <h1 className="text-2xl font-bold mb-2">Quick Start Guide</h1>
          <p>Welcome to GateFlux! This guide will help you get started with the app based on who you are.</p>
        </div>

        <h2>Who are you?</h2>
        <p>Select your role to see the right getting started steps:</p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <a href="#resident-start" className="feature-card block p-4 bg-white border rounded shadow hover:bg-blue-50 transition text-inherit no-underline">
            <h4 className="flex items-center gap-2 font-semibold">
              <span role="img" aria-label="Resident">🏠</span>I'm a Resident
            </h4>
            <p>Living in the society and want to manage visitors, view notices, and access community features.</p>
          </a>
          <a href="#security-start" className="feature-card block p-4 bg-white border rounded shadow hover:bg-blue-50 transition text-inherit no-underline">
            <h4 className="flex items-center gap-2 font-semibold">
              <span role="img" aria-label="Security">🛡️</span>I'm a Security Guard
            </h4>
            <p>Working at the society gate and need to check visitors in and out.</p>
          </a>
          <a href="#admin-start" className="feature-card block p-4 bg-white border rounded shadow hover:bg-blue-50 transition text-inherit no-underline">
            <h4 className="flex items-center gap-2 font-semibold">
              <span role="img" aria-label="Admin">👤</span>I'm an Admin
            </h4>
            <p>Managing the society, residents, security staff, and settings.</p>
          </a>
        </div>

        <h2 id="resident-start">For Residents</h2>

        <h3>Step 1: Download the App or Access Web Portal</h3>
        <ol className="steps list-decimal pl-6 mb-6">
          <li>
            <div className="font-semibold">Get the GateFlux app</div>
            <div>
              Download GateFlux from the <strong>App Store</strong> (iPhone) or <strong>Google Play Store</strong> (Android). Search for "GateFlux" or ask your society admin for a direct link.<br /><br />
              Alternatively, access the <strong>web portal</strong> at your society's GateFlux URL.
            </div>
          </li>
        </ol>

        <h3>Step 2: Create Account or Log In</h3>
        <div className="bg-blue-50 border border-blue-200 rounded p-4 mb-4">
          <div className="font-semibold mb-1">Self-Registration Available</div>
          <p>If your society has enabled self-registration, you can create your own account by clicking <strong>"Sign up"</strong> on the login page and selecting your society from the dropdown.</p>
        </div>
        <ol className="steps list-decimal pl-6 mb-6">
          <li>
            <div className="font-semibold">Open the app and enter your phone number</div>
            <div>Use the phone number registered with your society.</div>
          </li>
          <li>
            <div className="font-semibold">Enter the OTP</div>
            <div>You'll receive a one-time password via SMS. Enter it to verify your number.</div>
          </li>
          <li>
            <div className="font-semibold">Select your flat</div>
            <div>If you own or rent multiple flats, choose the one you want to manage.</div>
          </li>
        </ol>
        <div className="bg-green-50 border border-green-200 rounded p-4 mb-4">
          <div className="font-semibold mb-1">You're in!</div>
          <p>Once logged in, you'll see your dashboard with visitor activity, notices, and quick actions.</p>
        </div>
      </main>
    </DocsLayout>
	);
}

