import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminGuard } from "@/components/auth/AdminGuard";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <AdminGuard>
            <div className="flex w-full min-h-screen admin-obsidian-theme obsidian-mesh-bg bg-slate-950 text-slate-100 font-sans selection:bg-rose-500/30">
                {/* Sidebar (Floating Glass) */}
                <AdminSidebar />

                {/* Main Content Area */}
                <div className="flex-1 flex flex-col min-h-screen overflow-hidden relative z-10">
                    <AdminHeader />
                    <main className="flex-1 overflow-auto p-4 md:p-6 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
                        {children}
                    </main>
                </div>
            </div>
        </AdminGuard>
    );
}
