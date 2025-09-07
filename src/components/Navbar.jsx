import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 👇 make sure all section IDs match exactly with your section components
  const sections = ["home", "about", "skills", "projects", "contact", "journey"];

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all ${
        isScrolled ? "bg-white shadow-md" : "bg-white/70 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold text-indigo-600">MyPortfolio</div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6">
          {sections.map((section) => (
            <ScrollLink
              key={section}
              to={section}
              smooth={true}
              duration={500}
              spy={true}                 // 👈 track active section
              offset={-80}               // match navbar height
              className="cursor-pointer text-gray-800 hover:text-indigo-600 transition"
              activeClass="text-indigo-600 font-semibold"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </ScrollLink>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <HiX className="w-8 h-8 text-gray-800" />
            ) : (
              <HiMenu className="w-8 h-8 text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-white shadow-md w-full absolute top-full left-0 flex flex-col items-center py-4 space-y-4"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
          >
            {sections.map((section) => (
              <motion.div key={section} variants={itemVariants}>
                <ScrollLink
                  to={section}
                  smooth={true}
                  duration={500}
                  spy={true}                // 👈 track active section
                  offset={-80}
                  className="cursor-pointer text-gray-800 hover:text-indigo-600 transition text-lg"
                  onClick={() => setMenuOpen(false)}
                  activeClass="text-indigo-600 font-semibold"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </ScrollLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
