
import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Header from "../components/Header";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default LandingPage;
