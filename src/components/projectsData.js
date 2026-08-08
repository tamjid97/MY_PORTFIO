// src/constants/projectsData.js
import img1 from "../assets/imgs/retnest.png";
import img2 from "../assets/imgs/mmmmmmmmmmm.png";
import img3 from "../assets/imgs/iconfaction.png";
import img6 from "../assets/imgs/1752507510777.jpg";

export const projectsData = [
  {
  id: "2",
  title: "🧬 Roots of biology",
  image: img2,
  shortDesc:
    "Comprehensive biology LMS featuring 3-tier role-based access control (Admin, Moderator, Student), online exams, batch schedules, and PDF study resources.",
  longDesc:
    "Roots of biology is a specialized learning management system focused on biology education. Built with a 3-tier role architecture: Admins oversee platform operations and user moderation; Moderators handle student approvals, batch timing, exam result publishing, and study material uploads; and Students access interactive diagrams, view schedules, download PDFs.",
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
    "Instant Result Publishing",
    "Student Portal: PDF Study Material Downloads.",
  ],
  problem:
    "Students lack a centralized online portal to take biology exams, track batch schedules, download curated study materials, and visualize complex biology topics.",
  solution:
    "An all-in-one educational platform integrating interactive diagrams, automated online exams, PDF resource distribution, and automated administrative approval workflows.",
  challengesText:
    "Implementing strict 3-tier Role-Based Access Control (RBAC), managing secure PDF file handling, and handling real-time state synchronization during online exams.",
  learned:
    "Mastered Role-Based Access Control (RBAC) patterns, file handling workflows, online exam timer logic, and complex state management in React/Next.js.",
    liveLink: "https://roots-of-biology-pro.vercel.app",
    githubLink: "https://github.com/tamjid97/ROOTS-OF-BIOLOGY-V2",
    youtubeLink: "https://www.youtube.com/watch?v=dh-8Sf57l7c",
    
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
  id: "3",
  title: "🎨 Icon Faction",
  image: img3, // নিশ্চিত করে নিও যে img1 টি ফাইলটি ইমপোর্ট করা আছে
  shortDesc:
    "A specialized frontend platform for icon discovery and design, built to showcase clean UI patterns and component modularity.",
  longDesc:
    "A refined React-based application focused on delivering a seamless user experience for icon management. This project demonstrates clean state management, modular component architecture, and a modern responsive interface built with React, TypeScript, and Tailwind CSS. It highlights the ability to handle dynamic data and interactive frontend elements effectively.",
  techStack: [
    { name: "Next.js", iconName: "SiNextdotjs", color: "text-white" },
    { name: "Tailwind CSS", iconName: "SiTailwindcss", color: "text-[#38B2AC]" },
    { name: "Framer Motion", iconName: "SiFramer", color: "text-[#0055FF]" },
    { name: "Vercel", iconName: "SiVercel", color: "text-white" },

  ],
  features: [
    "Modern & Responsive UI Layouts",
    "Dynamic Icon Rendering & Filtering",
    "Optimized Performance & Clean Code Architecture",
    "State Management for Interactive Elements",
    "Cross-device Compatibility",
  ],
  problem:
    "The need for a streamlined, performance-optimized interface to browse and interact with design assets without performance overhead.",
  solution:
    "A fast, client-side React application that prioritizes smooth transitions, maintainable component structure, and a highly responsive design.",
  challengesText:
    "Refactoring older code to modern React standards, optimizing component re-renders for a smoother UI, and ensuring perfect responsiveness.",
  learned:
    "Deepened understanding of React hooks, efficient component composition, modular CSS architecture, and code refactoring best practices.",
  liveLink: "https://fason-bd.vercel.app", 
  githubLink: "https://github.com/tamjid97/fason_bd.git", 

},
];
