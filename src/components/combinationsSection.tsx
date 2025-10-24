import React from "react";
import "./combinationsSection.css";

const CombinationsSection: React.FC = () => {
  return (
    <section className="combination-section">
      <div className="combination-title-container">
        <h1 className="combination-title">Combinações</h1>
      </div>
      
      <div className="combination-content-container">
        <div className="combination-imagem-container">
          <img src="comb-closet.png" alt="Closet modular combinado" />
        </div>
        <div className="combination-text-container">
          <p>
            Combine nossos módulos para criar um closet que atenda a todas as suas <strong>necessidades</strong>, seja qual for o <strong>tamanho do seu espaço</strong> ou a quantidade de roupas que você tem.
            <br /><br />
            Veja algumas sugestões de combinações:
          </p>
        </div>
      </div>
    </section>
  );
};

export default CombinationsSection;