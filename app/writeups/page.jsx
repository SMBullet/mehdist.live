"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Clock, FileText } from 'lucide-react';
import SearchBox from '@/components/SearchBox';

const hackTheBoxMachines = [
    {
        title: "Administrator",
        image: "/HackTheBox/Boxes/Administrator.png",
        link: "/writeups/hackthebox/administrator",
        readTime: 0
    },
    {
        title: "Cicada",
        image: "/HackTheBox/Boxes/cicada.png",
        link: "/writeups/hackthebox/cicada",
        readTime: 0
    },
    {
        title: "GreenHorn",
        image: "/HackTheBox/Boxes/GreenHorn.png",
        link: "/writeups/hackthebox/greenhorn",
        readTime: 0
    },
    {
        title: "Instant",
        image: "/HackTheBox/Boxes/Instant.png",
        link: "/writeups/hackthebox/instant",
        readTime: 0
    },
    {
        title: "Sightless",
        image: "/HackTheBox/Boxes/Sightless.png",
        link: "/writeups/hackthebox/sightless",
        readTime: 0
    },
    {
        title: "Chemistry",
        image: "/HackTheBox/Boxes/Chemistry.png",
        link: "/writeups/hackthebox/chemistry",
        readTime: 0
    },
    {
        title: "Archetype",
        image: "/HackTheBox/Boxes/Archetype.png",
        link: "/writeups/hackthebox/archetype",
        readTime: 0
    },
    {
        title: "Oopsie",
        image: "/HackTheBox/Boxes/Oopsie.png",
        link: "/writeups/hackthebox/oopsie",
        readTime: 0
    },
    {
        title: "Gunship",
        image: "/HackTheBox/Boxes/Gunship.png",
        link: "/writeups/hackthebox/gunship",
        readTime: 0
    },
    {
        title: "Blurry",
        image: "/HackTheBox/Boxes/Blurry.png",
        link: "/writeups/hackthebox/blurry",
        readTime: 0
    },
    {
        title: "Vaccine",
        image: "/HackTheBox/Boxes/Vaccine.png",
        link: "/writeups/hackthebox/vaccine",
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
          
          {/* Full-width methodology card */}
          <div className="w-full mb-12">
            <div className="border border-gray-700 rounded-2xl bg-gray-900/20 shadow-lg p-8">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-4 text-gray-200">CTF Methodology</h2>
                <p className="text-gray-400 mb-6 text-lg">
                  Discover my systematic approach to Capture The Flag challenges. Learn about the tools, techniques, and strategies I use to tackle various security challenges.
                </p>
                <div className="flex justify-center">
                  <motion.a
                    href="/My-CTF-Methodology"
                    className="flex items-center space-x-3 bg-red-500 text-white py-3 px-6 rounded-full hover:bg-red-600 transition duration-300 text-lg font-medium shadow-md"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>View My Methodology</span>
                    <FileText className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
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
