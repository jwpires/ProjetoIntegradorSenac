import HeaderMenu from "../header/HeaderMenu";
import '../../style/style.css';
import { useEffect, useState } from "react";
import { AccordionBody, AccordionHeader, AccordionItem, Button, Modal, ModalBody, ModalFooter, ModalHeader, UncontrolledAccordion } from "reactstrap";
import { RelatorioDespesa } from "../types/relatorioDespesa";
import { api } from "./api";
import moment from "moment";
import { AgenciaDash } from "../types/agenciaDash";
import { GrupoDespesa } from "../types/grupoDespesa";
import { Banco } from "../types/banco";
import { getValue } from "@testing-library/user-event/dist/utils";
import ItemLista from "./Exemplos/itemLista";

var validaConfiguracao = {
    despesasPagas: 'menu-guia',
    despesasEmAberto: '',
    contasBancarias: ''
}

function Relatorio() {

    /**------------Manipulação Modal---------------------*/
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    var id_exclusao: string = '';

    function exibeModal(id: string) {
        console.log('id: ',id);
        id_exclusao = id;
        console.log('id_exclusao: ',id_exclusao);
        toggle();
    }

    

    const ExibeDespesasPagas = () => {
        setMenu([true, false, false]);
        validaConfiguracao.despesasPagas = "menu-guia";
        validaConfiguracao.despesasEmAberto = "";
        validaConfiguracao.contasBancarias = "";
        setDataFim('');
        setDataFim('');
        setTipo(1);
        setBanco_('');
        setDescricao_('');
    }

    const ExibeDespesasEmAberto = () => {
        setMenu([false, true, false]);
        validaConfiguracao.despesasPagas = "";
        validaConfiguracao.despesasEmAberto = "menu-guia";
        validaConfiguracao.contasBancarias = "";
        setDataFim('');
        setDataFim('');
        setTipo(1);
        setBanco_('');
        setDescricao_('');
    }

    const ExibeContasBancarias = () => {
        setMenu([false, false, true]);
        validaConfiguracao.despesasPagas = "";
        validaConfiguracao.despesasEmAberto = "";
        validaConfiguracao.contasBancarias = "menu-guia";
        setDataFim('');
        setDataFim('');
        setTipo(1);
        setBanco_('');
        setDescricao_('');
    }

    let [exibeMenu, setMenu] = useState([true, false, false]);
    const [relatorioDespesaPaga, setDespesaPaga] = useState<RelatorioDespesa[]>([]);
    const [relatorioDespesaEmAberto, setDespesaEmAberto] = useState<RelatorioDespesa[]>([]);
    const [relatorioContaBancaria, setRelatorioContaBancaria] = useState<AgenciaDash[]>([]);

    const [banco, setBanco] = useState<Banco[]>([]);
    const [grupoDespesa, setGrupoDespesa] = useState<GrupoDespesa[]>([]);
    const [idGrupoDespesa, setIdGrupoDespesa] = useState('');
    const [IdBanco, setSelectValueIdBanco] = useState('');
    const [saldo, setSaldo] = useState('');
    const [tipo, setTipo] = useState<number>(1);
    const [dataInicio, setDataInicio] = useState('');
    const [dataFim, setDataFim] = useState('');
    const [banco_, setBanco_] = useState('');
    const [descricao_, setDescricao_] = useState('');

    const handleConfirmation = (id:string) => {
        const result = window.confirm('Você deseja continuar?');
        
        if (result) {
          // O usuário clicou em "OK"
          console.log('Usuário escolheu Sim');
            removerDespesa(id);
        } else {
          // O usuário clicou em "Cancelar"
          console.log('Usuário escolheu Não');
          // Faça o que precisa ser feito quando o usuário escolhe "Não" ou cancela
        }
      };

      const handleConfirmationAlterar = (id:string) => {
        const result = window.confirm('Você deseja continuar?');
        
        if (result) {
          // O usuário clicou em "OK"
          console.log('Usuário escolheu Sim');
          alterarSaldo(id, saldo)
        } else {
          // O usuário clicou em "Cancelar"
          console.log('Usuário escolheu Não');
          // Faça o que precisa ser feito quando o usuário escolhe "Não" ou cancela
        }
      };


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
        mostrar();
        try {
            const json = await api.listarSaldosBancarios(banco_, descricao_);
            const dataArray = Array.isArray(json) ? json : [json];
            setRelatorioContaBancaria(dataArray);

        } catch {
            alert('Erro!');
        }
    }

    const carregaDespesasPagas = async () => {

        try {
            console.log('DataInicio:', dataInicio)
            console.log('DataFIM:', dataFim)
            console.log('Tipo:', tipo)
            console.log('GDespesa: ', idGrupoDespesa);
            console.log('descricao: ', descricao_);
            const json = await api.listarRelatorioDespesasPagas(dataInicio, dataFim, tipo, 1, idGrupoDespesa, descricao_);
            const dataArray = Array.isArray(json) ? json : [json];
            setDespesaPaga(dataArray);

        } catch {
            alert('Erro!');
        }
    }

    const carregaDespesasEmAberto = async () => {

        try {
            console.log('DataInicio:', dataInicio)
            console.log('DataFIM:', dataFim)
            console.log('Tipo:', tipo)
            console.log('GDespesa: ', idGrupoDespesa);
            console.log('descricao: ', descricao_);
            const json = await api.listarRelatorioDespesasEmAberto(dataInicio, dataFim, tipo, 0, idGrupoDespesa, descricao_);
            const dataArray = Array.isArray(json) ? json : [json];
            setDespesaEmAberto(dataArray);

        } catch {
            alert('Erro!');
        }
    }

    const removerDespesa = async (id: string) => {
        console.log(id);
        const json = await api.removerDespesa(id);
        alert((json.descricao));
        carregaDespesasPagas();
        carregaDespesasEmAberto()
        toggle();
    }

    const alterarStatusPagamentoDespesa = async (id: string) => {
        const json = await api.alterarStatusPagamentoDespesa(id);
        alert((json.descricao));
        carregaDespesasPagas();
        carregaDespesasEmAberto();
    }

    const alterarSaldo = async (id: string, valor: string) => {
        if (valor == "") {
            alert("Informe o valor da alteração do saldo.");
        } else {
            const json = await api.alterarSaldo(id, parseFloat(valor));
            alert((json.descricao));
            setSaldo("");
            carregaSaldoBancario();
        }

    }

    const reset = (e: number) => {
        console.log((tipo));

        setTipo(e);
        console.log((tipo));
    }

    const mostrar = () => {
        console.log("teste", banco_);
        console.log("descricao: ", descricao_)
    }

    useEffect(() => {
        //carregaSaldoBancario();
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
                                        <p>Data: <input type="date" onChange={e => setDataInicio(e.target.value)} />
                                            à
                                            <input type="date" onChange={e => setDataFim(e.target.value)} />
                                        </p>

                                        <label><input type="radio" name="tipo_pagamento" id="" onChange={() => reset(0)} />Lançamento</label>
                                        <label><input type="radio" name="tipo_pagamento" id="" onChange={() => reset(1)} />Vencimento</label><br />
                                    </div>

                                    <select className="pesquisar" name="GrupoDespesa" id="" value={idGrupoDespesa} onChange={(e) => setIdGrupoDespesa(e.target.value)}  >
                                        <option key={0} value="" >Grupo de Despesa</option >
                                        {
                                            grupoDespesa.map(
                                                (valor, index) => <option key={valor.id} value={valor.descricao}>{valor.descricao}</option>
                                            )
                                        }
                                    </select>




                                    <input className="pesquisar" type="text" name="" placeholder="Pesquisar por Descrição" id="" value={descricao_} onChange={e => setDescricao_(e.target.value)} />
                                    <img className="imgPesquisa" src={require("../../images/botao-pesquisar.png")} alt="exibe imagem do padrao" onClick={carregaDespesasPagas} />

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
                                                            <Button color="warning" onClick={() => alterarStatusPagamentoDespesa(item.id_despesa)}>Estornar</Button>
                                                            {/* <Button color="danger" onClick={() => removerDespesa(item.id_despesa)} >Excluir</Button> */}
                                                            <Button color="danger" onClick={() =>handleConfirmation(item.id_despesa)} >Excluir</Button>
                                                            
                
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
                                        <p>Data: <input type="date" onChange={e => setDataInicio(e.target.value)} />
                                            à
                                            <input type="date" onChange={e => setDataFim(e.target.value)} />
                                        </p>

                                        <label><input type="radio" name="tipo_pagamento" id="" onChange={() => reset(0)} />Lançamento</label>
                                        <label><input type="radio" name="tipo_pagamento" id="" onChange={() => reset(1)} />Vencimento</label><br />
                                    </div>

                                    <select className="pesquisar" name="GrupoDespesa" id="" value={idGrupoDespesa} onChange={(e) => setIdGrupoDespesa(e.target.value)}  >
                                        <option key={0} value="" >Grupo de Despesa</option >
                                        {
                                            grupoDespesa.map(
                                                (valor, index) => <option key={valor.id} value={valor.descricao}>{valor.descricao}</option>
                                            )
                                        }
                                    </select>




                                    <input className="pesquisar" type="text" name="" placeholder="Pesquisar por Descrição" id="" value={descricao_} onChange={e => setDescricao_(e.target.value)} />
                                    <img className="imgPesquisa" src={require("../../images/botao-pesquisar.png")} alt="exibe imagem do padrao" onClick={carregaDespesasEmAberto} />

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
                                                            <Button color="success" onClick={e => alterarStatusPagamentoDespesa(item.id_despesa)} >Pagar</Button>
                                                            <Button color="danger" onClick={() =>handleConfirmation(item.id_despesa)} >Excluir</Button>

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

                                    <select className="pesquisar" name="Banco" id="" value={banco_} onChange={(e) => { setBanco_(e.target.value) }}>
                                        <option key={0} value={""} >Informe o Banco</option>
                                        {
                                            banco.map(
                                                (item, chave) => <option key={item.id} value={item.nome}>{item.nome}</option>
                                            )
                                        }
                                    </select>




                                    <input className="pesquisar" type="text" name="" placeholder="Pesquisar por Descrição" value={descricao_} onChange={e => { setDescricao_(e.target.value) }} />
                                    <img className="imgPesquisa" src={require("../../images/botao-pesquisar.png")} alt="exibe imagem do padrao" onClick={carregaSaldoBancario} />

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
                                                            <input type="number" step=".01" name="" placeholder={item.saldo.toString()} onChange={(e) => { setSaldo(e.target.value) }} />
                                                            {/* <p><strong>Saldo:</strong> {item.saldo}</p> */}
                                                            <br /><br />
                                                            <Button color="warning" onClick={e => handleConfirmationAlterar(item.id)}>Editar</Button>

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