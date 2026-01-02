"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-slate-900 to-black text-white flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Animated Watermark Background */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <div className="text-9xl font-bold opacity-5 whitespace-nowrap">ASG STUDIOS</div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo/Brand Text */}
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent drop-shadow-lg">
            ASG Studios
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.div variants={itemVariants} className="mb-16">
          <p className="text-xl md:text-3xl text-gray-300 font-light tracking-wider">
            Premium Digital Experience
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mt-6"></div>
        </motion.div>

        {/* Main Description */}
        <motion.div variants={itemVariants} className="mb-16">
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Crafted with precision, designed with purpose. We create exceptional digital experiences
            that inspire, engage, and deliver results.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors"
          >
            Get Started
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Features Grid */}
        <motion.div variants={itemVariants} className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Premium Design", desc: "Luxury aesthetic with modern principles" },
            { title: "Secure Platform", desc: "Industry-grade security & protection" },
            { title: "High Performance", desc: "Lightning-fast load times globally" },
          ].map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-6 rounded-lg border border-gray-700 bg-gradient-to-br from-gray-900 to-black hover:border-gray-500 transition-all"
            >
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Footer */}
      <motion.footer
        className="absolute bottom-0 w-full py-8 text-center text-gray-600 text-sm border-t border-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <p>© ASG Studios — All Rights Reserved</p>
        <p className="mt-2">Owned & Created by Shreyash Ghosh</p>
      </motion.footer>
    </div>
  );
}
