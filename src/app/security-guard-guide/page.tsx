import DocsLayout from '../DocsLayout';

export default function SecurityGuardGuide() {
  return (
    <DocsLayout>
      <main className="prose mx-auto py-8">
        <nav className="mb-4 text-sm text-gray-500 flex items-center gap-2">
          <a href="/" className="text-blue-600 hover:underline">Docs</a>
          <span>›</span>
          <span>Security Guard Guide</span>
        </nav>

        <div className="bg-blue-50 border border-blue-200 rounded p-6 mb-6">
          <h1 className="text-2xl font-bold mb-2">Security Guard Guide</h1>
          <p>Learn how to manage visitor entry, check-ins, check-outs, and maintain gate security using GateFlux.</p>
        </div>

      <h2 id="getting-started">Getting Started</h2>
      <p>Your society admin will provide you with login credentials for the GateFlux Security app.</p>

      <h3>Logging In</h3>
      <ol className="steps list-decimal pl-6 mb-6">
        <li>Open the GateFlux Security app</li>
        <li>Enter your phone number and the OTP sent to you</li>
        <li>Select your gate if your society has multiple entry points</li>
        <li>You'll see the <strong>Gate Dashboard</strong> with today's visitors</li>
      </ol>

      <h2 id="understanding-the-dashboard">Understanding the Dashboard</h2>
      <p>Your main screen shows:</p>
      <ul className="mb-6">
        <li><strong>Expected Visitors</strong> – Pre-approved visitors arriving today (green cards)</li>
        <li><strong>Currently Inside</strong> – Visitors who have checked in but not checked out</li>
        <li><strong>Quick Actions</strong> – Buttons to scan QR, add walk-in, or search</li>
      </ul>

      {/* Mock design for Guard Dashboard */}
      <div className="mockup mb-8">
        <div className="bg-white border rounded shadow p-4 max-w-md mx-auto">
          <div className="font-bold text-lg mb-2">Gate Dashboard</div>
          <div className="flex gap-4 mb-4">
            <div className="flex-1 text-center">
              <div className="text-2xl font-bold">12</div>
              <div className="text-xs text-gray-500">Expected Today</div>
            </div>
            <div className="flex-1 text-center">
              <div className="text-2xl font-bold text-green-600">5</div>
              <div className="text-xs text-gray-500">Currently Inside</div>
            </div>
          </div>
          <div className="flex gap-2 mb-4">
            <button className="flex-1 bg-blue-100 text-blue-700 rounded px-3 py-2 flex items-center gap-2 justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
              Scan QR
            </button>
            <button className="flex-1 bg-gray-100 text-gray-700 rounded px-3 py-2 flex items-center gap-2 justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              Search
            </button>
          </div>
          <div className="font-semibold text-sm mb-2">Expected Visitors</div>
          <div className="bg-green-50 border border-green-200 rounded p-2 mb-2 flex items-center justify-between">
            <div>
              <div className="font-bold">Priya Sharma</div>
              <div className="text-xs text-gray-500">Guest → A-101</div>
              <div className="text-xs text-gray-400">Expected: 3:00 PM - 5:00 PM</div>
            </div>
            <span className="bg-green-200 text-green-800 text-xs px-2 py-1 rounded">Expected</span>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-2 flex items-center justify-between">
            <div>
              <div className="font-bold">Amazon Delivery</div>
              <div className="text-xs text-gray-500">Delivery → B-205</div>
              <div className="text-xs text-gray-400">Expected: 2:00 PM - 6:00 PM</div>
            </div>
            <span className="bg-green-200 text-green-800 text-xs px-2 py-1 rounded">Expected</span>
          </div>
        </div>
        <div className="text-center text-xs text-gray-400 mt-2">Mock design: Guard Dashboard</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-gray-50 border rounded p-4">
          <h4 className="flex items-center gap-2 font-semibold mb-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>Check In</h4>
          <p>When a visitor arrives, verify and record their entry.</p>
        </div>
        <div className="bg-gray-50 border rounded p-4">
          <h4 className="flex items-center gap-2 font-semibold mb-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5"></path><path d="M12 19l-7-7 7-7"></path></svg>Check Out</h4>
          <p>When a visitor leaves, record their exit time.</p>
        </div>
      </div>

      <h2 id="checking-in-pre-approved-visitor">Checking In a Pre-Approved Visitor</h2>
      <p>When a visitor says they are expected:</p>
      <h3>Method 1: Scan QR Code (Fastest)</h3>
      <ol className="steps list-decimal pl-6 mb-6">
        <li>Tap the <strong>Scan QR</strong> button</li>
        <li>Point your camera at the visitor's QR code</li>
        <li>The visitor details will appear automatically</li>
        <li>Verify the name and photo match</li>
        <li>Tap <strong>Check In</strong></li>
      </ol>
      {/* Mock design for QR Scan Result */}
      <div className="mockup mb-8">
        <div className="bg-white border rounded shadow p-4 max-w-md mx-auto">
          <div className="font-bold text-lg mb-2">Visitor Found</div>
          <div className="text-center mb-4">
            <div className="mx-auto mb-2 w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-300 flex items-center justify-center">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <div className="font-bold text-green-600 text-lg">Pre-Approved</div>
          </div>
          <div className="bg-gray-50 border rounded p-2 mb-2">
            <div className="font-bold">Priya Sharma</div>
            <div className="text-xs text-gray-500 mb-1">Type: Guest</div>
            <div className="text-xs text-gray-500 mb-1">Visiting: A-101 (Mr. Raj Patel)</div>
            <div className="text-xs text-gray-400">Valid: Today, 3:00 PM - 5:00 PM</div>
          </div>
          <button className="w-full bg-green-100 text-green-700 rounded px-3 py-2 flex items-center gap-2 justify-center mt-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            Check In
          </button>
        </div>
        <div className="text-center text-xs text-gray-400 mt-2">Mock design: QR Code Verified</div>
      </div>

      <h3>Method 2: Search by Name or Phone</h3>
      <ol className="steps list-decimal pl-6 mb-6">
        <li>Tap the <strong>Search</strong> icon</li>
        <li>Enter the visitor's name, phone, or flat number</li>
        <li>Find the matching visitor in the list</li>
        <li>Tap on them to view details</li>
        <li>Tap <strong>Check In</strong></li>
      </ol>

      <h3>Method 3: Find in Expected List</h3>
      <ol className="steps list-decimal pl-6 mb-6">
        <li>Look at the <strong>Expected Today</strong> section on your dashboard</li>
        <li>Find the visitor's name</li>
        <li>Tap their card to view details</li>
        <li>Tap <strong>Check In</strong></li>
      </ol>

      <div className="bg-green-50 border border-green-200 rounded p-4 mb-6">
        <div className="font-semibold mb-2 flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          Pre-approved visitors are marked with a green badge
        </div>
        <p>These visitors have already been approved by the resident. You can check them in directly without calling the flat.</p>
      </div>

      <h2 id="checking-in-a-walk-in-visitor">Checking In a Walk-in Visitor (No Pre-Approval)</h2>
      <p>When a visitor arrives without pre-approval:</p>
      <ol className="steps list-decimal pl-6 mb-6">
        <li>Tap "Manual Entry" or the "+" button</li>
        <li>Select visitor type:
          <ul className="list-disc pl-6">
            <li><strong>Guest</strong> – Personal visitor</li>
            <li><strong>Delivery</strong> – E-commerce, food delivery</li>
            <li><strong>Service</strong> – Plumber, electrician, etc.</li>
            <li><strong>Cab</strong> – Taxi, Uber, Ola</li>
          </ul>
        </li>
        <li>For Delivery/Service visitors: Select the company (Amazon, Swiggy, Urban Company, etc.) or tap "Other" and type the name</li>
        <li>Enter visitor details:
          <ul className="list-disc pl-6">
            <li>Name</li>
            <li>Phone number</li>
            <li>Flat number they're visiting</li>
            <li>Purpose of visit</li>
            <li>Vehicle number (if applicable)</li>
          </ul>
        </li>
        <li>Tap "Request Approval"</li>
        <li>Wait for resident response – They will approve or deny within 1-2 minutes</li>
        <li>Once approved, the screen will show "Approved" – tap <strong>Check In</strong></li>
      </ol>

      {/* Mock design for Walk-in Approval */}
      <div className="mockup mb-8">
        <div className="bg-white border rounded shadow p-4 max-w-md mx-auto mb-4">
          <div className="font-bold text-lg mb-2">Requesting Approval</div>
          <div className="text-center mb-4">
            <div className="mx-auto mb-2 w-16 h-16 rounded-full border-4 border-blue-100 border-t-blue-500 animate-spin"></div>
            <div className="font-semibold">Waiting for Resident</div>
            <div className="text-xs text-gray-500 mb-2">A-101 (Mr. Raj Patel)</div>
            <div className="bg-gray-50 border rounded p-2 mb-2 text-left">
              <div className="font-bold">Rahul Kumar</div>
              <div className="text-xs text-gray-500">Personal Guest</div>
              <div className="text-xs text-gray-400">Phone: 98765-43210</div>
            </div>
            <div className="text-xs text-gray-400">Request sent 0:45 ago</div>
          </div>
        </div>
        <div className="bg-white border rounded shadow p-4 max-w-md mx-auto">
          <div className="font-bold text-lg mb-2">Entry Approved!</div>
          <div className="text-center mb-4">
            <div className="mx-auto mb-2 w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <div className="font-semibold">Resident approved entry</div>
            <div className="bg-gray-50 border rounded p-2 mb-2 text-left">
              <div className="font-bold">Rahul Kumar</div>
              <div className="text-xs text-gray-500">Guest → A-101</div>
            </div>
            <button className="w-full bg-green-100 text-green-700 rounded px-3 py-2 flex items-center gap-2 justify-center mt-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              Check In Now
            </button>
          </div>
        </div>
        <div className="text-center text-xs text-gray-400 mt-2">Mock design: Walk-in Approval</div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded p-4 mb-6">
        <div className="font-semibold mb-2 flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          If denied
        </div>
        <p>Politely inform the visitor that the resident has declined the visit. Do not allow entry.</p>
      </div>

      <h2 id="photo-id-capture">Photo & ID Capture</h2>
      <p>For enhanced security, you can capture a visitor's photo and ID proof during check-in:</p>
      <h3>Capturing Visitor Photo</h3>
      <ol className="steps list-decimal pl-6 mb-6">
        <li>When recording a manual entry, look for the <strong>Photo & ID</strong> section</li>
        <li>Tap the <strong>camera icon</strong> under "Visitor Photo"</li>
        <li>Position the visitor's face in the frame</li>
        <li>The photo is automatically captured and displayed as a preview</li>
        <li>To retake, tap the <strong>X</strong> button and capture again</li>
      </ol>
      <h3>Capturing ID Proof (Optional)</h3>
      <ol className="steps list-decimal pl-6 mb-6">
        <li>Tap the <strong>card icon</strong> under "ID Proof"</li>
        <li>Point your camera at the visitor's ID document (Aadhaar, PAN, Driving License, etc.)</li>
        <li>After capturing, select the <strong>ID type</strong> from the dropdown (Aadhaar, PAN Card, Driving License, Passport, Voter ID)</li>
        <li>The ID image will be securely stored</li>
      </ol>
      {/* Mock design for Photo & ID Proof Capture */}
      <div className="mockup mb-8">
        <div className="bg-white border rounded shadow p-4 max-w-md mx-auto mb-4">
          <div className="font-bold text-lg mb-2">Visitor Photo</div>
          <div className="bg-black rounded mb-2 flex flex-col items-center justify-center p-4">
            <div className="w-32 h-40 border-2 border-dashed border-white/50 rounded-full flex items-center justify-center mb-2"></div>
            <div className="flex gap-2 mt-2">
              <button className="w-8 h-8 rounded bg-gray-700 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.51"/></svg>
              </button>
              <button className="w-12 h-12 rounded-full bg-white border-2 border-gray-400 flex items-center justify-center"></button>
              <button className="w-8 h-8 rounded bg-gray-700 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2"><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white border rounded shadow p-4 max-w-md mx-auto">
          <div className="font-bold text-lg mb-2">ID Proof</div>
          <div className="bg-gradient-to-br from-blue-900 to-blue-600 rounded-lg mb-2 p-4 text-white">
            <div className="text-xs uppercase mb-1">Govt. of India</div>
            <div className="font-bold text-sm mb-2">Aadhaar Card</div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <span className="text-xs">XXXX XXXX 5678</span>
            </div>
            <div className="absolute top-2 right-2 bg-black/40 rounded px-2 py-1 text-xs flex items-center gap-1">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.51"/></svg>
              Retake
            </div>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs">ID Type</span>
            <span className="text-xs">Aadhaar Card</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
          </div>
          <div className="text-xs text-gray-400 mb-2">Options: Aadhaar · PAN · Driving License · Passport · Voter ID</div>
          <button className="w-full bg-green-100 text-green-700 rounded px-3 py-2 flex items-center gap-2 justify-center mt-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            Save & Continue
          </button>
        </div>
        <div className="text-center text-xs text-gray-400 mt-2">Mock design: Photo & ID Proof Capture</div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded p-4 mb-6">
        <div className="font-semibold mb-2 flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          Security & Privacy
        </div>
        <p>All photos and ID proofs are <strong>encrypted</strong> and stored securely. Access is time-limited with signed URLs that expire after 10 minutes. Only authorized personnel can view captured media.</p>
      </div>

      <h3>Viewing Captured Media</h3>
      <p>To view a visitor's photo or ID proof:</p>
      <ol className="steps list-decimal pl-6 mb-6">
        <li>Open the visitor's detail screen</li>
        <li>Scroll to the <strong>Photo & ID</strong> section</li>
        <li>Tap on any image to view it full-screen</li>
        <li>Tap <strong>X</strong> to close the full-screen view</li>
      </ol>

      {/* Mock: Visitor Detail with Photo & ID section */}
      <div className="mockup mb-8">
        <div className="bg-white border rounded shadow p-4 max-w-md mx-auto">
          <div className="font-bold text-lg mb-2">Visitor Details</div>
          <div className="bg-gray-50 border rounded p-2 mb-2">
            <div className="font-bold">Rahul Kumar</div>
            <div className="text-xs text-gray-500">Guest · A-101 (Mr. Raj Patel)</div>
            <div className="text-xs text-gray-400">Checked in: 3:15 PM · Inside 42 min</div>
          </div>
          <div className="font-semibold text-xs mb-2">Photo &amp; ID</div>
          <div className="flex gap-2 mb-2">
            <div className="flex-1 aspect-square bg-gradient-to-br from-slate-700 to-slate-500 rounded-lg flex flex-col items-center justify-center relative overflow-hidden">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              <div className="text-[9px] text-white/60 mt-1">Visitor Photo</div>
              <div className="absolute top-1 right-1 bg-black/40 rounded px-1 py-0.5">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7M3 21l7-7"/></svg>
              </div>
            </div>
            <div className="flex-1 aspect-square bg-gradient-to-br from-blue-900 to-blue-600 rounded-lg flex flex-col items-center justify-center relative overflow-hidden">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="6" y1="9" x2="18" y2="9"/><line x1="6" y1="13" x2="14" y2="13"/></svg>
              <div className="text-[9px] text-white/60 mt-1">Aadhaar Card</div>
              <div className="absolute top-1 right-1 bg-black/40 rounded px-1 py-0.5">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
              </div>
            </div>
          </div>
          <button className="w-full bg-red-100 text-red-700 rounded px-3 py-2 flex items-center gap-2 justify-center mt-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Check Out
          </button>
        </div>
        <div className="text-center text-xs text-gray-400 mt-2">Mock design: Visitor Detail — Photo & ID</div>
      </div>

      <h2 id="checking-out-visitors">Checking Out Visitors</h2>
      <p>When a visitor leaves the society:</p>
      <ol className="steps list-decimal pl-6 mb-6">
        <li>Go to <strong>Currently Inside</strong> section</li>
        <li>Find the visitor by name or flat number</li>
        <li>Tap on their card</li>
        <li>Tap the <strong>Check Out</strong> button</li>
        <li>Confirm the check-out</li>
      </ol>

      <div className="bg-blue-50 border border-blue-200 rounded p-4 mb-6">
        <div className="font-semibold mb-2 flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
          Duration tracking
        </div>
        <p>The app tracks how long each visitor stays. If someone has been inside for an unusually long time, you'll see an orange warning indicator.</p>
      </div>

      <h2 id="overstaying-visitors">Overstaying Visitors</h2>
      <p>Visitors who stay longer than expected are flagged:</p>
      <ul className="mb-6">
        <li><strong>Delivery/Cab</strong> – More than 1 hour</li>
        <li><strong>Guest/Service</strong> – More than 4 hours</li>
      </ul>
      <p>When you see an <strong>orange "Overstaying" badge</strong>:</p>
      <ol className="steps list-decimal pl-6 mb-6">
        <li>Tap on the visitor card</li>
        <li>Note how long they've been inside</li>
        <li>Consider calling the resident to confirm they're still expected</li>
        <li>When they leave, tap <strong>Check Out</strong></li>
      </ol>

      <h2 id="quick-tips">Quick Tips for Common Scenarios</h2>
      <h3>Delivery Person with Parcel</h3>
      <ol className="steps list-decimal pl-6 mb-6">
        <li>Ask which flat the delivery is for</li>
        <li>Enter as <strong>Delivery</strong> type and select the company</li>
        <li>Request approval from resident</li>
        <li>If approved, check them in</li>
        <li>Most deliveries should be checked out within 15-30 minutes</li>
      </ol>
      <h3>Cab Picking Up a Resident</h3>
      <ol className="steps list-decimal pl-6 mb-6">
        <li>Enter as <strong>Cab</strong> type</li>
        <li>Enter the flat number the cab is for</li>
        <li>The resident will usually approve quickly</li>
        <li>Check out when the cab leaves with the resident</li>
      </ol>
      <h3>Service Provider (Plumber/Electrician)</h3>
      <ol className="steps list-decimal pl-6 mb-6">
        <li>Enter as <strong>Service</strong> type</li>
        <li>Select or type the company name</li>
        <li>Note the purpose (e.g., "AC repair")</li>
        <li>These visits may last 1-4 hours</li>
      </ol>
      <h3>Emergency Vehicles</h3>
      <ol className="steps list-decimal pl-6 mb-6">
        <li>Allow immediate entry for ambulances, fire trucks, police</li>
        <li>Record entry after they pass through</li>
        <li>Select <strong>Other</strong> as visitor type and note "Emergency"</li>
        <li>Inform your supervisor and society admin</li>
      </ol>

      <h2 id="contacting-residents">Contacting Residents</h2>
      <p>If you need to call a resident:</p>
      <ol className="steps list-decimal pl-6 mb-6">
        <li>On the visitor's approval request screen, tap <strong>Call Resident</strong></li>
        <li>The app will connect you directly</li>
        <li>Explain who is at the gate and ask for approval</li>
      </ol>

      <h2 id="shift-handover">Shift Handover</h2>
      <p>At the end of your shift:</p>
      <ol className="steps list-decimal pl-6 mb-6">
        <li>Go to <strong>Currently Inside</strong> and note any visitors still present</li>
        <li>Inform the next guard about any ongoing situations</li>
        <li>Log out by going to <strong>Settings</strong> → <strong>Sign Out</strong></li>
      </ol>

      <h2 id="troubleshooting">Troubleshooting</h2>
      <h3>App is slow or not loading</h3>
      <ul className="mb-6">
        <li>Check your internet connection</li>
        <li>Close and reopen the app</li>
        <li>If problem persists, contact your supervisor</li>
      </ul>
      <h3>QR code won't scan</h3>
      <ul className="mb-6">
        <li>Make sure the QR code is not blurry or damaged</li>
        <li>Try adjusting the lighting or distance</li>
        <li>Use "Search" to find the visitor manually</li>
      </ul>
      <h3>Resident not responding to approval request</h3>
      <ul className="mb-6">
        <li>Wait 2 minutes</li>
        <li>Tap "Call Resident" to phone them directly</li>
        <li>If still no response, ask visitor to contact the resident themselves</li>
      </ul>

      <nav className="flex justify-between mt-8">
        <a href="/resident-guide" className="flex items-center gap-2 text-blue-600 hover:underline">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
          Resident Guide
        </a>
        <a href="/admin-guide" className="flex items-center gap-2 text-blue-600 hover:underline">
          Admin Guide
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </a>
      </nav>
    </main>
        </DocsLayout>
      );
    }
