import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const subject = `Message from ${name}`;
    const mailtoLink = `mailto:epickhossain970@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;

    window.open(mailtoLink, "_blank");
    setName("");
    setMessage("");
  };

  return (
    <section className="py-20 px-6 w-full max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8 md:p-12 grid md:grid-cols-2 gap-12"
      >
        {/* Left Side: Contact Details */}
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Let’s <span className="text-purple-500">Connect</span>
          </h2>
          <p className="text-gray-300">
            Have a project idea or want to collaborate? Reach me via WhatsApp or Email. I'm always open to discussing new opportunities.
          </p>

          <div className="flex flex-col gap-4 mt-4 text-gray-300">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-500/20 rounded-full"><MdEmail className="text-purple-400 text-xl" /></div>
              <span>epickhossain970@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-500/20 rounded-full"><MdPhone className="text-purple-400 text-xl" /></div>
              <span>+880 1339-613197</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            {[
              { icon: FaGithub, link: "https://github.com/epick32851" },
              { icon: FaLinkedin, link: "https://www.linkedin.com/" },
              { icon: FaFacebook, link: "https://facebook.com/" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="p-4 border border-white/10 rounded-full text-purple-400 hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/8801339613197"
            target="_blank"
            rel="noreferrer"
            className="mt-4 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-xl transition shadow-lg shadow-green-500/20"
          >
            <FaWhatsapp size={20} /> Chat Directly on WhatsApp
          </a>
        </div>

        {/* Right Side: Email Form */}
        <form onSubmit={handleEmailSubmit} className="flex flex-col gap-5">
          <h3 className="text-2xl font-semibold text-white mb-2">Send a Message</h3>
          
          <input
            type="text"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-500 transition"
          />
          
          <textarea
            placeholder="Write your message..."
            required
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-500 transition"
          />

          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 rounded-xl transition shadow-lg shadow-purple-500/20 flex items-center justify-center gap-2"
          >
            <FaEnvelope /> Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;