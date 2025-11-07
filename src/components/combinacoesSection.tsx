import "./combinacoesSection.css";


export type CardData = {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    image?: string; 
};


const data: CardData[] = [
    {
        id: 1,
        title: "Combinação 1:",
        subtitle: "Otimização inteligente (Módulos 1 + 2 + 5)",
        description:
        "Quem precisa de um mix de organização para sapatos, roupas de cabide e gavetas para itens menores. Ideal para um casal ou para quem divide o espaço.",
        image: "/src/assets/comb-closet-1.png",
    },
    {
        id: 2,
        title: "Combinação 2:",
        subtitle: "Praticidade e organização (Módulos 3 + 4 + 6)",
        description:
        "Quem tem muitas roupas dobráveis e precisa de um espaço para sapatos, além de nichos e cabideiros para organizar casacos e acessórios.",
        image: "/src/assets/comb-closet-2.png",
    },
    {
        id: 3,
        title: "Combinação 3:",
        subtitle: "O essencial (Módulos 1+2+10)",
        description:
        "Quem precisa de soluções rápidas e eficientes para organizar sapatos, casacos e itens que precisam ser pendurados.",
        image: "/src/assets/comb-closet-3.png",
    },
];


export default function CombinacoesSection() {
    return (
    <section className="combinacoes">
        <div className="combinacoes__grid">
            {data.map((card) => (
            <article key={card.id} className="card">
                <div className="card__visual"
                        style={
                        card.image
                        ? { backgroundImage: `url(${card.image})` }
                        : undefined}
                        aria-hidden="true"
                />
                <div className="card__body">
                    <h3 className="card__title"><strong>{card.title}</strong></h3>
                    <h4 className="card__subtitle">{card.subtitle}</h4>
                    <p className="card__text">{card.description}</p>
                </div>
            </article>
            ))}
        </div>
    </section>
    );
}