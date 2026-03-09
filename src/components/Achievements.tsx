"use client";

import { motion } from "framer-motion";
import { Award, Code, Globe, GraduationCap, Medal, Trophy, Users } from "lucide-react";

const achievements = [
    {
        title: "NexusOmni (Esports Platform)",
        description: "Engineered a full-scale esports platform for the BGMI community using Next.js and Tailwind CSS, featuring live tournament standings, player profiles, and a premium UI.",
        category: "Development",
        icon: <Code className="w-6 h-6" />,
    },
    {
        title: "IIT Delhi Hackathon",
        description: "Participated in the prestigious IIT Delhi hackathon and presented a technology solution as part of a competitive innovation challenge.",
        category: "Development",
        icon: <Globe className="w-6 h-6" />,
    },
    {
        title: "School Head Boy",
        description: "Selected to lead the student body, manage school initiatives, and serve as the liaison between students and administration.",
        category: "Leadership",
        icon: <Users className="w-6 h-6" />,
    },
    {
        title: "JEE Main Excellence",
        description: "Achieved 94th percentile in the Joint Entrance Examination (Main), one of India’s most competitive engineering entrance exams.",
        category: "Academics",
        icon: <GraduationCap className="w-6 h-6" />,
    },
    {
        title: "Cognitive Skills Champion (UCMAS)",
        description: "Earned State-level Runner-up/Champion title and received National-level merit trophies in advanced mental arithmetic competitions.",
        category: "Academics",
        icon: <Medal className="w-6 h-6" />,
    },
    {
        title: "Olympiad Gold Medalist",
        description: "Awarded the Gold Medal in the Class 10 International English Olympiad (IEO).",
        category: "Academics",
        icon: <Award className="w-6 h-6" />,
    },
    {
        title: "Competitive Speed Skating",
        description: "Won 1st Prize at District Level and advanced to compete at the State Level.",
        category: "Athletics",
        icon: <Trophy className="w-6 h-6" />,
    },
    {
        title: "District Cricket",
        description: "Selected twice for Under-14 District Cricket tournaments, demonstrating teamwork and athletic discipline.",
        category: "Athletics",
        icon: <Medal className="w-6 h-6" />,
    },
];

const cardVariants = {
    offscreen: {
        y: 50,
        opacity: 0,
        scale: 0.95,
    },
    onscreen: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
};

export default function Achievements() {
    return (
        <section id="achievements" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-outfit text-brown-950 mb-4">
                        Milestones & <span className="text-brown-700">Achievements</span>
                    </h2>
                    <div className="w-24 h-1 bg-brown-600 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                delay: index * 0.1,
                                duration: 0.8,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.3 }
                            }}
                            className="glass-card p-8 rounded-3xl group cursor-default"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-brown-50 flex items-center justify-center text-brown-600 mb-6 group-hover:bg-brown-900 group-hover:text-white transition-colors duration-500 shadow-sm">
                                {achievement.icon}
                            </div>
                            <span className="text-xs font-bold uppercase tracking-widest text-brown-400 mb-2 block">
                                {achievement.category}
                            </span>
                            <h3 className="text-xl font-bold text-brown-900 mb-3 group-hover:text-brown-700 transition-colors">
                                {achievement.title}
                            </h3>
                            <p className="text-brown-600/80 leading-relaxed text-sm">
                                {achievement.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
