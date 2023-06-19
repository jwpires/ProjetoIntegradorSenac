import HeaderMenu from "../header/HeaderMenu";
import '../../style/style.css';
import { useState } from "react";
import { AccordionBody, AccordionHeader, AccordionItem, Button, UncontrolledAccordion } from "reactstrap";

var validaConfiguracao = {
    despesasPagas: 'menu-guia',
    despesasEmAberto: '',
    contasBancarias: ''
}

function Relatorio() {
    const [open, setOpen] = useState('');

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
                        {exibeMenu[0] === true &&
                            <div className="body-relatorio">
                                <div className="filtros">
                                    <p>Data entre: <input type="date" name="" id="" /> à <input type="date" name="" id="" /> </p>
                                    <input className="pesquisar" type="text" name="" placeholder="Pesquisar por Descrição" id="" />
                                    <img className="imgPesquisa" src={require("../../images/botao-pesquisar.png")} alt="exibe imagem do padrao" />
                                </div>

                                <UncontrolledAccordion
                                    defaultOpen={[
                                        '1',
                                        '2'
                                    ]}
                                    stayOpen
                                >
                                    <AccordionItem>
                                        <AccordionHeader targetId="1">
                                            Conta de Luz
                                        </AccordionHeader>
                                        <AccordionBody accordionId="1">
                                            
                                                <p><strong>Data de lançamento:</strong> 21/10/2022, </p>
                                                <p><strong>Data de vencimento:</strong> 03/11/2022, </p>
                                                <p><strong>Grupo de despesa:</strong> Depesas fixas, </p>
                                                <p><strong>Valor:</strong> 254.63</p>
                                                <Button color="warning">Estornar</Button>
                                                <Button color="danger">Excluir</Button>
                                            
                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionHeader targetId="2">
                                            Financiamento Carro
                                        </AccordionHeader>
                                        <AccordionBody accordionId="2">
                                            
                                                <p><strong>Data de lançamento:</strong> 27/12/2022, </p>
                                                <p><strong>Data de vencimento:</strong> 03/01/2023, </p>
                                                <p><strong>Grupo de despesa:</strong> Depesas fixas, </p>
                                                <p><strong>Valor:</strong> 784.63</p>
                                                <Button color="warning">Estornar</Button>
                                                <Button color="danger">Excluir</Button>
                                            
                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionHeader targetId="3">
                                            Cartão de Crédito
                                        </AccordionHeader>
                                        <AccordionBody accordionId="3">
                                            
                                                <p><strong>Data de lançamento:</strong> 27/01/2023, </p>
                                                <p><strong>Data de vencimento:</strong> 09/02/2023, </p>
                                                <p><strong>Grupo de despesa:</strong> Depesas fixas, </p>
                                                <p><strong>Valor:</strong> 254.63</p>
                                                <Button color="warning">Estornar</Button>
                                                <Button color="danger">Excluir</Button>
                                            
                                        </AccordionBody>
                                    </AccordionItem>
                                </UncontrolledAccordion>

                                <div>

                                </div>

                                <div>

                                </div>

                            </div>

                        }
                        {exibeMenu[1] === true &&
                            <div className="body-relatorio">
                                Texte 2
                            </div>
                        }
                        {exibeMenu[2] === true &&
                            <div className="body-relatorio">
                                Texte 3
                            </div>
                        }
                    </div>

                </div>
            </div>
        </div>
    );

}

export default Relatorio;