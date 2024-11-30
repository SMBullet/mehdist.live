"use client";

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { FaArrowLeft } from 'react-icons/fa';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';  // Importing Next.js Image component

// Dynamic data for certifications
const certificationsData = [
  {
    title: "Certified AppSec Practitioner (CAP)",
    institution: "The SecOps Group",
    year: "2024",
    link: "https://secops.group/certificate-validation",
    image: "/certifications/1707232957468.jpeg",
    certificateId: "8377487",
    name: "Mehdi"
  },
  {
    title: "ISO/IEC 27001 Information Security Associate™",
    institution: "SkillFront",
    year: "2024",
    link: "https://www.skillfront.com/Badges/48181512835155",
    image: "/certifications/ISO27001.png",
  },
  {
    title: "arcX Cyber Threat Intelligence 101",
    institution: "arcX",
    year: "2023",
    link: "https://arcx.io/verify-certificate?id=4704696c04cff9d2a47625d4b3fcc2ad29109d00&k=aa71a90338254ea09a7209c555ce7915",
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

const hackTheBoxData = {
  badge: {
    imageUrl: "/HackTheBox/HTB-badge.png",
    link: "https://app.hackthebox.com/profile/1227600",
    alt: "Hack The Box Badge",
  },
};

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
    },
    {
      title: "Web Fundamentals",
      institution: "TryHackMe",
      year: "2024",
      image: "/certifications/THM-KJNUGCNEDH.png",
    },
    {
      title: "Pre Security",
      institution: "TryHackMe",
      year: "2024",
      image: "/certifications/THM-DB7NNTMRWV.png",
    },
  ],
};

const Certifications = memo(() => {
  const handleBackClick = (e) => {
    e.preventDefault();
    window.history.back();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 sm:p-8 mt-16 relative" id="certifications">
      <motion.div
        className="w-full max-w-6xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Back to Portfolio Button */}
        <div className="mb-8">
          <motion.a
            href="#"
            onClick={handleBackClick}
            className="inline-flex items-center text-gray-300 hover:text-red-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <FaArrowLeft className="mr-2" /> Back to Portfolio
          </motion.a>
        </div>

        <Card className="border-none shadow-xl rounded-2xl bg-transparent">
          <CardContent className="p-8 sm:p-12">
            <h1 className="text-5xl sm:text-7xl font-extrabold mb-4 text-center animate-moving-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
              My Certifications
            </h1>
            <p className="text-lg text-gray-400 text-center mb-8">
              Here are my professional certifications that demonstrate my skills and commitment to cybersecurity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {certificationsData.map(({ image, title, institution, year, certificateId, name, link }, index) => (
                <div key={certificateId || index} className="flex flex-col bg-gray-900/20 border border-gray-700 rounded-lg p-4">
                  <Image
                    src={image}
                    alt={`${title} Image`}
                    className="mb-2 rounded-md"
                    width={500}
                    height={300}
                    loading="lazy"
                  />
                  <h2 className="text-2xl font-bold text-gray-200">{title}</h2>
                  <p className="text-gray-400">{institution} - {year}</p>
                  {certificateId && name && (
                    <p className="text-gray-400 mt-1">Certificate ID: {certificateId}</p>
                  )}
                  {name && (
                    <p className="text-gray-400 mt-1">Name: {name}</p>
                  )}
                  <a
                    href={link}
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

            {/* Hack The Box Badge */}
            <div className="mt-10 flex flex-col items-start">
              <h2 className="text-3xl font-bold mb-4 text-gray-200">My Hack The Box Profile</h2>
              <a href={hackTheBoxData.badge.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={hackTheBoxData.badge.imageUrl}
                  alt={hackTheBoxData.badge.alt}
                  className="rounded-lg shadow-md mb-6"
                  width={300}
                  height={150}
                  loading="lazy"
                />
              </a>
            </div>

            {/* TryHackMe Badge */}
            <div className="mt-10 flex flex-col items-start">
              <h2 className="text-3xl font-bold mb-4 text-gray-200">My TryHackMe Badge</h2>
              <a href={tryHackMeData.badge.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={tryHackMeData.badge.imageUrl}
                  alt={tryHackMeData.badge.alt}
                  className="rounded-lg shadow-md mb-6"
                  width={300}
                  height={150}
                  loading="lazy"
                />
              </a>
            </div>

            {/* TryHackMe Certifications */}
            <div className="mt-10">
              <h2 className="text-3xl font-bold mb-4 text-gray-200">My TryHackMe Certifications</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {tryHackMeData.certifications.map(({ image, title, institution, year }, index) => (
                  <div key={index} className="flex flex-col bg-gray-900/20 border border-gray-700 rounded-lg p-4">
                    <Image
                      src={image}
                      alt={`${title} Image`}
                      className="mb-2 rounded-md"
                      width={500}
                      height={300}
                      loading="lazy"
                    />
                    <h2 className="text-2xl font-bold text-gray-200">{title}</h2>
                    <p className="text-gray-400">{institution} - {year}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* AWS Badges */}
            <div className="mt-10">
              <h2 className="text-3xl font-bold mb-4 text-gray-200">My AWS Badges</h2>
              <div className="flex flex-wrap gap-4">
                {awsBadgesData.map(({ link, image, alt }, index) => (
                  <div
                    key={index}
                    className="flex flex-col bg-gray-900/20 border border-gray-700 rounded-lg p-2 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center"
                    >
                      <Image
                        src={image}
                        alt={alt}
                        className="rounded-md w-28 h-28 transition duration-300 hover:scale-105"
                        width={112}
                        height={112}
                        loading="lazy"
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
});

export default Certifications;
