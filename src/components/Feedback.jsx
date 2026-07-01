import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa"; // FaStar ইমপোর্ট করেছি

import clientImg from "../assets/imgs/spsir.jpg";

const Testimonial = () => {
  return (
    <section className="py-20 px-6 w-full max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
        Client <span className="text-purple-500">Feedback</span>
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden group"
      >
        {/* ব্যাকগ্রাউন্ড গ্লো ইফেক্ট */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>

        <FaQuoteLeft className="text-purple-500/50 text-5xl mb-6" />

        {/* 5-Star Rating */}
        <div className="flex gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-yellow-400 text-xl" />
          ))}
        </div>

        <p className="text-gray-200 text-lg md:text-xl italic leading-relaxed mb-8">
          "Tamjid built a fully functional and highly professional website for
          our coaching center, Amader Pathshala. His attention to detail, modern
          styling choices, and clean UI have made a huge impact on our digital
          presence. Even as a young developer, his dedication and technical
          expertise are truly commendable. Highly recommended!"
        </p>

        {/* Client Info */}
        <div className="flex items-center gap-4">
          <img
            src={clientImg}
            alt="Sarfaraj"
            className="w-16 h-16 rounded-full border-2 border-purple-500 object-cover shadow-lg"
          />
          <div>
            <h4 className="text-white font-bold text-lg">Sarfaraj Islam</h4>
            <p className="text-purple-300 text-sm">Founder, Amader Pathshala</p>
            <p className="text-gray-400 text-xs mt-1">
              Contact: +8801922555575
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonial;