'use client';

import { motion } from 'framer-motion';

export default function FadeInUp({
    children,
    delay = 0,
    duration = 0.8,
    y = 50
}: {
    children: React.ReactNode,
    delay?: number,
    duration?: number,
    y?: number
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration, delay, ease: 'easeOut' }}
        >
            {children}
        </motion.div>
    );
}
