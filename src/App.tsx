import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import WhyMe from "./components/WhyMe";

export default function App() {
  return (
    <main className="min-h-screen bg-[#FAF9F7] text-[#171717] selection:bg-[#B88746]/20">
      <Navbar />
      <Hero />
      <Services />
      <WhyMe />
      <Projects />
      <Footer />
    </main>
  );
}
