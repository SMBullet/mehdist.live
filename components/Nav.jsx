"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { FaHome, FaGraduationCap, FaCogs, FaBriefcase, FaProjectDiagram, FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

const links = [
  { name: "Home", path: "home", icon: <FaHome size={18} /> },
  { name: "Education", path: "education", icon: <FaGraduationCap size={18} /> },
  { name: "Skills", path: "skills", icon: <FaCogs size={18} /> },
  { name: "Experience", path: "experience", icon: <FaBriefcase size={18} /> },
  { name: "Projects", path: "projects", icon: <FaProjectDiagram size={18} /> },
];

const socialLinks = [
  { icon: <FaLinkedinIn size={20} />, href: "https://www.linkedin.com/in/mehdi-stoti/" },
  { icon: <FaGithub size={20} />, href: "https://github.com/SMBullet" },
  { icon: <FaTwitter size={20} />, href: "https://x.com/StotiMehdi" },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      links.forEach(({ path }) => {
        const section = document.getElementById(path);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop - 50 && scrollPosition < sectionTop + sectionHeight - 50) {
            setActiveLink(path);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (path) => {
    const section = document.getElementById(path);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveLink(path);
      setIsOpen(false); // Close the mobile menu
    }
  };

  return (
    <nav className="bg-gradient-to-r from-[#111827] to-[#1F2937] p-4 shadow-lg rounded-full max-w-5xl mx-auto fixed top-8 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {links.map(({ name, path, icon }) => (
            <button
              key={path}
              onClick={() => handleLinkClick(path)}
              className={`relative flex items-center space-x-2 py-2 px-4 text-sm font-bold tracking-wide rounded-full transition-all duration-300 ${
                activeLink === path
                  ? "bg-gradient-to-r from-red-500 to-red-700 text-white"
                  : "hover:bg-[#1e385b] text-white"
              }`}
            >
              {icon}
              <span>{name}</span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Social Links */}
        <div className="flex space-x-4">
          {socialLinks.map(({ icon, href }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-full bg-transparent hover:bg-[#0e1a2a] transition-colors duration-300"
            >
              <span className="text-white hover:text-blue-300 transition-colors duration-300">
                {icon}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 rounded-full bg-gradient-to-r from-[#111827] to-[#1F2937] shadow-lg">
          {links.map(({ name, path, icon }) => (
            <button
              key={path}
              onClick={() => handleLinkClick(path)}
              className={`relative flex items-center space-x-2 py-3 px-6 text-sm font-bold tracking-wide rounded-full transition-all duration-300 ${
                activeLink === path
                  ? "bg-gradient-to-r from-red-500 to-red-700 text-white"
                  : "text-white hover:bg-[#0e1a2a]"
              }`}
            >
              {icon}
              <span>{name}</span>
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;
