"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaGithub, FaArrowLeft } from 'react-icons/fa';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from 'next/image';

const screenshots = [
  '/1.jpg',
  '/2.jpg',
];

const Ngsoc = () => {
  const handleBackClick = (e) => {
    e.preventDefault();
    window.history.back();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 pb-0 mb-10" id="ngsoc">
      <motion.div
        className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Back to Projects Link */}
        <a href="#" onClick={handleBackClick} className="flex items-center text-gray-300 hover:text-red-500 mb-4">
          <FaArrowLeft className="mr-2" /> Back to Projects
        </a>

        {/* Title and Description Card */}
        <Card className="shadow-xl rounded-2xl p-6 bg-transparent col-span-1 md:col-span-3">
          <CardContent>
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700 mb-4">
              Next-Gen Security Operations Center (NGSOC)
            </h2>
            <p className="text-lg leading-relaxed text-gray-300">
              The Next-Gen Security Operations Center (NGSOC) is designed to enhance an organization's cybersecurity posture through real-time monitoring and incident response capabilities. This comprehensive platform integrates various open-source tools to provide robust security monitoring and threat management.
            </p>
            <a href="#" rel="noopener noreferrer" className="inline-flex items-center text-red-500 hover:text-red-700 mt-4">
              <FaGithub className="mr-2" /> GitHub Repository
            </a>
          </CardContent>
        </Card>

        {/* Contributions Card */}
        <Card className="border border-gray-700 shadow-xl rounded-2xl p-6 bg-transparent col-span-1 md:col-span-2">
          <CardContent>
            <h3 className="text-xl font-semibold text-white">My Contributions</h3>
            <ul className="list-disc list-inside text-gray-300 mt-4">
              <li>Configured <strong>Wazuh</strong> for security monitoring and alert generation.</li>
              <li>Integrated <strong>TheHive</strong> for efficient incident management.</li>
              <li>Developed real-time dashboards with <strong>Grafana</strong> to visualize security metrics.</li>
              <li>Utilized <strong>Graylog</strong> for centralized log management.</li>
              <li>Implemented <strong>Suricata</strong> for network intrusion detection.</li>
              <li>Leveraged the <strong>VirusTotal API</strong> for enriched threat intelligence.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Technologies Card */}
        <Card className="border border-gray-700 shadow-xl rounded-2xl p-6 bg-transparent col-span-1 md:col-span-1">
          <CardContent>
            <h3 className="text-xl font-semibold text-white">Technologies Used</h3>
            <div className="flex flex-wrap gap-3 mt-4">
              <Badge variant="secondary" className="bg-red-500/20 text-red-500">Wazuh</Badge>
              <Badge variant="secondary" className="bg-red-500/20 text-red-500">TheHive</Badge>
              <Badge variant="secondary" className="bg-red-500/20 text-red-500">Grafana</Badge>
              <Badge variant="secondary" className="bg-red-500/20 text-red-500">Graylog</Badge>
              <Badge variant="secondary" className="bg-red-500/20 text-red-500">Suricata</Badge>
              <Badge variant="secondary" className="bg-red-500/20 text-red-500">VirusTotal API</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Challenges Addressed Card */}
        <Card className="border border-gray-700 shadow-xl rounded-2xl p-6 bg-transparent col-span-1 md:col-span-2">
          <CardContent>
            <h3 className="text-xl font-semibold text-white">Challenges Addressed</h3>
            <div className="space-y-2 text-gray-300 mt-4">
              <p>Through the NGSOC, I addressed several key challenges:</p>
              <ul className="list-disc list-inside">
                <li><strong>Proactive Threat Detection</strong>: Continuous monitoring of systems and network traffic.</li>
                <li><strong>Centralized Incident Response</strong>: Unified management of security incidents.</li>
                <li><strong>Enhanced Visibility</strong>: Real-time dashboards for immediate insights into security status.</li>
                <li><strong>Improved Threat Intelligence</strong>: Access to external threat data for informed decision-making.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Team Card */}
        <Card className="border border-gray-700 shadow-xl rounded-2xl p-6 bg-transparent col-span-1 md:col-span-1">
          <CardContent>
            <h3 className="text-xl font-semibold text-white">Team</h3>
            <ul className="list-disc list-inside text-gray-300 mt-4">
              <li>
                <a href="https://github.com/SMBullet" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                  Stoti Mehdi
                </a>
              </li>
              <li>
                <a href="https://github.com/Yassinom" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                  Essaleh Yassine
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Screenshots Section with Carousel */}
        <div className="col-span-1 md:col-span-3 mt-6 flex flex-col items-center">
          <h3 className="text-xl font-semibold text-white mb-4">Screenshots</h3>
          <Carousel className="w-full max-w-sm sm:max-w-md rounded-lg">
            <CarouselContent>
              {screenshots.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1 cursor-pointer">
                    <Card className="bg-gray-700 rounded-md">
                      <CardContent className="flex items-center justify-center p-0">
                        <Image 
                          src={image} 
                          alt={`Screenshot ${index + 1}`} 
                          width={400}
                          height={300}
                          className="object-cover w-full h-auto rounded-lg shadow-md transition-transform duration-200 transform hover:scale-105"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-red-500 hover:text-red-300 transition-colors duration-200 bg-transparent border-none" />
            <CarouselNext className="text-red-500 hover:text-red-300 transition-colors duration-200 bg-transparent border-none" />
          </Carousel>
        </div>
      </motion.div>
    </div>
  );
};

export default Ngsoc;
