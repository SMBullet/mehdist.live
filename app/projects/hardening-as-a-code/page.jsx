"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaGithub, FaArrowLeft } from "react-icons/fa";
import Image from "next/image";

const screenshots = [
  "/unix-hardening/1.png",
];

const UnixHardeningScript = () => {
  const handleBackClick = (e) => {
    e.preventDefault();
    window.history.back();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 pb-0 mb-10" id="unix-hardening-script">
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
              Unix Hardening Script
            </h2>
            <p className="text-lg leading-relaxed text-gray-300">
              This project is a robust shell script designed for Unix systems to enhance security by applying a series of hardening measures. 
              It ensures compliance with best practices for system security, automating tasks like auditing system configurations, 
              applying updates, and enforcing strict permissions. This script is a valuable tool for administrators aiming to bolster the 
              resilience of their Unix-based systems against potential vulnerabilities.
            </p>
            <a href="https://github.com/SMBullet/Unix-Hardening-Script" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-red-500 hover:text-red-700 mt-4">
              <FaGithub className="mr-2" /> GitHub Repository
            </a>
          </CardContent>
        </Card>

        {/* Features Card */}
        <Card className="border border-gray-700 shadow-xl rounded-2xl p-6 bg-transparent col-span-1 md:col-span-2">
          <CardContent>
            <h3 className="text-xl font-semibold text-white">Features</h3>
            <ul className="list-disc list-inside text-gray-300 mt-4">
              <li>Automates system updates and patch management.</li>
              <li>Audits file permissions and adjusts them for security.</li>
              <li>Configures firewall rules for network protection.</li>
              <li>Disables unnecessary services to reduce attack surface.</li>
              <li>Implements secure SSH configurations.</li>
              <li>Generates detailed logs and reports for system analysis.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Technologies Used Card */}
        <Card className="border border-gray-700 shadow-xl rounded-2xl p-6 bg-transparent col-span-1 md:col-span-1">
          <CardContent>
            <h3 className="text-xl font-semibold text-white">Technologies Used</h3>
            <div className="flex flex-wrap gap-3 mt-4">
              <Badge variant="secondary" className="bg-red-500/20 text-red-500">Bash</Badge>
              <Badge variant="secondary" className="bg-red-500/20 text-red-500">Unix/Linux</Badge>
              <Badge variant="secondary" className="bg-red-500/20 text-red-500">Shell Scripting</Badge>
              <Badge variant="secondary" className="bg-red-500/20 text-red-500">Security</Badge>
              <Badge variant="secondary" className="bg-red-500/20 text-red-500">Automation</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Challenges Addressed Card */}
        <Card className="border border-gray-700 shadow-xl rounded-2xl p-6 bg-transparent col-span-1 md:col-span-2">
          <CardContent>
            <h3 className="text-xl font-semibold text-white">Challenges Addressed</h3>
            <div className="space-y-2 text-gray-300 mt-4">
              <p>Key challenges addressed by the Unix Hardening Script:</p>
              <ul className="list-disc list-inside">
                <li><strong>System Updates</strong>: Automated patch management ensures systems are up-to-date.</li>
                <li><strong>Permission Misconfigurations</strong>: Audits and corrects file and directory permissions.</li>
                <li><strong>Service Vulnerabilities</strong>: Disables unnecessary or insecure services.</li>
                <li><strong>SSH Security</strong>: Implements robust SSH configuration settings.</li>
                <li><strong>Firewall Rules</strong>: Automates setup of network security policies.</li>
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
      </motion.div>
    </div>
  );
};

export default UnixHardeningScript;
