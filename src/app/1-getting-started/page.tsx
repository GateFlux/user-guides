
import DocsLayout from '../DocsLayout';

export default function GettingStarted() {
  return (
    <DocsLayout>
      <main className="prose mx-auto py-8">
        <nav className="mb-4 text-sm text-gray-500 flex items-center gap-2">
          <a href="/" className="text-primary-600 hover:underline">Help Center</a>
          <span>›</span>
          <span>Getting Started</span>
        </nav>

        <div className="bg-primary-50 border border-primary-200 rounded p-6 mb-6">
          <h1 className="text-2xl font-bold mb-2">Quick Start Guide</h1>
          <p>Welcome to GateFlux! This guide will help you get started with the app based on who you are.</p>
        </div>

        <h2>Who are you?</h2>
        <p>Select your role to see the right getting started steps:</p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <a href="#resident-start" className="feature-card block p-4 bg-white border rounded shadow hover:bg-primary-50 transition text-inherit no-underline">
            <h4 className="flex items-center gap-2 font-semibold">
              <span role="img" aria-label="Resident">🏠</span>I'm a Resident
            </h4>
            <p>Living in the society and want to manage visitors, view notices, and access community features.</p>
          </a>
          <a href="#security-start" className="feature-card block p-4 bg-white border rounded shadow hover:bg-primary-50 transition text-inherit no-underline">
            <h4 className="flex items-center gap-2 font-semibold">
              <span role="img" aria-label="Security">🛡️</span>I'm a Security Guard
            </h4>
            <p>Working at the society gate and need to check visitors in and out.</p>
          </a>
          <a href="#admin-start" className="feature-card block p-4 bg-white border rounded shadow hover:bg-primary-50 transition text-inherit no-underline">
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

        {/* Mockup: Login screen */}
        <div className="mockup mb-8 not-prose">
          <div className="bg-white border rounded-xl shadow-md p-6 max-w-xs mx-auto">
            <div className="text-center mb-5">
              <div className="mx-auto mb-3 w-14 h-14 rounded-2xl bg-primary-900 flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div className="font-bold text-base">GateFlux</div>
              <div className="text-xs text-gray-500 mt-1">Sign in to continue</div>
            </div>
            <div className="mb-3">
              <div className="text-xs font-semibold text-gray-500 mb-1">Phone Number</div>
              <div className="border rounded-lg px-3 py-2.5 flex items-center gap-2 bg-gray-50 text-sm">
                <span className="font-medium text-gray-600">+91</span>
                <div className="w-px h-4 bg-gray-300"/>
                <span className="text-gray-400">98765 43210</span>
              </div>
            </div>
            <button className="w-full bg-primary-900 text-white rounded-lg py-2.5 text-sm font-semibold">Send OTP</button>
            <div className="text-center mt-3 text-xs text-gray-400">You'll receive a 6-digit code via SMS</div>
          </div>
          <div className="text-center text-xs text-gray-400 mt-2">Mock design: Login screen</div>
        </div>

        <h3>Step 2: Create Account or Log In</h3>
        <div className="bg-primary-50 border border-primary-200 rounded p-4 mb-4">
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

        {/* Mockup: OTP entry */}
        <div className="mockup mb-8 not-prose">
          <div className="bg-white border rounded-xl shadow-md p-6 max-w-xs mx-auto">
            <div className="text-center mb-5">
              <div className="font-bold text-base">Enter OTP</div>
              <div className="text-xs text-gray-500 mt-1">Sent to +91 98765 43210</div>
            </div>
            <div className="flex gap-2 justify-center mb-5">
              {['7','4','2','8','1','9'].map((d, i) => (
                <div key={i} className={`w-10 h-12 rounded-lg border-2 flex items-center justify-center font-bold text-lg ${i === 5 ? 'border-primary-500 text-primary-900 bg-primary-50' : 'border-gray-200 text-gray-700'}`}>{d}</div>
              ))}
            </div>
            <button className="w-full bg-primary-900 text-white rounded-lg py-2.5 text-sm font-semibold">Verify & Sign In</button>
            <div className="text-center mt-3 text-xs text-gray-400">Resend OTP in <span className="font-medium text-gray-600">4:12</span></div>
          </div>
          <div className="text-center text-xs text-gray-400 mt-2">Mock design: OTP verification</div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded p-4 mb-4">
          <div className="font-semibold mb-1">You're in!</div>
          <p>Once logged in, you'll see your dashboard with visitor activity, notices, and quick actions.</p>
        </div>

        {/* Mockup: Resident dashboard */}
        <div className="mockup mb-8 not-prose">
          <div className="bg-white border rounded-xl shadow-md overflow-hidden max-w-sm mx-auto">
            <div className="bg-primary-900 px-4 py-3 flex items-center justify-between">
              <div>
                <div className="font-bold text-white text-sm">Good morning, Raj 👋</div>
                <div className="text-xs text-white/60">Flat A-101 · Green Valley</div>
              </div>
              <div className="w-8 h-8 rounded-full bg-accent-500 flex items-center justify-center text-white text-sm font-bold">R</div>
            </div>
            <div className="grid grid-cols-3 divide-x border-b">
              <div className="p-3 text-center">
                <div className="font-bold text-primary-900">3</div>
                <div className="text-xs text-gray-500">Expected</div>
              </div>
              <div className="p-3 text-center">
                <div className="font-bold text-accent-500">1</div>
                <div className="text-xs text-gray-500">Pending</div>
              </div>
              <div className="p-3 text-center">
                <div className="font-bold text-primary-700">2</div>
                <div className="text-xs text-gray-500">Notices</div>
              </div>
            </div>
            <div className="px-4 py-3 border-b">
              <div className="text-xs font-semibold text-gray-400 mb-2">QUICK ACTIONS</div>
              <div className="grid grid-cols-4 gap-2">
                {['Pre-approve','Deliveries','Notices','Complaints'].map(action => (
                  <div key={action} className="flex flex-col items-center gap-1">
                    <div className="w-10 h-10 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center">
                      <div className="w-4 h-4 rounded bg-primary-200"/>
                    </div>
                    <div className="text-xs text-gray-600 text-center leading-tight">{action}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="px-4 py-3">
              <div className="text-xs font-semibold text-gray-400 mb-2">RECENT ACTIVITY</div>
              <div className="flex items-center gap-2 py-1">
                <div className="w-2 h-2 rounded-full bg-green-500 shrink-0"/>
                <div className="text-xs text-gray-700"><strong>Priya Sharma</strong> checked in · 3:14 PM</div>
              </div>
              <div className="flex items-center gap-2 py-1">
                <div className="w-2 h-2 rounded-full bg-accent-400 shrink-0"/>
                <div className="text-xs text-gray-700"><strong>Amazon Delivery</strong> pending · 2:30 PM</div>
              </div>
            </div>
          </div>
          <div className="text-center text-xs text-gray-400 mt-2">Mock design: Resident Dashboard</div>
        </div>

        <h2 id="security-start">For Security Guards</h2>
        <p>Security guards use the <strong>GateFlux Guard app</strong> — a dedicated mobile app designed for gate operations. You'll use it to check visitors in and out, scan QR codes, and request resident approvals.</p>

        <h3>Step 1: Get the Guard App</h3>
        <p>Download the <strong>GateFlux Guard</strong> app from the App Store or Google Play. Your society admin will provide you with login credentials — guards do not self-register.</p>

        <h3>Step 2: Log In</h3>
        <ol className="steps list-decimal pl-6 mb-6">
          <li>Open the GateFlux Guard app</li>
          <li>Enter your <strong>email address</strong> and <strong>password</strong> provided by your admin</li>
          <li>Tap <strong>Sign In</strong> — you do not use OTP login</li>
          <li>Select your <strong>assigned gate</strong> if your society has multiple entry points</li>
        </ol>

        <div className="bg-primary-100 border border-primary-200 rounded p-4 mb-6">
          <strong>First login?</strong> Your admin will share your temporary password. Change it from <strong>Profile → Security → Change Password</strong> after signing in.
        </div>

        {/* Mockup: Guard gate dashboard */}
        <div className="mockup mb-8 not-prose">
          <div className="bg-white border rounded-xl shadow-md overflow-hidden max-w-sm mx-auto">
            <div className="bg-primary-900 px-4 py-3 flex items-center justify-between">
              <div>
                <div className="font-bold text-white text-sm">Gate A — Main Entrance</div>
                <div className="text-xs text-white/60">Guard: Suresh · On duty</div>
              </div>
              <div className="w-8 h-8 rounded-full bg-accent-500 flex items-center justify-center text-white text-sm font-bold">S</div>
            </div>
            <div className="grid grid-cols-2 divide-x border-b">
              <div className="p-3 text-center">
                <div className="font-bold text-primary-900 text-xl">7</div>
                <div className="text-xs text-gray-500">Inside now</div>
              </div>
              <div className="p-3 text-center">
                <div className="font-bold text-accent-500 text-xl">2</div>
                <div className="text-xs text-gray-500">Awaiting approval</div>
              </div>
            </div>
            <div className="p-4 flex flex-col gap-2">
              <button className="w-full bg-primary-900 text-white rounded-lg py-2.5 text-sm font-semibold flex items-center justify-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                Scan QR Code
              </button>
              <button className="w-full border border-primary-900 text-primary-900 rounded-lg py-2.5 text-sm font-semibold">Walk-In Entry</button>
            </div>
          </div>
          <div className="text-center text-xs text-gray-400 mt-2">Mock design: Guard gate dashboard</div>
        </div>

        <h3>Step 3: Your First Check-In</h3>
        <ol className="steps list-decimal pl-6 mb-6">
          <li><strong>Pre-approved visitor (QR code)</strong> — Tap <strong>Scan QR</strong> and point the camera at the visitor's QR code. The app will show their name, flat, and allowed time window. Tap <strong>Check In</strong>.</li>
          <li><strong>Walk-in visitor (no QR)</strong> — Tap <strong>Walk-In Entry</strong>, enter their name, phone, and which flat they're visiting, then tap <strong>Request Approval</strong>. The resident receives a notification to allow or deny.</li>
          <li><strong>Checking out</strong> — When a visitor leaves, go to <strong>Currently Inside</strong>, find them, and tap <strong>Check Out</strong>.</li>
        </ol>

        <div className="bg-green-50 border border-green-200 rounded p-4 mb-8">
          <strong>Need help at the gate?</strong> See the full <a href="/security-guard-guide">Security Guard Guide</a> for detailed steps on all gate operations.
        </div>

        <h2 id="admin-start">For Admins</h2>
        <p>Society admins manage residents, staff, settings, and all society operations through the GateFlux <strong>web portal</strong> or mobile app.</p>

        <div className="bg-primary-50 border border-primary-200 rounded p-4 mb-6">
          <strong>Creating a new society?</strong> Start from <strong>marketing signup</strong> at <code>https://gateflux.co/signup</code>.
          Complete email and mobile OTP verification, then you will be redirected to <code>https://app.gateflux.co/{'{society_slug}'}/setup</code>.
        </div>

        <h3>Step 1: Access the Admin Panel</h3>
        <ol className="steps list-decimal pl-6 mb-6">
          <li>Open your browser and go to your app URL (e.g., <code>https://app.gateflux.co/login</code>).</li>
          <li>Log in with your email and password</li>
          <li>If your account belongs to multiple societies, select the society workspace you want to manage.</li>
          <li>You'll land on the <strong>Admin Dashboard</strong> — your central control panel</li>
        </ol>

        <div className="bg-primary-50 border border-primary-200 rounded p-4 mb-6">
          <strong>First-time setup?</strong> After logging in for the first time, complete these setup steps from <strong>Settings → Society Setup</strong>:
          <ul className="mt-2 mb-0 list-disc pl-5">
            <li>Add your society name, address, and logo</li>
            <li>Configure gates and entry points</li>
            <li>Set maintenance due dates and billing rules</li>
            <li>Add blocks, floors, and flat numbers</li>
          </ul>
        </div>

        <h3>Step 2: Add Your Team</h3>
        <ol className="steps list-decimal pl-6 mb-6">
          <li>Go to <strong>Settings → User Management</strong></li>
          <li>Add <strong>committee members</strong> (Secretary, Treasurer, President) with their email addresses and assign their roles</li>
          <li>Add <strong>security staff</strong> from <strong>Staff → Add Staff</strong> — set their role as Guard and assign them to a gate</li>
          <li>Add <strong>residents</strong> individually or import via CSV from <strong>Residents → Import</strong></li>
        </ol>

        <h3>Step 3: Key Admin Modules</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6 not-prose">
          {[
            { title: 'Residents', desc: 'Add and manage all flat owners and tenants' },
            { title: 'Finance', desc: 'Generate invoices, approve expenses, track collections' },
            { title: 'Visitors', desc: 'View society-wide entry/exit logs and analytics' },
            { title: 'Complaints', desc: 'Manage and resolve resident complaints and maintenance' },
            { title: 'Staff', desc: 'Manage guards, vendors, and support staff' },
            { title: 'Notices', desc: 'Publish announcements to all residents' },
          ].map(({ title, desc }) => (
            <div key={title} className="bg-white border rounded-lg p-3 shadow-sm">
              <div className="font-semibold text-primary-900 text-sm mb-0.5">{title}</div>
              <div className="text-xs text-gray-500">{desc}</div>
            </div>
          ))}
        </div>

        <div className="bg-green-50 border border-green-200 rounded p-4 mb-4">
          <strong>Ready to dive in?</strong> See the full <a href="/admin-guide">Admin Guide</a> for step-by-step setup and configuration instructions.
        </div>
      </main>
    </DocsLayout>
  );
}
