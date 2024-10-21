"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaGithub, FaArrowLeft } from 'react-icons/fa';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from 'next/image';

const screenshots = [
  '/devsecops/1.png',
  '/devsecops/2.png',
  '/devsecops/3.png',
  '/devsecops/4.png',
];

const DevSecOps = () => {
  const handleBackClick = (e) => {
    e.preventDefault();
    window.history.back();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 pb-0 mb-10" id="devsecops">
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
              DevSecOps Microservices Web Application
            </h2>
            <p className="text-lg leading-relaxed text-gray-300">
              This project is a microservices-based web application developed using Spring Boot for the backend and React for the frontend. 
              We containerized the app using Docker and deployed it in a Kubernetes cluster. Security and quality tools such as Trivy and SonarQube 
              were integrated into the CI/CD pipeline, which was built using Jenkins. This approach follows DevSecOps principles to ensure 
              continuous security, scalability, and efficiency.
            </p>
            <a href="https://github.com/SMBullet/DevSecOps" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-red-500 hover:text-red-700 mt-4">
              <FaGithub className="mr-2" /> GitHub Repository
            </a>
          </CardContent>
        </Card>

        {/* Contributions Card */}
        <Card className="border border-gray-700 shadow-xl rounded-2xl p-6 bg-transparent col-span-1 md:col-span-2">
          <CardContent>
            <h3 className="text-xl font-semibold text-white">My Contributions</h3>
            <ul className="list-disc list-inside text-gray-300 mt-4">
              <li>Developed the backend API using <strong>Spring Boot</strong> and connected it with <strong>MySQL</strong>.</li>
              <li>Designed the frontend using <strong>React</strong> for a smooth and responsive user experience.</li>
              <li>Implemented <strong>Docker</strong> to containerize the microservices and ensured seamless deployment in <strong>Kubernetes</strong>.</li>
              <li>Integrated <strong>Jenkins</strong> to build a CI/CD pipeline for automating the build, test, and deployment processes.</li>
              <li>Utilized <strong>Trivy</strong> for vulnerability scanning of Docker images.</li>
              <li>Applied <strong>SonarQube</strong> for static code analysis to ensure code quality and security.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Technologies Card */}
        <Card className="border border-gray-700 shadow-xl rounded-2xl p-6 bg-transparent col-span-1 md:col-span-1">
          <CardContent>
            <h3 className="text-xl font-semibold text-white">Technologies Used</h3>
            <div className="flex flex-wrap gap-3 mt-4">
              <Badge variant="secondary" className="bg-red-500/20 text-red-500">Spring Boot</Badge>
              <Badge variant="secondary" className="bg-red-500/20 text-red-500">React</Badge>
              <Badge variant="secondary" className="bg-red-500/20 text-red-500">Docker</Badge>
              <Badge variant="secondary" className="bg-red-500/20 text-red-500">Kubernetes</Badge>
              <Badge variant="secondary" className="bg-red-500/20 text-red-500">Jenkins</Badge>
              <Badge variant="secondary" className="bg-red-500/20 text-red-500">Trivy</Badge>
              <Badge variant="secondary" className="bg-red-500/20 text-red-500">SonarQube</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Challenges Addressed Card */}
        <Card className="border border-gray-700 shadow-xl rounded-2xl p-6 bg-transparent col-span-1 md:col-span-2">
          <CardContent>
            <h3 className="text-xl font-semibold text-white">Challenges Addressed</h3>
            <div className="space-y-2 text-gray-300 mt-4">
              <p>Key challenges addressed during the project:</p>
              <ul className="list-disc list-inside">
                <li><strong>Continuous Integration and Delivery</strong>: Automated end-to-end pipeline with Jenkins.</li>
                <li><strong>Security Integration</strong>: Automated vulnerability scans and code analysis with Trivy and SonarQube.</li>
                <li><strong>Scalable Deployment</strong>: Kubernetes orchestration for scaling and managing the microservices architecture.</li>
                <li><strong>Quality Assurance</strong>: Code quality checks and static analysis for better maintainability and security.</li>
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
                <a href="https://github.com/hakimziyach" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                  Assiri Abdelhakim
                </a>
              </li>
              <li>
                <a href="https://github.com/moadza" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                  Elmotassadeq Moad
                </a>
              </li>
              <li>
                <a href="https://github.com/Yassinom" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                  Essaleh Yassine
                </a>
              </li>
              <li>
                <a href="https://github.com/Whutashame" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                  Berrah Chouaib
                </a>
              </li>
              <li>
                <a href="https://github.com/rekkles0" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                  Knioui Brahim
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

export default DevSecOps;
