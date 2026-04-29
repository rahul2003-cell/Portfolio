"use client";

import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      id: 1,
      institution: "E&ICT Academy, IIT Guwahati",
      degree: "Post Graduation",
      field: "Full Stack Development - Java",
      period: "June 2025 - December 2025",
      location: "Guwahati, Assam",
      description: [
        "Advanced training in Full Stack Development with Java",
        "Enterprise-level application development",
        "Industry-oriented curriculum",
      ],
    },
    {
      id: 2,
      institution: "Savitribai Phule Pune University",
      degree: "Bachelor's degree",
      field: "Computer Engineering",
      period: "December 2021 - June 2025",
      location: "Pune, Maharashtra",
      description: [
        "Comprehensive computer science education",
        "Focus on software development and engineering principles",
        "Graduated with strong academic standing",
      ],
    },
    {
      id: 3,
      institution: "Maharashtra State Board of Secondary and Higher Secondary Education (MSBSHSE)",
      degree: "Higher Secondary Certificate",
      field: "Science",
      period: "June 2019 - May 2021",
      location: "Maharashtra",
      description: [
        "Science stream with focus on Mathematics and Computer Science",
        "Foundation for engineering studies",
      ],
    },
    {
      id: 4,
      institution: "Maharashtra State Board of Secondary and Higher Secondary Education (MSBSHSE)",
      degree: "Secondary School Certificate",
      field: "Science",
      period: "June 2018 - March 2019",
      location: "Maharashtra",
      description: [
        "Strong foundation in core sciences and mathematics",
        "Academic excellence in board examinations",
      ],
    },
  ];

  return (
    <SectionWrapper id="education" className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <SectionHeader
          id="education"
          title="Education"
          desc="My academic journey and qualifications"
          className="mb-12"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true, margin: "-50px" }}
                className={cn(
                  "relative",
                  index % 2 === 0 ? "md:pr-12 md:ml-0 md:mr-auto" : "md:pl-12 md:ml-auto"
                )}
                style={{ maxWidth: "calc(50% - 2rem)" }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-auto -top-2 w-4 h-4 rounded-full bg-brand border-4 border-background z-10 hidden md:block"
                  style={{
                    left: index % 2 === 0 ? "auto" : "-2rem",
                    right: index % 2 === 0 ? "-2rem" : "auto",
                  }}
                />

                <Card className="bg-card/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-border hover:border-brand/30">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between flex-wrap gap-2">
                      <div>
                        <CardTitle className="text-xl md:text-2xl font-bold tracking-tight text-brand">
                          {edu.institution}
                        </CardTitle>
                        <div className="flex flex-wrap items-center gap-3 mt-2">
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <GraduationCap className="w-4 h-4" />
                            <span className="text-sm font-medium">
                              {edu.degree} in {edu.field}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      {edu.location && (
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                      )}
                    </div>

                    <ul className="list-disc list-outside ml-4 space-y-1 text-muted-foreground">
                      {edu.description.map((point, i) => (
                        <li key={i} className="text-sm leading-relaxed">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="text-center p-4 rounded-lg bg-background/50 border border-border">
            <div className="text-2xl font-bold text-brand">4</div>
            <div className="text-xs text-muted-foreground">Degrees & Certificates</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-background/50 border border-border">
            <div className="text-2xl font-bold text-brand">IIT</div>
            <div className="text-xs text-muted-foreground">Premier Institute</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-background/50 border border-border">
            <div className="text-2xl font-bold text-brand">2021-26</div>
            <div className="text-xs text-muted-foreground">Academic Journey</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-background/50 border border-border">
            <div className="text-2xl font-bold text-brand">First Class</div>
            <div className="text-xs text-muted-foreground">Academic Excellence</div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default EducationSection;