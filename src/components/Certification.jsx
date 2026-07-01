import React from 'react';
import { motion } from 'framer-motion';
import cert1 from "../assets/WhatsApp Image 2026-03-02 at 1.32.30 AM.jpeg";

const certificates = [
  {
    id: 1,
    title: "Complete Web Development",
    issuer: "Programming Hero",
    year: "2025",
    image: cert1,
  },
  // আরও সার্টিফিকেট থাকলে এখানে শুধু আরেকটি অবজেক্ট যোগ করবেন
];

export default function Certificates() {
  return (
    <section className="py-20 px-6 lg:px-24 w-full bg-transparent">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Qualification & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Certification</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-4"></div>
        </motion.div>

        {/* Grid Layout for Future Scaling */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 justify-items-center">
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }} // কার্ডটি হোভার করলে উপরে উঠে আসবে
              className="group relative max-w-4xl w-full p-[2px] rounded-3xl bg-gradient-to-r from-purple-500/30 to-pink-500/30 shadow-[0_0_20px_rgba(168,85,247,0.15)] hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-500"
            >
              <div className="bg-[#0b0f19] p-6 md:p-10 rounded-[1.4rem]">
                
                {/* Header Info */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-8 gap-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {cert.title}
                    </h3>
                    <div className="inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium">
                      {cert.issuer} • {cert.year}
                    </div>
                  </div>
                </div>

                {/* Image Wrapper */}
                <div className="relative overflow-hidden rounded-2xl border border-white/5 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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