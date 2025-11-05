import { Link } from 'react-scroll';
import { ShoppingCart, Menu, X } from "lucide-react";
import React, { useState } from "react";
import "./navbar.css";

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const links: { name: string; href: string }[] = [
        { name: "Início", href: "home" },
        { name: "Nossos módulos", href: "carrosselId" },
        { name: "Combinações", href: "combinationsId" },
        { name: "Projeto gratuito", href: "projeto3dId" },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <Link to="home" smooth={true} duration={800}>
                        <img src="mad-logo.svg" alt="logotipo" />
                    </Link>
                </div>

                <ul className="navbar-links">
                    {links.map((link) => (
                        <li key={link.name}>
                            <Link 
                                to={link.href}
                                smooth={true}
                                duration={800}
                                offset={-10}
                                onClick={closeMenu}
                                className="nav-link"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <button 
                    className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <button className="navbar-cart">
                    <ShoppingCart size={18} />
                    <span>Carrinho</span>
                </button>
            </div>

            {/* Menu Mobile */}
            <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
                <ul className="mobile-menu-links">
                    {links.map((link) => (
                        <li key={link.name}>
                            <Link 
                                to={link.href}
                                smooth={true}
                                duration={500}
                                offset={-80}
                                onClick={closeMenu}
                                className="mobile-nav-link"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div 
                className={`overlay ${isMenuOpen ? 'active' : ''}`}
                onClick={closeMenu}
            />
        </header>
    );
};

export default Navbar;