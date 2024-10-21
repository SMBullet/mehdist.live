"use client";

import React from 'react';
import { FaGraduationCap, FaShieldAlt, FaDownload } from 'react-icons/fa'; // Ensure you have react-icons installed
import { Card, CardContent } from "@/components/ui/card"; // Adjust import based on your project structure

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 sm:p-8" id="home">
      <Card className="w-full max-w-3xl bg-transparent border-none shadow-xl rounded-3xl">
        <CardContent className="p-8 sm:p-12">
          <div className="text-center">
            <h1 className="text-5xl sm:text-7xl font-extrabold mb-4 animate-moving-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
              Mehdi Stoti
            </h1>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl mb-8 text-gray-300 flex items-center justify-center">
              <FaGraduationCap className="mr-2 text-3xl sm:text-4xl" />
              <span>Cybersecurity Engineering Student</span>
              <FaShieldAlt className="ml-2 text-3xl sm:text-4xl" />
            </p>
          </div>
          <div className="space-y-4 text-center">
            <p className="text-gray-400 text-lg sm:text-xl mb-6">
              I am passionate about this field and motivated to apply my academic knowledge.
            </p>
            <p className="text-gray-400 text-lg sm:text-xl mb-6">
              I am currently seeking an internship to gain practical experience and contribute to projects in cybersecurity.
            </p>
            <div className="flex justify-center">
              <a href="/resume/CV-Stoti-Mehdi-Fr.pdf" download>
                <button className="group flex items-center space-x-2 bg-juice text-black py-2 px-4 rounded-full hover:bg-accent transition duration-300 text-base">
                  <FaDownload className="w-5 h-5 group-hover:animate-bounce" />
                  <span>Resume</span>
                </button>
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
