import { motion } from "framer-motion";
import {ProcessStep, WhyCard, TrustItem} from "./WhyComponents";
import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import SkillCard from "./SkillCard";
import { ArchitectureLine, ArchitectureNode, MiniArchitectureNode } from "./Architectures";

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Work", href: "#projects" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <main className="min-h-screen bg-[#FAF9F7] text-[#171717] selection:bg-[#B88746]/20">
      {/* ============================================================
          NAVBAR
      ============================================================ */}
      

      {/* ============================================================
          HERO
      ============================================================ */}
 
      {/* ============================================================
    ABOUT + SKILLS
============================================================ */}

      
      {/* ============================================================
    FEATURED PROJECTS
============================================================ */}


{/* ============================================================
    DEVELOPMENT PROCESS
============================================================ */}

      {/* ============================================================
    CONTACT + FOOTER
============================================================ */}

    </main>
  );
}