import Sidebar from './Sidebar';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 md:ml-64 p-4 md:p-8 bg-neutral-50">
        {children}
      </div>
    </div>
  );
}