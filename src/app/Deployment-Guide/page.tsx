import DocsLayout from '../DocsLayout';

export default function DeploymentGuide() {
  return (
    <DocsLayout>
      <main className="prose mx-auto py-8">
        <nav className="mb-4 text-sm text-gray-500 flex items-center gap-2">
          <a href="/" className="text-primary-600 hover:underline">Docs</a>
          <span>›</span>
          <span>Deployment Guide</span>
        </nav>

        <div className="bg-primary-50 border border-primary-200 rounded p-6 mb-6">
          <h1 className="text-2xl font-bold mb-2">GateFlux Deployment & Configuration Guide</h1>
          <p>Complete guide for domain configuration, Hostinger deployment, and APK building.</p>
        </div>

        <div className="bg-white border rounded p-6 mb-8">
          <h2 className="text-xl font-bold mb-2">Table of Contents</h2>
          <ol className="list-decimal pl-6">
            <li><a href="#domain-config" className="text-primary-600 hover:underline">Domain Configuration</a>
              <ul className="list-disc pl-6">
                <li><a href="#api-laravel" className="text-primary-600 hover:underline">API (Laravel)</a></li>
                <li><a href="#web-react" className="text-primary-600 hover:underline">Web (React/Vite)</a></li>
                <li><a href="#mobile-apps" className="text-primary-600 hover:underline">Mobile Apps</a></li>
              </ul>
            </li>
            <li><a href="#hostinger" className="text-primary-600 hover:underline">Hostinger Shared Cloud Hosting Deployment</a>
              <ul className="list-disc pl-6">
                <li><a href="#prerequisites" className="text-primary-600 hover:underline">Prerequisites</a></li>
                <li><a href="#api-deploy" className="text-primary-600 hover:underline">API Deployment</a></li>
                <li><a href="#web-deploy" className="text-primary-600 hover:underline">Web Deployment</a></li>
                <li><a href="#database" className="text-primary-600 hover:underline">Database Setup</a></li>
              </ul>
            </li>
            <li><a href="#mobile-apk" className="text-primary-600 hover:underline">Building Mobile APKs</a>
              <ul className="list-disc pl-6">
                <li><a href="#apk-prereq" className="text-primary-600 hover:underline">Prerequisites</a></li>
                <li><a href="#resident-apk" className="text-primary-600 hover:underline">Resident App APK</a></li>
                <li><a href="#security-apk" className="text-primary-600 hover:underline">Security App APK</a></li>
                <li><a href="#signed-apk" className="text-primary-600 hover:underline">Signed Release APK</a></li>
              </ul>
            </li>
            <li><a href="#ssl" className="text-primary-600 hover:underline">SSL Configuration</a></li>
            <li><a href="#env-ref" className="text-primary-600 hover:underline">Environment Variables Reference</a></li>
            <li><a href="#troubleshooting" className="text-primary-600 hover:underline">Troubleshooting</a></li>
          </ol>
        </div>

        <hr className="my-8" />

        {/* Section 1: Domain Configuration */}
        <section id="domain-config" className="mb-12">
          <h2 className="text-xl font-bold mb-4">1. Domain Configuration</h2>
          <h3 id="api-laravel" className="text-lg font-semibold mt-8 mb-2">1.1 API (Laravel)</h3>
          <div className="bg-gray-50 border rounded p-4 mb-4">
            <h4 className="font-semibold mb-2"><span className="bg-orange-100 text-orange-800 px-2 py-1 rounded mr-2 text-xs">api/.env</span>Update these environment variables:</h4>
            <pre className="overflow-x-auto"><code>{`# Application URL\nAPP_URL=https://api.yourdomain.com\n\n# Tenancy Configuration\nTENANCY_BASE_DOMAIN=yourdomain.com\nTENANCY_HEADER=X-Tenant-ID\nTENANCY_ALLOW_HEADER=true\n\n# Session Domain (if using cookies)\nSESSION_DOMAIN=.yourdomain.com`}</code></pre>
          </div>
          <div className="bg-gray-50 border rounded p-4 mb-4">
            <h4 className="font-semibold mb-2"><span className="bg-orange-100 text-orange-800 px-2 py-1 rounded mr-2 text-xs">api/config/cors.php</span>Update allowed origins:</h4>
            <pre className="overflow-x-auto"><code>{`'allowed_origins' => [\n    'https://app.yourdomain.com',\n    'https://yourdomain.com',\n    'https://*.yourdomain.com',\n],`}</code></pre>
          </div>
          <div className="bg-gray-50 border rounded p-4 mb-4">
            <h4 className="font-semibold mb-2"><span className="bg-orange-100 text-orange-800 px-2 py-1 rounded mr-2 text-xs">api/config/sanctum.php</span>Update stateful domains:</h4>
            <pre className="overflow-x-auto"><code>{`'stateful' => explode(',', env('SANCTUM_STATEFUL_DOMAINS', sprintf(\n    '%s%s',\n    'localhost,localhost:3000,localhost:5173,127.0.0.1,127.0.0.1:8000,::1',\n    ',app.yourdomain.com,api.yourdomain.com'\n))),`}</code></pre>
          </div>
          <h3 id="web-react" className="text-lg font-semibold mt-8 mb-2">1.2 Web (React/Vite)</h3>
          <div className="bg-gray-50 border rounded p-4 mb-4">
            <h4 className="font-semibold mb-2"><span className="bg-orange-100 text-orange-800 px-2 py-1 rounded mr-2 text-xs">web/.env.production</span></h4>
            <pre className="overflow-x-auto"><code>{`VITE_API_BASE_URL=https://api.yourdomain.com/api/v1\nVITE_TENANCY_HEADER=X-Tenant-ID\nVITE_TENANCY_VALUE=`}</code></pre>
          </div>
          <h3 id="mobile-apps" className="text-lg font-semibold mt-8 mb-2">1.3 Mobile Apps</h3>
          <div className="bg-gray-50 border rounded p-4 mb-4">
            <h4 className="font-semibold mb-2"><span className="bg-orange-100 text-orange-800 px-2 py-1 rounded mr-2 text-xs">mobile/packages/shared/src/api/client.js</span></h4>
            <pre className="overflow-x-auto"><code>{`const API_BASE_URL = __DEV__ \n  ? 'http://10.0.2.2:8000/api/v1'      // Android emulator localhost\n  : 'https://api.yourdomain.com/api/v1'; // Production`}</code></pre>
            <p className="text-xs mt-2"><strong>For iOS Simulator:</strong> Use <code>http://localhost:8000/api/v1</code> instead of <code>10.0.2.2</code></p>
          </div>
        </section>

        {/* Section 2: Hostinger Deployment */}
        <section id="hostinger" className="mb-12">
          <h2 className="text-xl font-bold mb-4">2. Hostinger Shared Cloud Hosting Deployment</h2>
          <h3 id="prerequisites" className="text-lg font-semibold mt-8 mb-2">2.1 Prerequisites</h3>
          <ul className="mb-4 list-disc pl-6">
            <li>Hostinger Cloud Hosting plan (Business or higher recommended)</li>
            <li>SSH access enabled</li>
            <li>PHP 8.2+ with required extensions</li>
            <li>MySQL 8.0+ database</li>
            <li>Composer installed</li>
            <li>Node.js 18+ (for building web app locally)</li>
          </ul>
          <h3 id="api-deploy" className="text-lg font-semibold mt-8 mb-2">2.2 API Deployment</h3>
          <h4 className="font-semibold mb-2">Step 1: Create Subdomain</h4>
          <ol className="list-decimal pl-6 mb-4">
            <li>Log in to Hostinger hPanel</li>
            <li>Go to <strong>Domains</strong> → <strong>Subdomains</strong></li>
            <li>Create <code>api.yourdomain.com</code></li>
            <li>Point it to <code>public_html/api/public</code></li>
          </ol>
          <h4 className="font-semibold mb-2">Step 2: Upload Files (Using Git)</h4>
          <pre className="overflow-x-auto"><code>{`# SSH into your server\nssh u123456789@yourdomain.com\n\n# Navigate to public_html\ncd public_html\n\n# Clone repository\ngit clone https://github.com/yourusername/gateflux.git api\n\n# Or pull latest changes\ncd api && git pull origin main`}</code></pre>
          <h4 className="font-semibold mb-2">Step 3: Configure Environment</h4>
          <pre className="overflow-x-auto"><code>{`# SSH into server\ncd public_html/api\n\n# Copy environment file\ncp .env.example .env\n\n# Edit environment file\nnano .env`}</code></pre>
          <div className="bg-gray-50 border rounded p-4 mb-4">
            <h4 className="font-semibold mb-2">Production .env Settings</h4>
            <pre className="overflow-x-auto"><code>{`APP_NAME=GateFlux\nAPP_ENV=production\nAPP_KEY=base64:YOUR_APP_KEY_HERE\nAPP_DEBUG=false\nAPP_URL=https://api.yourdomain.com\n\nDB_CONNECTION=mysql\nDB_HOST=localhost\nDB_PORT=3306\nDB_DATABASE=your_database_name\nDB_USERNAME=your_database_user\nDB_PASSWORD=your_database_password\n\nTENANCY_BASE_DOMAIN=yourdomain.com\nTENANCY_HEADER=X-Tenant-ID\nTENANCY_ALLOW_HEADER=true\n\nCACHE_DRIVER=file\nQUEUE_CONNECTION=database\nSESSION_DRIVER=database\n\nMAIL_MAILER=smtp\nMAIL_HOST=smtp.hostinger.com\nMAIL_PORT=465\nMAIL_USERNAME=your_email@yourdomain.com\nMAIL_PASSWORD=your_email_password\nMAIL_ENCRYPTION=ssl\nMAIL_FROM_ADDRESS=noreply@yourdomain.com\nMAIL_FROM_NAME="GateFlux"`}</code></pre>
          </div>
          <h4 className="font-semibold mb-2">Step 4: Install Dependencies &amp; Setup</h4>
          <pre className="overflow-x-auto"><code>{`# Install PHP dependencies\ncomposer install --optimize-autoloader --no-dev\n\n# Generate application key (if not set)\nphp artisan key:generate\n\n# Run migrations\nphp artisan migrate --force\n\n# Seed database (if needed)\nphp artisan db:seed --force\n\n# Optimize for production\nphp artisan config:cache\nphp artisan route:cache\nphp artisan view:cache\n\n# Set permissions\nchmod -R 775 storage bootstrap/cache`}</code></pre>
          <h4 className="font-semibold mb-2">Step 5: Configure .htaccess</h4>
          <div className="bg-gray-50 border rounded p-4 mb-4">
            <h4 className="font-semibold mb-2"><span className="bg-orange-100 text-orange-800 px-2 py-1 rounded mr-2 text-xs">public_html/api/.htaccess</span></h4>
            <pre className="overflow-x-auto"><code>{`<IfModule mod_rewrite.c>\n    RewriteEngine On\n    RewriteRule ^(.*)$ public/$1 [L]\n</IfModule>`}</code></pre>
          </div>
          <h3 id="web-deploy" className="text-lg font-semibold mt-8 mb-2">2.3 Web Deployment</h3>
          <h4 className="font-semibold mb-2">Step 1: Build Locally</h4>
          <pre className="overflow-x-auto"><code>{`cd web\n\n# Install dependencies\nnpm install\n\n# Create production environment\ncp .env.example .env.production\n# Edit .env.production with production API URL\n\n# Build for production\nnpm run build`}</code></pre>
          <h4 className="font-semibold mb-2">Step 2: Upload Built Files</h4>
          <ol className="list-decimal pl-6 mb-4">
            <li>Create subdomain <code>app.yourdomain.com</code> pointing to <code>public_html/app</code></li>
            <li>Upload contents of <code>web/dist/</code> to <code>public_html/app/</code></li>
          </ol>
          <h4 className="font-semibold mb-2">Step 3: Configure .htaccess for SPA</h4>
          <div className="bg-gray-50 border rounded p-4 mb-4">
            <h4 className="font-semibold mb-2"><span className="bg-orange-100 text-orange-800 px-2 py-1 rounded mr-2 text-xs">public_html/app/.htaccess</span></h4>
            <pre className="overflow-x-auto"><code>{`<IfModule mod_rewrite.c>\n    RewriteEngine On\n    RewriteBase /\n    \n    # Handle Authorization Header\n    RewriteCond %{HTTP:Authorization} ^(.*)\n    RewriteRule .* - [e=HTTP_AUTHORIZATION:%1]\n    \n    # Redirect non-existing files to index.html\n    RewriteCond %{REQUEST_FILENAME} !-f\n    RewriteCond %{REQUEST_FILENAME} !-d\n    RewriteRule ^ index.html [L]\n</IfModule>\n\n# Enable GZIP compression\n<IfModule mod_deflate.c>\n    AddOutputFilterByType DEFLATE text/html text/css application/javascript application/json\n</IfModule>\n\n# Cache static assets\n<IfModule mod_expires.c>\n    ExpiresActive On\n    ExpiresByType image/png "access plus 1 year"\n    ExpiresByType image/jpg "access plus 1 year"\n    ExpiresByType text/css "access plus 1 month"\n    ExpiresByType application/javascript "access plus 1 month"\n</IfModule>`}</code></pre>
          </div>
          <h3 id="database" className="text-lg font-semibold mt-8 mb-2">2.4 Database Setup</h3>
          <ol className="list-decimal pl-6 mb-4">
            <li>Go to <strong>Databases</strong> → <strong>MySQL Databases</strong> in hPanel</li>
            <li>Create new database: <code>gateflux_prod</code></li>
            <li>Create database user with strong password</li>
            <li>Grant all privileges to the user</li>
            <li>Note down credentials for <code>.env</code></li>
          </ol>
          <h4 className="font-semibold mb-2">Import Existing Data</h4>
          <pre className="overflow-x-auto"><code>{`# Export from local\nmysqldump -u root -p gateflux > gateflux_backup.sql\n\n# Import on Hostinger (via SSH or phpMyAdmin)\nmysql -u your_db_user -p your_database < gateflux_backup.sql`}</code></pre>
        </section>

        <hr className="my-8" />

        {/* Section 3: Building Mobile APKs */}
        <section id="mobile-apk" className="mb-12">
          <h2 className="text-xl font-bold mb-4">3. Building Mobile APKs</h2>
          <h3 id="apk-prereq" className="text-lg font-semibold mt-8 mb-2">3.1 Prerequisites</h3>
          <ul className="mb-4 list-disc pl-6">
            <li>Node.js 18+</li>
            <li>Java Development Kit (JDK) 17</li>
            <li>Android Studio with SDK</li>
            <li>Android SDK Platform 34 (or target version)</li>
            <li>Android SDK Build-Tools 34.0.0</li>
          </ul>
          <h4 className="font-semibold mb-2">Environment Variables (Windows PowerShell)</h4>
          <pre className="overflow-x-auto"><code>{`$env:ANDROID_HOME = "C:\\Users\\YourUser\\AppData\\Local\\Android\\Sdk"\n$env:JAVA_HOME = "C:\\Program Files\\Java\\jdk-17"\n$env:Path += ";$env:ANDROID_HOME\\platform-tools;$env:ANDROID_HOME\\tools"`}</code></pre>
          <h4 className="font-semibold mb-2">Environment Variables (macOS/Linux)</h4>
          <pre className="overflow-x-auto"><code>{`export ANDROID_HOME=$HOME/Android/Sdk\nexport JAVA_HOME=/usr/lib/jvm/java-17-openjdk\nexport PATH=$PATH:$ANDROID_HOME/platform-tools:$ANDROID_HOME/tools`}</code></pre>
          <h3 id="resident-apk" className="text-lg font-semibold mt-8 mb-2">3.2 Resident App APK</h3>
          <pre className="overflow-x-auto"><code>{`# Navigate to mobile directory\ncd mobile\n\n# Install dependencies\nyarn install\n\n# Navigate to resident app\ncd apps/resident/android\n\n# Clean previous builds\n./gradlew clean\n\n# Build debug APK\n./gradlew assembleDebug\n\n# Build release APK\n./gradlew assembleRelease`}</code></pre>
          <div className="bg-gray-50 border rounded p-4 mb-4">
            <h4 className="font-semibold mb-2">APK Locations</h4>
            <ul className="list-disc pl-6">
              <li><strong>Debug:</strong> <code>apps/resident/android/app/build/outputs/apk/debug/app-debug.apk</code></li>
              <li><strong>Release:</strong> <code>apps/resident/android/app/build/outputs/apk/release/app-release.apk</code></li>
            </ul>
          </div>
          <h3 id="security-apk" className="text-lg font-semibold mt-8 mb-2">3.3 Security App APK</h3>
          <pre className="overflow-x-auto"><code>{`# Navigate to security app\ncd mobile/apps/security/android\n\n# Clean and build\n./gradlew clean\n./gradlew assembleDebug\n./gradlew assembleRelease`}</code></pre>
          <h3 id="signed-apk" className="text-lg font-semibold mt-8 mb-2">3.4 Signed Release APK</h3>
          <p>For Play Store distribution, you need a signed APK.</p>
          <h4 className="font-semibold mb-2">Step 1: Generate Keystore</h4>
          <pre className="overflow-x-auto"><code>{`keytool -genkeypair -v -storetype PKCS12 -keystore gateflux-release.keystore -alias gateflux-key -keyalg RSA -keysize 2048 -validity 10000`}</code></pre>
          <div className="bg-accent-50 border-l-4 border-accent-400 rounded p-4 mb-4">
            <strong className="text-accent-700">⚠️ Important:</strong> Store the keystore file securely! You cannot recover it if lost.
          </div>
          <h4 className="font-semibold mb-2">Step 2: Configure Signing</h4>
          <div className="bg-gray-50 border rounded p-4 mb-4">
            <h4 className="font-semibold mb-2"><span className="bg-orange-100 text-orange-800 px-2 py-1 rounded mr-2 text-xs">apps/resident/android/gradle.properties</span></h4>
            <pre className="overflow-x-auto"><code>{`MYAPP_RELEASE_STORE_FILE=gateflux-release.keystore\nMYAPP_RELEASE_KEY_ALIAS=gateflux-key\nMYAPP_RELEASE_STORE_PASSWORD=your_store_password\nMYAPP_RELEASE_KEY_PASSWORD=your_key_password`}</code></pre>
          </div>
          <div className="bg-gray-50 border rounded p-4 mb-4">
            <h4 className="font-semibold mb-2"><span className="bg-orange-100 text-orange-800 px-2 py-1 rounded mr-2 text-xs">apps/resident/android/app/build.gradle</span></h4>
            <p>Update the <code>signingConfigs</code> block:</p>
            <pre className="overflow-x-auto"><code>{`signingConfigs {\n    debug {\n        storeFile file('debug.keystore')\n        storePassword 'android'\n        keyAlias 'androiddebugkey'\n        keyPassword 'android'\n    }\n    release {\n        if (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) {\n            storeFile file(MYAPP_RELEASE_STORE_FILE)\n            storePassword MYAPP_RELEASE_STORE_PASSWORD\n            keyAlias MYAPP_RELEASE_KEY_ALIAS\n            keyPassword MYAPP_RELEASE_KEY_PASSWORD\n        }\n    }\n}\nbuildTypes {\n    release {\n        signingConfig signingConfigs.release\n        minifyEnabled true\n        shrinkResources true\n        proguardFiles getDefaultProguardFile("proguard-android-optimize.txt"), "proguard-rules.pro"\n    }\n}`}</code></pre>
          </div>
          <h4 className="font-semibold mb-2">Step 3: Build Signed APK</h4>
          <pre className="overflow-x-auto"><code>{`cd apps/resident/android\n./gradlew assembleRelease`}</code></pre>
          <h4 className="font-semibold mb-2">Step 4: Build AAB for Play Store</h4>
          <pre className="overflow-x-auto"><code>{`./gradlew bundleRelease`}</code></pre>
          <p className="text-xs mt-2"><strong>AAB Location:</strong> <code>app/build/outputs/bundle/release/app-release.aab</code></p>
          <h4 className="font-semibold mb-2">Update App Version</h4>
          <p>Before each release, update version in <code>build.gradle</code>:</p>
          <pre className="overflow-x-auto"><code>{`defaultConfig {\n    applicationId "com.gatefluxresident"\n    minSdkVersion rootProject.ext.minSdkVersion\n    targetSdkVersion rootProject.ext.targetSdkVersion\n    versionCode 2          // Increment for each release\n    versionName "1.1.0"    // Semantic version\n}`}</code></pre>
        </section>

        <hr className="my-8" />

        {/* Section 4: SSL Configuration */}
        <section id="ssl" className="mb-12">
          <h2 className="text-xl font-bold mb-4">4. SSL Configuration</h2>
          <p>Hostinger provides free SSL via Let's Encrypt.</p>
          <ol className="list-decimal pl-6 mb-4">
            <li>Go to <strong>SSL</strong> in hPanel</li>
            <li>Select your domains:
              <ul className="list-disc pl-6">
                <li><code>yourdomain.com</code></li>
                <li><code>api.yourdomain.com</code></li>
                <li><code>app.yourdomain.com</code></li>
              </ul>
            </li>
            <li>Click <strong>Install SSL</strong></li>
            <li>Enable <strong>Force HTTPS</strong></li>
          </ol>
          <h4 className="font-semibold mb-2">Force HTTPS in .htaccess</h4>
          <pre className="overflow-x-auto"><code>{`RewriteEngine On\nRewriteCond %{HTTPS} off\nRewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]`}</code></pre>
        </section>

        <hr className="my-8" />

        {/* Section 5: Environment Variables Reference */}
        <section id="env-ref" className="mb-12">
          <h2 className="text-xl font-bold mb-4">5. Environment Variables Reference</h2>
          <h3 className="text-lg font-semibold mt-8 mb-2">API (.env)</h3>
          <table className="w-full text-xs border rounded mb-6">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-2 text-left">Variable</th>
                <th className="py-2 px-2 text-left">Description</th>
                <th className="py-2 px-2 text-left">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>APP_URL</code></td>
                <td>Full API URL</td>
                <td><code>https://api.yourdomain.com</code></td>
              </tr>
              <tr>
                <td><code>APP_ENV</code></td>
                <td>Environment</td>
                <td><code>production</code></td>
              </tr>
              <tr>
                <td><code>APP_DEBUG</code></td>
                <td>Debug mode</td>
                <td><code>false</code></td>
              </tr>
              <tr>
                <td><code>DB_HOST</code></td>
                <td>Database host</td>
                <td><code>localhost</code></td>
              </tr>
              <tr>
                <td><code>DB_DATABASE</code></td>
                <td>Database name</td>
                <td><code>gateflux_prod</code></td>
              </tr>
              <tr>
                <td><code>DB_USERNAME</code></td>
                <td>Database user</td>
                <td><code>gateflux_user</code></td>
              </tr>
              <tr>
                <td><code>DB_PASSWORD</code></td>
                <td>Database password</td>
                <td><code>secure_password</code></td>
              </tr>
              <tr>
                <td><code>TENANCY_BASE_DOMAIN</code></td>
                <td>Base domain</td>
                <td><code>yourdomain.com</code></td>
              </tr>
              <tr>
                <td><code>MAIL_HOST</code></td>
                <td>SMTP host</td>
                <td><code>smtp.hostinger.com</code></td>
              </tr>
              <tr>
                <td><code>MAIL_PORT</code></td>
                <td>SMTP port</td>
                <td><code>465</code></td>
              </tr>
            </tbody>
          </table>
          <h3 className="text-lg font-semibold mt-8 mb-2">Web (.env.production)</h3>
          <table className="w-full text-xs border rounded mb-6">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-2 text-left">Variable</th>
                <th className="py-2 px-2 text-left">Description</th>
                <th className="py-2 px-2 text-left">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>VITE_API_BASE_URL</code></td>
                <td>API endpoint</td>
                <td><code>https://api.yourdomain.com/api/v1</code></td>
              </tr>
              <tr>
                <td><code>VITE_TENANCY_HEADER</code></td>
                <td>Tenant header name</td>
                    <td><code>X-Tenant-ID</code></td>
              </tr>
            </tbody>
          </table>
                  <p className="text-xs text-gray-600">Backward compatibility: API still accepts <code>X-Tenant</code>, but <code>X-Tenant-ID</code> is now the default and recommended header.</p>
          <h3 className="text-lg font-semibold mt-8 mb-2">Mobile (client.js)</h3>
          <table className="w-full text-xs border rounded mb-6">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-2 text-left">Variable</th>
                <th className="py-2 px-2 text-left">Description</th>
                <th className="py-2 px-2 text-left">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>API_BASE_URL</code></td>
                <td>Production API</td>
                <td><code>https://api.yourdomain.com/api/v1</code></td>
              </tr>
            </tbody>
          </table>
        </section>

        <hr className="my-8" />

        {/* Section 6: Troubleshooting */}
        <section id="troubleshooting" className="mb-12">
          <h2 className="text-xl font-bold mb-4">6. Troubleshooting</h2>
          <h3 className="text-lg font-semibold mt-8 mb-2">API Issues</h3>
          <h4 className="font-semibold mb-2">500 Internal Server Error</h4>
          <pre className="overflow-x-auto"><code>{`# Check Laravel logs\ntail -f storage/logs/laravel.log\n\n# Fix permissions\nchmod -R 775 storage bootstrap/cache\nchown -R www-data:www-data storage bootstrap/cache`}</code></pre>
          <h4 className="font-semibold mb-2">CORS Errors</h4>
          <ul className="mb-4 list-disc pl-6">
            <li>Check <code>config/cors.php</code> allowed origins</li>
            <li>Verify <code>api/.htaccess</code> has correct headers</li>
            <li>Clear config cache: <code>php artisan config:clear</code></li>
          </ul>
          <h4 className="font-semibold mb-2">Database Connection Failed</h4>
          <ul className="mb-4 list-disc pl-6">
            <li>Verify credentials in <code>.env</code></li>
            <li>Check if database exists</li>
            <li>Ensure MySQL user has proper privileges</li>
          </ul>
          <h3 className="text-lg font-semibold mt-8 mb-2">Web Issues</h3>
          <h4 className="font-semibold mb-2">Blank Page</h4>
          <ul className="mb-4 list-disc pl-6">
            <li>Check browser console for errors</li>
            <li>Verify API URL in <code>.env.production</code></li>
            <li>Check <code>.htaccess</code> SPA routing</li>
          </ul>
          <h3 className="text-lg font-semibold mt-8 mb-2">Mobile Build Issues</h3>
          <h4 className="font-semibold mb-2">Gradle Build Failed</h4>
          <pre className="overflow-x-auto"><code>{`# Clean and rebuild\ncd android\n./gradlew clean\n./gradlew assembleDebug --stacktrace`}</code></pre>
          <h4 className="font-semibold mb-2">SDK Not Found</h4>
          <ul className="mb-4 list-disc pl-6">
            <li>Verify <code>ANDROID_HOME</code> environment variable</li>
            <li>Install required SDK platforms via Android Studio</li>
          </ul>
          <h4 className="font-semibold mb-2">Metro Bundler Issues</h4>
          <pre className="overflow-x-auto"><code>{`# Reset Metro cache\nnpx react-native start --reset-cache`}</code></pre>
        </section>

        <hr className="my-8" />

        {/* Local Demo Environment */}
        <section id="demo-env" className="mb-12">
          <h2 className="text-xl font-bold mb-4">Local Demo Environment</h2>
          <p>When running locally (<code>APP_ENV=local</code>), seeding creates a single demo society with realistic data for development and testing.</p>
          <pre className="overflow-x-auto"><code>{`php artisan migrate:fresh --seed`}</code></pre>
          <h3 className="text-lg font-semibold mt-8 mb-2">Demo Society</h3>
          <table className="w-full text-xs border rounded mb-6">
            <tbody>
              <tr><th className="py-2 px-2 text-left">Field</th><th className="py-2 px-2 text-left">Value</th></tr>
              <tr><td>Name</td><td>Heritage Housing Society</td></tr>
              <tr><td>Subdomain</td><td><code>heritage</code></td></tr>
              <tr><td>Plan</td><td>Professional</td></tr>
            </tbody>
          </table>
          <h3 className="text-lg font-semibold mt-8 mb-2">Demo Credentials</h3>
          <table className="w-full text-xs border rounded mb-6">
            <tbody>
              <tr><th className="py-2 px-2 text-left">Role</th><th className="py-2 px-2 text-left">Email</th><th className="py-2 px-2 text-left">Password</th></tr>
              <tr><td>Society Admin</td><td><code>admin@heritage.test</code></td><td><code>password</code></td></tr>
              <tr><td>Guard 1</td><td><code>guard1@heritage.test</code></td><td><code>password</code></td></tr>
              <tr><td>Guard 2</td><td><code>guard2@heritage.test</code></td><td><code>password</code></td></tr>
              <tr><td>Guard 3</td><td><code>guard3@heritage.test</code></td><td><code>password</code></td></tr>
              <tr><td>Resident</td><td><code>vikram-singh@heritage.test</code></td><td><code>password</code></td></tr>
              <tr><td>Resident</td><td><code>meera-patel@heritage.test</code></td><td><code>password</code></td></tr>
              <tr><td>Resident</td><td><code>amit-joshi@heritage.test</code></td><td><code>password</code></td></tr>
            </tbody>
          </table>
          <p>On the login screen, enter <code>heritage</code> as the subdomain to access the demo society.</p>
        </section>

        <hr className="my-8" />

        {/* Quick Reference Commands */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4">Quick Reference Commands</h2>
          <h3 className="text-lg font-semibold mt-8 mb-2">Deploy API Update</h3>
          <pre className="overflow-x-auto"><code>{`cd public_html/api\ngit pull origin main\ncomposer install --optimize-autoloader --no-dev\nphp artisan migrate --force\nphp artisan config:cache\nphp artisan route:cache\nphp artisan view:cache`}</code></pre>
          <h3 className="text-lg font-semibold mt-8 mb-2">Deploy Web Update</h3>
          <pre className="overflow-x-auto"><code>{`# Build locally\ncd web\nnpm run build\n\n# Upload dist/ contents to server`}</code></pre>
          <h3 className="text-lg font-semibold mt-8 mb-2">Build Both APKs</h3>
          <pre className="overflow-x-auto"><code>{`cd mobile\n\n# Resident App\ncd apps/resident/android && ./gradlew assembleRelease && cd ../../..\n\n# Security App\ncd apps/security/android && ./gradlew assembleRelease && cd ../../..`}</code></pre>
        </section>

        <hr className="my-8" />

        {/* Checklist */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4">Checklist Before Going Live</h2>
          <ul className="list-none pl-0 mb-6">
            <li className="pl-8 relative before:content-['☐'] before:absolute before:left-0 before:text-lg before:top-1">Update all domain references in code</li>
            <li className="pl-8 relative before:content-['☐'] before:absolute before:left-0 before:text-lg before:top-1">Set <code>APP_DEBUG=false</code> in production</li>
            <li className="pl-8 relative before:content-['☐'] before:absolute before:left-0 before:text-lg before:top-1">Configure SSL certificates</li>
            <li className="pl-8 relative before:content-['☐'] before:absolute before:left-0 before:text-lg before:top-1">Set up database backups</li>
            <li className="pl-8 relative before:content-['☐'] before:absolute before:left-0 before:text-lg before:top-1">Configure email (SMTP)</li>
            <li className="pl-8 relative before:content-['☐'] before:absolute before:left-0 before:text-lg before:top-1">Test all API endpoints</li>
            <li className="pl-8 relative before:content-['☐'] before:absolute before:left-0 before:text-lg before:top-1">Test web app in production</li>
            <li className="pl-8 relative before:content-['☐'] before:absolute before:left-0 before:text-lg before:top-1">Build and test both mobile APKs</li>
            <li className="pl-8 relative before:content-['☐'] before:absolute before:left-0 before:text-lg before:top-1">Set up error monitoring (optional)</li>
            <li className="pl-8 relative before:content-['☐'] before:absolute before:left-0 before:text-lg before:top-1">Configure queue workers (if using)</li>
            <li className="pl-8 relative before:content-['☐'] before:absolute before:left-0 before:text-lg before:top-1">Set up cron jobs for scheduled tasks</li>
          </ul>
        </section>

        <footer className="text-center text-gray-400 mt-12 pt-8 border-t">
          <p className="font-bold">GateFlux Deployment Guide</p>
          <p>Last Updated: February 2026</p>
        </footer>
      </main>
    </DocsLayout>
  );
}
