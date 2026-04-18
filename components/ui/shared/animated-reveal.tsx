"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function AnimatedReveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.18 }}
    >
      {children}
    </motion.div>
  );
}