"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black border-t border-white/10 py-12">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <div className="mb-6 md:mb-0">
                    <h2 className="text-xl font-heading font-bold uppercase tracking-wider mb-2">
                        Automotive <span className="text-red-600">X</span>
                    </h2>
                    <p className="text-gray-500 text-sm">
                        &copy; {currentYear} Automotive Experience. {t("footer.rights")}
                    </p>
                </div>

                <div className="flex space-x-6">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <Instagram size={20} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <Twitter size={20} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <Linkedin size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
