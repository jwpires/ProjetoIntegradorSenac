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
                    <div className="saldos">
                        <div className="saldo">
                            <p><strong>{"banco.nome"}</strong> : {"banco.saldo"} </p>
                        </div>
                        <div className="saldo">
                            <p>saldo Banco Itau: 7.012,92 </p>
                        </div>

                        <div className="saldo">
                            <p>saldo Banco do Brasil: 1.967.784,47 </p>
                        </div>

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
                </div>
            </div>
        </div>
    );

}

export default Home;