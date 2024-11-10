"use client";

import React, { useState, useEffect } from 'react';
import { FaHome, FaGraduationCap, FaCogs, FaBriefcase, FaProjectDiagram } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// Define keyframes for the bounce animation (if needed elsewhere)
const bounceAnimation = `
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

const links = [
  { name: "Home", path: "home", icon: <FaHome /> },
  { name: "Education", path: "education", icon: <FaGraduationCap /> },
  { name: "Skills", path: "skills", icon: <FaCogs /> },
  { name: "Experience", path: "experience", icon: <FaBriefcase /> },
  { name: "Projects", path: "projects", icon: <FaProjectDiagram /> },
];

const socialLinks = [
  { name: "GitHub", path: "https://github.com/SMBullet", icon: <FaGithub /> },
  { name: "LinkedIn", path: "https://www.linkedin.com/in/mehdi-stoti/", icon: <FaLinkedin /> },
  { name: "Twitter", path: "https://x.com/StotiMehdi", icon: <FaTwitter /> },
];

const MobileNav = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isNavVisible, setIsNavVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionIds = links.map(link => link.path);

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop - 50 && scrollPosition < sectionTop + sectionHeight - 50) {
            setActiveLink(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check active link on component mount as well
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (path) => {
    const section = document.getElementById(path);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveLink(path); // Optionally highlight the active link
      setIsNavVisible(false); // Close the navbar after a link is clicked
    }
  };

  return (
    <div>
      {/* Toggle Button */}
      <button
        onClick={() => setIsNavVisible(prev => !prev)}
        className="fixed top-4 right-4 w-12 h-12 bg-gradient-to-r from-[#111827] to-[#1F2937] rounded-full flex items-center justify-center text-white toggle-button z-50"
        aria-label="Toggle navigation"
      >
        {isNavVisible ? '×' : '☰'}
      </button>

      {/* Mobile Navbar */}
      <div
        className={`fixed top-1/2 right-0 w-12 h-3/4 bg-gradient-to-r from-[#111827] to-[#1F2937] rounded-l-full flex flex-col items-center py-3 transform -translate-y-1/2 ${isNavVisible ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 ease-in-out z-50`}
      >
        {/* Navigation Icons */}
        <nav className="flex flex-col items-center gap-3 mt-4">
          {links.map((link, index) => (
            <button
              key={index}
              onClick={() => handleLinkClick(link.path)}
              className={`flex items-center justify-center w-10 h-10 rounded-full text-xl transition-all duration-300 ${
                link.path === activeLink
                  ? "bg-gradient-to-r from-red-500 to-red-700 text-white" // Red gradient background for active link
                  : "text-neutral-300 hover:bg-[#1e385b] hover:text-white"
              }`}
            >
              {link.icon}
            </button>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex flex-col items-center gap-3 mt-auto mb-4">
          {socialLinks.map((link, index) => (
            <a
              href={link.path}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full text-xl bg-transparent text-neutral-400 hover:bg-[#0e1a2a] hover:text-white transition-all duration-300"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
