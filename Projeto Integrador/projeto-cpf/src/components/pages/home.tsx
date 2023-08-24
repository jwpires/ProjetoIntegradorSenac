import { useEffect, useState } from "react";
import HeaderMenu from "../header/HeaderMenu";
import { DespesaDash } from "../types/despesaDash";
import { api } from "./api";
import moment from 'moment';
import { AgenciaDash } from "../types/agenciaDash";



function Home() {
    const [dashDespesa, setDashDespesa] = useState<DespesaDash[]>([]);
    const [dashSaldoBanco, setSaldoBanco] = useState<AgenciaDash[]>([])


    const carregaDespesasDash = async () => {

        try {
            const json = await api.listarDespesasDash();
            const dataArray = Array.isArray(json) ? json : [json];
            setDashDespesa(dataArray);

        } catch {
            alert('Erro!');
        }
    }

    const carregaSaldosBancariosDash = async () => {

        try {
            const json = await api.listarSaldosBancarios();
            const dataArray = Array.isArray(json) ? json : [json];
            setSaldoBanco(dataArray);
            console.log(dataArray);

        } catch {
            alert('Erro!');
        }
    }


    useEffect(() => {
        carregaDespesasDash();
        carregaSaldosBancariosDash();
    }, []);


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
                        {
                            dashSaldoBanco.map(
                                dash => <>
                                    <div className="saldo">
                                        <p>
                                            <strong>Nome: </strong> {dash.nomeProprietario} <br />
                                            <strong>Banco: </strong>{dash.banco} <br />
                                            <strong>Saldo: </strong>{dash.saldo}
                                        </p>
                                    </div>
                                </>
                            )
                        }
                    </div>


                    <p><strong>Próximos vencimentos:</strong></p>
                    <div className="gastos">
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
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Home;