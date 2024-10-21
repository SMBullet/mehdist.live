"use client";

import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { motion } from 'framer-motion';
import { FaGithub, FaGlobe } from "react-icons/fa"; // Importing GitHub and Globe (Website) icons
import Link from 'next/link'; // Import Link from Next.js

const projects = [
  {
    title: "DevSecOps Microservices Application Deployment",
    description: (
      <>
        In this project, we developed and deployed a microservices-based web application using Spring Boot for the backend and React for the frontend. The application was containerized with Docker and deployed on Kubernetes, with a fully automated CI/CD pipeline built using Jenkins. We followed DevSecOps practices by integrating security and quality tools such as Trivy and SonarQube, ensuring continuous security and code quality checks throughout the development lifecycle.
      </>
    ),
    tools: ["Spring Boot", "React", "Docker", "Jenkins", "Kubernetes", "Trivy", "SonarQube", "Maven"],
    features: [
      "Fully automated CI/CD pipeline with Jenkins",
      "Containerized application using Docker",
      "Deployed on Kubernetes with scalability in mind",
      "Security vulnerability scanning using Trivy",
      "Code quality analysis with SonarQube"
    ],
    problemSolved: (
      <>
        This project addresses the need for secure, scalable, and efficient application deployment in a cloud environment. By leveraging DevSecOps principles and integrating security into every step of the development process, it improves the reliability and security of the application, while automating the build and deployment process.
      </>
    ),
    github: "https://github.com/SMBullet/DevSecOps",
    link: "/projects/devsecops-p" // Link to the project page
  },
  {
    title: "Next-Gen Security Operations Center (NGSOC) Deployment",
    description: (
      <>
        In this semester-end project, my colleague and I designed and deployed a fully functional Security Operations Center (SOC) using Wazuh, a comprehensive open-source security monitoring tool. The SOC integrates with other open-source solutions to enhance its capabilities, providing robust real-time security monitoring and centralized alert management.
      </>
    ),
    tools: ["Wazuh", "Open Source Tools"],
    features: [
      "Real-time security monitoring and alerts",
      "Centralized alert management and reporting",
      "Scalable architecture for growing needs"
    ],
    problemSolved: (
      <>
        This project addresses the need for enhanced security monitoring and incident response capabilities. By leveraging open-source tools and a scalable architecture, it significantly improves an organization's ability to detect and respond to security threats in real-time.
      </>
    ),
    github: "https://github.com/yourusername/NGSOC",
    link: "/projects/ngsoc" // Link to the project page
  },
  {
    title: "AI-Enhanced Intrusion Detection System",
    description: (
      <>
        This project involves the development of an Intrusion Detection System (IDS) with advanced AI integration. The system uses machine learning algorithms to analyze network traffic and detect potential threats, providing real-time alerts and customizable rules for enhanced security management.
      </>
    ),
    tools: ["Python", "Bash Scripting"],
    features: [
      "AI-driven threat detection and analysis",
      "Real-time alerts and notifications",
      "Customizable detection rules and configurations"
    ],
    problemSolved: (
      <>
        The IDS improves the detection of potential security threats by utilizing AI to analyze and interpret network traffic patterns. This results in more accurate threat identification and quicker response times, enhancing overall network security.
      </>
    ),
    github: "https://github.com/Eljakani/deeplearning-ids",
    link: "/projects/ids" // Link to the project page
  },
  {
    title: "Advanced Password Generator and Strength Checker",
    description: (
      <>
        This project offers a password generator and strength checker tool built with React.js. Users can generate strong passwords and assess their strength based on various criteria. The tool includes customizable rules for password generation, ensuring that users create secure passwords tailored to their needs.
      </>
    ),
    tools: ["Reactjs"],
    features: [
      "Generation of secure, random passwords",
      "Password strength assessment and feedback",
      "Customizable password rules and criteria"
    ],
    problemSolved: (
      <>
        Weak passwords are a significant security vulnerability. This tool helps mitigate this issue by providing users with strong password options and assessing the strength of their passwords, thereby enhancing overall cybersecurity practices.
      </>
    ),
    github: "https://github.com/SMBullet/MutePass",
    website: "https://mute-pass.vercel.app/", // Adding the website link
    link: "/projects/password-generator" // Link to the project page
  },
  {
    title: "Automated Deployment of FTP, DHCP, and Mailing Servers on Debian",
    description: (
      <>
        This project automates the setup and deployment of FTP, DHCP, and mailing servers on Debian-based systems using Bash scripting. The automation reduces the need for manual intervention and ensures consistent and reliable server configurations.
      </>
    ),
    tools: ["Bash Scripting"],
    features: [
      "Automated server installation and configuration",
      "Minimized manual setup and error potential",
      "Consistent and repeatable deployment process"
    ],
    problemSolved: (
      <>
        Manual server deployment can be time-consuming and prone to errors. This automation script simplifies and accelerates the process, providing a more efficient and error-free method for setting up essential server services.
      </>
    ),
    github: "https://github.com/Eljakani/FDM",
    link: "/projects/FDM" // Link to the project page
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
