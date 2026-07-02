import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const subject = `Message from ${name}`;
    const mailtoLink = `mailto:epickhossain970@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.open(mailtoLink, "_blank");
    setName("");
    setMessage("");
  };

  return (
    <section className="py-20 px-4 sm:px-6 w-full max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
          Contact{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Me
          </span>
        </h2>
        <div className="h-1.5 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl shadow-2xl p-8 md:p-12 grid md:grid-cols-2 gap-12"
      >
        {/* Left Side */}
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
            Let’s{" "}
            <span className="text-purple-600 dark:text-purple-500">
              Connect
            </span>
          </h2>
          <p className="text-slate-600 dark:text-gray-300 leading-relaxed">
            Have a project idea or want to collaborate? Reach me via WhatsApp or
            Email. I'm always open to discussing new opportunities.
          </p>

          <div className="flex flex-col gap-4 mt-2 text-slate-700 dark:text-gray-300 font-medium">
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-4"
            >
              <div className="p-3 bg-purple-100 dark:bg-purple-500/20 rounded-full shadow-sm">
                <MdEmail className="text-purple-600 dark:text-purple-400 text-xl" />
              </div>
              <span>epickhossain970@gmail.com</span>
            </motion.div>
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-4"
            >
              <div className="p-3 bg-purple-100 dark:bg-purple-500/20 rounded-full shadow-sm">
                <MdPhone className="text-purple-600 dark:text-purple-400 text-xl" />
              </div>
              <span>+880 1339-613197</span>
            </motion.div>
          </div>

          <div className="flex gap-4 mt-6">
            {[
              { icon: FaGithub, link: "https://github.com/epick32851" },
              { icon: FaLinkedin, link: "https://www.linkedin.com/" },
              { icon: FaFacebook, link: "https://facebook.com/" },
            ].map((social, i) => (
              <motion.a
                key={i}
                whileHover={{ scale: 1.1, rotate: 5 }}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="p-4 border border-slate-200 dark:border-white/10 rounded-full bg-white dark:bg-transparent text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 transition-all duration-300 shadow-sm"
              >
                <social.icon size={22} />
              </motion.a>
            ))}
          </div>

          <motion.a
            whileHover={{ scale: 1.02 }}
            href="https://wa.me/8801339613197"
            target="_blank"
            rel="noreferrer"
            className="mt-6 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-green-500/30"
          >
            <FaWhatsapp size={22} /> Chat Directly on WhatsApp
          </motion.a>
        </div>

        {/* Right Side */}
        <form onSubmit={handleEmailSubmit} className="flex flex-col gap-5">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            Send a Message
          </h3>

          <input
            type="text"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-5 py-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all shadow-sm"
          />

          <textarea
            placeholder="Write your message..."
            required
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="px-5 py-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all shadow-sm resize-none"
          />

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-purple-500/30 flex items-center justify-center gap-2 mt-2"
          >
            <FaEnvelope size={18} /> Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
