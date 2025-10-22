import { ShoppingCart } from "lucide-react";
import React from "react";
import "./navbar.css";

const Navbar: React.FC = () => {
    const links: { name: string; href: string }[] = [
        { name: "Início", href: "/" },
        { name: "Nossos módulos", href: "/products" },
        { name: "Combinações", href: "/about" },
        { name: "Projeto gratuito", href: "/contact" },
    ];
  
    return(
        <header className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img src="mad-logo.svg" alt="logotipo" />
                </div>

                <ul className="navbar-links">
                    {links.map((link) => (
                        <li key={link.name}>
                            <a href={link.href}>{link.name}</a>
                        </li>
                    ))}
                </ul>

                <button className="navbar-cart">
                    <ShoppingCart size={18} />
                    <span>Carrinho</span>
                </button>
            </div>
        </header>
    );
};

export default Navbar;