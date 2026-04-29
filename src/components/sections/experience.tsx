"use client";

import { EXPERIENCE, SkillNames, SKILLS } from "@/data/constants";
import { SectionHeader } from "./section-header";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  return (
    <SectionWrapper
      id="experience"
      className="flex flex-col items-center justify-center min-h-screen py-20 z-10"
    >
      <div className="w-full max-w-4xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="experience"
          title="Work Experience"
          desc="My professional journey as a Java Full Stack Developer"
          className="mb-12 md:mb-20 mt-0"
        />

        <div className="flex flex-col gap-8 md:gap-12 relative">
          {/* Timeline connector line */}
          <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-px bg-border hidden md:block -translate-x-1/2" />

          {EXPERIENCE.map((exp, index) => (
            <div key={exp.id} className="relative">
              <ExperienceCard experience={exp} index={index} />
            </div>
          ))}
        </div>

        {/* View more on LinkedIn link */}
        <div className="text-center mt-12">
          <a
            href="https://www.linkedin.com/in/rahulnagare-developer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-brand hover:underline inline-flex items-center gap-1"
          >
            View more on LinkedIn
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};

const ExperienceCard = ({
  experience,
  index,
}: {
  experience: (typeof EXPERIENCE)[0];
  index: number;
}) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-50px" }}
      className={cn(isEven ? "md:pr-12" : "md:pl-12")}
    >
      <Card
        className={cn(
          "bg-card text-card-foreground border-border",
          "hover:border-brand/30 transition-all duration-300",
          "shadow-sm hover:shadow-md",
          "overflow-hidden"
        )}
      >
        {/* Brand accent bar */}
        <div className="h-1 w-full bg-gradient-to-r from-brand to-brand-light" />

        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="space-y-1">
              <CardTitle className="text-xl md:text-2xl font-bold tracking-tight">
                {experience.title}
              </CardTitle>
              <div className="text-base font-medium text-brand">
                {experience.company}
              </div>
            </div>
            <Badge 
              variant="secondary" 
              className="w-fit font-mono text-xs font-normal bg-brand/10 text-brand hover:bg-brand/20 border-brand/20"
            >
              <Calendar className="w-3 h-3 mr-1" />
              {experience.startDate} - {experience.endDate}
            </Badge>
          </div>
          {experience.location && (
            <div className="flex items-center gap-1 text-sm text-muted-foreground mt-2">
              <MapPin className="w-4 h-4" />
              <span>{experience.location}</span>
            </div>
          )}
        </CardHeader>
        
        <CardContent className="space-y-6">
          <ul className="list-disc list-outside ml-4 space-y-2 text-base text-muted-foreground leading-relaxed">
            {experience.description.map((point, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.05 }}
                viewport={{ once: true }}
              >
                {point}
              </motion.li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skillName) => {
              const skill = SKILLS[skillName as SkillNames];
              if (!skill) return null;
              return (
                <Badge
                  key={skillName}
                  variant="outline"
                  className="gap-2 text-xs font-normal bg-secondary/30 hover:bg-brand/10 hover:border-brand/30 transition-all duration-200 border-transparent"
                >
                  <img
                    src={skill.icon}
                    alt={skill.label}
                    className="w-3.5 h-3.5 object-contain opacity-80"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  {skill.label}
                </Badge>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ExperienceSection;