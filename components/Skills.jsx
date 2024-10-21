"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Shield, Cloud, Network, Lock } from 'lucide-react';
import * as SiIcons from 'react-icons/si';

// SkillBadge component
const SkillBadge = ({ iconName, text }) => {
  const Icon = SiIcons[iconName];
  return (
    <Badge variant="secondary" className="bg-red-500/20 text-red-500 text-base flex items-center gap-2">
      {Icon ? <Icon className="w-4 h-4" /> : null}
      {text}
    </Badge>
  );
};

// Skills component
const Skills = () => {
  const skillsData = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Java", icon: "SiJava" },
        { name: "Spring Boot", icon: "SiSpring" },
        { name: "JavaScript", icon: "SiJavascript" },
        { name: "React", icon: "SiReact" },
        { name: "PHP", icon: "SiPhp" },
        { name: "Laravel", icon: "SiLaravel" },
        { name: "Python", icon: "SiPython" },
        { name: "C", icon: "SiC" },
        { name: "C++", icon: "SiCplusplus" },
        { name: "Bash Scripting", icon: "SiBash" }
      ]
    },
    {
      title: "Cybersecurity",
      icon: Shield,
      skills: [
        { name: "Ethical Hacking" },
        { name: "AppSec Testing" },
        { name: "Wazuh" },
        { name: "ELK Stack" },
        { name: "Forensics" },
        { name: "Cryptography" },
      ]
    },
    {
      title: "Security Standards",
      icon: Lock,
      skills: [
        { name: "ISO 27001" },
        { name: "NIST" },
      ]
    },
    {
      title: "Cloud & Virtualization",
      icon: Cloud,
      skills: [
        { name: "AWS", icon: "SiAws" },
        { name: "VMware ESXI", icon: "SiVmware" },
        { name: "Docker", icon: "SiDocker" },
      ]
    },
    {
      title: "Network & System Administration",
      icon: Network,
      skills: [
        { name: "Linux", icon: "SiLinux" },
        { name: "Windows Server", icon: "SiWindows" },
        { name: "System Hardening" },
        { name: "Active Directory", icon: "SiMicrosoftactivedirectory" },
        { name: "Zabbix", icon: "SiZabbix" },
      ]
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-6" id="skills">
      <motion.div
        className="w-full max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700 mb-8">
          Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skillsData.map(({ title, icon: Icon, skills }, index) => (
            <Card key={index} className="border border-gray-700 shadow-xl rounded-2xl p-4 bg-transparent">
              <CardHeader className="flex items-center text-xl font-semibold text-white mb-4">
                <Icon className="w-7 h-7 text-red-500 mr-3" />
                <span>{title}</span>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-3">
                {skills.map(({ name, icon }, skillIndex) => (
                  <SkillBadge key={skillIndex} iconName={icon} text={name} />
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
