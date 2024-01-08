export default function SecaoProdutos() {
    return (
        <section>
            <div>
                <h2>NOSSOS PRODUTOS</h2>
                <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
                <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado</p>

                <div className="cards">
                    <div>
                        <h3>Óculos de grau</h3>
                        <img src="/assets/imagens/oculos01.png" alt="Óculos de grau"></img>
                        <p>R$ 300,00</p>
                    </div>

                    <div>
                        <h3>Óculos de transition</h3>
                        <img src="/assets/imagens/oculos02.png" alt="Óculos de transition"></img>
                        <p>R$ 500,00</p>
                    </div>

                    <div>
                        <h3>Óculos de Sol</h3>
                        <img src="/assets/imagens/oculos03.png" alt="Óculos de Sol"></img>
                        <p>R$ 200,00</p>
                    </div>

                    <div>
                        <h3>Óculos infantil</h3>
                        <img src="/assets/imagens/oculos04.png" alt="Óculos infantil"></img>
                        <p>R$ 250,00</p>
                    </div>
                </div>

                <p>Todos os nossos produtos incluem:</p>
                <ul>
                    <li>Garantia de 1 ano</li>
                    <li>Manutenção preventiva</li>
                    <li>Descontos especiais na compra da segunda unidade</li>
                    <li>Flexibilidade no pagamento</li>
                </ul>
            </div>
        </section>
    );
}
