"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Clock } from 'lucide-react';
import SearchBox from '@/components/SearchBox';

const hackTheBoxMachines = [
    {
        title: "Cicada",
        image: "/HackTheBox/Boxes/cicada.png",
        link: "/writeups/hackthebox/cicada",
        description: "A complex box featuring advanced cryptography and steganography challenges.",
        readTime: 0
    },
    {
        title: "GreenHorn",
        image: "/HackTheBox/Boxes/GreenHorn.png",
        link: "/writeups/hackthebox/greenhorn",
        description: "Entry-level machine perfect for practicing web exploitation basics.",
        readTime: 0
    },
    {
        title: "Instant",
        image: "/HackTheBox/Boxes/Instant.png",
        link: "/writeups/hackthebox/instant",
        description: "Fast-paced box focusing on service enumeration and privilege escalation.",
        readTime: 0
    },
    {
        title: "Sightless",
        image: "/HackTheBox/Boxes/Sightless.png",
        link: "/writeups/hackthebox/sightless",
        description: "Blind SQL injection and creative lateral movement techniques.",
        readTime: 0
    },
    {
        title: "Chemistry",
        image: "/HackTheBox/Boxes/Chemistry.png",
        link: "/writeups/hackthebox/chemistry",
        description: "Chemical formula parsing vulnerabilities and buffer overflows.",
        readTime: 0
    },
    {
        title: "Archetype",
        image: "/HackTheBox/Boxes/Archetype.png",
        link: "/writeups/hackthebox/archetype",
        description: "Windows machine showcasing common misconfigurations.",
        readTime: 0
    },
    {
        title: "Oopsie",
        image: "/HackTheBox/Boxes/Oopsie.png",
        link: "/writeups/hackthebox/oopsie",
        description: "Web application exploitation and privilege escalation chains.",
        readTime: 0
    },
    {
        title: "Gunship",
        image: "/HackTheBox/Boxes/Gunship.png",
        link: "/writeups/hackthebox/gunship",
        description: "Advanced binary exploitation and reverse engineering challenges.",
        readTime: 0
    },
    {
        title: "Blurry",
        image: "/HackTheBox/Boxes/Blurry.png",
        link: "/writeups/hackthebox/blurry",
        description: "Image processing vulnerabilities and server-side template injection.",
        readTime: 0
    },
    {
        title: "Vaccine",
        image: "/HackTheBox/Boxes/Vaccine.png",
        link: "/writeups/hackthebox/vaccine",
        description: "SQL injection and PostgreSQL privilege escalation techniques.",
        readTime: 0
    },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Writeups = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMachines, setFilteredMachines] = useState(hackTheBoxMachines);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 sm:p-8" id="writeups">
      <motion.div
        className="w-full max-w-7xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="text-center mb-12 pt-10" 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl sm:text-7xl font-extrabold mb-6 leading-tight animate-moving-gradient bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-red-400 to-red-600">
            My Writeups
          </h1>
        </motion.div>

        {/* HackTheBox Section */}
        <div className="mb-12 relative">
          <div className="flex items-center mb-8">
            <Image src="/HackTheBox/hack-the-box.svg" alt="HackTheBox Logo" width={50} height={50} />
            <h2 className="text-4xl font-bold ml-4 text-gray-200">HackTheBox</h2>
          </div>

          {/* SearchBox Component */}
          <div className="absolute top-0 right-0 mt-4 mr-4">
            <SearchBox
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              setFilteredMachines={setFilteredMachines}
              originalMachines={hackTheBoxMachines}
            />
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {filteredMachines.map((machine, index) => (
              <motion.a
                href={machine.link}
                key={index}
                className="group relative block"
                variants={item}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative h-64 w-full overflow-hidden rounded-xl backdrop-blur-md bg-white/5 border border-red-500/20 shadow-lg">
                  {/* Image Wrapper with relative positioning */}
                  <div className="absolute inset-0">
                    <Image 
                      src={machine.image} 
                      alt={`${machine.title} Image`} 
                      layout="fill" 
                      objectFit="cover" 
                      className="rounded-lg transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/20" />
                  </div>
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                        {machine.title}
                      </h3>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {machine.readTime} min read
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 line-clamp-2 mb-2">
                      {machine.description}
                    </p>
                    <div className="h-0.5 w-0 bg-red-500 transition-all duration-300 group-hover:w-full" />
                  </div>
                  
                  {/* Pulse Dot */}
                  <div className="absolute top-3 right-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>

      </motion.div>
    </div>
  );
}

export default Writeups;
