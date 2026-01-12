'use client';

import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            About ASG Studios
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Premium digital experiences crafted with cutting-edge technology
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - About Me */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-blue-400">Meet Shreyash Ghosh</h2>
            <p className="text-gray-300 leading-relaxed">
              I'm a full-stack web developer and mechanical engineering student passionate about creating beautiful, secure, and performant digital experiences. With expertise in modern web technologies, I specialize in building scalable applications that solve real-world problems.
            </p>
            <p className="text-gray-300 leading-relaxed">
              ASG Studios is my platform for showcasing innovative projects and demonstrating my commitment to excellence in digital craftsmanship. Every project reflects my dedication to security, performance, and user experience.
            </p>
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Core Skills</h3>
              <ul className="space-y-2">
                <li className="text-gray-300">• Full-Stack Web Development (Next.js, React, Node.js)</li>
                <li className="text-gray-300">• TypeScript & Modern JavaScript</li>
                <li className="text-gray-300">• Cloud Deployment & DevOps</li>
                <li className="text-gray-300">• Database Design & Optimization</li>
                <li className="text-gray-300">• UI/UX with Tailwind CSS</li>
                <li className="text-gray-300">• Web Security Best Practices</li>
              </ul>
            </div>
          </div>

          {/* Right Column - Timeline */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-purple-400">Journey</h2>
            <div className="space-y-6">
              <div className="border-l-2 border-blue-500 pl-4">
                <p className="text-sm text-blue-400 font-semibold">2024 - Present</p>
                <h3 className="text-lg font-bold mt-1">B.Tech Mechanical Engineering</h3>
                <p className="text-gray-400 text-sm">First Year Student | Full-Stack Developer</p>
              </div>
              <div className="border-l-2 border-purple-500 pl-4">
                <p className="text-sm text-purple-400 font-semibold">2023</p>
                <h3 className="text-lg font-bold mt-1">Web Development Journey Begins</h3>
                <p className="text-gray-400 text-sm">Started learning modern web technologies and building projects</p>
              </div>
              <div className="border-l-2 border-pink-500 pl-4">
                <p className="text-sm text-pink-400 font-semibold">2024</p>
                <h3 className="text-lg font-bold mt-1">ASG Studios Founded</h3>
                <p className="text-gray-400 text-sm">Platform for showcasing premium digital projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            My Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-6 rounded-lg border border-blue-500/20">
              <h3 className="text-xl font-bold text-blue-400 mb-3">Quality</h3>
              <p className="text-gray-300">Every line of code is written with precision and purpose. I prioritize quality over quantity in all projects.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-lg border border-purple-500/20">
              <h3 className="text-xl font-bold text-purple-400 mb-3">Security</h3>
              <p className="text-gray-300">Building secure applications is non-negotiable. I follow industry best practices and maintain high security standards.</p>
            </div>
            <div className="bg-gradient-to-br from-pink-900/30 to-blue-900/30 p-6 rounded-lg border border-pink-500/20">
              <h3 className="text-xl font-bold text-pink-400 mb-3">Innovation</h3>
              <p className="text-gray-300">I stay updated with latest technologies and always look for better solutions to create amazing experiences.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
