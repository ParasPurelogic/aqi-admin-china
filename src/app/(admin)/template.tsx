import { Sidebar } from "@/components/ui";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="admin-panel flex h-dvh w-full">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Page */}
      <div className="main-page w-2/4 h-full grow max-h-full">{children}</div>
    </main>
  );
}
