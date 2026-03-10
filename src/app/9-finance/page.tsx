import DocsLayout from '../DocsLayout';

export default function Finance() {
  return (
    <DocsLayout>
      <main className="max-w-3xl mx-auto py-8 px-4">
        <nav className="mb-4 text-sm text-gray-500 flex items-center gap-2">
          <a href="/" className="text-primary-600 hover:underline">Docs</a>
          <span>›</span>
          <span>Finance, Invoices, and Payments</span>
        </nav>

        <div className="bg-primary-50 border border-primary-200 rounded p-6 mb-6">
          <h1 className="text-2xl font-bold mb-2">Maintenance Billing, Invoices, and Payments</h1>
          <p>Use Billing to create invoices, track dues, send reminders, and record payments.</p>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-3">Maintenance Billing</h2>

        <h3 className="text-lg font-semibold mt-6 mb-2">Overview</h3>
        <p className="mb-4">Maintenance billing is managed from the Billing module. Admins create charge invoices for units and monitor pending or overdue amounts.</p>

        <h3 className="text-lg font-semibold mt-6 mb-2">When to Use This</h3>
        <ul className="list-disc ml-6 mb-6">
          <li>Monthly maintenance billing cycle</li>
          <li>Special charges or adjustments</li>
          <li>Collection follow-up for overdue invoices</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2">How to Use</h3>
        <ol className="list-decimal ml-6 mb-6">
          <li>Open <strong>Billing</strong> (`/billing`).</li>
          <li>Click <strong>Create Invoice</strong>.</li>
          <li>Select block and unit.</li>
          <li>Add line items and amounts.</li>
          <li>Set due date and save.</li>
          <li>Use status tabs to follow pending/overdue items.</li>
        </ol>

        <h2 className="text-xl font-bold mt-8 mb-3">Invoices</h2>

        <h3 className="text-lg font-semibold mt-6 mb-2">Field Descriptions</h3>
        <ul className="list-disc ml-6 mb-6">
          <li><strong>Block</strong>: Loads units for selection.</li>
          <li><strong>Unit</strong> (required): Unit receiving invoice.</li>
          <li><strong>Invoice Type</strong>: Charge label.</li>
          <li><strong>Line Item Description</strong> (required): Charge reason.</li>
          <li><strong>Line Item Amount</strong> (required): Charge value.</li>
          <li><strong>Due Date</strong>: Payment deadline.</li>
          <li><strong>Notes</strong>: Optional internal note.</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2">Validation Rules</h3>
        <ul className="list-disc ml-6 mb-6">
          <li>Unit selection is required.</li>
          <li>At least one valid line item is required.</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2">Invoice Actions</h3>
        <ul className="list-disc ml-6 mb-6">
          <li><strong>View</strong>: Open invoice details.</li>
          <li><strong>Download PDF</strong>: Export invoice PDF.</li>
          <li><strong>Send Reminder</strong>: Send unpaid reminder.</li>
          <li><strong>Mark as Paid</strong>: Record payment and update status.</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-3">Payments</h2>

        <h3 className="text-lg font-semibold mt-6 mb-2">When to Use This</h3>
        <ul className="list-disc ml-6 mb-6">
          <li>Recording received payments</li>
          <li>Following overdue collections</li>
          <li>Reviewing paid vs pending amounts</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2">How to Use</h3>
        <ol className="list-decimal ml-6 mb-6">
          <li>Open Billing and switch to <strong>Pending</strong> or <strong>Overdue</strong> tab.</li>
          <li>Use action menu on target invoice.</li>
          <li>Choose <strong>Mark as Paid</strong> after receipt confirmation.</li>
          <li>Use <strong>Send Reminder</strong> for unpaid invoices.</li>
        </ol>

        <h3 className="text-lg font-semibold mt-6 mb-2">Example</h3>
        <p className="mb-6">Create a monthly maintenance invoice with two line items, set month-end due date, then send reminder to invoices still pending after due date.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">Subscription Billing (GateFlux Plan)</h2>

        <h3 className="text-lg font-semibold mt-6 mb-2">Overview</h3>
        <p className="mb-4">
          In addition to society maintenance invoices, GateFlux now includes subscription billing controls under
          <strong> Settings → Billing</strong>. Admins can review current plan, usage, subscription invoices,
          subscription transactions, payment methods, analytics, and webhook events.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">Plan Change Workflow</h3>
        <ol className="list-decimal ml-6 mb-6">
          <li>Open <strong>Settings → Billing → Subscription</strong>.</li>
          <li>Review the current plan card and usage metrics.</li>
          <li>Choose an <strong>Upgrade</strong> or <strong>Downgrade</strong> action from the plan list.</li>
          <li>Check the confirmation dialog details (proration for upgrades, next-cycle effective date for downgrades).</li>
          <li>If your society is in trial and trial end is near, choose the next billing cycle in the dialog: <strong>Monthly</strong> or <strong>Yearly (15% discount)</strong>.</li>
          <li>Confirm the action and note the returned gateway reference (for upgrades).</li>
        </ol>

        <h3 className="text-lg font-semibold mt-6 mb-2">Trial-End Billing Cycle Choice</h3>
        <p className="mb-4">
          When a trial is about to end, the plan-change confirmation dialog includes a billing cycle selector.
          This keeps the same upgrade/downgrade flow, but lets admins decide whether to continue on monthly or yearly billing.
        </p>
        <ul className="list-disc ml-6 mb-6">
          <li><strong>Monthly:</strong> Standard cycle pricing applies.</li>
          <li><strong>Yearly:</strong> 15% discount is applied to yearly billing.</li>
          <li>The selected cycle is sent with the same existing upgrade/downgrade request.</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2">Webhook Monitoring and Retry</h3>
        <ol className="list-decimal ml-6 mb-6">
          <li>Open <strong>Settings → Billing → Webhook Events</strong>.</li>
          <li>Filter by provider, status, or event type to find failed events quickly.</li>
          <li>Use <strong>Retry</strong> for eligible events that are not in processed state.</li>
          <li>Track retry attempts and next retry schedule in the events table.</li>
        </ol>

        <h3 className="text-lg font-semibold mt-6 mb-2">Operational Notes</h3>
        <ul className="list-disc ml-6 mb-6">
          <li>Upgrades are immediate and may generate prorated charges.</li>
          <li>Downgrades are scheduled to apply at the next billing cycle.</li>
          <li>When yearly is selected at trial end, yearly billing includes a 15% discount.</li>
          <li>Use subscription transactions and payment history tabs for reconciliation.</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2">Tips</h3>
        <ul className="list-disc ml-6 mb-6">
          <li>Use clear line item names (for example: Maintenance Apr 2026).</li>
          <li>Review overdue list every week.</li>
          <li>Download invoice PDF for audit records.</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2">Common Mistakes</h3>
        <ul className="list-disc ml-6 mb-10">
          <li>Creating invoice without selecting unit.</li>
          <li>Adding description but forgetting amount.</li>
          <li>Marking invoice paid before confirming payment receipt.</li>
        </ul>
      </main>
    </DocsLayout>
  );
}
