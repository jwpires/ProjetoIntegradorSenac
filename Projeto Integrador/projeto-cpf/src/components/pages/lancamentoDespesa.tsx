import '../../style/style.css';
import HeaderMenu from '../header/HeaderMenu';
import { useNavigate } from 'react-router-dom';

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { isConstructorDeclaration } from 'typescript';
// import { func } from 'prop-types';

function LancamentoDespesa() {
    // Variavel de manipulação de exibição de campos
    const [show, setShow] = useState(false);

    const [descricaoDespesa, setInputDespesa] = useState('');
    const [grupoDespesa, setInputGrupo] = useState('');
    const [dataLancamento, setInputLancamento] = useState('');
    const [dataVencimento, setInputData] = useState('');
    const [valorDespesa, setInputValor] = useState('');



    /**------------Manipulação Modal---------------------*/
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    /**--------------------------------------------*/
    const navegacao = useNavigate();

    function handleClickGrupoDespesa() {
        navegacao('/cadastro/GrupoDespesa');
    }

    function exibeModal() {
        toggle();
    }

    function confirmaPagamento() {



        setInputDespesa('');
        setInputData('');
        setInputValor('');
        toggle();
        alert('Despesa confirmada com sucesso!');
        window.location.reload();
    }

    function validaCamposPreenchidos() {
        let campos = [];

        if (descricaoDespesa !== '' && grupoDespesa !== '' && dataLancamento !== ''
        && dataVencimento !== '' && valorDespesa !== ''){
                if (descricaoDespesa === '') {
                    campos.push('Descrição da Despesa');
                }
                if (grupoDespesa === '') {
                    campos.push('Grupo de Despesa');
                }
                if (dataLancamento === '') {
                    campos.push('Data de Lançamento');
                }
                if (dataVencimento === '') {
                    campos.push('Data de Despesa');
                }
                if (valorDespesa === '') {
                    campos.push('Valor da Despesa');
                }
        }
        console.log("campos penderes de preenchimentos:");
        console.log("--------------------------------")
        console.log("Despesa: "+descricaoDespesa);
        console.log("Grupo despesa: "+grupoDespesa);
        console.log("Data Lançamento: "+dataLancamento);
        console.log("Data Vencimento: "+dataVencimento);
        console.log("valor: "+valorDespesa);

        

        return campos;
    }

    return (
        <div className="container-cadDespesa">
            <HeaderMenu exibe={true}></HeaderMenu>

            <div className="container_main_padrao-tela">

                <div className="container_padrao-tela">

                    <header>
                        <h1 className='descricao'>Lançamento de Despesa!</h1>
                    </header>

                    <div className='divCadBanco'>

                        <form action="" className="cadBanco">

                            <input type="text" value={descricaoDespesa} id="" placeholder='Descrição da Despesa:' onChange={(e) => setInputDespesa(e.target.value)} />

                            <div className='adiciona-banco'>
                                <select name="GrupoDespesa" id="" value={grupoDespesa} onChange={(e) => setInputGrupo(e.target.value)}  >
                                    <option value="" >Grupo de Despesa</option >
                                    <option value="TESTE1">TESTE1</option>
                                    <option value="TESTE2">TESTE2</option>
                                </select>
                                <button type='button' onClick={handleClickGrupoDespesa}> + </button> {/* Botão servirá para direcionar a tela de cadastro da conta bancária. */}
                            </div>
                            <label>Data de Lançamento:</label>
                            <input type="date" name="" value={dataLancamento} onChange={(e) => setInputLancamento(e.target.value)} />
                            <label>Data de Vencimento:</label>
                            <input type="date" name="" value={dataVencimento} onChange={(e) => setInputData(e.target.value)} />
                            <input type="number" step=".01" name="" value={valorDespesa} placeholder='Valor da Despesa:' onChange={(e) => setInputValor(e.target.value)} />

                            <button className="botao-padrao" type='button' onClick={validaCamposPreenchidos}>Salvar</button>

                            <input type="button" id='botao-pagar' onClick={exibeModal} value="Pagar" />


                            <div className="teste" >

                                {/********************** * Exibe a Modal ao clicar em Pagar****************** */}
                                <Modal isOpen={modal} toggle={toggle}>
                                    <ModalHeader toggle={toggle}>Confirmação de pagamento!</ModalHeader>
                                    <ModalBody>


                                        <form action="" className="cadBanco">
                                            <label >Descrição da Despesa:</label>
                                            <input type="text" name="" id="" placeholder='Descrição da Despesa:' disabled value={descricaoDespesa} />

                                            <label>Data de Vencimento:</label>
                                            <input type="date" name="" id="" value={dataVencimento} disabled />

                                            <label> Valor da despesa:</label>
                                            <input type="text" name="" id="" placeholder='Valor da Despesa:' value={valorDespesa} disabled />
                                        </form>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={confirmaPagamento}>
                                            Confirmar
                                        </Button>{' '}
                                        <Button color="secondary" onClick={toggle}>
                                            Cancelar
                                        </Button>
                                    </ModalFooter>
                                </Modal>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default LancamentoDespesa;