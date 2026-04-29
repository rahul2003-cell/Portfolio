"use client";

import { useInView } from "framer-motion";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Mail } from "lucide-react";
import { config } from "@/data/config";
import Link from "next/link";

// Only include social links that actually exist in config
const BUTTONS = [
  ...(config.social.github && config.social.github !== "" ? [{
    name: "Github",
    href: config.social.github,
    icon: <SiGithub size={"24"} color={"#fff"} />,
  }] : []),
  ...(config.social.linkedin && config.social.linkedin !== "" ? [{
    name: "LinkedIn",
    href: config.social.linkedin,
    icon: <SiLinkedin size={"24"} color={"#fff"} />,
  }] : []),
  {
    name: "Email",
    href: `mailto:${config.email}`,
    icon: <Mail size={"24"} color={"#fff"} />,
  },
];

const SocialMediaButtons = () => {
  const ref = useRef<HTMLDivElement>(null);
  const show = useInView(ref, { once: true });
  
  return (
    <div ref={ref} className="z-10">
      {show &&
        BUTTONS.map((button) => (
          <Link href={button.href} key={button.name} target="_blank" rel="noopener noreferrer">
            <Button variant={"ghost"}>{button.icon}</Button>
          </Link>
        ))}
    </div>
  );
};

export default SocialMediaButtons;