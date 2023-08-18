import HeaderMenu from "../header/HeaderMenu";
import '../../style/style.css';
import { useEffect, useState } from "react";
import { AccordionBody, AccordionHeader, AccordionItem, Button, UncontrolledAccordion } from "reactstrap";
import FiltroRelatorio from "../types/filtroRelatorios";
import { RelatorioDespesa } from "../types/relatorioDespesa";
import { api } from "./api";
import moment from "moment";

var validaConfiguracao = {
    despesasPagas: 'menu-guia',
    despesasEmAberto: '',
    contasBancarias: ''
}

function Relatorio() {

    const ExibeDespesasPagas = () => {
        setMenu([true, false, false]);
        validaConfiguracao.despesasPagas = "menu-guia";
        validaConfiguracao.despesasEmAberto = "";
        validaConfiguracao.contasBancarias = "";
    }

    const ExibeDespesasEmAberto = () => {
        setMenu([false, true, false]);
        validaConfiguracao.despesasPagas = "";
        validaConfiguracao.despesasEmAberto = "menu-guia";
        validaConfiguracao.contasBancarias = "";
    }

    const ExibeContasBancarias = () => {
        setMenu([false, false, true]);
        validaConfiguracao.despesasPagas = "";
        validaConfiguracao.despesasEmAberto = "";
        validaConfiguracao.contasBancarias = "menu-guia";
    }

    let [exibeMenu, setMenu] = useState([true, false, false]);
    const [relatorioDespesaPaga, setDespesaPaga] = useState<RelatorioDespesa[]>([]);
    const [relatorioDespesaEmAberto, setDespesaEmAberto] = useState<RelatorioDespesa[]>([]);

    const carregaDespesasPagas = async () => {

        try {
            const json = await api.listarRelatorioDespesasPagas();
            const dataArray = Array.isArray(json) ? json : [json];
            setDespesaPaga(dataArray);

        } catch {
            alert('Erro!');
        }
    }

    const carregaDespesasEmAberto = async () => {

        try {
            const json = await api.listarRelatorioDespesasEmAberto();
            const dataArray = Array.isArray(json) ? json : [json];
            setDespesaEmAberto(dataArray);

        } catch {
            alert('Erro!');
        }
    }

    useEffect(() => {
        carregaDespesasPagas();
        carregaDespesasEmAberto();
    }, []);

    return (
        <div>
            <HeaderMenu exibe={true} />
            <div className="container_main_padrao-tela">
                <div className="container_padrao-tela">
                    <div >
                        <ul className="menu-relatorios">
                            <li className={validaConfiguracao.despesasPagas} onClick={ExibeDespesasPagas}>Despesas pagas</li>
                            <li className={validaConfiguracao.despesasEmAberto} onClick={ExibeDespesasEmAberto}>Despesas em aberto</li>
                            <li className={validaConfiguracao.contasBancarias} onClick={ExibeContasBancarias}>Contas Bancárias</li>
                        </ul>
                        {/* DESPESAS PAGAS  */}
                        {exibeMenu[0] === true &&

                            <div className="body-relatorio">

                                <FiltroRelatorio />


                                <UncontrolledAccordion
                                    defaultOpen={[
                                        "1",
                                    ]}
                                    stayOpen
                                >
                                    {
                                        relatorioDespesaPaga.map(
                                            item =>
                                                <>
                                                    <AccordionItem>
                                                        <AccordionHeader targetId={item.id}>
                                                            {item.descricao}
                                                        </AccordionHeader>
                                                        <AccordionBody accordionId={item.id}>

                                                            <p><strong>Data de lançamento:</strong> {moment(item.dataLancamento).format('DD-MM-YYYY')} </p>
                                                            <p><strong>Data de vencimento:</strong> {moment(item.dataVencimento).format('DD-MM-YYYY')} </p>
                                                            <p><strong>Grupo de despesa:</strong> {item.id_GrupoDespesa} </p>
                                                            <p><strong>Valor:</strong> {item.valor}</p>
                                                            <Button color="warning">Estornar</Button>
                                                            <Button color="danger">Excluir</Button>

                                                        </AccordionBody>
                                                    </AccordionItem>
                                                </>
                                        )
                                    }
                                </UncontrolledAccordion>
                            </div>

                        }
                        {/* DESPESAS EM ABERTO */}
                        {exibeMenu[1] === true &&
                            <div className="body-relatorio">

                                <FiltroRelatorio />


                                <UncontrolledAccordion
                                    defaultOpen={[
                                        "1",
                                    ]}
                                    stayOpen
                                >
                                    {
                                        relatorioDespesaEmAberto.map(
                                            item =>
                                                <>
                                                    <AccordionItem>
                                                        <AccordionHeader targetId={item.id}>
                                                            {item.descricao}
                                                        </AccordionHeader>
                                                        <AccordionBody accordionId={item.id}>

                                                            <p><strong>Data de lançamento:</strong> {moment(item.dataLancamento).format('DD-MM-YYYY')} </p>
                                                            <p><strong>Data de vencimento:</strong> {moment(item.dataVencimento).format('DD-MM-YYYY')} </p>
                                                            <p><strong>Grupo de despesa:</strong> {item.id_GrupoDespesa} </p>
                                                            <p><strong>Valor:</strong> {item.valor}</p>
                                                            <Button color="success">Pagar</Button>
                                                            <Button color="danger">Excluir</Button>

                                                        </AccordionBody>
                                                    </AccordionItem>
                                                </>
                                        )
                                    }
                                </UncontrolledAccordion>
                            </div>
                        }
                        {/* CONTAS BANCÁRIAS  */}
                        {exibeMenu[2] === true &&
                            <div className="body-relatorio">

                                <FiltroRelatorio />


                                <UncontrolledAccordion
                                    defaultOpen={[
                                        "1",
                                    ]}
                                    stayOpen
                                >
                                    {
                                        relatorioDespesaPaga.map(
                                            item =>
                                                <>
                                                    <AccordionItem>
                                                        <AccordionHeader targetId={item.id}>
                                                            {item.descricao}
                                                        </AccordionHeader>
                                                        <AccordionBody accordionId={item.id}>

                                                            <p><strong>Data de lançamento:</strong> {moment(item.dataLancamento).format('DD-MM-YYYY')} </p>
                                                            <p><strong>Data de vencimento:</strong> {moment(item.dataVencimento).format('DD-MM-YYYY')} </p>
                                                            <p><strong>Grupo de despesa:</strong> {item.id_GrupoDespesa} </p>
                                                            <p><strong>Valor:</strong> {item.valor}</p>
                                                            <Button color="warning">Estornar</Button>
                                                            <Button color="danger">Excluir</Button>

                                                        </AccordionBody>
                                                    </AccordionItem>
                                                </>
                                        )
                                    }
                                </UncontrolledAccordion>
                            </div>
                        }
                    </div>

                </div>
            </div>
        </div>
    );

}

export default Relatorio;