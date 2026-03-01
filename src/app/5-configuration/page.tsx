import DocsLayout from '../DocsLayout';

export default function Configuration() {
  return (
    <DocsLayout>
      <main className="prose mx-auto py-8">
        <nav className="mb-4 text-sm text-gray-500 flex items-center gap-2">
          <a href="/" className="text-primary-600 hover:underline">Docs</a>
          <span>›</span>
          <span>Configuration</span>
        </nav>
        
      <div className="bg-primary-50 border border-primary-200 rounded p-6 mb-6">
        <h1 className="text-2xl font-bold mb-2">Configuration Guide</h1>
        <p>
          Configure GateFlux for your society's specific requirements including
          environment setup, system settings, and customization options.
        </p>
      </div>

      <h2>Environment Configuration</h2>

      <h3>API Configuration (.env)</h3>
      <p>The API configuration file is located at <code>api/.env</code>. Key settings:</p>

      <div className="bg-gray-100 border border-gray-200 rounded p-4 mb-4">
        <div className="text-xs font-mono text-gray-600 mb-1">ENV</div>
        <pre className="overflow-x-auto text-xs bg-gray-50 p-2 rounded">
          <code>{`# Application Settings
APP_NAME=GateFlux
APP_ENV=production
APP_KEY=base64:your_generated_key
APP_DEBUG=false
APP_URL=https://api.yourdomain.com

# Database Configuration
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=gateflux
DB_USERNAME=gateflux_user
DB_PASSWORD=secure_password

# Cache & Session
CACHE_DRIVER=redis
SESSION_DRIVER=redis
QUEUE_CONNECTION=redis

# Redis Configuration
REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

# Mail Configuration
MAIL_MAILER=smtp
MAIL_HOST=smtp.mailgun.org
MAIL_PORT=587
MAIL_USERNAME=your_username
MAIL_PASSWORD=your_password
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=noreply@yourdomain.com
MAIL_FROM_NAME="\${APP_NAME}"

# SMS Configuration
SMS_PROVIDER=twilio
TWILIO_SID=your_twilio_sid
TWILIO_TOKEN=your_twilio_token
TWILIO_FROM=+1234567890

# Push Notifications
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_CREDENTIALS=/path/to/firebase-credentials.json

# File Storage
FILESYSTEM_DISK=s3
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
AWS_DEFAULT_REGION=ap-south-1
AWS_BUCKET=gateflux-uploads`}</code>
        </pre>
      </div>

      <h3>Web Application Configuration</h3>
      <p>Configure the web app in <code>web/.env</code>:</p>

      <div className="bg-gray-100 border border-gray-200 rounded p-4 mb-4">
        <div className="text-xs font-mono text-gray-600 mb-1">ENV</div>
        <pre className="overflow-x-auto text-xs bg-gray-50 p-2 rounded">
          <code>{`VITE_API_URL=https://api.yourdomain.com/api
VITE_APP_NAME=GateFlux
VITE_PUSHER_APP_KEY=your_pusher_key
VITE_PUSHER_APP_CLUSTER=ap2`}</code>
        </pre>
      </div>

      <h3>Mobile Application Configuration</h3>
      <p>Configure mobile apps in <code>mobile/.env</code>:</p>

      <div className="bg-gray-100 border border-gray-200 rounded p-4 mb-4">
        <div className="text-xs font-mono text-gray-600 mb-1">ENV</div>
        <pre className="overflow-x-auto text-xs bg-gray-50 p-2 rounded">
          <code>{`API_URL=https://api.yourdomain.com/api
GOOGLE_MAPS_API_KEY=your_google_maps_key
FIREBASE_PROJECT_ID=your_project_id`}</code>
        </pre>
      </div>
      </main>
          </DocsLayout>
        );
      }
