"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FaGraduationCap, FaShieldAlt } from "react-icons/fa";
import { ExternalLink, FileText } from "lucide-react";
import { Badge } from "./ui/badge";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 sm:p-8 mt-16" id="home">
      <div className="w-full max-w-6xl">
        <Card className="shadow-xl rounded-2xl bg-transparent border-none shadow-transparent">
          <CardContent className="p-8 sm:p-12">
            <div className="flex flex-col">
              {/* Header Section */}
              <div className="flex flex-col mb-4">
                <h1 className="text-5xl sm:text-7xl font-extrabold animate-moving-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
                  Mehdi Stoti
                </h1>
                <p className="text-2xl sm:text-3xl mb-4 text-gray-300 flex items-center">
                  <FaGraduationCap className="mr-2 text-3xl sm:text-4xl" />
                  <span>Cybersecurity Engineering Student</span>
                  <FaShieldAlt className="ml-2 text-3xl sm:text-4xl" />
                </p>
              </div>

              {/* Introduction and Badge */}
              <div className="space-y-4 text-gray-400 text-lg sm:text-xl mb-6">
                <p>
                  I&apos;m passionate about cybersecurity and eager to apply my skills, especially in offensive security like penetration testing. 
                  I also focus on auditing, defensive security, IAM, PAM, cloud security, and automating security processes.
                  I look forward to contributing to this field.
                </p>
                <Badge variant="secondary" className="bg-red-500/20 text-red-500">
                  Seeking an internship to gain practical experience and contribute to projects in cybersecurity.
                </Badge>
              </div>

              {/* Blog Button */}
              <div className="flex justify-start mb-6">
                <a
                  href="https://mehdi-security.blogspot.com/"
                  className="flex items-center space-x-2 bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition duration-300 text-base shadow-md"
                >
                  <span>Visit My Blog</span>
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              {/* Cards Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Certifications Card */}
                <div className="border border-gray-700 rounded-2xl bg-gray-900/20 shadow-lg p-6 h-full">
                  <h2 className="text-3xl font-bold mb-4 text-gray-200">Certifications</h2>
                  <p className="text-gray-400 mb-6">View my professional certifications and achievements in cybersecurity.</p>
                  <div className="flex justify-start mt-auto">
                    <a
                      href="/certifications"
                      className="flex items-center space-x-2 bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition duration-300 text-base shadow-md"
                    >
                      <span>View Certifications</span>
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Writeups Card */}
                <div className="border border-gray-700 rounded-2xl bg-gray-900/20 shadow-lg p-6 h-full relative overflow-hidden">
                  <h2 className="text-3xl font-bold mb-4 text-gray-200">Writeups</h2>
                  <p className="text-gray-400 mb-6">Explore my detailed writeups on various cybersecurity challenges and CTFs.</p>
                  <div className="flex justify-start mt-auto">
                    <a
                      href="/writeups"
                      className="flex items-center space-x-2 bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition duration-300 text-base shadow-md"
                    >
                      <span>View Writeups</span>
                      <FileText className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;
