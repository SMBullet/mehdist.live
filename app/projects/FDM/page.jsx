"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaGithub, FaArrowLeft } from 'react-icons/fa';

// Remove modal imports and state
// import Modal from 'react-modal';
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// Removed modal related state
// const [modalIsOpen, setModalIsOpen] = useState(false);
// const [selectedImage, setSelectedImage] = useState('');

const screenshots = [
  '/fdm-1.jpg',
  '/fdm-2.jpg',
];

const FDMProject = () => {
  
  const handleBackClick = (e) => {
    e.preventDefault();
    window.history.back();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 pb-0 mb-10" id="fdm-project">
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
              FDM Project
            </h2>
            <p className="text-lg leading-relaxed text-gray-300">
              FDM (FTP, DHCP, Mailing) is a project designed to automate the installation and configuration of essential server components, including FTP, DHCP, and a mailing server, simplifying the setup of a robust server environment.
            </p>
            <p className="text-gray-300 mt-4">
              For the complete code and additional details, visit the project repository: 
              <a 
                href="https://github.com/Eljakani/FDM" 
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
              I developed a comprehensive script to automate the installation and configuration of FTP, DHCP, and mailing server components. This script streamlines the setup process, ensuring a robust server environment with minimal manual intervention. By utilizing a series of well-structured commands, the script efficiently handles all necessary configurations, making it easier for users to deploy essential services.
            </p>
          </CardContent>
        </Card>

        {/* Technologies Used Card */}
        <Card className="border border-gray-700 shadow-xl rounded-2xl p-6 bg-transparent col-span-1 md:col-span-1">
          <CardContent>
            <h3 className="text-xl font-semibold text-white">Technologies Used</h3>
            <div className="flex flex-wrap gap-3 mt-4">
              <Badge variant="secondary" className="bg-red-500/20 text-red-500">FTP</Badge>
              <Badge variant="secondary" className="bg-red-500/20 text-red-500">DHCP</Badge>
              <Badge variant="secondary" className="bg-red-500/20 text-red-500">Mail Server</Badge>
              <Badge variant="secondary" className="bg-red-500/20 text-red-500">Bash Scripting</Badge>
              <Badge variant="secondary" className="bg-red-500/20 text-red-500">Docker</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Challenges Addressed Card */}
        <Card className="border border-gray-700 shadow-xl rounded-2xl p-6 bg-transparent col-span-1 md:col-span-2">
          <CardContent>
            <h3 className="text-xl font-semibold text-white">Challenges Addressed</h3>
            <div className="space-y-2 text-gray-300 mt-4">
              <p>The FDM project addresses several challenges in server setup:</p>
              <ul className="list-disc list-inside">
                <li><strong>Automation</strong>: Reducing manual setup errors and configuration time.</li>
                <li><strong>Scalability</strong>: Allowing easy deployment across multiple servers.</li>
                <li><strong>Configuration Management</strong>: Ensuring consistent configurations across environments.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Team Card */}
        <Card className="border border-gray-700 shadow-xl rounded-2xl p-6 bg-transparent col-span-1 md:col-span-1">
          <CardContent>
            <h3 className="text-xl font-semibold text-white">Team</h3>
            <ul className="list-disc list-inside text-gray-300 mt-4">
              <li><a href="https://github.com/SMBullet" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Stoti Mehdi</a></li>
              <li><a href="https://github.com/eljakani" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">El Jakani Yassine</a></li>
              <li><a href="https://github.com/moadza" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">El Motassadeq Moad</a></li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default FDMProject;
