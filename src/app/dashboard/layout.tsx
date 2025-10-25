// app/dashboard/layout.tsx
import Sidebar from "./components/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar /> {/* Only one Sidebar here */}
      <main className="flex-1">{children}</main>
    </div>
  );
}