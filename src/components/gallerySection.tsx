import React, { useState } from "react";
import "./gallerySection.css";

const GallerySection: React.FC = () => {
  const [imagemAtual, setImagemAtual] = useState(0);
  const imagens = [
    "frame1.jpeg",
    "frame2.jpeg", 
    "frame3.jpeg",
    "frame4.jpeg",
    "frame5.jpeg",
    "frame6.jpeg",
    "frame7.jpeg",
    "frame8.jpeg", 
    "frame9.jpeg",
    "frame10.jpeg",
    "frame11.jpeg",
    "frame12.jpeg",
  ];

  const proximaImagem = () => {
    setImagemAtual((prev) => (prev + 1) % imagens.length);
  };

  const imagemAnterior = () => {
    setImagemAtual((prev) => (prev - 1 + imagens.length) % imagens.length);
  };

  const irParaImagem = (index: number) => {
    setImagemAtual(index);
  };

  return (
    <section className="galeria">
      <h2 className="galeria__titulo">Galeria</h2>

      <div className="galeria__grid">
        {imagens.map((src, index) => (
          <img 
            key={index}
            src={src} 
            alt={`Guarda-roupa planejado ${index + 1}`}
            className={index === imagemAtual ? "ativa" : ""}
          />
        ))}
      </div>

      <div className="galeria__controles">
        <button 
          className="galeria__btn"
          onClick={imagemAnterior}
          disabled={imagemAtual === 0}
        >
          ‹
        </button>
        
        <div className="galeria__indicadores">
          {imagens.map((_, index) => (
            <button
              key={index}
              className={`galeria__indicador ${index === imagemAtual ? "ativo" : ""}`}
              onClick={() => irParaImagem(index)}
            />
          ))}
        </div>

        <button 
          className="galeria__btn"
          onClick={proximaImagem}
          disabled={imagemAtual === imagens.length - 1}
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default GallerySection;