import React, { useState } from "react";
import "./carrosselModulos.css";
import { ShoppingCart } from "lucide-react";

interface Modulo {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
}

const modulos: Modulo[] = [
  { id: 1, nome: "MÓDULO 1", descricao: "Com maleiro, prateleira e 4 sapateiras", preco: 710, imagem: "/src/assets/mod-1.png" },
  { id: 2, nome: "MÓDULO 2", descricao: "Com maleiro, cabideiro e 4 gavetas", preco: 780, imagem: "/src/assets/mod-2.png" },
  { id: 3, nome: "MÓDULO 3", descricao: "Com 3 prateleiras espaçosas", preco: 470, imagem: "/src/assets/mod-3.png" },
  { id: 4, nome: "MÓDULO 4", descricao: "Com 3 prateleiras e 2 gavetas", preco: 880, imagem: "/src/assets/mod-4.png" },
  { id: 5, nome: "MÓDULO 5", descricao: "Com maleiro e 2 cabideiros", preco: 920, imagem: "/src/assets/mod-1.png" },
  { id: 6, nome: "MÓDULO 6", descricao: "Com 2 prateleiras e 1 cabideiro", preco: 640, imagem: "/src/assets/mod-2.png" },
];

const CarrosselModulos: React.FC = () => {
  const [pagina, setPagina] = useState(0);
  const modulosPorPagina = 4;
  const totalPaginas = Math.ceil(modulos.length / modulosPorPagina);

  const irParaPagina = (indice: number) => {
    if (indice >= 0 && indice < totalPaginas) setPagina(indice);
  };

  return (
    <section className="carrossel">
      <div className="carrossel-titulo-container">
        <div className="carrossel-titulo-content">
            <h2 className="carrossel-titulo">Conheça nossos módulos</h2>
            <p className="carrossel-desc">Todos os nossos módulos têm 2,20m de altura e 45cm de profundidade, com larguras variando de 40cm a 1,16m, perfeitas para se adaptarem a qualquer espaço. Além disso, você tem a opção de adicionar portas em todos os modelos para manter tudo organizado e protegido.</p>
        </div>
      </div>
      <div className="carrossel__viewport">
        <div
          className="carrossel__lista"
          style={{
            transform: `translateX(-${pagina * 100}%)`,
          }}
        >
          {Array.from({ length: totalPaginas }).map((_, i) => {
            const inicio = i * modulosPorPagina;
            const visiveis = modulos.slice(inicio, inicio + modulosPorPagina);
            return (
              <div className="carrossel__pagina" key={i}>
                {visiveis.map((modulo) => (
                  <div key={modulo.id} className="card">
                    <div className="card__imagem">
                      <img src={modulo.imagem} alt={modulo.nome} />
                    </div>
                    <div className="card__conteudo">
                      <h3 className="card__titulo">{modulo.nome}</h3>
                      <p className="card__descricao">{modulo.descricao}</p>
                      <div className="card__preco">
                        <span className="card-span">A PARTIR DE</span>
                        <button className="preco-btn">R$ {modulo.preco}</button>
                      </div>
                      <button
                        className="btn-carrinho"
                        onClick={() => console.log(`Adicionado: ${modulo.nome}`)}
                      ><ShoppingCart size={16} spacing={5} />
                          <span>Adicionar ao carrinho</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>

      <div className="carrossel__controles">
        <button
          className="seta"
          onClick={() => irParaPagina(pagina - 1)}
          disabled={pagina === 0}
        >
          ‹
        </button>
        <div className="bolinhas-container">
            <div className="bolinhas">
            {Array.from({ length: totalPaginas }).map((_, i) => (
                <button
                key={i}
                className={`bolinha ${i === pagina ? "ativa" : ""}`}
                onClick={() => irParaPagina(i)}
                ></button>
            ))}
            </div>
        </div>
        <button
          className="seta"
          onClick={() => irParaPagina(pagina + 1)}
          disabled={pagina === totalPaginas - 1}
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default CarrosselModulos;
