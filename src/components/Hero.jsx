import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import profileImg from "../assets/signal-2026-05-10-001510_002_1_optimized_250.png";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 py-12 md:py-16 overflow-hidden">
      <div className="relative max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-6 z-10">
        
        {/* Left Side: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 space-y-5 text-center md:text-left w-full mt-6 md:mt-0"
        >
          <div className="space-y-2 md:space-y-3">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white leading-tight tracking-tight"
            >
              Hi, I'm <br className="hidden sm:block md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-500">
                SM Tamjid Hossain
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-500">
                Epick
              </span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-pink-500 dark:text-[#f472b6] text-xl sm:text-2xl md:text-3xl font-mono font-bold pt-2 h-8"
            >
              <Typewriter
                words={["MERN Stack Developer_", "Frontend Enthusiast_", "Problem Solver_"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </motion.div>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-slate-600 dark:text-gray-400 text-base sm:text-lg max-w-md mx-auto md:mx-0 leading-relaxed"
          >
            Crafting high-performance web applications. Let's build something amazing together!
          </motion.p>

          {/* Social Icons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex items-center justify-center md:justify-start gap-5 text-slate-600 dark:text-gray-400"
          >
            <a href="https://github.com/tamjid97" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 hover:scale-110 transition-all duration-300">
              <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-current" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/epick-hero-codes" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 hover:scale-110 transition-all duration-300">
              <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 hover:scale-110 transition-all duration-300">
              <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/></svg>
            </a>
          </motion.div>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="pt-6 flex flex-wrap items-center justify-center md:justify-start gap-4"
          >
            <a
              href="mailto:epickhossain970@gmail.com"
              className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-sm hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              <svg className="w-5 h-5 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              <span>Message Me</span>
            </a>
            <a
              href="../assets/imgs/S_M_Tamjid_Hossain_Resume.pdf"
              download="SM_Tamjid_Hossain_Resume.pdf"
              className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white dark:bg-transparent border-2 border-purple-200 dark:border-purple-500/40 text-purple-700 dark:text-gray-200 font-bold text-sm hover:bg-purple-50 dark:hover:text-white dark:hover:bg-purple-900/20 transition-all duration-300 transform hover:-translate-y-1 shadow-sm"
            >
              <svg className="w-5 h-5 fill-current text-purple-500 dark:text-purple-400 transition-transform group-hover:-translate-y-0.5" viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
              <span>Download Resume</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: Profile Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex justify-center md:justify-end w-full"
        >
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-[350px] md:h-[350px] rounded-full p-2 bg-gradient-to-tr from-purple-500 via-pink-500 to-purple-500 shadow-2xl shadow-purple-500/20 dark:shadow-purple-500/40"
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-[#0b0f19] border-[6px] border-white dark:border-[#0b0f19]">
              <img
                src={profileImg}
                alt="SM Tamjid Hossain Epick"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}