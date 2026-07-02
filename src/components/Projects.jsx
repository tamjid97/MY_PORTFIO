import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import { projectsData } from "../components/projectsData";

// আইকন রেন্ডার করার ফাংশন
const IconRenderer = ({ name, className }) => {
  const IconComponent = FaIcons[name] || SiIcons[name];
  if (!IconComponent) return null;
  return <IconComponent className={className} />;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60 } },
};

const Projects = () => {
  return (
    <section className="py-20 px-6 lg:px-24 min-h-screen  transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Projects</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-4"></div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="flex flex-col bg-white dark:bg-[#141423]/80 rounded-[2rem] overflow-hidden border border-slate-200 dark:border-white/5 shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>

              {/* Card Content */}
              <div className="p-7 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.shortDesc}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.techStack?.map((tech, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg text-xs font-bold text-slate-700 dark:text-gray-300 transition-colors"
                    >
                      <IconRenderer 
                        name={tech.iconName} 
                        className={`text-sm ${tech.color === "text-white" ? "text-slate-900 dark:text-white" : tech.color}`} 
                      />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>

                {/* View Details Button */}
                <Link 
                  to={`/project/${project.id}`} 
                  className="w-full py-3.5 text-center bg-slate-900 dark:bg-white/5 hover:bg-purple-600 dark:hover:bg-purple-600 border border-slate-200 dark:border-white/10 hover:border-purple-500 text-white font-bold rounded-xl transition-all duration-300 shadow-md"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;