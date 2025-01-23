import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="text-lg text-gray-700">
          At Tech Masters, we specialize in providing cutting-edge technology solutions to empower businesses worldwide.
          Our mission is to deliver excellence through innovation and commitment.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;