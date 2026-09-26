// src/constants/projectsData.js
import img1 from "../assets/imgs/retnest.png";
import img2 from "../assets/imgs/mmmmmmmmmmm.png";
import img3 from "../assets/imgs/gym.png";
import img6 from "../assets/imgs/1752507510777.jpg";

export const projectsData = [


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
  id: "3",
  title: "🏋️ AHMED GYM & CAFE 29",
  image: img3, // নিশ্চিত করে নিও যে img3 ফাইলটি import করা আছে

  shortDesc:
    "A modern and responsive frontend fitness website built with Next.js, featuring training programs, membership plans, trainer profiles, schedules, gallery, and an interactive protein calculator.",

  longDesc:
    "AHMED GYM & CAFE 29 is a modern frontend-focused fitness website designed to deliver a premium gym experience through a clean and responsive interface. Built with Next.js, the project includes dedicated sections for fitness programs, expert trainers, membership plans, weekly schedules, gallery, testimonials, contact information, and a daily protein calculator. The interface focuses on smooth interactions, responsive layouts, reusable components, and a professional fitness-oriented visual experience.",

  techStack: [
    {
      name: "Next.js",
      iconName: "SiNextdotjs",
      color: "text-white",
    },
    {
      name: "React",
      iconName: "SiReact",
      color: "text-[#61DAFB]",
    },
    {
      name: "TypeScript",
      iconName: "SiTypescript",
      color: "text-[#3178C6]",
    },
    {
      name: "Tailwind CSS",
      iconName: "SiTailwindcss",
      color: "text-[#38B2AC]",
    },
    {
      name: "Framer Motion",
      iconName: "SiFramer",
      color: "text-[#0055FF]",
    },
    {
      name: "Vercel",
      iconName: "SiVercel",
      color: "text-white",
    },
  ],

  features: [
    "Modern & Fully Responsive Fitness UI",
    "Training Programs & Program Details",
    "Gym Membership Plans & Pricing",
    "Trainer Profiles & Expert Coaching Section",
    "Men's & Women's Weekly Gym Schedules",
    "Interactive Daily Protein Calculator",
    "Gallery & Member Testimonials",
    "Smooth Animations & Interactive UI Elements",
    "Reusable Component-Based Architecture",
    "Cross-device Compatibility",
  ],

  problem:
    "The need for a modern digital platform that could present a gym's services, training programs, membership plans, trainers, schedules, and fitness resources in a clear and engaging way across different devices.",

  solution:
    "A responsive Next.js frontend that organizes the complete gym experience into dedicated sections with reusable components, modern UI patterns, smooth interactions, clear membership information, training schedules, and an interactive protein calculator.",

  challengesText:
    "Designing a premium fitness-focused interface while maintaining responsiveness across desktop, tablet, and mobile devices. Another challenge was organizing multiple sections such as programs, trainers, membership plans, schedules, gallery, testimonials, and interactive fitness tools into a consistent and easy-to-navigate user experience.",

  learned:
    "Improved understanding of Next.js frontend architecture, reusable React components, responsive Tailwind CSS layouts, animation and interaction design, component organization, and building polished user interfaces for real-world business use cases.",

  liveLink: "https://gym-xi-ecru.vercel.app",
  githubLink: "https://github.com/sabbirtanvir13/Gym.git",
},
];
