"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactForm from "../ContactForm";
import { config } from "@/data/config";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import Link from "next/link";

const ContactSection = () => {
  return (
    <SectionWrapper id="contact" className="min-h-screen max-w-7xl mx-auto py-20">
      <SectionHeader 
        id="contact" 
        className="relative mb-14" 
        title={
          <>
            LET&apos;S WORK <br />
            TOGETHER
          </>
        } 
        desc="Have a project in mind? Let's build something amazing with Java and Spring Boot!" 
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 z-[9999] mx-4">
        {/* Contact Info Card */}
        <Card className="bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl mt-10 md:mt-20 hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl">Get in Touch</CardTitle>
            <CardDescription className="text-base mt-2">
              I'm always excited to work on new projects and collaborate with innovative teams.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Email */}
            <div className="flex items-start gap-4 group">
              <div className="p-3 rounded-lg bg-brand/10 group-hover:bg-brand/20 transition-colors">
                <Mail className="w-5 h-5 text-brand" />
              </div>
              <div>
                <p className="font-medium text-sm text-muted-foreground">Email</p>
                <a
                  href={`mailto:${config.email}`}
                  className="text-foreground hover:text-brand transition-colors"
                >
                  {config.email}
                </a>
              </div>
            </div>

            {/* Phone */}
            {config.phone && (
              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-lg bg-brand/10 group-hover:bg-brand/20 transition-colors">
                  <Phone className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <p className="font-medium text-sm text-muted-foreground">Phone</p>
                  <a
                    href={`tel:${config.phone}`}
                    className="text-foreground hover:text-brand transition-colors"
                  >
                    {config.phone}
                  </a>
                </div>
              </div>
            )}

            {/* Location */}
            {config.location && (
              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-lg bg-brand/10 group-hover:bg-brand/20 transition-colors">
                  <MapPin className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <p className="font-medium text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground">{config.location}</p>
                </div>
              </div>
            )}

            {/* Social Links */}
            <div className="pt-4">
              <p className="font-medium text-sm text-muted-foreground mb-3">Connect with me</p>
              <div className="flex gap-3">
                <Link
                  href={config.social.linkedin}
                  target="_blank"
                  className="p-2 rounded-lg bg-brand/10 hover:bg-brand/20 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-brand" />
                </Link>
                <Link
                  href={config.social.github}
                  target="_blank"
                  className="p-2 rounded-lg bg-brand/10 hover:bg-brand/20 transition-colors"
                >
                  <Github className="w-5 h-5 text-brand" />
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Form Card */}
        <Card className="bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl mt-10 md:mt-20 hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl">Send a Message</CardTitle>
            <CardDescription className="text-base mt-2">
              Fill out the form below and I'll get back to you within 24 hours.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>

      {/* Optional: Java Coffee Cup Easter Egg */}
      <div className="text-center mt-16 opacity-50 hover:opacity-100 transition-opacity">
        <p className="text-sm text-muted-foreground">
          Built with ☕ Java, Spring Boot, and a lot of passion
        </p>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;