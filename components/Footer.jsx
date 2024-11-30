"use client";

import React from "react";
import { FaEnvelope } from "react-icons/fa"; // Ensure you have react-icons installed
import { Separator } from "@/components/ui/separator"; // Adjust the import path according to your project structure

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 mt-auto text-center text-sm text-gray-400">
      <div className="container mx-auto flex flex-col items-center gap-4">
        {/* Contact Link */}
        <a
          href="mailto:mehdistoti01@gmail.com"
          className="flex items-center text-juice hover:underline"
          aria-label="Email Mehdi Stoti"
        >
          <FaEnvelope className="mr-2" />
          mehdistoti01@gmail.com
        </a>

        {/* Separator */}
        <Separator className="my-4 bg-gray-700" />

        {/* Footer Text */}
        <p>&copy; {currentYear} All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
