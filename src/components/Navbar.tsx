import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Github, Linkedin, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Work", href: "#projects" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-black/[0.07] bg-white/75 px-4 py-2.5 shadow-[0_8px_40px_rgba(0,0,0,0.04)] backdrop-blur-xl sm:px-5">
        {/* Logo */}
        <a
          href="#top"
          className="group flex items-center gap-3"
          onClick={() => setMobileMenuOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#171717] text-sm font-semibold tracking-tight text-white transition-transform duration-300 group-hover:rotate-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={25}
              height={25}
              viewBox="0 0 357.18 208.65"
            >
              <title>logo-vector</title>
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_2-2" data-name="Layer 2">
                  <path
                    style={{ fill: "#fff" }}
                    d="M357.18,208.65H218.7L202.1,176l-4.5-8.85-9.7-19.06-7-13.68-6.29-12.36-.45-.9L169.55,112l-6.28-12.36L151.38,76.27,132.17,38.49,127.84,47,76.44,148.09h38.43l13-25.55.25-.49,5.11-10,6.28-12.36,7.56-14.85,7.55,14.85L160.89,112l5.11,10,3.88,7.62-2.41,4.74-7,13.68-9.69,19.06-21.1,41.5H84.07l21.11-41.5H66.75l-21.1,41.5H0l21.11-41.5,9.69-19.06L105,2.12,106.1,0h52.15l16,31.39L197,76.27l11.88,23.37h47.21L220.63,29.85l-19.27,37.9L178.54,22.87,190.17,0h60.92l50.66,99.64L308,112l5.11,10,6.28,12.36H240l-6.28-12.36h33.84l-5.11-10H215.2l5.11,10,6.28,12.36,7,13.68h84.64a13.38,13.38,0,0,1,11.92,7.31l6,11.75H243.24l4.5,8.85h92.84Z"
                  />
                </g>
              </g>
            </svg>
          </span>

          <span className="hidden text-sm font-semibold tracking-[-0.02em] sm:block">
            Pons Anthony Advento
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-black/55 transition-all duration-300 hover:bg-black/5 hover:text-black"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            href="https://github.com/advento098"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-full text-black/50 transition-all duration-300 hover:bg-black/5 hover:text-black"
          >
            <Github size={16} strokeWidth={1.7} />
          </a>

          <a
            href="https://www.linkedin.com/in/ponsanthonyadvento"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full text-black/50 transition-all duration-300 hover:bg-black/5 hover:text-black"
          >
            <Linkedin size={16} strokeWidth={1.7} />
          </a>

          <a
            href="#contact"
            className="group ml-1 flex items-center gap-2 rounded-full bg-[#171717] px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#B88746]"
          >
            Let's talk
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-black/4 text-black md:hidden"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={
          mobileMenuOpen
            ? { opacity: 1, y: 0, pointerEvents: "auto" }
            : { opacity: 0, y: -10, pointerEvents: "none" }
        }
        transition={{ duration: 0.25 }}
        className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-3xl border border-black/[0.07] bg-white/90 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-xl md:hidden"
      >
        <div className="flex flex-col">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between px-4 py-3.5 text-sm font-medium text-black/65 transition-colors hover:text-black ${
                index !== navItems.length - 1 ? "border-b border-black/6" : ""
              }`}
            >
              {item.label}
              <ArrowUpRight size={15} />
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 flex items-center justify-center rounded-2xl bg-[#171717] px-4 py-3 text-sm font-medium text-white"
          >
            Let's talk
          </a>
        </div>
      </motion.div>
    </header>
  );
}
