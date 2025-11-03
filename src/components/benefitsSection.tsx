import React from "react";
import "./benefitsSection.css";

type Benefit = {
  title: string;
  text: string;
  icon?: string;
};

const benefits: Benefit[] = [
  {
    title: "PERSONALIZAÇÃO TOTAL",
    text: "Você monta o seu closet de jeito que quiser, escolhendo entre gavetas, maleiros, espécies e mais, para um projeto que realmente reflete suas necessidades.",
    icon: "/src/assets/icon1.png",
  },
  {
    title: "QUALIDADE QUE VOCÊ PODE CONFIAR",
    text: "Usamos 100% MDF de alta qualidade, um material que oferece resistência e durabilidade. O resultado são móveis com acabamento impecável, feitos para durar.",
    icon: "/src/assets/icon2.png",
  },
  {
    title: "PROJETO 3D GRATUITO",
    text: "Visualize seu closet em 3D. Nossa consultoria especializada garante que o projeto seja perfeito para você, e o melhor é totalmente gratuito.",
    icon: "/src/assets/icon4.png",
  },
  {
    title: "PAGAMENTO SEM COMPLICAÇÕES",
    text: "Entendemos que a organização do seu lar é uma prioridade, por isso, oferecemos a opção de parcelar em até 10x sem juros, tornando seu projeto mais acessível.",
    icon: "/src/assets/icon5.png",
  },
];

const BenefitsSection: React.FC = () => {
  return (
    <section className="benefits-section">
      <div className="benefits-container">
        <h2 className="benefits-title">Benefícios</h2>
        
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div className="benefit-card" key={index}>
              <div className="benefit-content">
                {benefit.icon && (
                  <img 
                    src={benefit.icon} 
                    alt="" 
                    className="benefit-icon"
                  />
                )}
                <div className="benefit-text">
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="benefits-cta">
          <a
            href="https://wa.me/SEUNUMERO"
            className="whatsapp-btn-benefits"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Faça um orçamento pelo WhatsApp"
          >
            <img src="/src/assets/whats-icon.png" alt="WhatsApp" />
            Faça um orçamento
          </a>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;