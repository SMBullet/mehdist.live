"use client";

import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { motion } from 'framer-motion';
import { FaGithub, FaGlobe } from "react-icons/fa";
import Link from 'next/link';

const projects = [
  {
    title: "DevSecOps Microservices Application Deployment",
    description: (
      <>
        Built a secure microservices web app using Spring Boot and React, containerized with Docker, and deployed on Kubernetes with a fully automated CI/CD pipeline.
      </>
    ),
    tools: ["Spring Boot", "React", "Docker", "Jenkins", "Kubernetes", "Trivy", "SonarQube", "Maven"],
    github: "https://github.com/SMBullet/DevSecOps",
    link: "/projects/devsecops-p"
  },
  {
    title: "Next-Gen Security Operations Center (NGSOC) Deployment",
    description: (
      <>
        Deployed a Security Operations Center using Wazuh for real-time security monitoring and alert management.
      </>
    ),
    tools: ["Wazuh", "Grafana", "Graylog", "Suricata ids", "VirusTotal API", "TheHive", "Sysmon", "PacketBeat", "Yara"],
    github: "https://github.com/yourusername/NGSOC",
    link: "/projects/ngsoc"
  },
  {
    title: "AI-Enhanced Intrusion Detection System",
    description: (
      <>
        Developed an AI-driven IDS for analyzing network traffic and detecting threats in real-time.
      </>
    ),
    tools: ["Python", "Bash Scripting", "AI Algorithms"],
    github: "https://github.com/Eljakani/deeplearning-ids",
    link: "/projects/ids"
  },
  {
    title: "Advanced Password Generator and Strength Checker",
    description: (
      <>
        Built a tool with React to generate strong passwords and assess their strength based on rules.
      </>
    ),
    tools: ["React.js"],
    github: "https://github.com/SMBullet/MutePass",
    website: "https://mute-pass.vercel.app/",
    link: "/projects/password-generator"
  },
  {
    title: "Automated Deployment of FTP, DHCP, and Mailing Servers on Debian",
    description: (
      <>
        Automated the setup of FTP, DHCP, and mailing servers using Bash on Debian.
      </>
    ),
    tools: ["Bash Scripting", "Debian"],
    github: "https://github.com/Eljakani/FDM",
    link: "/projects/FDM"
  },
  {
    title: "Hardening as a Code",
    description: (
      <>
        A shell script that hardens Unix systems, mainly Debian and Ubuntu, following the ANSSI recommendations. It enhances system security by hardening GRUB, kernel, and network settings, while also restricting services and access.
      </>
    ),
    tools: ["Shell", "Linux", "Security"],
    github: "https://github.com/SMBullet/Unix-Hardening-Script",
    link: "/projects/hardening-as-a-code"
  }
];

const Projects = () => {
  // Client-only rendering
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set client-side flag after component mounts
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-6" id="projects">
      <motion.div
        className="w-full max-w-6xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700 mb-8">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.link} // Use 'href' for Next.js Link
              className="block relative"
            >
              <Card className="flex flex-col justify-between h-full border border-gray-700 shadow-xl rounded-2xl p-4 bg-transparent transition-transform transform hover:scale-105 hover:bg-black/50 cursor-pointer">
                <ArrowRight className="absolute top-4 right-4 w-6 h-6 text-red-500" />

                <CardHeader className="text-lg font-semibold text-white">
                  {project.title}
                </CardHeader>

                <CardContent className="mt-2 text-neutral-300 leading-relaxed flex-grow">
                  {project.description}
                </CardContent>

                <div className="flex flex-wrap gap-2 mt-4 ml-1 -mb-2">
                  {project.tools.map((tool, toolIndex) => (
                    <span key={toolIndex} className="bg-red-500/20 text-red-500 text-sm rounded-full px-3 py-1">
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Icons Container */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2">
                  {/* Conditionally render the Website Icon */}
                  {isClient && project.website && (
                    <a
                      href={project.website} // Link to the website, only for the password generator
                      rel="noopener noreferrer"
                      className="w-8 h-8 text-gray-400 hover:text-red-500 transition duration-300 transform hover:scale-110"
                    >
                      <FaGlobe className="w-full h-full" /> {/* Set the icon to fill the anchor tag */}
                    </a>
                  )}

                  {/* GitHub Icon */}
                  {isClient && (
                    <a
                      href={project.github}
                      rel="noopener noreferrer"
                      className="w-8 h-8 text-gray-400 hover:text-red-500 transition duration-300 transform hover:scale-110"
                    >
                      <FaGithub className="w-full h-full" /> {/* Set the icon to fill the anchor tag */}
                    </a>
                  )}
                </div>
              </Card>
            </Link> // Close the Link component
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
