import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-blue-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Databases", icon: <FaDatabase className="text-indigo-600" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-16 px-6"
      style={{
        backgroundImage: "url('/skillsbg.gif')", // <-- your background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Section Content */}
      <motion.h2
        className="text-4xl font-bold text-white mb-10 z-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        My Skills
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-5xl w-full z-10">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-white/90 rounded-2xl shadow-md hover:scale-110 transition-transform cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="text-5xl mb-2">{skill.icon}</div>
            <p className="text-gray-800 font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
