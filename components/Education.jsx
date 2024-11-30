"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { GraduationCap, Calendar, MapPin, ExternalLink, Users } from "lucide-react";

const Education = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 pb-0" id="education">
      <div className="w-full max-w-4xl">
        {/* Title outside the card */}
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700 mb-6">
          Education
        </h2>

        <Card className="border border-gray-700 shadow-xl rounded-2xl p-6 bg-transparent">
          <CardContent className="space-y-4">
            {/* Institution Information */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <GraduationCap className="w-8 h-8 text-red-500" />
                <div className="flex flex-col flex-grow">
                  <div className="flex items-center">
                    <h3 className="text-xl font-semibold text-white">
                      Marrakech National School of Applied Sciences
                    </h3>
                    <a
                      href="https://www.ensa.ac.ma/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-3 text-red-500 hover:text-red-300 transition-colors duration-200"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-sm text-gray-400">Cadi Ayyad University</p>
                </div>
              </div>
            </div>

            {/* Duration and Location */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Calendar className="w-8 h-8 text-red-500" />
                <p className="text-sm text-gray-400">2019 - Ongoing</p>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-8 h-8 text-red-500" />
                <p className="text-sm text-gray-400">Marrakech, Morocco</p>
              </div>
            </div>

            {/* Degree and Specialization */}
            <div className="space-y-4">
              <p className="text-sm text-gray-400">Pursuing an Engineering degree in:</p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="bg-red-500/20 text-red-500">
                  Cyber Defense Engineering and Embedded Telecommunications Systems
                </Badge>
              </div>
            </div>
          </CardContent>

          {/* Separator */}
          <Separator className="my-4 bg-gray-700" />

          {/* Club Role */}
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Users className="w-8 h-8 text-red-500" />
                <div className="flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-white">
                    Vice President, GCDSTE Club
                  </h3>
                  <p className="text-sm text-gray-400">Marrakech National School of Applied Sciences</p>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Serving as Vice President of the GCDSTE Club, I contribute to organizing events,
                managing club activities, and fostering a collaborative environment for students
                interested in Cyber Defense and Embedded Systems.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Education;
