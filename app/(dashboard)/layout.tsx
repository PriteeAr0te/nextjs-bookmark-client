'use client'

import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";



export default function DashboardLayout({ children }: { children: React.ReactNode }) {

    return (
        <div className="flex h-full items-start">
            <Sidebar />
            <div className="flex-1 flex flex-col h-full">
                <Navbar />
                <main className="h-full overflow-y-auto flex-1 p-6 scrollable-container">{children}</main>
            </div>
        </div>
    );
}
