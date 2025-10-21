import React from "react";
import "./hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1 className="hero-title">Seu closet dos sonhos</h1>
        <p className="hero-subtitle">do jeito que você sempre quis!</p>
      </div>
    </section>
  );
};

export default Hero;