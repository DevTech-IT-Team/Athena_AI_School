import React from 'react';

const WallOfLove = () => {
  return (
    <div className="container mx-auto px-4 pt-24 pb-8">
      <nav className="text-sm mb-4">
        <span className="text-gray-600">Home</span> &gt; <span className="text-gray-600">Being Athena AI</span> &gt; <span className="text-gray-600">Wall of Love</span>
      </nav>

      <h1 className="text-4xl font-bold mb-6">Wall of Love</h1>
      
      <div className="prose max-w-none">
        <h2 className="text-2xl font-semibold mb-4">Athena AI Online School Reviews</h2>
        <p className="text-lg mb-6">
          We are loved by parents, students, and the larger community who believe in quality education.
        </p>
        
        <p className="text-lg mb-8">
          Our community's testimonials are the best social proof we can get!
        </p>

        <h3 className="text-xl font-semibold mb-4">Athena AI School Reviews</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Gallery Image</span>
          </div>
          <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Gallery Image</span>
          </div>
          <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Gallery Image</span>
          </div>
          <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Gallery Image</span>
          </div>
        </div>

        <div className="text-center mb-8">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Load More Collage
          </button>
        </div>

        <h3 className="text-xl font-semibold mb-4">Athena AI School Reviews</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">LinkedIn Gallery</span>
          </div>
          <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">LinkedIn Gallery</span>
          </div>
          <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">LinkedIn Gallery</span>
          </div>
          <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">LinkedIn Gallery</span>
          </div>
        </div>

        <div className="text-center">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Load More LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default WallOfLove;
