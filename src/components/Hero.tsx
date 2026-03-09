"use client";

import { motion } from "framer-motion";
import HeroScene from "./HeroScene";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen pt-24 pb-12 overflow-hidden flex items-center justify-center premium-gradient">
            {/* Background 3D Scene */}
            <div className="absolute inset-0 -z-10">
                <HeroScene />
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center">
                <div className="max-w-4xl mx-auto space-y-10">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-block px-4 py-1.5 rounded-full bg-brown-50 text-brown-600 text-sm font-medium border border-brown-100 mb-2"
                    >
                        Welcome to my portfolio
                    </motion.div>

                    {/* Headline */}
                    <div className="space-y-4">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                            className="text-6xl md:text-8xl font-bold font-outfit text-brown-950 tracking-tight leading-[1.05]"
                        >
                            I&apos;m <span className="text-brown-700">Ayush</span>, a <br className="hidden md:block" />
                            Passionate Developer
                        </motion.h1>

                        {/* Tagline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                            className="text-xl md:text-2xl font-medium text-brown-800/90 font-inter max-w-2xl mx-auto"
                        >
                            Aspiring Developer | Competitive Achiever | Tech Enthusiast
                        </motion.p>
                    </div>

                    {/* Introduction */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                        className="text-lg text-brown-500/80 leading-relaxed max-w-2xl mx-auto"
                    >
                        I am driven by a passion for technology, innovation, and continuous learning.
                        My journey is defined by a commitment to building impactful solutions and
                        pushing the boundaries of what&apos;s possible through code.
                    </motion.p>

                </div>
            </div>

            {/* Scroll Indication */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brown-400 text-xs font-medium uppercase tracking-widest pointer-events-none"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-brown-200 to-transparent" />
                Scroll
            </motion.div>
        </section>
    );
}
