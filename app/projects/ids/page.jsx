"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaGithub, FaArrowLeft } from 'react-icons/fa';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from 'next/image';

const screenshots = [
  '/ids/ids-logo.png',
  '/ids/ids-arch.png',
];

const CogniGuard = () => {
  const handleBackClick = (e) => {
    e.preventDefault();
    window.history.back();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 pb-0 mb-10" id="cogniguard">
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
              CogniGuard
            </h2>
            <p className="text-lg leading-relaxed text-gray-300">
              CogniGuard is an Intrusion Detection System (IDS) fortified with deep learning techniques, utilizing the NSL-KDD dataset for training and evaluation.
            </p>
            <p className="text-gray-300 mt-4">
              For the complete code and additional details, visit the project repository: 
              <a 
                href="https://github.com/SMBullet/deeplearning-ids" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-red-500 hover:text-red-300 transition-colors duration-200 flex items-center"
              >
                <FaGithub className="ml-1" /> GitHub Repository
              </a>
            </p>
          </CardContent>
        </Card>

        {/* My Contribution Card */}
        <Card className="border border-gray-700 shadow-xl rounded-2xl p-6 bg-transparent col-span-1 md:col-span-2">
          <CardContent>
            <h3 className="text-xl font-semibold text-white">My Contribution</h3>
            <p className="text-gray-300 mt-4">
              I was responsible for creating and testing various network attacks on the Intrusion Detection System (IDS). These attacks are part of the testing suite available in the repository <a href="https://github.com/SMBullet/Network-Attacks" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Network Attacks</a>.
            </p>
            <p className="text-gray-300 mt-4">The following attacks were implemented and tested:</p>
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="w-full grid grid-cols-3 gap-4">
                <ul className="list-disc list-inside text-gray-300">
                  <li>UDP DOS</li>
                  <li>Apache2 DOS</li>
                  <li>Guess Password (R2L)</li>
                </ul>
                <ul className="list-disc list-inside text-gray-300">
                  <li>IP Sweep (Probe)</li>
                  <li>MScan (Probe)</li>
                  <li>PHF (R2L)</li>
                </ul>
                <ul className="list-disc list-inside text-gray-300">
                  <li>Port Sweep (Probe)</li>
                  <li>SNMP Guess (R2L)</li>
                  <li>Spy (R2L)</li>
                  <li>XTerm (U2R)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technologies Used Card */}
        <Card className="border border-gray-700 shadow-xl rounded-2xl p-6 bg-transparent col-span-1 md:col-span-1">
          <CardContent>
            <h3 className="text-xl font-semibold text-white">Technologies Used</h3>
            <div className="flex flex-wrap gap-3 mt-4">
              <Badge variant="secondary" className="bg-red-500/20 text-red-500">Python</Badge>
              <Badge variant="secondary" className="bg-red-500/20 text-red-500">TensorFlow</Badge>
              <Badge variant="secondary" className="bg-red-500/20 text-red-500">Keras</Badge>
              <Badge variant="secondary" className="bg-red-500/20 text-red-500">NSL-KDD Dataset</Badge>
              <Badge variant="secondary" className="bg-red-500/20 text-red-500">Flask</Badge>
              <Badge variant="secondary" className="bg-red-500/20 text-red-500">Docker</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Challenges Addressed Card */}
        <Card className="border border-gray-700 shadow-xl rounded-2xl p-6 bg-transparent col-span-1 md:col-span-2">
          <CardContent>
            <h3 className="text-xl font-semibold text-white">Challenges Addressed</h3>
            <div className="space-y-2 text-gray-300 mt-4">
              <p>Through CogniGuard, several key challenges were addressed:</p>
              <ul className="list-disc list-inside">
                <li><strong>Intrusion Detection</strong>: Efficiently identifying malicious traffic patterns in large datasets.</li>
                <li><strong>Deep Learning Integration</strong>: Leveraging advanced neural networks to improve detection accuracy.</li>
                <li><strong>Performance Optimization</strong>: Optimizing the system to process network traffic data in real-time.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Team Card */}
        <Card className="border border-gray-700 shadow-xl rounded-2xl p-6 bg-transparent col-span-1 md:col-span-1">
          <CardContent>
            <h3 className="text-xl font-semibold text-white">Team</h3>
            <ul className="list-disc list-inside text-gray-300 mt-4">
              <li><a href="https://github.com/eljakani" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">El Jakani Yassine</a></li>
              <li><a href="https://github.com/SaadBenmouya" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Saad Benmouya</a></li>
              <li><a href="https://github.com/Pegasus070" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">El Aasri El Mahdi</a></li>
              <li><a href="https://github.com/Yassinom" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Essaleh Yassine</a></li>
              <li><a href="https://github.com/moadza" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">El Motassadeq Moad</a></li>
              <li><a href="https://github.com/hakimziyach" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Assiri Abdelhakim</a></li>
              <li><a href="https://github.com/SMBullet" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Stoti Mehdi</a></li>
              <li><a href="https://github.com/shadowknight03" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Adnane Boughazi</a></li>
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

export default CogniGuard;
