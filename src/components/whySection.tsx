import React from "react";
import "./whySection.css";

type Feature = {
  title: string;
  text: string;
  icon?: string;
};

const features: Feature[] = [
  {
    title: "MÓVEIS MODULARES 100% MDF",
    text: "Você não apenas compra peças, mas investe em um projeto que se encaixa perfeitamente na sua rotina e no seu espaço.",
    icon: "/src/assets/icon1.png",
  },
  {
    title: "PERSONALIZAÇÃO TOTAL",
    text: "Combine diferentes módulos com maleiros, gavetas, cabideiros e sapateiras para criar um closet que atenda a todas as suas necessidades.",
    icon: "/src/assets/icon2.png",
  },
  {
    title: "QUALIDADE E DURABILIDADE",
    text: "Usamos materiais 100% MDF de alta qualidade. Todas as peças são feitas com cortes precisos e acabamento impecável, garantindo beleza e resistência.",
    icon: "/src/assets/icon3.png",
  },
];

const WhySection: React.FC = () => {
  return (
    <section className="section-mad-modulos">
      <div className="mad-modulos-content">
        <div className="mad-title-container">
            <h2>
                Por que a <span>Mad Módulos?</span>
            </h2>
            {/* Left: Gallery Grid */}
            <div className="gallery">
            <img className="item item-1" src="/src/assets/closet1.png" alt="Closet design 1" />
            <img className="item item-2" src="/src/assets/closet2.png" alt="Closet design 2" />
            <img className="item item-3" src="/src/assets/closet3.png" alt="Closet design 3" />
            <img className="item item-4" src="/src/assets/closet4.png" alt="Closet design 4" />
            </div>
        </div>

        {/* Right: Content */}
        <div className="mad-modulos-text">

          <div className="mad-modulos-features">
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-card-content">
                  {feature.icon && (
                    <img 
                      src={feature.icon} 
                      alt="" 
                      className="feature-icon"
                    />
                  )}
                  <div className="feature-text">
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                  </div>
                </div>
              </div>
            ))}

            <a
              href="https://wa.me/SEUNUMERO"
              className="whatsapp-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Faça um orçamento pelo WhatsApp"
            >
              <img src="/icons/whatsapp.svg" alt="WhatsApp" />
              Faça um orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;