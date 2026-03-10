import DocsLayout from '../DocsLayout';

export default function SocietySignupGuidePage() {
  return (
    <DocsLayout>
      <main className="prose mx-auto py-8">
        <nav className="mb-4 flex items-center gap-2 text-sm text-gray-500">
          <a href="/" className="text-primary-600 hover:underline">Help Center</a>
          <span>›</span>
          <span>Society Signup and Verification</span>
        </nav>

        <div className="mb-6 rounded border border-primary-200 bg-primary-50 p-6">
          <h1 className="mb-2 text-2xl font-bold">Society Signup and Verification Guide</h1>
          <p>Use this guide to create a new society workspace from the marketing website, verify your account, and continue onboarding in the GateFlux app.</p>
        </div>

        <h2>Signup Entry Point</h2>
        <ul>
          <li><strong>Marketing site only:</strong> <code>https://gateflux.co/signup</code></li>
          <li><strong>Application login:</strong> <code>https://app.gateflux.co/auth/login</code></li>
        </ul>
        <p>Society registration is not available inside the app login screen. New societies must sign up from the marketing website.</p>

        <h2>Plan Selection Behavior</h2>
        <h3>Scenario A: Coming from Pricing</h3>
        <p>If you click a pricing CTA, signup opens with a preselected plan:</p>
        <ul>
          <li><code>/signup?plan=starter</code></li>
          <li><code>/signup?plan=essential</code></li>
          <li><code>/signup?plan=professional</code></li>
        </ul>
        <p>The selected plan summary is shown with a <strong>Change Plan</strong> option.</p>

        <h3>Scenario B: Direct Signup</h3>
        <p>If you open <code>/signup</code> directly, you must choose a plan before submitting.</p>

        <h2>Required Signup Details</h2>
        <h3>Society Information</h3>
        <ul>
          <li>Society Name</li>
          <li>City</li>
          <li>State (searchable dropdown)</li>
          <li>Country (India, read-only)</li>
          <li>Number of Flats / Units</li>
        </ul>

        <h3>Admin Information</h3>
        <ul>
          <li>Admin Full Name</li>
          <li>Admin Email</li>
          <li>Mobile Number (10-digit India format)</li>
        </ul>

        <h3>Account Security</h3>
        <ul>
          <li>Password and Confirm Password</li>
          <li>Terms of Service and Privacy Policy acceptance</li>
        </ul>

        <h2>Verification Flow</h2>
        <ol>
          <li>Submit society signup.</li>
          <li>Verify email using the verification token or email link.</li>
          <li>Verify mobile number using OTP.</li>
          <li>Complete account activation with password.</li>
        </ol>

        <p>You can manage verification status and resend actions from:</p>
        <ul>
          <li><code>https://gateflux.co/verify-account</code></li>
          <li><code>https://gateflux.co/verify-email</code></li>
          <li><code>https://gateflux.co/verify-phone</code></li>
        </ul>

        <h2>Security and Limits</h2>
        <ul>
          <li>Signup is rate-limited.</li>
          <li>Email and OTP resend cooldown: 60 seconds.</li>
          <li>Resend limit: up to 5 per hour.</li>
          <li>OTP validity: 5 minutes.</li>
          <li>reCAPTCHA checks can be enabled for signup and resend actions.</li>
        </ul>

        <h2>Final Redirect</h2>
        <p>After successful verification and completion, you are redirected to your setup workspace:</p>
        <p><code>https://app.gateflux.co/{'{society_slug}'}/setup</code></p>
        <p>Example: <code>https://app.gateflux.co/green-valley-residency/setup</code></p>
      </main>
    </DocsLayout>
  );
}
