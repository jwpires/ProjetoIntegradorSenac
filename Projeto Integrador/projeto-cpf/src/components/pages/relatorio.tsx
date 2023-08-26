import HeaderMenu from "../header/HeaderMenu";
import '../../style/style.css';
import { useEffect, useState } from "react";
import { AccordionBody, AccordionHeader, AccordionItem, Button, UncontrolledAccordion } from "reactstrap";
import FiltroRelatorio from "../types/filtroRelatorios";
import { RelatorioDespesa } from "../types/relatorioDespesa";
import { api } from "./api";
import moment from "moment";
import { AgenciaDash } from "../types/agenciaDash";
import { GrupoDespesa } from "../types/grupoDespesa";
import { Banco } from "../types/banco";

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
    const [relatorioContaBancaria, setRelatorioContaBancaria] = useState<AgenciaDash[]>([]);

    const [banco, setBanco] = useState<Banco[]>([]);
    const [grupoDespesa, setGrupoDespesa] = useState<GrupoDespesa[]>([]);
    const [idGrupoDespesa, setIdGrupoDespesa] = useState('');
    const [IdBanco, setSelectValueIdBanco] = useState('');

    const carregaGrupoDespesa = async () => {

        const json = await api.listarGrupoDespesa();
        const dataArray = Array.isArray(json) ? json : [json];
        setGrupoDespesa(dataArray);

    }

    const carregaBancos = async () => {

        const json = await api.listarBancos();
        const dataArray = Array.isArray(json) ? json : [json];
        setBanco(dataArray);
    }


    const carregaSaldoBancario = async () => {
        try {
            const json = await api.listarSaldosBancarios();
            const dataArray = Array.isArray(json) ? json : [json];
            setRelatorioContaBancaria(dataArray);

        } catch {
            alert('Erro!');
        }
    }

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
        carregaSaldoBancario();
        carregaGrupoDespesa();
        carregaBancos();
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

                                {/* <FiltroRelatorio tipoFiltro ='GD' /> */}
                                <div className="filtros">
                                    <div className="raio_group">
                                        <p>Data: <input type="date" name="" id="" /> à <input type="date" name="" id="" /> </p>

                                        <label><input type="radio" name="tipo_pagamento" id="" />Lançamento</label>
                                        <label><input type="radio" name="tipo_pagamento" id="" checked />Vencimento</label><br />
                                    </div>

                                    <select className="pesquisar" name="GrupoDespesa" id="" value={idGrupoDespesa} onChange={(e) => setIdGrupoDespesa(e.target.value)}  >
                                        <option key={0} value="" >Grupo de Despesa</option >
                                        {
                                            grupoDespesa.map(
                                                (valor, index) => <option key={valor.id} value={valor.id}>{valor.descricao}</option>
                                            )
                                        }
                                    </select>




                                    <input className="pesquisar" type="text" name="" placeholder="Pesquisar por Descrição" id="" />
                                    <img className="imgPesquisa" src={require("../../images/botao-pesquisar.png")} alt="exibe imagem do padrao" />

                                </div>


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
                                                        <AccordionHeader targetId={item.id_despesa}>
                                                            <input type="hidden" value={item.id_despesa} />
                                                            {item.descricao}
                                                        </AccordionHeader>
                                                        <AccordionBody accordionId={item.id_despesa}>

                                                            <p><strong>Data de lançamento:</strong> {moment(item.dataLancamento).format('DD-MM-YYYY')} </p>
                                                            <p><strong>Data de vencimento:</strong> {moment(item.dataVencimento).format('DD-MM-YYYY')} </p>
                                                            <p><strong>Grupo de despesa:</strong> {item.nomeGrupoDespesa} </p>
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

                                {/* <FiltroRelatorio tipoFiltro='GD' /> */}
                                <div className="filtros">
                                    <div className="raio_group">
                                        <p>Data: <input type="date" name="" id="" /> à <input type="date" name="" id="" /> </p>

                                        <label><input type="radio" name="tipo_pagamento" id="" />Lançamento</label>
                                        <label><input type="radio" name="tipo_pagamento" id="" checked />Vencimento</label><br />
                                    </div>

                                    <select className="pesquisar" name="GrupoDespesa" id="" value={idGrupoDespesa} onChange={(e) => setIdGrupoDespesa(e.target.value)}  >
                                        <option key={0} value="" >Grupo de Despesa</option >
                                        {
                                            grupoDespesa.map(
                                                (valor, index) => <option key={valor.id} value={valor.id}>{valor.descricao}</option>
                                            )
                                        }
                                    </select>




                                    <input className="pesquisar" type="text" name="" placeholder="Pesquisar por Descrição" id="" />
                                    <img className="imgPesquisa" src={require("../../images/botao-pesquisar.png")} alt="exibe imagem do padrao" />

                                </div>


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
                                                        <AccordionHeader targetId={item.id_despesa}>
                                                            <input type="hidden" value={item.id_despesa} />
                                                            {item.descricao}
                                                        </AccordionHeader>
                                                        <AccordionBody accordionId={item.id_despesa}>

                                                            <p><strong>Data de lançamento:</strong> {moment(item.dataLancamento).format('DD-MM-YYYY')} </p>
                                                            <p><strong>Data de vencimento:</strong> {moment(item.dataVencimento).format('DD-MM-YYYY')} </p>
                                                            <p><strong>Grupo de despesa:</strong> {item.nomeGrupoDespesa} </p>
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
                        {/* CONTAS BANCÁRIAS  */}
                        {exibeMenu[2] === true &&
                            <div className="body-relatorio">

                                {/* <FiltroRelatorio tipoFiltro={'BC'} /> */}
                                <div className="filtros">
                                    <div className="raio_group">
                                        <p>Data: <input type="date" name="" id="" /> à <input type="date" name="" id="" /> </p>

                                        <label><input type="radio" name="tipo_pagamento" id="" />Lançamento</label>
                                        <label><input type="radio" name="tipo_pagamento" id="" checked />Vencimento</label><br />
                                    </div>

                                    <select className="pesquisar" name="Banco" id="" /*onClick={carregaBancos}*/ onChange={(e) => { setSelectValueIdBanco(e.target.value) }}>
                                        <option key={0} value="" >Informe o Banco</option>
                                        {
                                            banco.map(
                                                (item, chave) => <option key={item.id} value={item.id}>{item.nome}</option>
                                            )
                                        }
                                    </select>




                                    <input className="pesquisar" type="text" name="" placeholder="Pesquisar por Descrição" id="" />
                                    <img className="imgPesquisa" src={require("../../images/botao-pesquisar.png")} alt="exibe imagem do padrao" />

                                </div>


                                <UncontrolledAccordion
                                    defaultOpen={[
                                        "1",
                                    ]}
                                    stayOpen
                                >
                                    {
                                        relatorioContaBancaria.map(
                                            item =>

                                                <>
                                                    <AccordionItem>
                                                        <AccordionHeader targetId={item.id}>
                                                            <input type="hidden" value={item.id} />
                                                            {item.nomeProprietario}
                                                        </AccordionHeader>
                                                        <AccordionBody accordionId={item.id}>

                                                            <p><strong>Conta:</strong> {item.numeroConta} </p>
                                                            <p><strong>Banco:</strong> {item.banco}</p>
                                                            <p><strong>Saldo:</strong> {item.saldo}</p>
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