// src/components/HeroSection.tsx

import React from "react";

const HeroSection = () => {
  return (
    <section className="hero-section" style={{ textAlign: "center", padding: "50px 20px", backgroundColor: "#f0f4f8" }}>
      <h1>Welcome to Tech Masters</h1>
      <p>Your trusted partner in technology and innovation.</p>
      <img 
        src="/path-to-your-hero-image.jpg" 
        alt="Hero" 
        style={{ width: "100%", maxWidth: "800px", marginTop: "20px" }} 
      />
    </section>
  );
};

export default HeroSection;
