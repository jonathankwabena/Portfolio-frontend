import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

export default function Home() {
  const [bgLoaded, setBgLoaded] = useState(false);

  // Preload background GIF
  useEffect(() => {
    const img = new Image();
    img.src = "/background.gif";
    img.onload = () => setBgLoaded(true);
  }, []);

  return (
    <section
      id="home"
      style={{ scrollMarginTop: "80px" }} // smooth scroll offset
      className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-20"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: bgLoaded
            ? "url('/background.gif')"
            : "url('/background-placeholder.jpg')",
        }}
      ></div>

      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content */}
      <div className="relative z-10">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-40 h-40 rounded-full shadow-lg  border-white object-cover"
        />

        <h1 className="mt-6 text-4xl font-bold text-white drop-shadow-lg">
          Hi, I’m <span className="text-indigo-400 drop-shadow-lg">Jonathan Kwabena Adjewu</span>
        </h1>

        <p className="mt-4 text-lg max-w-xl text-white drop-shadow-md">
          I’m a Full Stack Engineer passionate about building modern web
          applications with React, Node.js, and more.
        </p>

        <div className="mt-10">
          <ScrollLink
            to="about"
            smooth={true}
            duration={700}
            offset={-80}
            aria-label="Scroll to About"
          >
            <ArrowDown className="w-8 h-8 text-indigo-400 drop-shadow-lg animate-bounce" />
          </ScrollLink>
        </div>
      </div>
    </section>
  );
}
