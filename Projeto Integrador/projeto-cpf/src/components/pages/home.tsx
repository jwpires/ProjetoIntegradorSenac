import { useEffect, useState } from "react";
import HeaderMenu from "../header/HeaderMenu";
import { DespesaDash } from "../types/despesaDash";
import { api } from "./api";
import moment from 'moment';



function Home() {

    const carregaDash = async () => {

        try {
            const json = await api.listarDespesasDash();
            const dataArray = Array.isArray(json) ? json : [json];
            setDashDespesa(dataArray);
        } catch {
            alert('Erro!');
        }
    }


    useEffect(() => {
        carregaDash();
    }, []);

    const [dashDespesa, setDashDespesa] = useState<DespesaDash[]>([]);
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
                        {/* <div className="despesaVencendo">
                            <div> */}
                        {
                            dashDespesa.map(

                                dash => <>
                                    <div className="despesaVencendo">
                                        <div>
                                            <p><strong>Despesa:</strong> {dash.descricao}</p>
                                            <p><strong>Vencimento:</strong> {moment(dash.dataVencimento).format('DD-MM-YYYY')}</p>
                                            <p><strong>Valor:</strong> {dash.valor}</p>
                                        </div>
                                    </div>
                                </>

                            )
                        }
                        {/* </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Home;