"use client";

import { motion } from "framer-motion";

export default function EngineShowcase() {
    const engines = [
        { type: "I4", name: "In-Line 4", desc: "Compact, efficient, widely used." },
        { type: "I6", name: "In-Line 6", desc: "Perfect balance, smooth power delivery (BMW, Supra)." },
        { type: "V6", name: "V6 Engine", desc: "Compact power, dominant in F1 turbo era." },
        { type: "V8", name: "V8 Engine", desc: "The American dream, Italian scream. Muscle and exotic." },
        { type: "V10", name: "V10 Engine", desc: "F1 harmony. High revving, unique sound (LFA, Viper, F1)." },
        { type: "V12", name: "V12 Engine", desc: "The King. Perfect primary balance, pure luxury and power." },
        { type: "W16", name: "W16 Engine", desc: "Bugatti's masterpiece. 4 turbos, 16 cylinders, infinite power." },
        { type: "Boxer", name: "Flat-6 (Boxer)", desc: "Low center of gravity, Porsche's signature." },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {engines.map((engine, index) => (
                <motion.div
                    key={engine.type}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-secondary/20 border border-white/5 p-6 rounded-xl hover:border-accent hover:bg-secondary/40 transition-all cursor-pointer group"
                >
                    <h3 className="text-3xl font-heading font-bold text-accent mb-2">{engine.type}</h3>
                    <h4 className="text-xl font-bold text-white mb-4">{engine.name}</h4>
                    <p className="text-gray-400 text-sm group-hover:text-gray-200 transition-colors">
                        {engine.desc}
                    </p>
                    {/* Visual placeholder for engine layout */}
                    <div className="mt-4 h-24 bg-black/50 rounded-lg flex items-center justify-center border border-white/5 group-hover:border-accent/30">
                        <span className="text-xs text-gray-600 uppercase tracking-widest">Layout Schematic</span>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
