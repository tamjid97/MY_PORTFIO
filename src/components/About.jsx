import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-24 w-full">
      <div className="max-w-6xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Me</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6 text-slate-700 dark:text-gray-300 leading-relaxed text-lg lg:text-xl"
          >
            <p>
              I am <span className="text-slate-900 dark:text-white font-bold">S M Tamjid Hossain</span>, a passionate Web Developer and Programmer whose tech journey began out of pure curiosity and quickly evolved into a drive to build high-performance software.
            </p>
            <p>
              Currently, I specialize in crafting premium, fully responsive web applications using the <span className="text-purple-600 dark:text-purple-400 font-bold">React ecosystem, Next.js, TypeScript, and Tailwind CSS</span>, while also architecting scalable backend systems with <span className="text-purple-600 dark:text-purple-400 font-bold">Prisma ORM and PostgreSQL</span>.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="group relative p-1 rounded-3xl bg-gradient-to-b from-purple-200 to-transparent dark:from-white/10 dark:hover:from-purple-500/30 transition-all duration-500 shadow-xl"
          >
            <div className="h-full w-full bg-white/80 dark:bg-[#0b0f19]/90 backdrop-blur-xl p-8 lg:p-10 rounded-[1.4rem] border border-white/50 dark:border-white/5">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Beyond The Code</h3>
              <div className="space-y-6 text-slate-700 dark:text-gray-300 leading-relaxed">
                <p>
                  Beyond engineering, I maintain a dynamic lifestyle—whether I'm heavy lifting at the gym, hanging out with my cats, or capturing a sunset through photography, I believe a disciplined body breeds a sharp mind.
                </p>
                <div className="p-6 bg-purple-50 dark:bg-purple-500/5 border border-purple-100 dark:border-purple-500/10 rounded-2xl shadow-inner">
                  <p className="text-purple-900 dark:text-purple-200 leading-relaxed italic font-medium">
                    "Moving forward, my ultimate goal is to evolve into a next-level Full-Stack Software Engineer, dedicating myself to mastering bleeding-edge tech and building robust, secure, AI-driven applications that solve complex, real-world problems at scale."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}