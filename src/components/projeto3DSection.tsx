import React from "react";
import "./projeto3DSection.css";

const whatsappNumber = "5511981217300";

  const message = encodeURIComponent(
    `Olá! Gostaria de fazer um orçamento!`
  );

const Projeto3DSection: React.FC = () => {

  return (
    <section className="projeto3d-section">
      <div className="projeto3d-content">
        <img
          src="iconCloset.png"
          alt="Armário"
          className="projeto3d-image"
        />

        <div className="projeto3d-text">
          <p>
            Quer montar uma combinação só sua? Fale agora com nossa equipe para um{" "}
            <strong>projeto 3D gratuito</strong> e sem compromisso.
          </p>

          <a
              href={`https://wa.me/${whatsappNumber}?text=${message}`}
              className="whatsapp-btn"
              target="_blank"
              rel="noreferrer"
              aria-label="Faça um orçamento pelo WhatsApp"
            >
              <img src="whats-icon.png" alt="WhatsApp" />
              Quero meu projeto 3D gratuito agora!
            </a>
        </div>
      </div>
    </section>
  );
};

export default Projeto3DSection;
