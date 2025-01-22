// src/components/Footer.tsx

import React from "react";

const Footer = () => {
  return (
    <footer style={{ textAlign: "center", padding: "20px", backgroundColor: "#343a40", color: "#fff" }}>
      <p>&copy; {new Date().getFullYear()} Tech Masters. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
