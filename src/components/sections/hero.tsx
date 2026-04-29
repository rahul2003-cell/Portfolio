import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { File, Github, Linkedin, Mail } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import { config } from "@/data/config";

import SectionWrapper from "../ui/section-wrapper";

const HeroSection = () => {
  const { isLoading } = usePreloader();

  return (
    <SectionWrapper id="hero" className={cn("relative w-full h-screen")}>
      <div className="grid md:grid-cols-2">
        <div
          className={cn(
            "h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2]",
            "col-span-1",
            "flex flex-col justify-start md:justify-center items-center md:items-start",
            "pt-28 sm:pb-16 md:p-20 lg:p-24 xl:p-28"
          )}
        >
          {!isLoading && (
            <div className="flex flex-col">
              <div>
                <BlurIn delay={0.7}>
                  <p
                    className={cn(
                      "md:self-start mt-4 font-thin text-md text-slate-500 dark:text-zinc-400",
                      "cursor-default font-display sm:text-xl md:text-xl whitespace-nowrap bg-clip-text "
                    )}
                  >
                    Hi, I am
                    <br className="md:hidden" />
                  </p>
                </BlurIn>

                <BlurIn delay={1}>
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <h1
                        className={cn(
                          "-ml-[6px] leading-none font-thin text-transparent text-slate-800 text-left",
                          "font-thin text-7xl md:text-7xl lg:text-8xl xl:text-9xl",
                          "cursor-default text-edge-outline font-display"
                        )}
                      >
                        Rahul
                        <br />
                        Nagare
                      </h1>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="dark:bg-white dark:text-black"
                    >
                      Java Full Stack Developer ☕🚀
                    </TooltipContent>
                  </Tooltip>
                </BlurIn>

                <BlurIn delay={1.2}>
                  <p
                    className={cn(
                      "md:self-start md:mt-4 font-thin text-md text-slate-500 dark:text-zinc-400",
                      "cursor-default font-display sm:text-xl md:text-xl whitespace-nowrap bg-clip-text"
                    )}
                  >
                    Java Full Stack Developer | Spring Boot | React
                  </p>
                </BlurIn>
              </div>
              <div className="mt-8 flex flex-col gap-3 w-fit">
                {/* Resume Link - Google Drive */}
                <Link
                  href={config.resumeUrl}
                  target="_blank"
                  className="flex-1"
                >
                  <BoxReveal delay={2} width="100%">
                    <Button className="flex items-center gap-2 w-full bg-brand hover:bg-brand-dark">
                      <File size={24} />
                      <p>Resume</p>
                    </Button>
                  </BoxReveal>
                </Link>
                
                <div className="md:self-start flex gap-3">
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <Link href={"#contact"}>
                        <Button
                          variant={"outline"}
                          className="block w-full overflow-hidden border-brand text-brand hover:bg-brand hover:text-white"
                        >
                          Hire Me
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>Let's build something amazing together! 🚀</p>
                    </TooltipContent>
                  </Tooltip>
                  
                  <div className="flex items-center h-full gap-2">
                    {/* GitHub */}
                    {config.social.github && config.social.github !== "" && (
                      <Link href={config.social.github} target="_blank">
                        <Tooltip delayDuration={300}>
                          <TooltipTrigger asChild>
                            <Button variant={"outline"} className="hover:bg-brand/10">
                              <SiGithub size={24} />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent side="bottom">
                            <p>Check out my code on GitHub</p>
                          </TooltipContent>
                        </Tooltip>
                      </Link>
                    )}
                    
                    {/* LinkedIn */}
                    {config.social.linkedin && config.social.linkedin !== "" && (
                      <Link href={config.social.linkedin} target="_blank">
                        <Tooltip delayDuration={300}>
                          <TooltipTrigger asChild>
                            <Button variant={"outline"} className="hover:bg-brand/10">
                              <SiLinkedin size={24} />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent side="bottom">
                            <p>Connect with me on LinkedIn</p>
                          </TooltipContent>
                        </Tooltip>
                      </Link>
                    )}
                    
                    {/* Email */}
                    <Link href={`mailto:${config.email}`}>
                      <Tooltip delayDuration={300}>
                        <TooltipTrigger asChild>
                          <Button variant={"outline"} className="hover:bg-brand/10">
                            <Mail size={24} />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent side="bottom">
                          <p>Email me directly</p>
                        </TooltipContent>
                      </Tooltip>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="grid col-span-1"></div>
      </div>
      <div className="absolute bottom-10 left-[50%] translate-x-[-50%]">
        <ScrollDownIcon />
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;