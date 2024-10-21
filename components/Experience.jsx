"use client";

import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { ChevronDown } from "lucide-react"; // Importing the chevron icon
import { FaGithub } from "react-icons/fa"; // Importing GitHub icon

const Experience = () => {
  const experiences = [
    {
      title: "Internship PFA: Development of a Penetration Testing Automation Application",
      date: "Summer 2024",
      location: "Marrakech, Morocco",
      description: (
        <>
          I developed a web application to automate penetration testing at <span className="text-accent">NetSec Technologies</span>. 
          I used <span className="text-accent">Spring Boot</span> with <span className="text-accent">Spring Security</span>, <span className="text-accent">Bash</span>, and 
          <span className="text-accent">Python</span> for the backend, and <span className="text-accent">React</span>, <span className="text-accent">Tailwind</span>, 
          and <span className="text-accent">Redux</span> for the frontend.
        </>
      ),
      github: "https://github.com/SMBullet/VulnHunter"
    },
    {
      title: "Internship: Web Development",
      date: "Summer 2023",
      location: "Marrakech, Morocco",
      description: (
        <>
          I contributed to the creation of a full-stack web application for <span className="text-accent">WLC</span>, 
          by developing the backend of their food ordering platform <span className="text-accent">&apos;eat.ma&apos;</span> using 
          <span className="text-accent">Laravel</span> and <span className="text-accent">Bootstrap</span>.
        </>
      ),
      github: "https://github.com/SMBullet/eat.ma"
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-6 pt-20" id='experience'>
      <motion.div
        className="w-full max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700 mb-8">
          Experience
        </h2>

        <Accordion type="multiple" collapsible className="space-y-6">
          {experiences.map((experience, index) => (
            <AccordionItem key={index} value={`experience-${index}`} className="border border-gray-700 shadow-xl rounded-2xl p-4 bg-transparent">
              <AccordionTrigger
                className={`text-lg font-semibold text-white transition-all duration-300 bg-transparent hover:bg-black/50 w-full text-left flex items-center`}
              >
                <span className="flex-grow">{experience.title}</span> {/* Occupies available space */}
                <ChevronDown className="w-5 h-5 text-gray-400 ml-2" /> {/* Chevron positioned at the end */}
              </AccordionTrigger>

              {/* Date and Location */}
              <div className="flex items-center gap-4 text-sm text-gray-400 mt-1 mb-2">
                <div className="flex items-center">
                  <FaCalendarAlt className="mr-1 text-red-500" />
                  {experience.date}
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="mr-1 text-red-500" />
                  {experience.location}
                </div>
              </div>

              {/* Accordion Content */}
              <AccordionContent className="p-4 bg-transparent text-neutral-300 leading-relaxed">
                {experience.description}
                {/* GitHub Icon */}
                <div className="mt-4">
                  <a href={experience.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="w-6 h-6 text-gray-400 hover:text-gray-300 transition duration-300" />
                  </a>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  );
};

export default Experience;
