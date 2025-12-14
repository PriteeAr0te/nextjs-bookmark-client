"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
    label: string;
    path: string;
    icon: LucideIcon;
}

export default function SidebarItem({ label, path, icon: Icon }: SidebarItemProps) {
    const pathname = usePathname();
    const isActive = pathname === path;

    return (
        <Link
            href={path}
            className={cn(
                "flex items-center gap-3 px-4 py-2 rounded-md transition-colors duration-200",
                isActive
                    ? "bg-primary text-white"
                    : "text-foreground hover:bg-accent"
            )}
        >
            <Icon size={20} />
            <span className="text-sm font-medium">{label}</span>
        </Link>
    );
}
