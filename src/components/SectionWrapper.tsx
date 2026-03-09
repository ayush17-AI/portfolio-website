"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
    children: ReactNode;
    delay?: number;
}

export default function SectionWrapper({
    children,
    delay = 0,
}: SectionWrapperProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
        >
            {children}
        </motion.div>
    );
}
