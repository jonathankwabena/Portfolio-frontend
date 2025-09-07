import { motion } from "framer-motion";
import FadeInSection from "../components/FadeInSection";
import { link, title } from "framer-motion/client";

export default function Projects() {
  // Instead of fetching from an API, hardcode your projects here:
  const projects = [
    {
      title: "unknown 1",
      description:
        "none",
      link: "#",
    },
    {
      title: "unknown 2",
      description:
        "none",
      link:"#",
    },
    {
      title: "unknwon 3",
      description:
        "none",
      link: "#",
    },
    {
      title: "unknwon 4",
      description: "none",
      link: "#",
    },
  ];

  return (
    <FadeInSection>
      <motion.section
        id="projects"
        className="min-h-screen bg-white py-16 px-6 flex flex-col items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Projects
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-indigo-600 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-500 hover:underline font-medium"
                >
                  View Project →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>
    </FadeInSection>
  );
}
