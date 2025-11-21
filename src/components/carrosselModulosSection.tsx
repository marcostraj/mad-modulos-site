import React, { useState, useEffect } from "react";
import "./carrosselModulos.css";
import { ShoppingCart } from "lucide-react";
import { useCart } from "./cardContext";

interface Modulo {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
  dimensoes: {
    altura: string;
    profundidade: string;
    largura: string;
  };
  extras?: {
    porta: boolean;
    maleiro: boolean;
  };
}

const modulos: Modulo[] = [
  {
    id: 1,
    nome: "MÓDULO 1",
    descricao: "com: 1 maleiro, 1 prateleira, 4 sapateiras",
    preco: 710,
    imagem: "/src/assets/mod1.png",
    dimensoes: { altura: "2.20m", profundidade: "45.0cm", largura: "60.0cm" }
  },
  {
    id: 2,
    nome: "MÓDULO 2",
    descricao: "Com maleiro, cabideiro e 4 gavetas",
    preco: 780,
    imagem: "/src/assets/mod2.png",
    dimensoes: { altura: "2.20m", profundidade: "45.0cm", largura: "60.0cm" }
  },
  {
    id: 3,
    nome: "MÓDULO 3",
    descricao: "Com 3 prateleiras espaçosas",
    preco: 470,
    imagem: "/src/assets/mod3.png",
    dimensoes: { altura: "2.20m", profundidade: "45.0cm", largura: "60.0cm" }
  },
  {
    id: 4,
    nome: "MÓDULO 4",
    descricao: "Com 3 prateleiras, 4 espaços e 2 gavetas",
    preco: 880,
    imagem: "/src/assets/mod4.png",
    dimensoes: { altura: "2.20m", profundidade: "45.0cm", largura: "60.0cm" }
  },
  {
    id: 5,
    nome: "MÓDULO 5",
    descricao: "Com maleiro e 2 cabideiros",
    preco: 430,
    imagem: "/src/assets/mod5.png",
    dimensoes: { altura: "2.20m", profundidade: "45.0cm", largura: "60.0cm" }
  },
  {
    id: 6,
    nome: "MÓDULO 6",
    descricao: "Com 10 nichos e 1 cabideiro",
    preco: 580,
    imagem: "/src/assets/mod6.png",
    dimensoes: { altura: "2.20m", profundidade: "45.0cm", largura: "60.0cm" }
  },
  {
    id: 7,
    nome: "MÓDULO 7",
    descricao: "Com 1 maleiro e 4 nichos",
    preco: 670,
    imagem: "/src/assets/mod7.png",
    dimensoes: { altura: "2.20m", profundidade: "45.0cm", largura: "60.0cm" }
  },
  {
    id: 8,
    nome: "MÓDULO 8",
    descricao: "Com 4 nichos",
    preco: 370,
    imagem: "/src/assets/mod8.png",
    dimensoes: { altura: "2.20m", profundidade: "45.0cm", largura: "40.0cm" }
  },
  {
    id: 9,
    nome: "MÓDULO 9",
    descricao: "Com 1 maleiro, 1 cabideiro, 4 nichos, 4 gavetas",
    preco: 940,
    imagem: "/src/assets/mod9.png",
    dimensoes: { altura: "2.20m", profundidade: "45.0cm", largura: "80.0cm" }
  },
  {
    id: 10,
    nome: "MÓDULO 10",
    descricao: "Com 8 nichos, 1 maleiro, 2 cabideiros",
    preco: 740,
    imagem: "/src/assets/mod10.png",
    dimensoes: { altura: "2.20m", profundidade: "45.0cm", largura: "1.16m" }
  }
];

const CarrosselModulos: React.FC = () => {
  const [pagina, setPagina] = useState(0);
  const [modulosPorPagina, setModulosPorPagina] = useState(4);

  const [quantities, setQuantities] = useState<{ [id: number]: number }>({});

  const [extrasSelecionados, setExtrasSelecionados] = useState<{
    [id: number]: { porta: boolean; maleiro: boolean };
  }>({});

  const alterarQuantidadeLocal = (id: number, novaQtd: number) => {
    if (novaQtd < 1) novaQtd = 1;
    setQuantities((q) => ({ ...q, [id]: novaQtd }));
  };

  useEffect(() => {
    const atualizarModulosPorPagina = () => {
      if (window.innerWidth < 900) setModulosPorPagina(2);
      else if (window.innerWidth < 1200) setModulosPorPagina(3);
      else setModulosPorPagina(4);
    };

    atualizarModulosPorPagina();
    window.addEventListener("resize", atualizarModulosPorPagina);
    return () => window.removeEventListener("resize", atualizarModulosPorPagina);
  }, []);

  const totalPaginas = Math.ceil(modulos.length / modulosPorPagina);

  const irParaPagina = (indice: number) => {
    if (indice >= 0 && indice < totalPaginas) setPagina(indice);
  };

  const { addToCart } = useCart();

  return (
    <section className="carrossel">
      <div className="carrossel-titulo-container">
        <div className="carrossel-titulo-content">
          <h2 className="carrossel-titulo">Conheça nossos módulos</h2>
          <p className="carrossel-desc">
            Todos os nossos módulos têm 2,20m de altura e 45cm de profundidade, com larguras variando de 40cm a 1,16m, perfeitas para se adaptarem a qualquer espaço. Além disso, você tem a opção de adicionar portas em todos os modelos para manter tudo organizado e protegido.
          </p>
        </div>
      </div>

      <div className="carrossel__viewport">
        <div
          className="carrossel__lista"
          style={{ transform: `translateX(-${pagina * 100}%)` }}
        >
          {Array.from({ length: totalPaginas }).map((_, i) => {
            const inicio = i * modulosPorPagina;
            const visiveis = modulos.slice(inicio, inicio + modulosPorPagina);

            return (
              <div className="carrossel__pagina" key={i}>
                {visiveis.map((modulo) => {
                  const quantidade = quantities[modulo.id] || 1;

                  const extras = extrasSelecionados[modulo.id] || {
                    porta: false,
                    maleiro: false
                  };

                  const precoFinal =
                    modulo.preco +
                    (extras.porta ? 220 : 0) +
                    (extras.maleiro ? 220 : 0);

                  return (
                    <div key={modulo.id} className="card">
                      <div className="card__hover-popup">

                        <div className="hover-popup__dimensoes">
                          <div className="hover-popup__dimensao">
                            <span>Altura:</span>
                            <span>{modulo.dimensoes.altura}</span>
                          </div>
                          <div className="hover-popup__dimensao">
                            <span>Profundidade:</span>
                            <span>{modulo.dimensoes.profundidade}</span>
                          </div>
                          <div className="hover-popup__dimensao">
                            <span>Largura:</span>
                            <span>{modulo.dimensoes.largura}</span>
                          </div>
                        </div>

                        <div className="hover-popup__preco">
                          <span>A PARTIR DE</span>
                          <span className="hover-popup__preco-valor">
                            R$ {precoFinal}
                          </span>
                        </div>

                        <div className="hover-popup__acoes">
                          <div className="number-input">
                            <button
                              className="arrow-pop"
                              onClick={() =>
                                alterarQuantidadeLocal(modulo.id, quantidade + 1)
                              }
                            >
                              <img className="arrow-up-pop" src="arrow2-cart.png" alt="" />
                            </button>

                            <input
                              type="number"
                              min={1}
                              value={quantidade}
                              onChange={(e) =>
                                alterarQuantidadeLocal(modulo.id, Number(e.target.value))
                              }
                            />

                            <button
                              className="arrow-pop"
                              onClick={() =>
                                alterarQuantidadeLocal(modulo.id, quantidade - 1)
                              }
                            >
                              <img className="arrow-down-pop" src="arrow-cart.png" alt="" />
                            </button>
                          </div>

                          <button
                            className="hover-popup__btn-carrinho"
                            onClick={() =>
                              addToCart({
                                ...modulo,
                                quantidade,
                                preco: precoFinal,
                                extras
                              } as any)
                            }
                          >
                            <ShoppingCart size={16} />
                            <span>Adicionar</span>
                          </button>
                        </div>

                        <div className="hover-popup__extras">
                          <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <input
                              className="checkbox"
                              type="checkbox"
                              checked={extras.porta}
                              onChange={(e) =>
                                setExtrasSelecionados((prev) => ({
                                  ...prev,
                                  [modulo.id]: {
                                    ...extras,
                                    porta: e.target.checked
                                  }
                                }))
                              }
                              style={{
                                accentColor: "#ACA0A0", 
                                width: "12px",
                                height: "12px",
                              }}
                            />
                            Com porta
                          </label>

                          <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <input
                              className="checkbox"
                              type="checkbox"
                              checked={extras.maleiro}
                              onChange={(e) =>
                                setExtrasSelecionados((prev) => ({
                                  ...prev,
                                  [modulo.id]: {
                                    ...extras,
                                    maleiro: e.target.checked
                                  }
                                }))
                              }
                              style={{
                                accentColor: "#ACA0A0", 
                                width: "12px",
                                height: "12px",
                              }}
                            />
                            Com maleiro
                          </label>
                        </div>
                      </div>

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
                          onClick={() =>
                            addToCart({ ...modulo, quantidade } as any)
                          }
                        >
                          <ShoppingCart size={16} />
                          <span>Adicionar ao carrinho</span>
                        </button>

                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      <div className="carrossel__controles">
        <button className="seta" onClick={() => irParaPagina(pagina - 1)} disabled={pagina === 0}>
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
