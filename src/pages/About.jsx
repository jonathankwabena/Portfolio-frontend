import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 py-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-4xl font-bold text-gray-800 mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="text-lg text-gray-700 max-w-2xl text-center leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Hi, I&apos;m{" "}
        <span className="font-semibold text-gray-900">Jonathan Kwabena Adjewu</span>. 
        I&apos;m a passionate{" "}
        <span className="text-indigo-600 font-medium">Full Stack Engineer </span> 
        who enjoys building modern, user-friendly, and scalable applications. 
        I specialize in <span className="font-semibold text-gray-900">React, Node.js, and databases</span>, 
        but I’m always eager to learn new technologies and solve real-world problems through code.
      </motion.p>
    </motion.section>
  );
}
