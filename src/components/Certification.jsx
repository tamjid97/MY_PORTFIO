import React from 'react';
import { motion } from 'framer-motion';
import cert1 from "../assets/WhatsApp Image 2026-03-02 at 1.32.30 AM.jpeg"; // Image path updated

const certificates = [
  { id: 1, title: "Complete Web Development", issuer: "Programming Hero", year: "2025", image: cert1 },
];

export default function Certificates() {
  return (
    <section className="py-20 px-6 lg:px-24 w-full bg-transparent">
      <div className="max-w-6xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
            Qualification & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Certification</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 justify-items-center">
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative max-w-4xl w-full p-1 rounded-3xl bg-gradient-to-r from-purple-300 to-pink-300 dark:from-purple-500/30 dark:to-pink-500/30 shadow-[0_0_20px_rgba(168,85,247,0.15)] hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] transition-all duration-500"
            >
              <div className="bg-white/90 dark:bg-[#0b0f19] backdrop-blur-xl p-8 md:p-10 rounded-[1.4rem]">
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-8 gap-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                      {cert.title}
                    </h3>
                    <div className="inline-block px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 text-purple-700 dark:text-purple-300 text-sm font-bold shadow-sm">
                      {cert.issuer} • {cert.year}
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-white/5 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                  <motion.img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full object-cover rounded-2xl transform transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}