import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCheckCircle, FaLightbulb, FaRocket, FaTasks, FaGraduationCap, FaBook } from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import { projectsData } from '../components/projectsData'; 

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  if (!project) return (
    <div className="min-h-[60vh] flex items-center justify-center text-slate-900 dark:text-white text-2xl font-bold">
      Project not found!
    </div>
  );

  return (
    <section className="min-h-screen py-24 px-6 md:px-24 bg-transparent text-slate-800 dark:text-gray-300">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-purple-600 dark:text-purple-400 font-bold hover:bg-purple-50 dark:hover:bg-white/10 transition-all shadow-sm backdrop-blur-md"
        >
          <FaArrowLeft /> Back to Projects
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="bg-white/90 dark:bg-white/5 p-6 md:p-10 rounded-[2rem] border border-slate-200 dark:border-white/10 shadow-2xl backdrop-blur-xl"
        >
          
          {/* Header Image */}
          <div className="relative overflow-hidden rounded-2xl mb-8 border border-slate-200 dark:border-white/5 shadow-lg group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-64 md:h-96 object-cover transform transition-transform duration-700 group-hover:scale-105" 
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
            {project.title}
          </h1>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-3 mb-10">
            {project.techStack?.map((tech, i) => {
              const Icon = SiIcons[tech.iconName];
              return (
                <div key={i} className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full text-sm font-bold text-slate-700 dark:text-gray-200 shadow-sm">
                  {Icon && <Icon className={tech.color === "text-white" ? "text-slate-900 dark:text-white" : tech.color} />} 
                  {tech.name}
                </div>
              );
            })}
          </div>

          {/* Key Features */}
          <div className="mb-10 bg-blue-50 dark:bg-blue-900/10 p-6 md:p-8 rounded-2xl border border-blue-100 dark:border-blue-500/20">
            <h3 className="text-blue-700 dark:text-blue-400 font-black text-xl mb-5 flex items-center gap-2">
              <FaTasks /> KEY FEATURES
            </h3>
            <ul className="space-y-3">
              {project.features?.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-gray-300 font-medium leading-relaxed">
                  <FaCheckCircle className="text-blue-500 text-lg mt-1 shrink-0"/> 
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            <Section icon={<FaBook className="text-purple-500"/>} title="Overview" content={project.longDesc} />
            <Section icon={<FaLightbulb className="text-amber-500"/>} title="The Problem" content={project.problem} />
            <Section icon={<FaCheckCircle className="text-emerald-500"/>} title="The Solution" content={project.solution} />
            <Section icon={<FaRocket className="text-rose-500"/>} title="Challenges" content={project.challengesText} />
            <Section icon={<FaGraduationCap className="text-cyan-500"/>} title="What I Learned" content={project.learned} />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-12 pt-8 border-t border-slate-200 dark:border-white/10">
            <a 
              href={project.liveLink} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-xl font-bold text-white shadow-lg shadow-purple-500/30 transition-all transform hover:-translate-y-1"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-slate-900 dark:bg-white/10 hover:bg-slate-800 dark:hover:bg-white/20 border border-transparent dark:border-white/10 rounded-xl font-bold text-white transition-all transform hover:-translate-y-1 shadow-lg"
            >
              <FaGithub size={20} /> GitHub Code
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

// Helper Component for Sections (Updated for Light/Dark Mode)
const Section = ({ icon, title, content }) => {
  if (!content) return null; // কন্টেন্ট না থাকলে সেকশন দেখাবে না
  return (
    <div className="mb-6">
      <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-3 flex items-center gap-2">
        {icon} {title}
      </h3>
      <p className="text-slate-600 dark:text-gray-400 leading-relaxed font-medium text-lg">
        {content}
      </p>
    </div>
  );
};

export default ProjectDetails;