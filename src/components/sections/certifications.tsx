"use client";

import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Calendar, ExternalLink } from "lucide-react";
import { Badge } from "../ui/badge";

const CertificationsSection = () => {
  const certifications = [
    {
      id: 1,
      name: "J.P. Morgan - Software Engineering Job Simulation",
      issuer: "JPMorgan Chase & Co.",
      date: "September 2025",
      duration: "1 month",
      skills: ["Spring Boot", "Kafka", "JPA", "REST APIs", "Maven", "JUnit"],
      credentialId: "JPM-SE-2025",
      color: "#1a2b4c",
    },
    {
      id: 2,
      name: "Tata - GenAI Powered Data Analytics Job Simulation",
      issuer: "Tata Group",
      date: "August 2025",
      duration: "1 month",
      skills: ["Data Analytics", "GenAI", "Python", "Data Visualization"],
      color: "#1e2a5e",
    },
    {
      id: 3,
      name: "Hewlett Packard Enterprise - Software Engineering Job Simulation",
      issuer: "Hewlett Packard Enterprise",
      date: "September 2025",
      duration: "1 month",
      skills: ["Spring Boot", "REST APIs", "Unit Testing", "JUnit"],
      color: "#0096d6",
    },
    {
      id: 4,
      name: "Deloitte Australia - Data Analytics Job Simulation",
      issuer: "Deloitte Australia",
      date: "August 2025",
      duration: "1 month",
      skills: ["Data Analytics", "Business Intelligence", "SQL"],
      color: "#86bc25",
    },
    {
      id: 5,
      name: "Skyscanner - Software Engineering Job Simulation",
      issuer: "Skyscanner",
      date: "January 2026 - March 2026",
      duration: "3 months",
      skills: ["React", "Java", "Microservices", "Kotlin", "Figma"],
      color: "#00a6c4",
    },
    {
      id: 6,
      name: "Accenture - Software Engineering Virtual Intern",
      issuer: "Accenture",
      date: "July 2025",
      duration: "1 month",
      skills: ["Software Engineering", "SDLC", "Agile"],
      color: "#a100ff",
    },
    {
      id: 7,
      name: "Amazon Web Services - Solutions Architecture Virtual Intern",
      issuer: "Amazon Web Services (AWS)",
      date: "July 2025",
      duration: "1 month",
      skills: ["AWS", "EC2", "S3", "VPC", "IAM", "Cloud Architecture"],
      color: "#ff9900",
    },
    {
      id: 8,
      name: "Datacom - Software Development Virtual Intern",
      issuer: "Datacom",
      date: "August 2025",
      duration: "1 month",
      skills: ["Software Development", "Debugging", "Code Review", "Bug Fixing"],
      color: "#00843d",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <SectionWrapper id="certifications" className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <SectionHeader
          id="certifications"
          title="Certifications"
          desc="Professional certifications and job simulations"
          className="mb-12"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card
                className={cn(
                  "h-full bg-card/80 backdrop-blur-sm",
                  "border-border hover:border-brand/30",
                  "transition-all duration-300 overflow-hidden",
                  "hover:shadow-lg"
                )}
              >
                {/* Brand accent bar */}
                <div
                  className="h-1 w-full"
                  style={{ backgroundColor: cert.color }}
                />

                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-brand" />
                      <CardTitle className="text-lg font-bold leading-tight">
                        {cert.name}
                      </CardTitle>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {cert.issuer}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{cert.date}</span>
                    </div>
                    {cert.duration && (
                      <Badge variant="outline" className="text-xs">
                        {cert.duration}
                      </Badge>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="text-xs bg-brand/10 text-brand hover:bg-brand/20 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {/* <div className="pt-2">
                    <button
                      onClick={() => window.open(`#`, "_blank")}
                      className="text-xs text-brand hover:underline inline-flex items-center gap-1"
                    >
                      View Certificate
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div> */}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="text-center p-4 rounded-lg bg-background/50 border border-border">
            <div className="text-2xl font-bold text-brand">{certifications.length}</div>
            <div className="text-xs text-muted-foreground">Certifications</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-background/50 border border-border">
            <div className="text-2xl font-bold text-brand">8+</div>
            <div className="text-xs text-muted-foreground">Companies</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-background/50 border border-border">
            <div className="text-2xl font-bold text-brand">10+</div>
            <div className="text-xs text-muted-foreground">Skills Verified</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-background/50 border border-border">
            <div className="text-2xl font-bold text-brand">J.P. Morgan</div>
            <div className="text-xs text-muted-foreground">Top Certification</div>
          </div>
        </motion.div>

        {/* Note about virtual internships */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            🎓 All certifications are job simulations and virtual internships from prestigious companies
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CertificationsSection;