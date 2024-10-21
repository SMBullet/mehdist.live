"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaGithub, FaArrowLeft, FaGlobe } from 'react-icons/fa';

// Remove modal imports and state
// import Modal from 'react-modal';

// const PassGen = () => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState('');

//   const openModal = (image) => {
//     setSelectedImage(image);
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//     setSelectedImage('');
//   };

const PassGen = () => {

  const handleBackClick = (e) => {
    e.preventDefault();
    window.history.back();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 pb-0 mb-10" id="passgen">
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
              MutePass - Secure Password Generator & Strength Checker
            </h2>
            <p className="text-lg leading-relaxed text-gray-300">
              MutePass is a modern, responsive web application designed to generate strong passwords with customizable settings and provide a strength analysis for existing passwords. The app includes features like real-time password generation, password strength analysis, and a dark/light mode toggle.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://github.com/SMBullet/MutePass"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-red-500 hover:text-red-700 transition-colors"
              >
                <FaGithub className="mr-2" /> GitHub
              </a>
              <a
                href="https://mute-pass.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-red-500 hover:text-red-700 transition-colors"
              >
                <FaGlobe className="mr-2" /> Live Website
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Features Card */}
        <Card className="border border-gray-700 shadow-xl rounded-2xl p-6 bg-transparent col-span-1 md:col-span-2">
          <CardContent>
            <h3 className="text-xl font-semibold text-white">Features</h3>
            <div className="space-y-2 text-gray-300 mt-4">
              <ul className="list-disc list-inside">
                <li>Generate passwords with adjustable length (8-32 characters).</li>
                <li>Customizable password options: uppercase, lowercase, numbers, special characters.</li>
                <li>Real-time password regeneration when settings change.</li>
                <li>Analyze password strength with categories: Very Weak, Weak, Moderate, Strong.</li>
                <li>Light/Dark mode toggle with theme persistence.</li>
                <li>Responsive design for both desktop and mobile devices.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Technologies Used Card */}
        <Card className="border border-gray-700 shadow-xl rounded-2xl p-6 bg-transparent col-span-1 md:col-span-1">
          <CardContent>
            <h3 className="text-xl font-semibold text-white">Technologies Used</h3>
            <div className="flex flex-wrap gap-3 mt-4">
              <Badge variant="secondary" className="bg-red-500/20 text-red-500">React</Badge>
              <Badge variant="secondary" className="bg-red-500/20 text-red-500">Tailwind CSS</Badge>
              <Badge variant="secondary" className="bg-red-500/20 text-red-500">CSS</Badge>
              <Badge variant="secondary" className="bg-red-500/20 text-red-500">React Icons</Badge>
              <Badge variant="secondary" className="bg-red-500/20 text-red-500">Vercel</Badge>
            </div>
          </CardContent>
        </Card>

        {/* My Contribution Card */}
        <Card className="border border-gray-700 shadow-xl rounded-2xl p-6 bg-transparent col-span-1 md:col-span-2">
          <CardContent>
            <h3 className="text-xl font-semibold text-white">My Contribution</h3>
            <p className="text-gray-300 mt-4">
              In the MutePass project, I focused on the core functionalities of the password generator and strength checker. This included implementing the password customization options, real-time strength analysis, and integrating light/dark mode for a better user experience.
            </p>
            <p className="text-gray-300 mt-4">You can view the full project on GitHub:</p>
            <a
              href="https://github.com/SMBullet/MutePass"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:underline"
            >
              MutePass Repository
            </a>
          </CardContent>
        </Card>

        {/* Team Card */}
        <Card className="border border-gray-700 shadow-xl rounded-2xl p-6 bg-transparent col-span-1 md:col-span-1">
          <CardContent>
            <h3 className="text-xl font-semibold text-white">Team</h3>
            <ul className="list-disc list-inside text-gray-300 mt-4">
              <li>Personal project</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default PassGen;
