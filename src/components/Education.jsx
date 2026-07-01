import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity } from 'react-icons/fa';

const educationData = [
  {
    degree: "Complete Web Development",
    institution: "Programming Hero",
    year: "2025 - Present",
    description: "Learned full-stack web development including React, Node.js, and more.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Bangladesh Navy School and College, Khulna",
    year: "2025 - Present",
    description: "Currently studying first year Science subjects. Continuously learning and improving skills.",
  },
];

export default function Education() {
  return (
    <section className="py-20 px-6 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white mb-16 text-center"
        >
          My <span className="text-purple-500">Education</span>
        </motion.h2>

        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 border-l-2 border-purple-500/30"
            >
              {/* Dot icon */}
              <div className="absolute -left-[9px] top-0 p-1 bg-[#0b0f19] text-purple-500 border border-purple-500 rounded-full">
                <FaGraduationCap size={16} />
              </div>

              <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-md border border-white/5 hover:border-purple-500/30 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <span className="text-purple-400 font-medium text-sm bg-purple-500/10 px-3 py-1 rounded-full mt-2 sm:mt-0 w-fit">
                    {edu.year}
                  </span>
                </div>
                <div className="flex items-center text-gray-400 mb-4 gap-2">
                  <FaUniversity size={14} />
                  <p>{edu.institution}</p>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}