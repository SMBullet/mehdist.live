"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from 'lucide-react';

const certificationsData = [
  {
    title: "Certified AppSec Practitioner (CAP)",
    institution: "The SecOps Group",
    year: "2024",
    link: "https://www.secops.org/cap",
    image: "/certifications/1707232957468.jpeg",
  },
  {
    title: "arcX Cyber Threat Intelligence 101",
    institution: "arcX",
    year: "2024",
    link: "https://arcx.com/cyber-threat-intelligence-101",
    image: "/certifications/1679159067212.jpeg",
  },
];

const awsBadgesData = [
  {
    link: "https://www.credly.com/badges/225cbbfd-faf9-4231-a23f-d62e4d669bfb/public_url",
    image: "/certifications/aws-educate-getting-started-with-compute.png",
    alt: "AWS Educate Getting Started With Compute",
  },
  {
    link: "https://www.credly.com/badges/225cbbfd-faf9-4231-a23f-d62e4d669bfb/public_url",
    image: "/certifications/aws-educate-introduction-to-cloud-101.png",
    alt: "AWS Educate Introduction To Cloud",
  },
];

const tryHackMeData = {
  badge: {
    imageUrl: "https://tryhackme-badges.s3.amazonaws.com/MSBullet.png",
    link: "https://tryhackme.com/r/p/MSBullet",
    alt: "TryHackMe Badge",
  },
  certifications: [
    {
      title: "Jr Penetration Tester",
      institution: "TryHackMe",
      year: "2024",
      image: "/certifications/THM-STSEMYLBE9.png",
      link: "https://tryhackme.com/room/jrpenetrationtester", // Add relevant link
    },
  ],
};

const Certifications = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 sm:p-8 mt-16" id="certifications">
      <motion.div
        className="w-full max-w-6xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="border shadow-xl rounded-2xl bg-transparent">
          <CardContent className="p-8 sm:p-12">
            <h1 className="text-5xl sm:text-7xl font-extrabold mb-4 text-center animate-moving-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
              My Certifications
            </h1>
            <p className="text-lg text-gray-400 text-center mb-8">
              Here are my professional certifications that demonstrate my skills and commitment to cybersecurity.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {certificationsData.map((certification, index) => (
                <div key={index} className="flex flex-col bg-gray-900/20 border border-gray-700 rounded-lg p-4">
                  <img 
                    src={certification.image} 
                    alt={`${certification.title} Image`} 
                    className="mb-2 rounded-md"
                  />
                  <h2 className="text-2xl font-bold text-gray-200">{certification.title}</h2>
                  <p className="text-gray-400">{certification.institution} - {certification.year}</p>
                  <a 
                    href={certification.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center space-x-2 text-red-500 hover:text-red-600 transition duration-300"
                  >
                    <span>View Certification</span>
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              ))}
            </div>

            {/* TryHackMe Badge */}
            <div className="mt-10 flex flex-col items-start">
              <h2 className="text-3xl font-bold mb-4 text-gray-200">My TryHackMe Badge</h2>
              <a href={tryHackMeData.badge.link} target="_blank" rel="noopener noreferrer">
                <img 
                  src={tryHackMeData.badge.imageUrl} 
                  alt={tryHackMeData.badge.alt} 
                  className="rounded-lg shadow-md mb-6"
                />
              </a>
            </div>

            {/* TryHackMe Certifications */}
            <div className="mt-10">
              <h2 className="text-3xl font-bold mb-4 text-gray-200">My TryHackMe Certifications</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {tryHackMeData.certifications.map((certification, index) => (
                  <div key={index} className="flex flex-col bg-gray-900/20 border border-gray-700 rounded-lg p-4">
                    <img 
                      src={certification.image} 
                      alt={`${certification.title} Image`} 
                      className="mb-2 rounded-md"
                    />
                    <h2 className="text-2xl font-bold text-gray-200">{certification.title}</h2>
                    <p className="text-gray-400">{certification.institution} - {certification.year}</p>
                    <a 
                      href={certification.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center space-x-2 text-red-500 hover:text-red-600 transition duration-300"
                    >
                      <span>View Certification</span>
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* AWS Badges */}
            <div className="mt-10">
              <h2 className="text-3xl font-bold mb-4 text-gray-200">My AWS Badges</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {awsBadgesData.map((badge, index) => (
                  <a 
                    key={index} 
                    href={badge.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <img 
                      src={badge.image} 
                      alt={badge.alt} 
                      className="rounded-lg shadow-md"
                    />
                  </a>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

export default Certifications;
