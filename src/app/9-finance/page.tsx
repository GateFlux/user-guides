import DocsLayout from '../DocsLayout';

export default function Finance() {
  return (
    <DocsLayout>
    <main className="prose mx-auto py-8">
      <nav className="mb-4 text-sm text-gray-500 flex items-center gap-2">
        <a href="/" className="text-blue-600 hover:underline">Docs</a>
        <span>›</span>
        <span>Finance & Expenses</span>
      </nav>

      <div className="bg-blue-50 border border-blue-200 rounded p-6 mb-6">
        <h1 className="text-2xl font-bold mb-2">Finance & Expenses Guide</h1>
        <p>Manage expenses, budgets, and approval workflows with Treasurer and President oversight.</p>
      </div>

      <h2>Overview</h2>
      <ul>
        <li><strong>Expense Management</strong> - Track and categorize all society expenses</li>
        <li><strong>Approval Workflow</strong> - Multi-level approval with configurable thresholds</li>
        <li><strong>Budget Tracking</strong> - Budget vs actual comparison</li>
        <li><strong>Treasurer Dashboard</strong> - Consolidated financial overview</li>
      </ul>

      <h2>Expense Approval Workflow</h2>
      <h3>Dual Approval System</h3>
      <p>High-value expenses require approval from both Treasurer and President:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-100 border border-gray-200 rounded p-4">
          <h4 className="font-semibold mb-2">Basic Approval</h4>
          <p>Expenses below threshold (default ₹50,000) require only Treasurer approval.</p>
        </div>
        <div className="bg-gray-100 border border-gray-200 rounded p-4">
          <h4 className="font-semibold mb-2">Dual Approval</h4>
          <p>High-value expenses require both Treasurer AND President approval before payment.</p>
        </div>
      </div>

      <h3>Approval Thresholds</h3>
      <table className="table-auto border-collapse w-full mb-8">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-2 py-1">Amount Range</th>
            <th className="border px-2 py-1">Required Approvals</th>
            <th className="border px-2 py-1">Approvers</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border px-2 py-1">₹0 - ₹10,000</td><td className="border px-2 py-1">1</td><td className="border px-2 py-1">Treasurer</td></tr>
          <tr><td className="border px-2 py-1">₹10,001 - ₹50,000</td><td className="border px-2 py-1">1</td><td className="border px-2 py-1">Treasurer</td></tr>
          <tr><td className="border px-2 py-1">₹50,001+</td><td className="border px-2 py-1">2</td><td className="border px-2 py-1">Treasurer + President</td></tr>
        </tbody>
      </table>
    </main>
        </DocsLayout >
      );
    }
