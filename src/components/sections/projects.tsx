"use client";

import { useState } from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { 
  Github, 
  ExternalLink, 
  ShoppingCart, 
  Utensils, 
  Calendar, 
  Briefcase, 
  MapPin,
  Plane,
  Star,
  Code2
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ProjectsSection = () => {
  const [filter, setFilter] = useState<string>("all");

  const projects = [
    {
      id: 1,
      title: "ShopWave - Full-Stack E-Commerce Platform",
      description: "A production-ready e-commerce application with JWT authentication, Razorpay payments, admin dashboard, real-time cart updates, order tracking, product reviews, and dark theme UI.",
      fullDescription: "Built with Spring Boot 3.2 and React 18 featuring JWT authentication, Razorpay payment gateway integration, admin dashboard for product/order/user management, real-time shopping cart, order tracking with status updates, product reviews and ratings, search/filter/sort by category/price, and fully responsive design.",
      tech: ["Java 17", "Spring Boot", "React", "JWT", "Razorpay", "MySQL", "Docker", "Zustand"],
      category: "fullstack",
      github: "https://github.com/rahul2003-cell/shopwave",
      features: [
        "JWT Authentication (Login/Register)",
        "Shopping Cart with real-time updates",
        "Razorpay Payment Gateway integration",
        "Order tracking with status updates",
        "Product reviews & ratings",
        "Admin dashboard (products, orders, users)",
        "Search, filter, sort by category/price",
        "Fully responsive dark theme UI"
      ],
      icon: <ShoppingCart className="w-6 h-6" />,
      color: "#ff9900",
    },
    {
      id: 2,
      title: "Slooze - Food Ordering Application",
      description: "Full-stack food ordering app with Role-Based Access Control (RBAC) and country-based relational access. Features user roles: ADMIN, MANAGER, MEMBER with country-specific permissions.",
      fullDescription: "Implements RBAC with ADMIN (global access), MANAGER (own country only - can place/cancel orders), MEMBER (own country only - cart only, cannot checkout). Features restaurant browsing, menu management, order creation/payment/cancellation, payment methods management, and country-based filtering at service layer.",
      tech: ["Java 17", "Spring Boot 3.2", "Spring Security", "JWT", "React", "MySQL", "Axios"],
      category: "fullstack",
      github: "https://github.com/rahul2003-cell/slooze-food-app",
      features: [
        "RBAC with ADMIN/MANAGER/MEMBER roles",
        "Country-based access control (India/America)",
        "Restaurant & menu management",
        "Order creation, placement & cancellation",
        "Payment methods management",
        "Data seeder with 6 users, 6 restaurants, 20+ items"
      ],
      icon: <Utensils className="w-6 h-6" />,
      color: "#ef4444",
    },
    {
      id: 3,
      title: "Skyscanner Travel Date Picker",
      description: "Complete multi-page flight booking app with date picker, flight search results, filters, sorting, and 3-step booking modal with traveller details and payment.",
      fullDescription: "A fully functional flight booking application featuring round-trip/one-way toggle, origin/destination inputs with swap button, calendar date picker with range selection, night count display, popular route quick-fill cards. Results page with mock flights, filter by stops and price, sort by price/duration/departure time, expandable flight cards, and 3-step booking modal (traveller details, payment, confirmation).",
      tech: ["React 18", "Vite", "JavaScript", "CSS", "Hooks"],
      category: "frontend",
      github: "https://github.com/rahul2003-cell/skyscanner-travel-date-picker",
      features: [
        "Round-trip / One-way toggle",
        "Calendar date picker with range selection",
        "8-11 mock flights generated per leg",
        "Filter by stops & max price",
        "Sort by price, duration, departure time",
        "Expandable flight cards",
        "3-step booking modal with validation",
        "Animated loading screen"
      ],
      icon: <Plane className="w-6 h-6" />,
      color: "#3b82f6",
    },
    {
      id: 4,
      title: "ArthaJobs - Professional Job Portal",
      description: "Professional job portal system with role-based access for Admin, Employer, and Job Seeker. Features job posting, application management, and dashboard analytics.",
      fullDescription: "A complete job portal system with three user roles: Admin (platform management), Employer (post jobs, view applicants), Job Seeker (search jobs, apply). Features JWT authentication, job posting and management, application tracking, resume upload, dashboard with charts, and email notifications.",
      tech: ["Java 17", "Spring Boot 3.2", "Spring Security", "JWT", "React", "Zustand", "Recharts", "MySQL", "H2"],
      category: "fullstack",
      github: "https://github.com/rahul2003-cell/arthajobs",
      features: [
        "3 user roles: Admin, Employer, Job Seeker",
        "JWT authentication & authorization",
        "Job posting & management",
        "Application tracking system",
        "Dashboard with Recharts analytics",
        "Resume upload functionality"
      ],
      icon: <Briefcase className="w-6 h-6" />,
      color: "#10b981",
    },
    {
      id: 5,
      title: "EasyVenue - Venue Booking Platform",
      description: "Mini venue booking platform allowing users to browse and book venues, while admins can manage venues and view bookings.",
      fullDescription: "A learning project for full-stack application development. Users can view available venues with details (location, capacity, price), book venues for selected dates, and view booking confirmation. Admins can add new venues, update availability, view all venues and recent bookings.",
      tech: ["Java 21", "Spring Boot", "Spring Data JPA", "Hibernate", "React", "Vite", "Axios", "H2/MySQL"],
      category: "fullstack",
      github: "https://github.com/rahul2003-cell/easyvenue",
      features: [
        "Browse venues with details",
        "Book venues for selected dates",
        "Admin venue management",
        "Booking confirmation system",
        "View recent bookings"
      ],
      icon: <MapPin className="w-6 h-6" />,
      color: "#8b5cf6",
    },
    {
      id: 6,
      title: "Smart Mart - E-Commerce Platform",
      description: "Full-stack E-Commerce platform with dynamic product listings, cart-wishlist system, payment gateway, customer support chatbot, and Google Analytics integration.",
      fullDescription: "Built with Spring Boot + Hibernate (Backend) and Angular + Angular Material (Frontend). Features product catalog, cart and wishlist system, order flow with invoice generation, integrated payment gateway, customer support chatbot, Google Analytics for tracking, and Log4j logging for monitoring.",
      tech: ["Java", "Spring Boot", "Hibernate", "Angular", "Angular Material", "MySQL", "Log4j", "Google Analytics"],
      category: "fullstack",
      github: "https://github.com/rahul2003-cell/smart-mart",
      features: [
        "Product Catalog, Cart & Wishlist",
        "Order flow & Invoice Generation",
        "Integrated Payment Gateway",
        "Customer Support Chatbot",
        "Google Analytics integration",
        "Log4j logging & monitoring"
      ],
      icon: <ShoppingCart className="w-6 h-6" />,
      color: "#ec489a",
    },
    {
      id: 7,
      title: "Itinerary Planner - Tour Recommendation System",
      description: "Smart tour recommendation system that recommends personalized tour packages based on user preferences like budget, dates, accommodation, and food.",
      fullDescription: "A modern Java web application built with Vaadin Flow, Spring Boot, and MongoDB. Features user authentication, personalized tour recommendations based on preferences, trip type filtering (Adventure, Relaxation, Cultural, etc.), preference management (budget, dates, accommodation, food), and dynamic package display using Vaadin Cards.",
      tech: ["Java", "Vaadin Flow", "Spring Boot", "MongoDB", "Maven"],
      category: "backend",
      github: "https://github.com/rahul2003-cell/itinerary-planner",
      features: [
        "User Authentication (Login/Logout)",
        "Personalized Tour Recommendations",
        "Trip Type Filtering",
        "Preference Management",
        "Dynamic Package Display",
        "Admin/Custom control over packages"
      ],
      icon: <Star className="w-6 h-6" />,
      color: "#f59e0b",
    },
    {
      id: 8,
      title: "Portfolio Website",
      description: "Modern 3D interactive portfolio website showcasing skills, projects, and experience with animations and real-time features.",
      fullDescription: "Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Features 3D animations with Spline, real-time chat and online users with Socket.io, radial menu with confetti effects, dark/light mode, contact form with Resend API, and MDX blog support.",
      tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Socket.io", "Spline 3D", "Resend API"],
      category: "frontend",
      github: "https://github.com/rahul2003-cell/portfolio",
      features: [
        "3D animations with Spline",
        "Real-time chat with Socket.io",
        "Radial menu with confetti effects",
        "Dark/Light mode theme",
        "Contact form with Resend API",
        "MDX blog support"
      ],
      icon: <Code2 className="w-6 h-6" />,
      color: "#06b6d4",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects", count: projects.length },
    { id: "fullstack", label: "Full Stack", count: projects.filter(p => p.category === "fullstack").length },
    { id: "frontend", label: "Frontend", count: projects.filter(p => p.category === "frontend").length },
    { id: "backend", label: "Backend", count: projects.filter(p => p.category === "backend").length },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <SectionWrapper id="projects" className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <SectionHeader
          id="projects"
          title="Projects"
          desc="Real-world applications I've built"
          className="mb-8"
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                filter === cat.id
                  ? "bg-brand text-white shadow-lg"
                  : "bg-background/50 border border-border hover:border-brand/50 hover:text-brand"
              )}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="h-full bg-card/80 backdrop-blur-sm border-border hover:border-brand/30 transition-all duration-300 hover:shadow-lg overflow-hidden group">
                {/* Color Accent Bar */}
                <div className="h-1 w-full" style={{ backgroundColor: project.color }} />

                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg" style={{ backgroundColor: `${project.color}20` }}>
                        {project.icon}
                      </div>
                      <CardTitle className="text-lg font-bold group-hover:text-brand transition-colors">
                        {project.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 5).map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs bg-brand/10 text-brand">
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 5 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.tech.length - 5} more
                      </Badge>
                    )}
                  </div>

                  {/* Key Features */}
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-brand">Key Features:</p>
                    <div className="flex flex-wrap gap-1">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <span key={i} className="text-xs text-muted-foreground">
                          • {feature.length > 40 ? feature.substring(0, 40) + "..." : feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Tooltip delayDuration={200}>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-2 hover:bg-brand/10"
                          onClick={() => window.open(project.github, "_blank")}
                        >
                          <Github className="w-4 h-4" />
                          GitHub
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>View source code</p>
                      </TooltipContent>
                    </Tooltip>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-2 text-muted-foreground cursor-not-allowed"
                      disabled
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo (Not Deployed)
                    </Button>
                  </div>
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
            <div className="text-2xl font-bold text-brand">{projects.length}</div>
            <div className="text-xs text-muted-foreground">Total Projects</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-background/50 border border-border">
            <div className="text-2xl font-bold text-brand">
              {projects.filter(p => p.category === "fullstack").length}
            </div>
            <div className="text-xs text-muted-foreground">Full Stack Apps</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-background/50 border border-border">
            <div className="text-2xl font-bold text-brand">
              {projects.reduce((acc, p) => acc + p.tech.length, 0)}
            </div>
            <div className="text-xs text-muted-foreground">Technologies Used</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-background/50 border border-border">
            <div className="text-2xl font-bold text-brand">GitHub</div>
            <div className="text-xs text-muted-foreground">All Projects Hosted</div>
          </div>
        </motion.div>

        {/* Note about deployment */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            📦 All projects are available on GitHub. Demo links are disabled as projects are not deployed yet.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;