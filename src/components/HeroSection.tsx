import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 py-20">
      <div className="container mx-auto px-6 text-center">
        {/* Headline and Subheadline */}
        <h1 className="text-5xl font-bold text-white mb-4">
          Welcome to Tech Masters
        </h1>
        <p className="text-xl text-gray-100 mb-8">
          Your trusted partner in technology and innovation.
        </p>

        {/* Call-to-Action Button */}
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
          Get Started
        </button>

        {/* Hero Image */}
        <div className="mt-12">
          <img
            src="/path-to-your-hero-image.jpg"
            alt="Hero"
            className="w-full max-w-2xl mx-auto rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;