export interface MenuItem {
  id: string;
  emoji: string;
  label: string;
  color: string;
  href?: string; // Add this optional href property
}

export interface Position {
  x: number;
  y: number;
}

// Menu items for the radial menu
export const MENU_ITEMS: MenuItem[] = [
  {
    id: "home",
    emoji: "🏠",
    label: "Home",
    color: "#6db33f", // Spring Boot green
    href: "/", // Add href
  },
  {
    id: "about",
    emoji: "👨‍💻",
    label: "About",
    color: "#007396", // Java blue
    href: "/about", // Add href
  },
  {
    id: "skills",
    emoji: "⚡",
    label: "Skills",
    color: "#ff9900", // AWS orange
    href: "/#skills", // Add href
  },
  {
    id: "experience",
    emoji: "💼",
    label: "Experience",
    color: "#6db33f",
    href: "/#experience", // Add href
  },
  {
    id: "projects",
    emoji: "🚀",
    label: "Projects",
    color: "#007396",
    href: "/#projects", // Add href
  },
  {
    id: "blogs",
    emoji: "📝",
    label: "Blogs",
    color: "#ff6b6b",
    href: "/blogs", // Add href
  },
  {
    id: "contact",
    emoji: "📧",
    label: "Contact",
    color: "#ff9900",
    href: "/#contact", // Add href
  },
  // {
  //   id: "resume",
  //   emoji: "📄",
  //   label: "Resume",
  //   color: "#6db33f",
  //   href: "#", // Add href (or remove this item since you removed resume URL)
  // },
  {
    id: "github",
    emoji: "🐙",
    label: "GitHub",
    color: "#333333",
    href: "https://github.com/rahul2003-cell", // Add href
  },
  {
    id: "linkedin",
    emoji: "🔗",
    label: "LinkedIn",
    color: "#0077b5",
    href: "https://www.linkedin.com/in/rahulnagare-developer", // Add href
  },
];

// Optional: Section mapping for navigation
export const SECTION_IDS = {
  home: "/",
  about: "/about",
  skills: "#skills",
  experience: "#experience",
  projects: "#projects",
  blogs: "/blogs",
  contact: "#contact",
} as const;

// Optional: Easter egg menu items (hidden until special key press)
export const EASTER_EGG_MENU_ITEMS: MenuItem[] = [
  {
    id: "java-coffee",
    emoji: "☕",
    label: "Java Coffee",
    color: "#6db33f",
    href: "#", // Add href
  },
  {
    id: "spring-boot",
    emoji: "🍃",
    label: "Spring Boot",
    color: "#6db33f",
    href: "#", // Add href
  },
  {
    id: "microservices",
    emoji: "🔧",
    label: "Microservices",
    color: "#007396",
    href: "#", // Add href
  },
];