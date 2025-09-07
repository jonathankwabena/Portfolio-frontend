import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Skills from "./pages/Skills";
import BackToTop from "./components/BackToTop";
import Journey from "./pages/Journey";

export default function App() {
  return (
    <>
      <Navbar />
      {/* add top padding so fixed navbar doesn't cover content */}
      <main className="pt-20">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Journey/>
      </main>
      <Footer />
      <BackToTop />
    </>

  );
}
