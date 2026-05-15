"use client";

import { motion } from "framer-motion";

export default function Reveal({ children, width = "100%", delay = 0.2 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
}
