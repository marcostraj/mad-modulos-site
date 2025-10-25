import React from "react";
import "./footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo principal */}
        <div className="footer-logo">
          <img src="/src/assets/mad-logo.svg" alt="Logo Módulos" />
        </div>

        {/* Colunas de conteúdo */}
        <div className="footer-columns">
          <div className="footer-column">
            <h3 className="footer-title">
              <span className="icon green"></span>Módulos
            </h3>
            <ul>
              <li><a href="#">Conheça a seleção</a></li>
              <li><a href="#">Combinações</a></li>
              <li><a href="#">Galeria de imagens</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">
              <span className="icon blue"></span>Fale conosco
            </h3>
            <ul>
              <li><a href="#">Whatsapp comercial</a></li>
              <li><a href="#">Encomendas</a></li>
              <li><a href="#">Atendimento ao cliente</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Sobre nós</h3>
            <ul>
              <li>Av. Sapopemba 6115 - São Paulo-SP</li>
              <li>(11) 98121-7300</li>
              <li><a href="#" className="terms-link">Termos & Condições</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Linha e créditos */}
      <div className="footer-bottom">
        <p>
          Desenvolvido por{" "}
          <a href="https://vallen.com.br" target="_blank" rel="noopener noreferrer" className="vallen-link">
            <img src="/src/assets/vallen-logo.png" alt="" />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
