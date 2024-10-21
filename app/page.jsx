import dynamic from "next/dynamic";
import { memo } from "react";

const Nav = dynamic(() => import("@/components/Nav"), { ssr: false });
const MobileNav = dynamic(() => import("@/components/MobileNav"), { ssr: false });
const HomePage = dynamic(() => import("@/components/HomePage"), { ssr: true });
const Education = dynamic(() => import("@/components/Education"), { ssr: false });
const Skills = dynamic(() => import("@/components/Skills"), { ssr: false });
const Experience = dynamic(() => import("@/components/Experience"), { ssr: false });
const Projects = dynamic(() => import("@/components/Projects"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

const MemoizedEducation = memo(Education);
const MemoizedSkills = memo(Skills);
const MemoizedExperience = memo(Experience);
const MemoizedProjects = memo(Projects);
const MemoizedFooter = memo(Footer);

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <div className="hidden xl:flex">
        <Nav />
      </div>
      <div className="xl:hidden">
        <MobileNav />
      </div>
      <HomePage />
      <MemoizedEducation />
      <MemoizedSkills />
      <MemoizedExperience />
      <MemoizedProjects />
      <MemoizedFooter />
    </>
  );
}
