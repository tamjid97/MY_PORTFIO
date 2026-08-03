// src/constants/projectsData.js
import img1 from "../assets/imgs/retnest.png";
import img2 from "../assets/imgs/amader patshala,v1.png";
import img5 from "../assets/imgs/amederfd.png";
import img6 from "../assets/imgs/1752507510777.jpg";

export const projectsData = [
{
  id: "3",
  title: "📑 AmaderPathshala",
  image: img5,
  shortDesc:
    "A client-side biology learning portal providing students with interactive topic guides and instant PDF study material downloads.",
  longDesc:
    "A pure frontend-based biology resource platform designed in Figma and built using React, Tailwind CSS, and Framer Motion. Powered by Firebase for client services, this application provides students with an intuitive, highly responsive interface to explore biology topics, view study guides, and directly download PDF notes without relying on a custom backend.",
  techStack: [
    { name: "React", iconName: "SiReact", color: "text-[#61DAFB]" },
    { name: "JavaScript", iconName: "SiJavascript", color: "text-[#F7DF1E]" },
    { name: "Tailwind CSS", iconName: "SiTailwindcss", color: "text-[#38B2AC]" },
    { name: "Framer Motion", iconName: "SiFramer", color: "text-[#0055FF]" },
    { name: "Firebase", iconName: "SiFirebase", color: "text-[#FFCA28]" },
    { name: "Figma", iconName: "SiFigma", color: "text-[#F24E1E]" },
  ],
  features: [
    "Frontend-Only Architecture Powered by Firebase",
    "Instant PDF Study Material & Notes Download for Students",
    "Interactive UI & Layout Prototype Designed in Figma",
    "Smooth UI Animations & Transitions via Framer Motion",
    "Categorized Biology Topics & Mobile-Responsive Design",
  ],
  problem:
    "Students need a lightweight, fast, and visually engaging web application to quickly browse biology concepts and download essential PDF study materials without complex navigation.",
  solution:
    "A streamlined, pure client-side biology platform delivering instant access to structured study guides, interactive visual layouts, and one-click PDF downloads.",
  challengesText:
    "Building an optimized frontend-only structure, managing client-side PDF downloads efficiently, and translating Figma prototypes into fluid Framer Motion animations.",
  learned:
    "Strengthened pure frontend architecture skills, masterclass in UI design using Figma, Firebase integration, and crafting interactive motion UI using Framer Motion.",
  liveLink: "https://amaderpathshala-21244.web.app",
  githubLink: "https://github.com/tamjid97/amader_pathshala.git",
},
  {
    id: "1",
    title: "🏠 RentNest",
    image: img1,
    shortDesc:
      "RentNest is a full-featured, modern, and responsive property rental marketplace application built with Next.js (App Router). It bridges the gap between tenants looking for ideal homes, landlords managing their properties and requests, and administrators overseeing platform health.",
    longDesc:
      "RentNest is a production-grade, full-stack property rental marketplace engineered with Next.js (App Router) to seamlessly connect prospective tenants, property owners, and platform administrators within a high-performance ecosystem. The platform features a dynamic discovery catalog optimized via Next.js image handling with real-time search and advanced filtering by location, price, and amenities. It includes a comprehensive tenant portal with secure authentication, streamlined booking workflows, and integrated Stripe payment processing, alongside a landlord operations center that provides centralized analytics, complete CRUD property management, and instant request approvals. Furthermore, RentNest offers robust administrative governance with global platform analytics, user moderation controls, and system-wide content oversight to ensure complete ecosystem integrity.",
    techStack: [
      { name: "Next.js", iconName: "SiNextdotjs", color: "text-white" },
      {name: "Tailwind CSS", iconName: "SiTailwindcss",color: "text-[#38B2AC]",},
      { name: "TypeScript", iconName: "SiTypescript", color: "text-[#3178C6]" },
      { name: "Prisma", iconName: "SiPrisma", color: "text-[#2D3748]" },
      { name: "PostgreSQL", iconName: "SiPostgresql", color: "text-[#4169E1]" },
      { name: "Shadcn UI", iconName: "SiShadcnui", color: "text-white" },
      { name: "Framer Motion", iconName: "SiFramer", color: "text-[#0055FF]" },
      { name: "Stripe", iconName: "SiStripe", color: "text-[#635BFF]" },
      { name: "Vercel", iconName: "SiVercel", color: "text-white" },
    ],
    features: [
      "Advanced real-time search & dynamic property filtering",
      "Secure Stripe payment gateway checkout integration",
      "Role-based dashboards for Tenants, Landlords, and Admins",
      "Complete CRUD property management and rental request workflows",
    ],
    problem:
      "Finding rental homes and managing property listings often involves fragmented communication, lack of transparent tracking, and insecure payment workflows between tenants and landlords.",
    solution:
      "A robust property rental marketplace with integrated role-based dashboards, secure Stripe payments, and a streamlined booking management system.",
    challengesText:
      "Handling complex relational data models between users, properties, and bookings, and synchronizing real-time status updates across dashboards.",
    learned:
      "Mastered Next.js App Router architecture, database design using Prisma with PostgreSQL, and integrating secure payment gateways.",
    liveLink: "https://rentnest-navy.vercel.app",
    githubLink: "https://github.com/tamjid97/RentNest_Frontend.git",
    youtubeLink: "https://youtu.be/_ZtuveLOK4A?si=o-idrNiUKaLr8uXw",
  },
{
  id: "2",
  title: "🧬 Roots of biology",
  image: img2,
  shortDesc:
    "Comprehensive biology LMS featuring 3-tier role-based access control (Admin, Moderator, Student), online exams, batch schedules, and PDF study resources.",
  longDesc:
    "Roots of biology is a specialized learning management system focused on biology education. Built with a 3-tier role architecture: Admins oversee platform operations and user moderation; Moderators handle student approvals, batch timing, exam result publishing, and study material uploads; and Students access interactive diagrams, view schedules, download PDFs, and participate in online exams.",
  techStack: [
    { name: "Next.js", iconName: "SiNextdotjs", color: "text-white" },
    { name: "Tailwind CSS", iconName: "SiTailwindcss", color: "text-[#38B2AC]" },
    { name: "TypeScript", iconName: "SiTypescript", color: "text-[#3178C6]" },
    { name: "Prisma", iconName: "SiPrisma", color: "text-[#2D3748]" },
    { name: "PostgreSQL", iconName: "SiPostgresql", color: "text-[#4169E1]" },
    { name: "Shadcn UI", iconName: "SiShadcnui", color: "text-white" },
    { name: "Framer Motion", iconName: "SiFramer", color: "text-[#0055FF]" },
    { name: "Vercel", iconName: "SiVercel", color: "text-white" },
  ],
  features: [
    "3-Tier Role-Based Access Control (Admin, Moderator, Student)",
    "Admin Controls: Promote Moderators & Ban/Unban Users",
    "Moderator Tools: PDF/Image Uploads & Student Approvals",
    "Batch Schedule & Routine Management",
    "Online Exam System & Instant Result Publishing",
    "Student Portal: PDF Study Material Downloads & Exam Participation",
  ],
  problem:
    "Students lack a centralized online portal to take biology exams, track batch schedules, download curated study materials, and visualize complex biology topics.",
  solution:
    "An all-in-one educational platform integrating interactive diagrams, automated online exams, PDF resource distribution, and automated administrative approval workflows.",
  challengesText:
    "Implementing strict 3-tier Role-Based Access Control (RBAC), managing secure PDF file handling, and handling real-time state synchronization during online exams.",
  learned:
    "Mastered Role-Based Access Control (RBAC) patterns, file handling workflows, online exam timer logic, and complex state management in React/Next.js.",
    liveLink: "https://rootsofbiology.vercel.app",
    githubLink: "https://github.com/tamjid97/Amader-Patshala-Fontand-v2.git",
    
},
];
