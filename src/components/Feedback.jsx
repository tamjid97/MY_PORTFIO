import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import clientImg from "../assets/imgs/spsir.jpg";

const Testimonial = () => {
  return (
    <section className="py-20 px-6 w-full max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
          Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Feedback</span>
        </h2>
        <div className="h-1.5 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.6 }}
        className="bg-white/90 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 p-10 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden group"
      >
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-purple-400/20 dark:bg-purple-500/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-500 group-hover:scale-150"></div>

        <FaQuoteLeft className="text-purple-300 dark:text-purple-500/40 text-6xl mb-6 transform -translate-x-2 -translate-y-2" />

        <div className="flex gap-1.5 mb-6">
          {[...Array(5)].map((_, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.1 }}>
              <FaStar className="text-amber-400 text-2xl drop-shadow-md" />
            </motion.div>
          ))}
        </div>

        <p className="text-slate-700 dark:text-gray-200 text-lg md:text-xl italic leading-relaxed mb-10 font-medium">
          "Tamjid built a fully functional and highly professional website for our coaching center, Amader Pathshala. His attention to detail, modern styling choices, and clean UI have made a huge impact on our digital presence. Even as a young developer, his dedication and technical expertise are truly commendable. Highly recommended!"
        </p>

        {/* Client Info */}
        <div className="flex items-center gap-5">
          <motion.img
            whileHover={{ scale: 1.1, rotate: 5 }}
            src={clientImg}
            alt="Sarfaraj"
            className="w-20 h-20 rounded-full border-[3px] border-purple-500 object-cover shadow-xl"
          />
          <div>
            <h4 className="text-slate-900 dark:text-white font-black text-xl">Sarfaraj Islam</h4>
            <p className="text-purple-600 dark:text-purple-400 font-bold text-sm mt-1">Founder, Amader Pathshala</p>
            <p className="text-slate-500 dark:text-gray-400 text-xs mt-1 font-medium bg-slate-100 dark:bg-white/5 inline-block px-3 py-1 rounded-full">
              +880 1922-555575
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonial;