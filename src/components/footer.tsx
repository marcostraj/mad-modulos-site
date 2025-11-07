import React from "react";
import "./footer.css";
import { Link } from 'react-scroll';

const links: { name: string; href: string }[] = [
        { name: "Conheça a seleção", href: "carrosselId" },
        { name: "Combinações", href: "combinationsId" },
        { name: "Galeria de imagens", href: "galeriaId" },
];

const whatsappNumber = "5511981217300";

  const message = encodeURIComponent(
    `Olá! Gostaria de fazer um orçamento!`
  );

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="mad-logo.svg" alt="Logo Módulos" />
        </div>
        <div className="footer-columns">
          <div className="footer-column">
            <h3 className="footer-title">
              <span className="icon green"></span>Módulos
            </h3>
            <ul className="footer-title-ul">
              {links.map((link) => (
                                      <li key={link.name}>
                                          <Link 
                                              to={link.href}
                                              smooth={true}
                                              duration={800}
                                              offset={-10}
                                          >
                                              {link.name}
                                          </Link>
                                      </li>
                                  ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">
              <span className="icon blue"></span>Fale conosco
            </h3>
            <ul className="footer-title-ul">
              <li><a href={`https://wa.me/${whatsappNumber}?text=${message}`} target="_blank">Whatsapp comercial</a></li>
              <li><a href={`https://wa.me/${whatsappNumber}?text=${message}`} target="_blank">Encomendas</a></li>
              <li><a href={`https://wa.me/${whatsappNumber}?text=${message}`} target="_blank">Atendimento ao cliente</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Sobre nós</h3>
            <ul className="footer-title-ul">
              <li>Av. Sapopemba 6115 - São Paulo-SP</li>
              <li>(11) 98121-7300</li>
              <li><a href="#" className="terms-link">Termos & Condições</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Desenvolvido por{" "}
          <a href="https://vallen.com.br" target="_blank" rel="noopener noreferrer" className="vallen-link">
            <img src="vallen-logo.png" alt="" />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
