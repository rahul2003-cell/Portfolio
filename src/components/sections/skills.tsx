"use client";

import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { SKILLS, SkillNames } from "@/data/constants";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<SkillNames | null>(null);
  const [pressedKey, setPressedKey] = useState<string | null>(null);

  // Keyboard interaction for easter egg
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      setPressedKey(e.key);
      setTimeout(() => setPressedKey(null), 1000);
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  // Skills to display (your actual skills) - Make sure all these exist in SKILLS
  const displaySkills = [
    // Backend Skills
    SkillNames.JAVA,
    SkillNames.SPRING_BOOT,
    SkillNames.MICROSERVICES,
    SkillNames.REST_API,
    SkillNames.KAFKA,
    // Frontend Skills
    SkillNames.REACT,
    SkillNames.JAVASCRIPT,
    SkillNames.HTML,
    SkillNames.CSS,
    SkillNames.BOOTSTRAP,
    // Database Skills
    SkillNames.SQL,
    SkillNames.JDBC,
    SkillNames.H2,
    SkillNames.POSTGRES,
    // Tools & Cloud
    SkillNames.GIT,
    SkillNames.GITHUB,
    SkillNames.MAVEN,
    SkillNames.JUNIT,
    SkillNames.AWS,
    SkillNames.DOCKER,
  ];

  return (
    <SectionWrapper
      id="skills"
      className="w-full min-h-screen py-20 pointer-events-auto"
    >
      <SectionHeader 
        id="skills" 
        title="Tech Stack" 
        desc={pressedKey ? `You pressed: ${pressedKey} 🎹` : "Press any key for a surprise ✨"} 
      />

      {/* Skills Grid */}
      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {displaySkills.map((skillKey) => {
            const skill = SKILLS[skillKey];
            // Add safety check - if skill doesn't exist, don't render
            if (!skill) {
              console.warn(`Skill not found: ${skillKey}`);
              return null;
            }
            return (
              <Tooltip key={skill.id} delayDuration={200}>
                <TooltipTrigger asChild>
                  <div
                    className={cn(
                      "group relative p-4 md:p-6 rounded-xl backdrop-blur-sm",
                      "border border-border bg-background/50",
                      "transition-all duration-300 cursor-pointer",
                      "hover:scale-105 hover:shadow-lg",
                      "hover:border-brand/50",
                      hoveredSkill === skillKey && "ring-2 ring-brand"
                    )}
                    onMouseEnter={() => setHoveredSkill(skillKey)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {/* Skill Icon */}
                    <div className="flex flex-col items-center gap-3">
                      <img
                        src={skill.icon}
                        alt={skill.label}
                        className="w-12 h-12 md:w-16 md:h-16 object-contain transition-transform duration-300 group-hover:scale-110"
                        onError={(e) => {
                          // Fallback if image fails to load
                          (e.target as HTMLImageElement).src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg";
                        }}
                      />
                      <span
                        className={cn(
                          "text-sm md:text-base font-medium text-center",
                          "transition-colors duration-300",
                          "group-hover:text-brand"
                        )}
                      >
                        {skill.label}
                      </span>
                    </div>

                    {/* Hover Glow Effect */}
                    <div
                      className={cn(
                        "absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300",
                        "bg-gradient-to-r from-brand/5 to-brand/10",
                        "group-hover:opacity-100 pointer-events-none"
                      )}
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="max-w-xs">
                  <div className="text-center">
                    <p className="font-semibold text-brand">{skill.label}</p>
                    <p className="text-sm mt-1">{skill.shortDescription}</p>
                  </div>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 rounded-xl bg-background/50 border border-border">
            <div className="text-3xl md:text-4xl font-bold text-brand mb-2">
              {displaySkills.length}+
            </div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-background/50 border border-border">
            <div className="text-3xl md:text-4xl font-bold text-brand mb-2">
              6+
            </div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-background/50 border border-border">
            <div className="text-3xl md:text-4xl font-bold text-brand mb-2">
              8+
            </div>
            <div className="text-sm text-muted-foreground">Certifications</div>
          </div>
        </div>

        {/* Keyboard Easter Egg Message */}
        {pressedKey && (
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
            <div className="bg-brand text-white px-4 py-2 rounded-full shadow-lg text-sm font-medium">
              🎉 You're a keyboard warrior! {pressedKey} pressed! 🎉
            </div>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;