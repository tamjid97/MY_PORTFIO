import React from "react";
import { Link } from "react-router-dom"; // Link ইমপোর্ট করলাম
import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import { projectsData } from "../components/projectsData"; // তোমার ডাটা ফাইল

const IconRenderer = ({ name, className }) => {
  const IconComponent = FaIcons[name] || SiIcons[name];
  if (!IconComponent) return <div className="w-4 h-4" />;
  return <IconComponent className={className} />;
};

const Projects = () => {
  return (
    <section className="py-20 w-full">
      <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-12 text-center border-b-4 border-purple-500 pb-2 w-fit mx-auto">
        My Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/20 hover:shadow-purple-500/50 transition-shadow duration-300"
            whileHover={{ y: -10 }}
          >
            <div className="overflow-hidden rounded-t-2xl">
              <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
            </div>

            <div className="p-6 flex flex-col gap-4">
              <h3 className="text-purple-300 font-bold text-2xl">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{project.shortDesc}</p>

              {/* View Details Button as Link */}
              <Link 
                to={`/project/${project.id}`} 
                className="w-full py-3 mt-4 text-center bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition duration-300"
              >
                View Details
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;