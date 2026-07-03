// src/constants/projectsData.js
import img1 from "../assets/imgs/im1.jpg";
import img2 from "../assets/imgs/pp2.png";
import img5 from "../assets/imgs/p1.jpg";
import img6 from "../assets/imgs/1752507510777.jpg";

export const projectsData = [
  {
    id: "1",
    title: "loanLink",
    image: img1,
    shortDesc: "Full-stack web application connecting farmers with buyers.",
    longDesc:
      "LoanLink is a full-stack platform designed to bridge the gap between farmers and buyers. It provides agricultural information and streamlines the local trading ecosystem through a secure and robust backend architecture.",
    techStack: [
      { name: "React", iconName: "SiReact", color: "text-[#61DAFB]" },
      { name: "NodeJS", iconName: "SiNodedotjs", color: "text-[#339933]" },
      { name: "Tailwind", iconName: "SiTailwindcss", color: "text-[#38B2AC]" },
      { name: "Firebase", iconName: "SiFirebase", color: "text-[#FFCA28]" },
    ],
    // নতুন ফিল্ডস (ডিজাইনের জন্য)
    features: [
      "User authentication & profile management",
      "Real-time data flow for farmers",
      "Responsive design across all devices",
    ],
    problem:
      "Farmers struggle to connect with buyers directly, often relying on middlemen who reduce their profit margins.",
    solution:
      "A robust full-stack MERN application that provides a direct marketplace and vital agricultural data.",
    challengesText:
      "Optimizing real-time data flow and ensuring mobile-responsiveness for low-end devices.",
    learned:
      "Deepened my understanding of full-stack architecture and secure user authentication.",
    liveLink: "https://lonelink-d3167.web.app/",
    githubLink: "https://github.com/tamjid97/loanlink.git",
  },
  {
    id: "2",
    title: "AmaderPathshala",
    image: img2,
    shortDesc:
      "Interactive biology platform to help students understand complex concepts.",
    longDesc:
      "AmaderPathshala is a specialized learning management system focused on biology education, providing visual representations and interactive study materials.",
    techStack: [
      { name: "React", iconName: "SiReact", color: "text-[#61DAFB]" },
      { name: "Tailwind", iconName: "SiTailwindcss", color: "text-[#38B2AC]" },
      { name: "Firebase", iconName: "SiFirebase", color: "text-[#FFCA28]" },
      { name: "JavaScript", iconName: "SiJavascript", color: "text-[#F7DF1E]" },
    ],
    features: [
      "Interactive biology diagrams",
      "Student progress tracking",
      "Multi-device accessibility",
    ],
    problem:
      "Students often find biology concepts difficult to visualize and lack interactive learning tools.",
    solution:
      "An interactive platform featuring visual diagrams and gamified study paths for better engagement.",
    challengesText:
      "Creating interactive diagrams with limited resources and optimizing load speeds.",
    learned:
      "Improved skills in interactive UI design and state management in Reacts.",
    liveLink: "https://amaderpathshala-21244.web.app/",
    githubLink: "https://github.com/tamjid97/amader_pathshala.git",
  },
  {
    id: "3",
    title: "KrishiLink",
    image: img5,
    shortDesc:
      "A digital marketplace connecting rural farmers directly with urban buyers.",
    longDesc:
      "KrishiLink aims to empower the agricultural community by providing a digital marketplace that eliminates middlemen.",
    techStack: [
      { name: "React", iconName: "SiReact", color: "text-[#61DAFB]" },
      { name: "NodeJS", iconName: "SiNodedotjs", color: "text-[#339933]" },
      { name: "MongoDB", iconName: "SiMongodb", color: "text-[#47A248]" },
    ],
    features: [
      "Direct buyer-seller communication",
      "Secure product listing",
      "Data-driven price insights",
    ],
    problem:
      "Inefficient supply chain mechanisms prevent farmers from receiving fair market prices.",
    solution:
      "A digital marketplace that connects producers directly to consumers, ensuring price transparency.",
    challengesText:
      "Managing database scalability for thousands of products and ensuring data security.",
    learned:
      "Gained hands-on experience with MongoDB aggregation pipelines and secure API development.",
    liveLink: "https://krishilnk.web.app/",
    githubLink: "https://github.com/tamjid97/Krishilink-clintsite.git",
  },
];
