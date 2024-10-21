"use client";

import React from 'react';
import { FaEnvelope } from 'react-icons/fa'; // Ensure you have react-icons installed
import { Separator } from "@/components/ui/separator"; // Adjust the import path according to your project structure

const Footer = () => {
  return (
    <footer className="py-8 mt-auto text-center text-sm text-gray-400">
      <div className="container mx-auto flex flex-col items-center gap-4">
        <div className="flex flex-col items-center gap-4">
          {/* Uncomment this section if you want to include the download button for the resume */}
          {/* 
          <a href="/resume/CV-Stoti-Mehdi.pdf" download>
            <button className="bg-juice text-black py-2 px-4 rounded-full flex items-center gap-2 hover:bg-accent transition duration-300">
              <FaDownload className="text-xl" />
              Resume
            </button>
          </a> 
          */}
          <a
            href="mailto:mehdistoti01@gmail.com"
            className="flex items-center text-juice hover:underline"
          >
            <FaEnvelope className="mr-2" />
            mehdistoti01@gmail.com
          </a>
        </div>
        <Separator className="my-4 bg-gray-700" />
        <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
