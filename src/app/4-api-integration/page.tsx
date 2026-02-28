import DocsLayout from '../DocsLayout';

export default function ApiIntegration() {
  return (
      <DocsLayout>
        <main className="prose mx-auto py-8">
          <nav className="mb-4 text-sm text-gray-500 flex items-center gap-2">
            <a href="/" className="text-blue-600 hover:underline">Docs</a>
            <span>›</span>
            <span>API Integration</span>
          </nav>

          <div className="bg-blue-50 border border-blue-200 rounded p-6 mb-6">
            <h1 className="text-2xl font-bold mb-2">API Integration Guide</h1>
            <p>Complete reference for integrating with the GateFlux REST API.</p>
          </div>

          <h2>Overview</h2>
          <p>This guide covers integrating with the GateFlux REST API. The API follows RESTful conventions and uses JSON for request and response payloads.</p>

          <h2>Base URL</h2>
          <table className="table-auto border-collapse w-full mb-8">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-2 py-1">Environment</th>
                <th className="border px-2 py-1">Base URL</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border px-2 py-1">Development</td><td className="border px-2 py-1"><code>http://localhost:8000/api</code></td></tr>
              <tr><td className="border px-2 py-1">Staging</td><td className="border px-2 py-1"><code>https://staging-api.gateflux.co/api</code></td></tr>
              <tr><td className="border px-2 py-1">Production</td><td className="border px-2 py-1"><code>https://api.gateflux.co/api</code></td></tr>
            </tbody>
          </table>

          <h2>Authentication</h2>
          <p>GateFlux uses Laravel Sanctum for token-based authentication.</p>

          <h3>Login</h3>
          <div className="bg-gray-100 border border-gray-200 rounded p-4 mb-4">
            <div className="text-xs font-mono text-gray-600 mb-1">POST /api/auth/login</div>
            <pre className="overflow-x-auto text-xs bg-gray-50 p-2 rounded"><code>{`POST /api/auth/login\nContent-Type: application/json\n\n{\n    "email": "user@example.com",\n    "password": "your_password",\n    "device_name": "web_browser"\n}`}</code></pre>
          </div>

          <p><strong>Response:</strong></p>
          <div className="bg-gray-100 border border-gray-200 rounded p-4 mb-4">
            <div className="text-xs font-mono text-gray-600 mb-1">JSON</div>
            <pre className="overflow-x-auto text-xs bg-gray-50 p-2 rounded"><code>{`{\n    "success": true,\n    "data": {\n        "user": {\n            "id": 1,\n            "name": "John Doe",\n            "email": "user@example.com",\n            "role": "society_admin"\n        },\n        "token": "1|abc123xyz456...",\n        "token_type": "Bearer",\n        "expires_at": "2024-03-16T10:30:00Z"\n    }\n}`}</code></pre>
          </div>

          <h3>Using the Token</h3>
          <p>Include the token in all subsequent requests:</p>
          <div className="bg-gray-100 border border-gray-200 rounded p-4 mb-4">
            <div className="text-xs font-mono text-gray-600 mb-1">GET /api/societies</div>
            <pre className="overflow-x-auto text-xs bg-gray-50 p-2 rounded"><code>{`GET /api/societies\nAuthorization: Bearer 1|abc123xyz456...\nContent-Type: application/json`}</code></pre>
          </div>

          <h3>Logout</h3>
          <div className="bg-gray-100 border border-gray-200 rounded p-4 mb-4">
            <div className="text-xs font-mono text-gray-600 mb-1">POST /api/auth/logout</div>
            <pre className="overflow-x-auto text-xs bg-gray-50 p-2 rounded"><code>{`POST /api/auth/logout\nAuthorization: Bearer <token>`}</code></pre>
          </div>

          <h2>API Response Format</h2>

          <h3>Success Response</h3>
          <div className="bg-gray-100 border border-gray-200 rounded p-4 mb-4">
            <div className="text-xs font-mono text-gray-600 mb-1">JSON</div>
            <pre className="overflow-x-auto text-xs bg-gray-50 p-2 rounded"><code>{`{\n    "success": true,\n    "data": { ... },\n    "message": "Operation successful"\n}`}</code></pre>
          </div>

          <h3>Paginated Response</h3>
          <div className="bg-gray-100 border border-gray-200 rounded p-4 mb-4">
            <div className="text-xs font-mono text-gray-600 mb-1">JSON</div>
            <pre className="overflow-x-auto text-xs bg-gray-50 p-2 rounded"><code>{`{\n    "success": true,\n    "data": [ ... ],\n    "meta": {\n        "current_page": 1,\n        "from": 1,\n        "last_page": 10,\n        "per_page": 15,\n        "to": 15,\n        "total": 150\n    },\n    "links": {\n        "first": "http://api.gateflux.co/api/visitors?page=1",\n        "last": "http://api.gateflux.co/api/visitors?page=10",\n        "prev": null,\n        "next": "http://api.gateflux.co/api/visitors?page=2"\n    }\n}`}</code></pre>
          </div>

          <h3>Error Response</h3>
          <div className="bg-gray-100 border border-gray-200 rounded p-4 mb-4">
            <div className="text-xs font-mono text-gray-600 mb-1">JSON</div>
            <pre className="overflow-x-auto text-xs bg-gray-50 p-2 rounded"><code>{`{\n    "success": false,\n    "message": "Validation failed",\n    "errors": {\n        "email": ["The email field is required."],\n        "password": ["The password must be at least 8 characters."]\n    }\n}`}</code></pre>
          </div>
        </main>
      </DocsLayout>
  );
}
