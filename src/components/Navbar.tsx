"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const NavLinks = [
    { name: "Home", href: "#" },
    { name: "Achievements", href: "#achievements" },
    { name: "Goals", href: "#goals" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
                scrolled ? "bg-white/80 backdrop-blur-lg border-b border-brown-100 py-3" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div />

                <div className="hidden md:flex items-center gap-8">
                    {/* Navigation elements removed for minimalist design */}
                </div>

                {/* Mobile Menu Icon (Placeholder for now) */}
                <div className="md:hidden text-brown-900">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                </div>
            </div>
        </motion.nav>
    );
}
