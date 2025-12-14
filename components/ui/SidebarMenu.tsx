import { BookMarked, FolderOpen, LayoutDashboard, Star } from "lucide-react";

export const sidebarMenu = [
    {
        label: 'Dashboard',
        path: '/',
        icon: LayoutDashboard
    },
    {
        label: 'All Bookmarks',
        path: '/bookmarks',
        icon: BookMarked
    },
    {
        label: 'Favorites',
        path: '/favorites',
        icon: Star
    },
    {
        label: 'Collections',
        path: '/collections',
        icon: FolderOpen
    },
]