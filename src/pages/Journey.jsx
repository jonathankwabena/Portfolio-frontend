import { motion } from "framer-motion";
import FadeInSection from "../components/FadeInSection";

export default function Journey() {
  // Your journey entries
  const journeyEntries = [
    {
      date: "not set yet",
      time: "none",
      title: "unknwon",
      description:
        "...",
    },
    {
      date: "not set yet",
      time: "none",
      title: "unkwown",
      description:
        "....",
    },
    {
      date: "not set yet",
      time: "none",
      title: "unknown",
      description:
        "...",
    },
  ];

  return (
    <FadeInSection>
      <motion.section
        id="journey"
        className="min-h-screen bg-gray-50 py-16 px-6 flex flex-col items-center"
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
          My Coding Journey
        </motion.h2>

        <div className="space-y-8 max-w-3xl w-full">
          {journeyEntries.map((entry, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-indigo-500"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-500">
                  {entry.date} • {entry.time}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                {entry.title}
              </h3>
              <p className="text-gray-700">{entry.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </FadeInSection>
  );
}
