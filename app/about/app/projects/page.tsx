'use client';

import React from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  status: 'completed' | 'in-progress' | 'planned';
}

const ProjectsPage: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'ASG Studios Official Website',
      description: 'Premium portfolio website showcasing digital projects with secure image uploads, rotating watermark animations, and responsive design.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      link: 'https://asgstudios.online',
      status: 'completed',
    },
    {
      id: 2,
      title: 'Full-Stack E-Commerce Platform',
      description: 'Complete e-commerce solution with user authentication, product catalog, shopping cart, and payment integration.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      status: 'in-progress',
    },
    {
      id: 3,
      title: 'Real-time Collaboration Tool',
      description: 'WebSocket-based collaborative editing platform for teams to work together in real-time with conflict resolution.',
      tech: ['Next.js', 'WebSockets', 'PostgreSQL', 'Redis'],
      status: 'in-progress',
    },
    {
      id: 4,
      title: 'AI-Powered Content Generator',
      description: 'Intelligent content generation tool powered by machine learning models for blog posts and marketing copy.',
      tech: ['Python', 'TensorFlow', 'React', 'FastAPI'],
      status: 'planned',
    },
    {
      id: 5,
      title: 'Cloud File Storage System',
      description: 'Secure cloud storage platform with end-to-end encryption, version control, and advanced sharing features.',
      tech: ['Node.js', 'AWS S3', 'React', 'Crypto.js'],
      status: 'planned',
    },
    {
      id: 6,
      title: 'Data Analytics Dashboard',
      description: 'Real-time analytics dashboard for visualizing complex datasets with interactive charts and reports.',
      tech: ['React', 'D3.js', 'Python', 'PostgreSQL'],
      status: 'completed',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/20 border-green-500/50 text-green-300';
      case 'in-progress':
        return 'bg-blue-500/20 border-blue-500/50 text-blue-300';
      case 'planned':
        return 'bg-purple-500/20 border-purple-500/50 text-purple-300';
      default:
        return 'bg-gray-500/20 border-gray-500/50 text-gray-300';
    }
  };

  const getStatusLabel = (status: string) => {
    return status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Featured Projects
          </h1>
          <p className="text-xl text-gray-300 mb-4">
            Showcasing innovative solutions built with cutting-edge technologies
          </p>
          <p className="text-sm text-gray-400">
            {projects.filter(p => p.status === 'completed').length} Completed • {projects.filter(p => p.status === 'in-progress').length} In Progress • {projects.filter(p => p.status === 'planned').length} Planned
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-6 rounded-lg border border-blue-500/20 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold flex-1 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className={`ml-2 px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(project.status)}`}>
                    {getStatusLabel(project.status)}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-900/50 border border-blue-500/30 rounded text-xs text-blue-300 group-hover:border-purple-500/30 group-hover:bg-purple-900/50 group-hover:text-purple-300 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Link */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-sm font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/50"
                  >
                    View Project →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Technologies I Work With
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Next.js', 'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Git', 'Tailwind CSS', 'GraphQL'].map((tech) => (
              <div key={tech} className="p-4 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-lg border border-blue-500/20 text-center hover:border-purple-500/50 transition-all">
                <p className="text-gray-300 font-semibold">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
