"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { ARTICLES, Article } from "@/data/articles";
import { useState } from "react";
import { ArrowLeft, Clock, User, X } from "lucide-react";
import Image from "next/image";

export default function JournalPage() {
    const { t, language } = useLanguage();
    const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

    return (
        <main className="min-h-screen bg-black pt-32 pb-24 relative overflow-x-hidden">
            <div className="container mx-auto px-6">

                {/* HEADER */}
                <div className="text-center mb-24">
                    <h2 className="text-accent text-sm font-bold uppercase tracking-widest mb-2">Automotive X</h2>
                    <h1 className="text-6xl md:text-8xl font-heading font-black text-white uppercase tracking-tighter mb-6">
                        Journal
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        {language === 'it'
                            ? "Approfondimenti, storie e riflessioni sul mondo dei motori. Dove la meccanica incontra la filosofia."
                            : "Insights, stories, and reflections on the automotive world. Where mechanics meets philosophy."}
                    </p>
                </div>

                {/* ARTICLES GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {ARTICLES.map((article, index) => (
                        <motion.div
                            key={article.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group cursor-pointer"
                            onClick={() => setSelectedArticle(article)}
                        >
                            <div className="relative aspect-[4/3] overflow-hidden mb-8 rounded-sm">
                                <Image
                                    src={article.image}
                                    alt={article.titleEn}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105 saturate-0 group-hover:saturate-100"
                                />
                                <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                                    {article.category}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center text-xs text-gray-500 uppercase tracking-widest space-x-4">
                                    <span>{article.date}</span>
                                    <span>•</span>
                                    <span>{article.author}</span>
                                </div>
                                <h3 className="text-3xl font-heading font-bold text-white group-hover:text-accent transition-colors leading-tight">
                                    {language === 'it' ? article.titleIt : article.titleEn}
                                </h3>
                                <p className="text-gray-400 line-clamp-3 leading-relaxed">
                                    {language === 'it' ? article.subtitleIt : article.subtitleEn}
                                </p>
                                <span className="inline-block border-b border-accent text-accent text-sm uppercase font-bold tracking-widest pb-1 pt-2">
                                    {language === 'it' ? 'Leggi Articolo' : 'Read Article'}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* READING MODAL */}
            <AnimatePresence>
                {selectedArticle && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-white text-black overflow-y-auto"
                    >
                        {/* CLOSE BUTTON */}
                        <button
                            onClick={() => setSelectedArticle(null)}
                            className="fixed top-8 right-8 z-50 p-3 bg-black text-white rounded-full hover:scale-110 transition-transform"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="relative w-full h-[60vh]">
                            <Image
                                src={selectedArticle.image}
                                alt={selectedArticle.titleEn}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                            <div className="absolute bottom-0 left-0 w-full p-8 md:p-24 bg-gradient-to-t from-white via-white/80 to-transparent pt-32">
                                <motion.div
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="max-w-4xl mx-auto"
                                >
                                    <div className="flex items-center gap-4 mb-6 text-sm font-bold uppercase tracking-widest text-accent">
                                        <span>{selectedArticle.category}</span>
                                        <span className="text-black">•</span>
                                        <span className="text-black">{selectedArticle.date}</span>
                                    </div>
                                    <h1 className="text-5xl md:text-7xl font-heading font-black text-black leading-none mb-6">
                                        {language === 'it' ? selectedArticle.titleIt : selectedArticle.titleEn}
                                    </h1>
                                    <p className="text-xl md:text-2xl text-gray-700 italic border-l-4 border-accent pl-6">
                                        {language === 'it' ? selectedArticle.subtitleIt : selectedArticle.subtitleEn}
                                    </p>
                                </motion.div>
                            </div>
                        </div>

                        <article className="max-w-3xl mx-auto px-6 py-20">
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="prose prose-lg md:prose-xl prose-headings:font-heading prose-headings:font-bold prose-headings:uppercase prose-headings:tracking-tight prose-p:leading-relaxed prose-blockquote:not-italic prose-blockquote:border-l-accent prose-img:rounded-xl"
                                dangerouslySetInnerHTML={{ __html: language === 'it' ? selectedArticle.contentIt : selectedArticle.contentEn }}
                            />

                            <div className="mt-20 pt-10 border-t border-gray-200 flex items-center justify-between text-gray-500 text-sm font-bold uppercase tracking-widest">
                                <div className="flex items-center gap-2">
                                    <User className="w-4 h-4" />
                                    {selectedArticle.author}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    5 min read
                                </div>
                            </div>
                        </article>

                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
