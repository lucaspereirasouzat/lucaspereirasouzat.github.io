import * as React from "react";
import { motion } from "framer-motion";

export default function ParallaxSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      whileInView={{ opacity: [0.92, 1], y: [24, 0] }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}
