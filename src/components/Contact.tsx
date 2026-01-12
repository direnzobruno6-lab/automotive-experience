"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function Contact() {
    const { t, language } = useLanguage();

    return (
        <section id="contact" className="py-24 bg-secondary/20 relative">
            {/* Background accent */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent z-0" />

            <div className="container mx-auto px-6 relative z-10 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-black/80 backdrop-blur-xl p-8 md:p-12 border border-white/10 rounded-2xl"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase text-center mb-8">
                        {t("nav.contacts")}
                    </h2>
                    <p className="text-center text-gray-400 mb-12">
                        {language === 'it'
                            ? "Sei pronto a guidare il tuo investimento? Contattaci per una consulenza privata."
                            : "Ready to drive your investment? Contact us for a private consultation."
                        }
                    </p>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Name</label>
                                <input type="text" className="w-full bg-secondary/30 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors rounded-lg" />
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email</label>
                                <input type="email" className="w-full bg-secondary/30 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors rounded-lg" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Message</label>
                            <textarea rows={4} className="w-full bg-secondary/30 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors rounded-lg" />
                        </div>
                        <button className="w-full bg-accent text-white font-bold uppercase tracking-widest py-4 hover:bg-white hover:text-black transition-colors duration-300 rounded-lg">
                            {language === 'it' ? "Invia Richiesta" : "Send Request"}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
