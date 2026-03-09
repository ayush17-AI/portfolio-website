"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Send } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold font-outfit text-brown-950 mb-6">
                            Let&apos;s Build Something <span className="text-brown-700">Exceptional</span> Together
                        </h2>
                        <p className="text-lg text-brown-600 leading-relaxed mb-8">
                            I am always looking for new challenges and opportunities to
                            collaborate on innovative projects. Whether you have a
                            question or just want to say hi, my inbox is always open.
                        </p>

                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-brown-50 flex items-center justify-center text-brown-600 shadow-sm">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-brown-400 uppercase tracking-widest font-bold">Email Me</p>
                                    <p className="text-brown-900 font-bold">ayush@example.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-brown-50 flex items-center justify-center text-brown-600 shadow-sm">
                                    <MessageSquare className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-brown-400 uppercase tracking-widest font-bold">Socials</p>
                                    <p className="text-brown-900 font-bold">LinkedIn | GitHub | Twitter</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="glass-card p-10 rounded-[2.5rem] shadow-2xl relative z-10"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-brown-900 ml-1">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full px-5 py-4 rounded-2xl border border-brown-100 bg-white/50 focus:outline-none focus:ring-2 focus:ring-brown-200 transition-all"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-brown-900 ml-1">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full px-5 py-4 rounded-2xl border border-brown-100 bg-white/50 focus:outline-none focus:ring-2 focus:ring-brown-200 transition-all"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 mb-8">
                            <label className="text-sm font-bold text-brown-900 ml-1">Message</label>
                            <textarea
                                rows={4}
                                placeholder="Hi, I'd like to talk about..."
                                className="w-full px-5 py-4 rounded-2xl border border-brown-100 bg-white/50 focus:outline-none focus:ring-2 focus:ring-brown-200 transition-all resize-none"
                            ></textarea>
                        </div>
                        <button className="btn-premium w-full py-5 flex items-center justify-center gap-3">
                            Send Message
                            <Send className="w-5 h-5" />
                        </button>
                    </motion.form>
                </div>
            </div>

            {/* Decorative background circle */}
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-brown-100/50 rounded-full blur-[150px] -z-10" />
        </section>
    );
}
