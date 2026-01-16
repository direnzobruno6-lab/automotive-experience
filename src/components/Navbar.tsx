"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import LanguageToggle from "./LanguageToggle";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
    const { t } = useLanguage();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: t("nav.home"), href: "/#home" },
        { name: t("nav.vision"), href: "/#vision" },
        { name: t("nav.services"), href: "/garage" }, // 'Esperienza' maps to Garage
        { name: "JOURNAL", href: "/journal" },
        { name: t("nav.gallery"), href: "/#gallery" },
        { name: t("nav.contact"), href: "/#contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md py-4 border-b border-white/10" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-2xl font-heading font-black uppercase tracking-tighter text-white z-50 relative">
                    Automotive <span className="text-red-600">X</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium uppercase tracking-widest text-gray-300 hover:text-white hover:text-red-600 transition-colors duration-300"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="pl-4 border-l border-white/20">
                        <LanguageToggle />
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white z-50 relative"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: "100%" }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: "100%" }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center space-y-8"
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-2xl font-heading font-bold uppercase tracking-wider text-white hover:text-red-600 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="mt-8">
                                <LanguageToggle />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
