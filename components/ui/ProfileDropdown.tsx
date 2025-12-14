'use client'

import { LogOut, Settings, User, UserIcon } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'

interface Props {
    className?: string;
}

const ProfileDropdown: React.FC<Props> = ({ className }) => {

    const dropdownRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(false);

    // const { isAuthenticated, user } = useRecoilValue(authState)

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, []);

    const menuItem = "flex items-center gap-2 px-4 py-2 text-sm hover:bg-primary/80 cursor-pointer transition";

    return (
        <div className={className} ref={dropdownRef}>
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    setOpen(prev => !prev)
                }}
                className="p-2 rounded-lg hover:bg-accent transition flex items-center justify-center cursor-pointer"
            >
                <UserIcon size={24} />
            </button>

            {open && (
                <div className="absolute right-0 mt-2 w-52 bg-light border border-brdr text-foreground rounded-md shadow-xl py-1 z-50">
                    {true ? (
                        <>
                            <Link href="/profile" onClick={() => setOpen(false)} className={menuItem}>
                                <User size={16} /> Profile
                            </Link>
                            <Link href="/settings" onClick={() => setOpen(false)} className={menuItem}>
                                <Settings size={16} /> Settings
                            </Link>
                            <hr className="border-br-primary my-1" />
                            <button
                                onClick={() => {
                                    setOpen(false);
                                }}
                                className={menuItem + " w-full text-left"}
                            >
                                <LogOut size={16} /> Logout
                            </button>
                        </>
                    ) : (
                        <Link href="/login" onClick={() => setOpen(false)} className={menuItem}>
                            <User size={16} /> Login
                        </Link>
                    )}
                </div>
            )}
        </div>
    )
}

export default ProfileDropdown