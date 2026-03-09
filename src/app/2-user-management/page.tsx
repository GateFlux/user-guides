import React from 'react';
import DocsLayout from '../DocsLayout';

export default function UserManagement() {
  return (
    <DocsLayout>
      <main className="max-w-3xl mx-auto py-8 px-4">
        <nav className="mb-4 text-sm text-gray-500 flex items-center gap-2">
          <a href="/" className="text-primary-600 hover:underline">Docs</a>
          <span>›</span>
          <span>Residents Management</span>
        </nav>

        <div className="bg-primary-50 border border-primary-200 rounded p-6 mb-6">
          <h1 className="text-2xl font-bold mb-2">Residents Management Guide</h1>
          <p>Add and manage residents, unit ownership, family members, and vehicles.</p>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-3">Overview</h2>
        <p className="mb-4">Residents Management helps admins maintain complete resident records with unit assignment, ownership details, family member data, and vehicle information.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">When to Use This</h2>
        <ul className="list-disc ml-6 mb-6">
          <li>Adding a new resident</li>
          <li>Assigning a resident to a flat</li>
          <li>Creating a new flat during resident onboarding</li>
          <li>Updating family members or vehicles</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-3">How to Use</h2>
        <ol className="list-decimal ml-6 mb-6">
          <li>Open <strong>Residents</strong> (`/residents`).</li>
          <li>Click <strong>Add Resident</strong>.</li>
          <li>Fill profile details (name, phone, email).</li>
          <li>Select an existing flat OR enable create new flat.</li>
          <li>Set resident type and primary occupant flag.</li>
          <li>Add optional family members and vehicles.</li>
          <li>Click save to create the resident.</li>
        </ol>

        <h2 className="text-xl font-bold mt-8 mb-3">Field Descriptions</h2>

        <h3 className="text-lg font-semibold mt-6 mb-2">Profile</h3>
        <ul className="list-disc ml-6 mb-4">
          <li><strong>Full Name</strong> (required)</li>
          <li><strong>Phone</strong> (required)</li>
          <li><strong>Email</strong> (optional)</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2">Flat and Ownership</h3>
        <ul className="list-disc ml-6 mb-4">
          <li><strong>Select Existing Flat</strong>: Choose a current unit.</li>
          <li><strong>Create New Flat</strong>: Inline create if unit is not listed.</li>
          <li><strong>Block</strong> (required when creating new flat)</li>
          <li><strong>Flat Number</strong> (required when creating new flat)</li>
          <li><strong>Floor</strong></li>
          <li><strong>Unit Size</strong></li>
          <li><strong>Carpet Area</strong></li>
          <li><strong>Parking Count</strong></li>
          <li><strong>Bathrooms</strong></li>
          <li><strong>Resident Type</strong>: owner or renter.</li>
          <li><strong>Primary Occupant</strong>: yes/no.</li>
          <li><strong>Co-owner Notes</strong></li>
          <li><strong>Notes</strong></li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2">Family Members</h3>
        <ul className="list-disc ml-6 mb-4">
          <li><strong>Name</strong></li>
          <li><strong>Relationship</strong></li>
          <li><strong>Phone</strong></li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2">Vehicles</h3>
        <ul className="list-disc ml-6 mb-6">
          <li><strong>Registration Number</strong></li>
          <li><strong>Vehicle Type</strong></li>
          <li><strong>Make</strong></li>
          <li><strong>Model</strong></li>
          <li><strong>Parking Slot</strong></li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-3">Validation Rules</h2>
        <ul className="list-disc ml-6 mb-6">
          <li>Name is required.</li>
          <li>Phone is required.</li>
          <li>You must select a flat OR create one.</li>
          <li>If creating a flat: Block and Flat Number are required.</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-3">Example</h2>
        <p className="mb-6">For a new tenant moving into an unlisted unit, create the unit inline, set resident type as renter, then add family and vehicle details in the same flow.</p>

        <h2 className="text-xl font-bold mt-8 mb-3">Tips</h2>
        <ul className="list-disc ml-6 mb-6">
          <li>Search before creating to avoid duplicate resident records.</li>
          <li>Keep owner/renter type accurate for billing and governance flows.</li>
          <li>Store vehicle numbers exactly as registered.</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-3">Common Mistakes</h2>
        <ul className="list-disc ml-6 mb-10">
          <li>Leaving phone empty.</li>
          <li>Selecting wrong resident type.</li>
          <li>Forgetting to choose or create a unit before save.</li>
        </ul>
      </main>
    </DocsLayout>
  );
}
