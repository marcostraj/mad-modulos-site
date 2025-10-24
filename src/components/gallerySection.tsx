import React from "react";
import "./gallerySection.css";

const GallerySection: React.FC = () => {
  return (
    <section className="galeria">
      <h2 className="galeria__titulo">Galeria</h2>

      <div className="galeria__grid">
        <img src="frame-1.png" alt="Guarda-roupa planejado 1" />
        <img src="frame-2.png" alt="Guarda-roupa planejado 2" />
        <img src="frame-3.png" alt="Guarda-roupa planejado 3" />
        <img src="frame-4.png" alt="Guarda-roupa planejado 4" />
        <img src="frame-5.png" alt="Guarda-roupa planejado 5" />
        <img src="frame-6.png" alt="Guarda-roupa planejado 6" />
      </div>
    </section>
  );
};

export default GallerySection;
