import HeaderMenu from "../header/HeaderMenu";
import LancamentoDespesa from "./lancamentoDespesa";

function Clicou() {
    alert("clicou no botão!");
}

function Home() {
    return (
        <div>
            <HeaderMenu exibe={true} />
            <div className="container_main_padrao-tela">
                <div className="container_padrao-tela">


                    <div className="nomeUsuario">
                        <label id="nomeUsuario">Usuário: </label>
                    </div>

                    {/* Deverá constar um map para apresentar os valores de saldo dentro de cada div */}
                    <div className="Saldo">
                        <p>{"banco.nome"} : {"banco.saldo"} </p>
                        <p>saldo Banco Itau: 7.012,92 </p>

                    </div>
                    <p>Total de despesa no mês : {"despesa.totalMesAtual"}</p>
                    <p><strong>Próximos vencimentos:</strong></p>
                    <p><strong>Despesas em aberto :</strong> {"depesa.emAberto"}</p>
                    <div className="gastos">
                        <div className="despesaVencendo">
                            <div>
                                <p><strong>Despesa:</strong> {"despesa.nome"}</p>
                                <p><strong>Vencimento:</strong> {"depesa.dataVencimento"}</p>
                                <p><strong>Valor:</strong> {"despesa.valor"}</p> 
                            </div>
                        </div>
                        <div className="despesaVencendo">
                            <div>
                                <p><strong>Despesa:</strong> {"despesa.nome"}</p>
                                <p><strong>Vencimento:</strong> {"depesa.dataVencimento"}</p>
                                <p><strong>Valor:</strong> {"despesa.valor"}</p> 
                            </div>
                        </div>
                    </div>
                    <div className="Evolucao">
                        <p>Gráfico Dispesas X Receitas</p>
                    </div>

                </div>
            </div>
        </div>
    );

}

export default Home;