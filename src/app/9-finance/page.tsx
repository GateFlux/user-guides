import DocsLayout from '../DocsLayout';

export default function Finance() {
  return (
    <DocsLayout>
      <main className="prose mx-auto py-8">
        <nav className="mb-4 text-sm text-gray-500 flex items-center gap-2">
          <a href="/" className="text-primary-600 hover:underline">Help Center</a>
          <span>›</span>
          <span>Finance & Expenses</span>
        </nav>

        <div className="bg-primary-50 border border-primary-200 rounded p-6 mb-6">
          <h1 className="text-2xl font-bold mb-2">Finance & Expenses Guide</h1>
          <p>Manage society expenses, budgets, dues collection, and financial reporting with full Treasurer and President oversight.</p>
        </div>

        <h2>Overview</h2>
        <ul>
          <li><strong>Expense Management</strong> — Submit, categorize, and track all society expenses</li>
          <li><strong>Approval Workflow</strong> — Multi-level approval with configurable thresholds</li>
          <li><strong>Budget Tracking</strong> — Set budgets per category and monitor actuals</li>
          <li><strong>Dues & Collections</strong> — Generate maintenance invoices and track resident payments</li>
          <li><strong>Reports & Exports</strong> — Monthly summaries, receipts, and financial statements</li>
        </ul>

        <h2>Expenses</h2>

        <h3>Submitting an Expense</h3>
        <ol className="steps list-decimal pl-6 mb-6">
          <li>Navigate to <strong>Finance</strong> → <strong>Expenses</strong></li>
          <li>Click <strong>Add Expense</strong></li>
          <li>Fill in:
            <ul className="list-disc pl-6">
              <li><strong>Title</strong> — What the expense is for (e.g., "CCTV repair")</li>
              <li><strong>Amount</strong> — Expense amount in ₹</li>
              <li><strong>Category</strong> — Maintenance, utilities, security, housekeeping, admin, etc.</li>
              <li><strong>Date</strong> — When the expense was incurred</li>
              <li><strong>Vendor / Payee</strong> — Who the payment goes to</li>
              <li><strong>Receipt</strong> — Upload a photo or PDF of the receipt (optional but recommended)</li>
              <li><strong>Notes</strong> — Any additional context</li>
            </ul>
          </li>
          <li>Click <strong>Submit for Approval</strong></li>
        </ol>

        <h3>Expense Approval Workflow</h3>
        <p>All expenses go through an approval workflow before payment. The number of approvers required depends on the expense amount:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-primary-50 border border-primary-200 rounded p-4">
            <h4 className="font-semibold mb-2">Single Approval</h4>
            <p>Expenses below the threshold (default ₹50,000) require only Treasurer approval.</p>
          </div>
          <div className="bg-primary-50 border border-primary-200 rounded p-4">
            <h4 className="font-semibold mb-2">Dual Approval</h4>
            <p>High-value expenses require both Treasurer AND President approval before payment can proceed.</p>
          </div>
        </div>

        <table className="table-auto border-collapse w-full mb-8">
          <thead>
            <tr className="bg-primary-900 text-white">
              <th className="border px-2 py-1">Amount Range</th>
              <th className="border px-2 py-1">Required Approvals</th>
              <th className="border px-2 py-1">Approvers</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border px-2 py-1">₹0 – ₹10,000</td><td className="border px-2 py-1">1</td><td className="border px-2 py-1">Treasurer</td></tr>
            <tr className="bg-primary-50"><td className="border px-2 py-1">₹10,001 – ₹50,000</td><td className="border px-2 py-1">1</td><td className="border px-2 py-1">Treasurer</td></tr>
            <tr><td className="border px-2 py-1">₹50,001+</td><td className="border px-2 py-1">2</td><td className="border px-2 py-1">Treasurer + President</td></tr>
          </tbody>
        </table>

        <div className="bg-primary-50 border border-primary-200 rounded p-4 mb-6">
          <strong>Note:</strong> Approval thresholds can be customized by Society Admin from <strong>Settings → Finance → Approval Thresholds</strong>.
        </div>

        <h3>Approving an Expense (Treasurer / President)</h3>
        <ol className="steps list-decimal pl-6 mb-6">
          <li>Go to <strong>Finance</strong> → <strong>Pending Approvals</strong></li>
          <li>Click on an expense to view the full details and receipt</li>
          <li>Click <strong>Approve</strong> or <strong>Reject</strong></li>
          <li>Add a comment if rejecting (required)</li>
          <li>The submitter is notified of the decision</li>
        </ol>

        <h3>Expense Statuses</h3>
        <table className="table-auto border-collapse w-full mb-8 text-sm">
          <thead>
            <tr className="bg-primary-900 text-white">
              <th className="border px-2 py-1">Status</th>
              <th className="border px-2 py-1">Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border px-2 py-1 font-semibold text-accent-700">Pending</td><td className="border px-2 py-1">Submitted, awaiting first approval</td></tr>
            <tr className="bg-primary-50"><td className="border px-2 py-1 font-semibold text-primary-700">Partially Approved</td><td className="border px-2 py-1">Treasurer approved, awaiting President for high-value items</td></tr>
            <tr><td className="border px-2 py-1 font-semibold text-green-700">Approved</td><td className="border px-2 py-1">All required approvals received</td></tr>
            <tr className="bg-primary-50"><td className="border px-2 py-1 font-semibold text-red-700">Rejected</td><td className="border px-2 py-1">Expense declined — see rejection comment</td></tr>
            <tr><td className="border px-2 py-1 font-semibold text-neutral-500">Paid</td><td className="border px-2 py-1">Payment has been processed</td></tr>
          </tbody>
        </table>

        <h2>Budget Management</h2>

        <h3>Setting a Budget</h3>
        <ol className="steps list-decimal pl-6 mb-6">
          <li>Go to <strong>Finance</strong> → <strong>Budgets</strong></li>
          <li>Click <strong>Set Budget</strong> or <strong>Edit</strong> for the current period</li>
          <li>Enter budget amounts per category (maintenance, utilities, security, etc.)</li>
          <li>Set the budget period (monthly, quarterly, or annual)</li>
          <li>Save</li>
        </ol>
        <p>The finance dashboard shows <strong>Budget vs Actual</strong> for each category, making it easy to spot overspending before it becomes a problem.</p>

        <h2>Dues & Collections</h2>

        <h3>For Residents — Viewing and Paying Dues</h3>
        <ol className="steps list-decimal pl-6 mb-6">
          <li>Open the GateFlux app or web portal</li>
          <li>Go to <strong>My Dues</strong> or <strong>Finance</strong></li>
          <li>View outstanding maintenance charges and any overdue amounts</li>
          <li>Tap <strong>Pay Now</strong> to make an online payment</li>
          <li>A receipt is generated and available to download immediately</li>
        </ol>

        <h3>For Admins — Generating Maintenance Invoices</h3>
        <ol className="steps list-decimal pl-6 mb-6">
          <li>Go to <strong>Finance</strong> → <strong>Collections</strong></li>
          <li>Click <strong>Generate Invoices</strong></li>
          <li>Select the billing period and the residents to invoice</li>
          <li>Review the invoice amounts and click <strong>Generate</strong></li>
          <li>Invoices are sent to residents via push notification and email</li>
        </ol>

        <h3>Tracking Payments</h3>
        <p>Go to <strong>Finance</strong> → <strong>Collections</strong> to see all invoices and their payment status. Filter by:</p>
        <ul>
          <li><strong>Paid</strong> — Residents who have paid</li>
          <li><strong>Pending</strong> — Invoices not yet paid</li>
          <li><strong>Overdue</strong> — Past the due date</li>
        </ul>
        <p>Send payment reminders by selecting overdue invoices and clicking <strong>Send Reminder</strong>.</p>

        <h3>Recording a Cash / Offline Payment</h3>
        <ol className="steps list-decimal pl-6 mb-6">
          <li>Go to <strong>Finance</strong> → <strong>Collections</strong></li>
          <li>Find the resident's invoice</li>
          <li>Click <strong>Record Payment</strong></li>
          <li>Enter the amount, date, and payment method (cash, bank transfer, cheque)</li>
          <li>Click <strong>Save</strong> — the invoice is marked paid and a receipt is generated</li>
        </ol>

        <h2>Financial Reports</h2>
        <p>Access financial reports from <strong>Finance</strong> → <strong>Reports</strong>:</p>
        <ul>
          <li><strong>Income Statement</strong> — Revenue vs expenses for the selected period</li>
          <li><strong>Collection Report</strong> — Maintenance collection rate and outstanding dues</li>
          <li><strong>Expense Report</strong> — Breakdown of all expenses by category</li>
          <li><strong>Budget vs Actual</strong> — How spending compares to budget</li>
          <li><strong>Cashflow Summary</strong> — Net financial position at a glance</li>
        </ul>

        <h3>Exporting Reports</h3>
        <ol className="steps list-decimal pl-6 mb-6">
          <li>Open any report from <strong>Finance</strong> → <strong>Reports</strong></li>
          <li>Set the date range (monthly, quarterly, or custom)</li>
          <li>Click <strong>Export</strong> and choose PDF or Excel</li>
        </ol>
        <p>Reports can be shared with committee members or used for AGM presentations.</p>
      </main>
    </DocsLayout>
  );
}
