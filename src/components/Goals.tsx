"use client";

import { motion } from "framer-motion";
import { Globe, Lightbulb, Rocket, Target, Zap } from "lucide-react";

const goals = [
    {
        title: "Skilled Developer & Innovator",
        description: "My primary ambition is to master modern technologies and evolve into a top-tier developer capable of architecting complex systems.",
        icon: <Rocket className="w-6 h-6" />,
    },
    {
        title: "Impactful Platforms",
        description: "I aim to build technology that solves real-world problems and creates meaningful impact for communities.",
        icon: <Globe className="w-6 h-6" />,
    },
    {
        title: "Continuous Learning",
        description: "Beyond just coding, I am driven to stay at the forefront of innovation through hackathons, research, and collaborative projects.",
        icon: <Zap className="w-6 h-6" />,
    },
];

export default function Goals() {
    return (
        <section id="goals" className="py-24 bg-brown-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold font-outfit text-brown-950 mb-6 leading-tight">
                            My Vision & <span className="text-brown-700">Future Aspirations</span>
                        </h2>
                        <p className="text-lg text-brown-600 leading-relaxed mb-12 max-w-2xl mx-auto">
                            I am committed to a path of excellence in software engineering.
                            My vision is to bridge the gap between complex technology and
                            human-centric design, creating experiences that are both
                            powerful and intuitive.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {goals.map((goal, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2, duration: 0.5 }}
                                    className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-brown-100/50"
                                >
                                    <div className="mb-4 w-12 h-12 rounded-full bg-brown-50 flex items-center justify-center text-brown-600 shrink-0">
                                        {goal.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brown-900 mb-2">{goal.title}</h4>
                                        <p className="text-sm text-brown-500 italic">{goal.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
