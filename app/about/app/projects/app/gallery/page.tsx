'use client';

import React, { useState } from 'react';

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  category: string;
  color: string;
}

const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Website Design',
      description: 'Modern responsive web design',
      category: 'design',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'UI Components',
      description: 'Reusable component library',
      category: 'design',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      title: 'Mobile App',
      description: 'React Native mobile application',
      category: 'development',
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 4,
      title: 'Dashboard',
      description: 'Data visualization dashboard',
      category: 'development',
      color: 'from-orange-500 to-red-500',
    },
    {
      id: 5,
      title: 'Branding',
      description: 'Brand identity and guidelines',
      category: 'design',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      id: 6,
      title: 'Backend API',
      description: 'RESTful API development',
      category: 'development',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      id: 7,
      title: 'E-Commerce',
      description: 'Full-stack e-commerce platform',
      category: 'development',
      color: 'from-rose-500 to-pink-500',
    },
    {
      id: 8,
      title: 'Animation',
      description: 'Interactive animations and effects',
      category: 'design',
      color: 'from-cyan-500 to-blue-500',
    },
  ];

  const categories = ['all', 'design', 'development'];

  const filteredItems =
    selectedCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Gallery
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Explore my latest works and projects
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 sticky top-0 bg-gradient-to-b from-blue-900 via-purple-900 to-transparent z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-purple-500/50'
                    : 'bg-gray-800/50 border border-gray-700 hover:border-purple-500/50 hover:bg-gray-800'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105"
              >
                {/* Image placeholder with gradient */}
                <div
                  className={`relative w-full aspect-square bg-gradient-to-br ${item.color} p-6 flex flex-col justify-between rounded-lg overflow-hidden`}
                >
                  {/* Animated background effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 backdrop-blur-sm flex items-center justify-center">
                    <p className="text-center text-sm font-semibold">View Project</p>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <p className="text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
                      {item.category}
                    </p>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  </div>

                  <div className="relative z-10">
                    <p className="text-sm text-white/90">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add Photos Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Add Your Photos
          </h2>
          <p className="text-gray-300 mb-8">
            You can upload and manage your portfolio photos directly from the admin panel. Each photo can have custom descriptions and categories.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-purple-500/50">
            Go to Admin Panel
          </button>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
