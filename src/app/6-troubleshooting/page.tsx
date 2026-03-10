import DocsLayout from '../DocsLayout';

export default function Troubleshooting() {
  return (
    <DocsLayout>
      <main className="prose mx-auto py-8">
        <nav className="mb-4 text-sm text-gray-500 flex items-center gap-2">
          <a href="/" className="text-primary-600 hover:underline">Docs</a>
          <span>›</span>
          <span>Troubleshooting</span>
        </nav>

        <div className="bg-primary-50 border border-primary-200 rounded p-6 mb-6">
          <h1 className="text-2xl font-bold mb-2">Troubleshooting Guide</h1>
          <p>Diagnose and resolve common issues with GateFlux installations and operations.</p>
        </div>

        <h2>Installation Issues</h2>
        <h3>API (Laravel) Issues</h3>
        <h4>Composer Install Fails</h4>
        <p><strong>Error:</strong></p>
        <div className="bg-gray-100 border border-gray-200 rounded p-4 mb-4"><pre><code>Your requirements could not be resolved to an installable set of packages.</code></pre></div>
        <p><strong>Solution:</strong></p>
        <div className="bg-gray-100 border border-gray-200 rounded p-4 mb-4"><div className="text-xs font-mono text-gray-600 mb-1">Bash</div><pre className="overflow-x-auto text-xs bg-gray-50 p-2 rounded"><code>{`composer self-update\ncomposer clear-cache\ncomposer install --no-cache`}</code></pre></div>
        <h4>Database Connection Error</h4>
        <p><strong>Error:</strong></p>
        <div className="bg-gray-100 border border-gray-200 rounded p-4 mb-4"><pre><code>SQLSTATE[HY000] [2002] Connection refused</code></pre></div>
        <p><strong>Solutions:</strong></p>
        <ol className="steps list-decimal pl-6 mb-6">
          <li><strong>Verify MySQL is running:</strong><pre><code># Windows\nnet start mysql\n# Linux/Mac\nsudo systemctl status mysql</code></pre></li>
          <li><strong>Check <code>.env</code> database settings:</strong><pre><code>DB_CONNECTION=mysql\nDB_HOST=127.0.0.1\nDB_PORT=3306\nDB_DATABASE=gateflux\nDB_USERNAME=root\nDB_PASSWORD=your_password</code></pre></li>
          <li><strong>Create database if it doesn't exist:</strong><pre><code>CREATE DATABASE gateflux CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;</code></pre></li>
        </ol>
        <h4>Migration Errors</h4>
        <p><strong>Error:</strong></p>
        <div className="bg-gray-100 border border-gray-200 rounded p-4 mb-4"><pre><code>SQLSTATE[42S01]: Base table or view already exists</code></pre></div>
        <p><strong>Solution:</strong></p>
        <div className="bg-gray-100 border border-gray-200 rounded p-4 mb-4"><div className="text-xs font-mono text-gray-600 mb-1">Bash</div><pre className="overflow-x-auto text-xs bg-gray-50 p-2 rounded"><code>{`php artisan migrate:fresh\nphp artisan migrate:rollback\nphp artisan migrate`}</code></pre></div>
        <h4>Permission Errors</h4>
        <p><strong>Error:</strong></p>
        <div className="bg-gray-100 border border-gray-200 rounded p-4 mb-4"><pre><code>The stream or file "storage/logs/laravel.log" could not be opened</code></pre></div>
        <p><strong>Solution:</strong></p>
        <div className="bg-gray-100 border border-gray-200 rounded p-4 mb-4"><div className="text-xs font-mono text-gray-600 mb-1">Bash</div><pre className="overflow-x-auto text-xs bg-gray-50 p-2 rounded"><code>{`icacls storage /grant Users:F /T\nicacls bootstrap\\cache /grant Users:F /T`}</code></pre></div>
        <h3>Web Application Issues</h3>
        <h4>Redirected to Login With Session Notice</h4>
        <p><strong>Symptom:</strong> You are redirected to login and see: <code>Your session ended. Please sign in again.</code></p>
        <p><strong>What it means:</strong> Your authenticated session token is no longer valid (for example, expired session, revoked token, or sign-out in another tab).</p>
        <p><strong>Resolution:</strong></p>
        <ol className="steps list-decimal pl-6 mb-6">
          <li>Sign in again with the correct tenant selected.</li>
          <li>If the issue repeats, clear browser storage for the app domain and login again.</li>
          <li>Confirm your user role has access to the page you are opening after login.</li>
        </ol>
        <p className="mb-4"><strong>Note:</strong> The generic backend text <code>Unauthenticated.</code> is intentionally hidden in the UI to avoid confusion during normal logout and session transitions.</p>

        <h4>Login Error: Society Code Not Found</h4>
        <p><strong>Symptom:</strong> Login fails with <code>Society code not found. Please check and try again.</code></p>
        <p><strong>What it means:</strong> The tenant/society identifier does not match an available society code, slug, or subdomain.</p>
        <p><strong>Resolution:</strong></p>
        <ol className="steps list-decimal pl-6 mb-6">
          <li>Enter the society code exactly as provided by your admin team.</li>
          <li>Remove extra spaces from the beginning/end of the code.</li>
          <li>If unsure, confirm the exact code with your platform administrator.</li>
        </ol>

        <h4>Trial Ending But Billing Cycle Option Is Missing</h4>
        <p><strong>Symptom:</strong> You open Upgrade/Downgrade, but do not see the Monthly/Yearly selector.</p>
        <p><strong>What it means:</strong> The billing cycle selector appears only when the society is currently on trial and trial end is near.</p>
        <p><strong>Resolution:</strong></p>
        <ol className="steps list-decimal pl-6 mb-6">
          <li>Verify the subscription status is <strong>Trial</strong> in <strong>Settings → Billing → Subscription</strong>.</li>
          <li>Check that the trial is close to ending (the selector is shown only in the near-end trial window).</li>
          <li>If trial dates look incorrect, ask a super admin to verify tenant subscription dates.</li>
        </ol>

        <h4>npm Install Fails</h4>
        <p><strong>Error:</strong></p>
        <div className="bg-gray-100 border border-gray-200 rounded p-4 mb-4"><pre><code>npm ERR! ERESOLVE unable to resolve dependency tree</code></pre></div>
        <p><strong>Solution:</strong></p>
        <div className="bg-gray-100 border border-gray-200 rounded p-4 mb-4"><div className="text-xs font-mono text-gray-600 mb-1">Bash</div><pre className="overflow-x-auto text-xs bg-gray-50 p-2 rounded"><code>{`npm cache clean --force\nrm -rf node_modules package-lock.json\nnpm install --legacy-peer-deps`}</code></pre></div>
      </main>
    </DocsLayout >
  );
}
