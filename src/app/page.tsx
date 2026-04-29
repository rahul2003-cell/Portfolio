"use client";

import React from "react";
import SmoothScroll from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";
import AnimatedBackground from "@/components/animated-background";
import HeroSection from "@/components/sections/hero";
import EducationSection from "@/components/sections/education";
import SkillsSection from "@/components/sections/skills";
import ExperienceSection from "@/components/sections/experience";
import ProjectsSection from "@/components/sections/projects";
import CertificationsSection from "@/components/sections/certifications";
import ContactSection from "@/components/sections/contact";

function MainPage() {
  return (
    <SmoothScroll>
      <AnimatedBackground />
      <main className={cn("bg-slate-100 dark:bg-transparent canvas-overlay-mode")}>
        {/* 1. Hero - Introduction */}
        <HeroSection />
        
        {/* 2. Education - Academic Background */}
        <EducationSection />
        
        {/* 3. Skills - Technical Competencies */}
        <SkillsSection />
        
        {/* 4. Experience - Work History */}
        <ExperienceSection />
        
        {/* 5. Projects - Portfolio Work */}
        <ProjectsSection />
        
        {/* 6. Certifications - Professional Credentials */}
        <CertificationsSection />
        
        {/* 7. Contact - Get in Touch */}
        <ContactSection />
      </main>
    </SmoothScroll>
  );
}

export default MainPage;