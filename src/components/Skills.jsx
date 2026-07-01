import React from "react";
import { motion } from "framer-motion";
import * as SiIcons from "react-icons/si";

// একটি সেফ ফাংশন যা আইকন চেক করবে
const IconRenderer = ({ name, className }) => {
  const IconComponent = SiIcons[name];
  // যদি আইকন খুঁজে না পায়, তাহলে শুধু একটি এমটি ডিভ রিটার্ন করবে, ক্রাশ করবে না
  if (!IconComponent) return <div className="w-6 h-6" />;
  return <IconComponent className={className} />;
};

const skillCategories = [
  {
    title: "Frontend Development",
    color: "from-blue-500/20 to-blue-600/20",
    skills: [
      { name: "React.js", iconName: "SiReact", color: "text-blue-400" },
      { name: "Next.js", iconName: "SiNextdotjs", color: "text-white" },
      { name: "TypeScript", iconName: "SiTypescript", color: "text-blue-500" },
      {
        name: "JavaScript",
        iconName: "SiJavascript",
        color: "text-yellow-400",
      },
      { name: "Tailwind", iconName: "SiTailwindcss", color: "text-teal-400" },
      { name: "Framer", iconName: "SiFramer", color: "text-pink-500" },
      { name: "Swiper", iconName: "SiSwiper", color: "text-blue-400" },
      { name: "HTML5", iconName: "SiHtml5", color: "text-orange-500" },
      
    ],
  },
  {
    title: "Backend & Database",
    color: "from-green-500/20 to-emerald-600/20",
    skills: [
      { name: "Node.js", iconName: "SiNodedotjs", color: "text-green-500" },
      { name: "Express.js", iconName: "SiExpress", color: "text-gray-300" },
      { name: "Prisma", iconName: "SiPrisma", color: "text-white" },
      { name: "Firebase", iconName: "SiFirebase", color: "text-yellow-500" },
      { name: "PostgreSQL", iconName: "SiPostgresql", color: "text-blue-400" },
      { name: "MongoDB", iconName: "SiMongodb", color: "text-green-500" },
      { name: "SQL", iconName: "SiMysql", color: "text-blue-600" },
    ],
  },
  {
    title: "Tools & Cloud",
    color: "from-purple-500/20 to-indigo-600/20",
    skills: [
      { name: "Figma", iconName: "SiFigma", color: "text-purple-400" },
      { name: "Git", iconName: "SiGit", color: "text-orange-600" },
      { name: "GitHub", iconName: "SiGithub", color: "text-white" },
      {
        name: "VS Code",
        iconName: "SiVisualstudiocode",
        color: "text-blue-500",
      },
      { name: "Vercel", iconName: "SiVercel", color: "text-white" },
      { name: "Netlify", iconName: "SiNetlify", color: "text-teal-400" },
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-20 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Tech <span className="text-purple-500">Stack</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-300 border-l-4 border-purple-500 pl-4">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className={`flex flex-col items-center justify-center p-4 rounded-xl border border-white/5 bg-gradient-to-br ${category.color} backdrop-blur-md transition-all`}
                  >
                    <div className="text-3xl mb-2">
                      {/* এখানে আমাদের নতুন সেফ রেন্ডারার ব্যবহার করছি */}
                      <IconRenderer
                        name={skill.iconName}
                        className={skill.color}
                      />
                    </div>
                    <span className="text-xs font-medium text-gray-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
