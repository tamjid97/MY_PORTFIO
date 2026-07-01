import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-24 w-full">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Side: Professional Bio */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-300 leading-relaxed text-lg lg:text-xl"
          >
            <p>
              I am <span className="text-white font-semibold">S M Tamjid Hossain</span>, a passionate Web Developer and Programmer whose tech journey began out of pure curiosity and quickly evolved into a drive to build high-performance software.
            </p>
            <p>
              Currently, I specialize in crafting premium, fully responsive web applications using the <span className="text-purple-400 font-medium">React ecosystem, Next.js, TypeScript, and Tailwind CSS</span>, while also architecting scalable backend systems with <span className="text-purple-400 font-medium">Prisma ORM and PostgreSQL</span>.
            </p>
          </motion.div>

          {/* Right Side: Lifestyle & Goal Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative p-[1px] rounded-3xl bg-gradient-to-b from-white/10 to-transparent hover:from-purple-500/30 transition-all duration-500"
          >
            <div className="h-full w-full bg-[#0b0f19]/80 backdrop-blur-xl p-8 rounded-[1.4rem] border border-white/5">
              <h3 className="text-2xl font-semibold text-white mb-6">Beyond The Code</h3>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  Beyond engineering, I maintain a dynamic lifestyle—whether I'm heavy lifting at the gym, hanging out with my cats, or capturing a sunset through photography, I believe a disciplined body breeds a sharp mind.
                </p>
                <div className="p-5 bg-purple-500/5 border border-purple-500/10 rounded-2xl">
                  <p className="text-purple-200 leading-relaxed italic">
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