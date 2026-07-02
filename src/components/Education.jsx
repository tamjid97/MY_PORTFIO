import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity } from 'react-icons/fa';

const educationData = [
  { degree: "Complete Web Development", institution: "Programming Hero", year: "2025 - Present", description: "Learned full-stack web development including React, Node.js, and more." },
  { degree: "Higher Secondary Certificate (HSC)", institution: "Bangladesh Navy School and College, Khulna", year: "2025 - Present", description: "Currently studying first year Science subjects. Continuously learning and improving skills." },
];

export default function Education() {
  return (
    <section className="py-20 px-6 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Education</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative pl-8 border-l-4 border-purple-300 dark:border-purple-500/30 group"
            >
              {/* Dot icon */}
              <div className="absolute -left-[14px] top-0 p-1.5 bg-white dark:bg-[#0b0f19] text-purple-600 dark:text-purple-500 border-2 border-purple-400 dark:border-purple-500 rounded-full group-hover:scale-125 group-hover:bg-purple-100 transition-all duration-300">
                <FaGraduationCap size={18} />
              </div>

              <motion.div 
                whileHover={{ x: 10 }}
                className="bg-white/80 dark:bg-white/5 p-8 rounded-3xl backdrop-blur-xl border border-slate-200 dark:border-white/5 hover:border-purple-300 dark:hover:border-purple-500/30 transition-all duration-300 shadow-xl shadow-purple-900/5 dark:shadow-none"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 gap-2">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{edu.degree}</h3>
                  <span className="text-purple-700 dark:text-purple-400 font-bold text-sm bg-purple-100 dark:bg-purple-500/10 px-4 py-1.5 rounded-full w-fit whitespace-nowrap shadow-sm">
                    {edu.year}
                  </span>
                </div>
                <div className="flex items-center text-slate-600 dark:text-gray-400 mb-5 gap-3 font-medium">
                  <FaUniversity size={16} className="text-purple-500" />
                  <p>{edu.institution}</p>
                </div>
                <p className="text-slate-700 dark:text-gray-300 text-base leading-relaxed">
                  {edu.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}