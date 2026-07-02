import React from "react";
import { motion } from "framer-motion";
import * as SiIcons from "react-icons/si";
import { FaCode, FaLayerGroup, FaPenNib, FaBug } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { IoRocketSharp } from "react-icons/io5";
import { MdOutlineDevices, MdSpeed } from "react-icons/md";

// আইকন রেন্ডার করার ফাংশন
const IconRenderer = ({ name, customIcon, className }) => {
  if (customIcon) return <span className={className}>{customIcon}</span>;
  if (name) {
    const IconComponent = SiIcons[name];
    if (!IconComponent) return null; 
    return <IconComponent className={className} />;
  }
  return null;
};

// সার্ভিসের ডেটা
const servicesData = [
  {
    title: "Frontend Development",
    mainIcon: <FaCode />,
    iconBg: "bg-gradient-to-br from-blue-500 to-blue-600", 
    description: "Building fast, responsive, and modern user interfaces using React, Next.js, TypeScript, and Tailwind CSS.",
    tags: [
      { name: "React", iconName: "SiReact", color: "text-[#61DAFB]" },
      { name: "Next.js", iconName: "SiNextdotjs", color: "text-slate-900 dark:text-white" },
      { name: "TypeScript", iconName: "SiTypescript", color: "text-[#3178C6]" },
      { name: "Tailwind", iconName: "SiTailwindcss", color: "text-[#38B2AC]" },
    ],
  },
  {
    title: "Full Stack Web Development",
    mainIcon: <FaLayerGroup />,
    iconBg: "bg-gradient-to-br from-purple-500 to-purple-600", 
    description: "Developing complete web applications with secure REST APIs, authentication, databases, and scalable backend architecture.",
    tags: [
      { name: "Node.js", iconName: "SiNodedotjs", color: "text-[#339933]" },
      { name: "Express", iconName: "SiExpress", color: "text-slate-900 dark:text-white" },
      { name: "PostgreSQL", iconName: "SiPostgresql", color: "text-[#4169E1]" },
      { name: "MongoDB", iconName: "SiMongodb", color: "text-[#47A248]" },
    ],
  },
  {
    title: "Responsive UI Development",
    mainIcon: <FaPenNib />,
    iconBg: "bg-gradient-to-br from-rose-500 to-rose-600", 
    description: "Transforming Figma or design mockups into pixel-perfect, mobile-friendly, and accessible websites.",
    tags: [
      { name: "Figma", iconName: "SiFigma", color: "text-[#F24E1E]" },
      { name: "Tailwind", iconName: "SiTailwindcss", color: "text-[#38B2AC]" },
      { name: "Responsive", customIcon: <MdOutlineDevices />, color: "text-pink-500 dark:text-pink-400" },
    ],
  },
  {
    title: "API Integration",
    mainIcon: <TbApi />,
    iconBg: "bg-gradient-to-br from-orange-500 to-orange-600", 
    description: "Integrating REST APIs, authentication systems, payment gateways, and third-party services into web applications.",
    tags: [
      { name: "REST API", customIcon: <TbApi />, color: "text-orange-500 dark:text-orange-400" },
      { name: "JWT", iconName: "SiJsonwebtokens", color: "text-purple-500 dark:text-purple-400" },
      { name: "Express", iconName: "SiExpress", color: "text-slate-900 dark:text-white" },
    ],
  },
  {
    title: "Testing & Quality Assurance",
    mainIcon: <FaBug />,
    iconBg: "bg-gradient-to-br from-emerald-500 to-emerald-600", 
    description: "Performing manual testing, bug reporting, responsive testing, and cross-browser compatibility testing to ensure high-quality software.",
    tags: [
      { name: "Manual Testing" }, 
      { name: "Bug Reporting", customIcon: <FaBug />, color: "text-red-500 dark:text-red-400" },
      { name: "Cross-Browser", customIcon: <MdOutlineDevices />, color: "text-teal-500 dark:text-teal-400" },
    ],
  },
  {
    title: "Performance Optimization",
    mainIcon: <IoRocketSharp />,
    iconBg: "bg-gradient-to-br from-sky-500 to-blue-600", 
    description: "Improving website speed, SEO, responsiveness, and overall user experience for better performance.",
    tags: [
      { name: "Speed", customIcon: <MdSpeed />, color: "text-yellow-600 dark:text-yellow-400" },
      { name: "SEO", customIcon: <IoRocketSharp />, color: "text-blue-500 dark:text-blue-400" },
      { name: "UX", customIcon: <FaPenNib />, color: "text-pink-500 dark:text-pink-400" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 60 } 
  },
};

export default function Services() {
  return (
    <section className="py-20 px-6 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Services</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-400 text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            From crafting beautiful UIs to building robust backend systems — here's what I can do for you.
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesData.map((service, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col bg-white/80 dark:bg-white/5 p-8 rounded-[2rem] border border-slate-200 dark:border-white/5 backdrop-blur-xl transition-all duration-300 hover:border-purple-300 dark:hover:border-purple-500/40 shadow-xl hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem] pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-5 mb-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg ${service.iconBg}`}>
                    {service.mainIcon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>
                </div>

                <p className="text-slate-600 dark:text-gray-400 text-sm md:text-base leading-relaxed mb-8 flex-grow font-medium">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.tags.map((tag, i) => (
                    <div 
                      key={i} 
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg text-xs font-bold text-slate-700 dark:text-gray-300 group-hover:border-purple-200 dark:group-hover:border-white/20 transition-colors shadow-sm"
                    >
                      <IconRenderer
                        name={tag.iconName}
                        customIcon={tag.customIcon}
                        className={`text-sm ${tag.color || "text-slate-600 dark:text-gray-400"}`}
                      />
                      <span>{tag.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}