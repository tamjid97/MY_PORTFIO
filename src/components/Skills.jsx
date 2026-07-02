import React from "react";
import { motion } from "framer-motion";
import * as SiIcons from "react-icons/si";

// একটি সেফ ফাংশন যা আইকন চেক করবে
const IconRenderer = ({ name, className }) => {
  const IconComponent = SiIcons[name];
  // যদি আইকন খুঁজে না পায়, তাহলে শুধু একটি এমটি ডিভ রিটার্ন করবে, ক্রাশ করবে না
  if (!IconComponent) return <div className="w-6 h-6" />;
  return <IconComponent className={className} />;
};

const skillCategories = [
  {
    title: "Frontend Development",
    // Light mode ও Dark mode এর জন্য আলাদা ব্যাকগ্রাউন্ড
    lightColor: "hover:bg-blue-50",
    darkColor: "dark:hover:bg-blue-500/10",
    skills: [
      { name: "React.js", iconName: "SiReact", color: "text-[#61DAFB]" },
      { name: "Next.js", iconName: "SiNextdotjs", color: "text-slate-900 dark:text-white" },
      { name: "TypeScript", iconName: "SiTypescript", color: "text-[#3178C6]" },
      { name: "JavaScript", iconName: "SiJavascript", color: "text-[#F7DF1E]" },
      { name: "Tailwind", iconName: "SiTailwindcss", color: "text-[#38B2AC]" },
      { name: "Framer", iconName: "SiFramer", color: "text-[#0055FF]" },
      { name: "Swiper", iconName: "SiSwiper", color: "text-[#6332F6]" },
      { name: "HTML5", iconName: "SiHtml5", color: "text-[#E34F26]" },
    ],
  },
  {
    title: "Backend & Database",
    lightColor: "hover:bg-green-50",
    darkColor: "dark:hover:bg-emerald-500/10",
    skills: [
      { name: "Node.js", iconName: "SiNodedotjs", color: "text-[#339933]" },
      { name: "Express.js", iconName: "SiExpress", color: "text-slate-900 dark:text-white" },
      { name: "Prisma", iconName: "SiPrisma", color: "text-slate-900 dark:text-white" },
      { name: "Firebase", iconName: "SiFirebase", color: "text-[#FFCA28]" },
      { name: "PostgreSQL", iconName: "SiPostgresql", color: "text-[#4169E1]" },
      { name: "MongoDB", iconName: "SiMongodb", color: "text-[#47A248]" },
      { name: "SQL", iconName: "SiMysql", color: "text-[#4479A1]" },
    ],
  },
  {
    title: "Tools & Cloud",
    lightColor: "hover:bg-purple-50",
    darkColor: "dark:hover:bg-indigo-500/10",
    skills: [
      { name: "Figma", iconName: "SiFigma", color: "text-[#F24E1E]" },
      { name: "Git", iconName: "SiGit", color: "text-[#F05032]" },
      { name: "GitHub", iconName: "SiGithub", color: "text-slate-900 dark:text-white" },
      { name: "VS Code", iconName: "SiVisualstudiocode", color: "text-[#007ACC]" },
      { name: "Vercel", iconName: "SiVercel", color: "text-slate-900 dark:text-white" },
      { name: "Netlify", iconName: "SiNetlify", color: "text-[#00C7B7]" },
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-20 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
            Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Stack</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white border-l-4 border-purple-500 pl-4">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`group flex flex-col items-center justify-center p-5 rounded-2xl border border-slate-200 dark:border-white/5 bg-white/80 dark:bg-white/5 backdrop-blur-md shadow-sm hover:shadow-lg transition-all duration-300 ${category.lightColor} ${category.darkColor} dark:hover:border-white/10`}
                  >
                    <div className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-110">
                      <IconRenderer
                        name={skill.iconName}
                        className={skill.color}
                      />
                    </div>
                    <span className="text-sm font-bold text-slate-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}