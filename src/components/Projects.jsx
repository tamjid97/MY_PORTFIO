import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import { projectsData } from "../components/projectsData";

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
    // bg-transparent রাখা হয়েছে যাতে মূল ওয়েবসাইটের ব্যাকগ্রাউন্ড (লাইট/ডার্ক) শো করে
    <section className="py-24 px-6 lg:px-24 min-h-screen bg-transparent relative z-10">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center flex flex-col items-center"
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-gray-300 text-sm font-medium tracking-wide uppercase">
            Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Projects</span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              // Light & Dark mode background and borders
              className="flex flex-col bg-white dark:bg-[#11111a] rounded-[24px] overflow-hidden border border-slate-200 dark:border-white/10 shadow-lg hover:shadow-2xl dark:hover:shadow-[0_10px_40px_-10px_rgba(168,85,247,0.15)] hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-500 group"
            >
              
              {/* Project Image - Fully Clear Now */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-100 dark:bg-[#1a1a24]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  // ইমেজের ওপর থেকে সব ডার্ক গ্রেডিয়েন্ট রিমুভ করা হয়েছে, এখন ছবি একদম ঝকঝকে দেখাবে
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" 
                />
                {/* হালকা একটা বর্ডার দেওয়া হয়েছে ইমেজ আর কন্টেন্টের মাঝে সুন্দর সেপারেশনের জন্য */}
                <div className="absolute bottom-0 w-full h-[1px] bg-slate-100 dark:bg-white/5"></div>
              </div>

              {/* Card Content Area */}
              <div className="p-8 flex flex-col flex-grow relative z-10 bg-white dark:bg-[#11111a]">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-8 line-clamp-3">
                  {project.shortDesc}
                </p>

                {/* Tech Stack Tags - Adapts to Light/Dark */}
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.techStack?.map((tech, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-lg text-xs font-medium text-slate-700 dark:text-gray-300 group-hover:border-slate-300 dark:group-hover:border-white/10 transition-colors"
                    >
                      <IconRenderer 
                        name={tech.iconName} 
                        // আইকনের কালার ফিক্স করা হয়েছে যেন লাইট/ডার্ক মোডে ঠিকমতো শো করে
                        className={`text-[14px] ${tech.color === "text-white" ? "text-slate-700 dark:text-gray-200" : tech.color}`} 
                      />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>

                {/* "View Details" Button */}
                <Link 
                  to={`/project/${project.id}`} 
                  // বাটনটি লাইট/ডার্ক দুই থিমেই প্রিমিয়াম ডার্ক/গ্রেডিয়েন্ট লুক দেবে
                  className="w-full flex justify-center items-center gap-2 py-3.5 bg-slate-900 dark:bg-[#1a1a24] hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 border border-slate-900 dark:border-white/10 hover:border-transparent text-white font-semibold rounded-xl transition-all duration-300 shadow-md group/btn"
                >
                  <span>View Details</span>
                  <svg 
                    className="w-4 h-4 transform group-hover/btn:translate-x-1.5 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
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