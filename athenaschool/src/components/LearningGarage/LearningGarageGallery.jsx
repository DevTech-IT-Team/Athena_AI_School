import React, { useState } from 'react';

const LearningGarageGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    "Learning Garage Gallery 1",
    "Learning Garage Gallery 2", 
    "Learning Garage Gallery 3",
    "Learning Garage Gallery 4",
    "Learning Garage Gallery 5",
    "Learning Garage Gallery 6",
    "Learning Garage Gallery 7",
    "Learning Garage Gallery 8"
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Take a peek inside our vibrant Learning Garages where imagination comes to life.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🖼️</div>
                <h3 className="text-xl font-bold text-gray-700">{images[currentSlide]}</h3>
                <p className="text-gray-500">Image placeholder</p>
              </div>
            </div>
          </div>

          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="flex justify-center mt-4 gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">Previous slideNext slide</p>
        </div>
      </div>
    </section>
  );
};

export default LearningGarageGallery;
