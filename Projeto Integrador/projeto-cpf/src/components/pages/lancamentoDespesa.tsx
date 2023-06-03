import '../../style/style.css';
import HeaderMenu from '../header/HeaderMenu';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



function LancamentoDespesa(){
    // Variavel de manipulação de exibição de campos
    const[show, setShow] = useState(false);

/**------------Manipulação Modal---------------------*/
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
/**--------------------------------------------*/
    const navegacao = useNavigate();

    function handleClickGrupoDespesa(){
        navegacao('/cadastro/GrupoDespesa');
    }

    function handleClickConfirmaPagamento(){
        navegacao('/confirmacaoPagamento');
    }

    function handleClickExibeBanco() {
        setShow(true);
    }

    function handleClickEscondeBanco() {
        setShow(false);
    }

    function exibeModal(){
        toggle();
        handleClickEscondeBanco();
    }

    return(
        <div className="container-cadDespesa">
            <HeaderMenu exibe={true}></HeaderMenu>
        
            <div className="container_main_padrao-tela">

                <div className="container_padrao-tela">
                    
                    <header>
                        <h1 className='descricao'>Lançamento de Despesa!</h1>
                    </header>

                    <div className='divCadBanco'>
                        
                        <form action=""  className="cadBanco">
                            <input type="text" name="" id="" placeholder='Descrição da Despesa:'   />
                            <div className='adiciona-banco'>
                                <select name="GrupoDespesa" id="">
                                    <option value="">Grupo de Despesa</option>
                                </select>
                                <button type='button' onClick={handleClickGrupoDespesa}> + </button> {/* Botão servirá para direcionar a tela de cadastro da conta bancária. */}
                            </div>
                            <label>Data de Lançamento:</label>
                            <input type="date" name="" id="" />
                            <label>Data de Vencimento:</label>
                            <input type="date" name="" id="" />
                            <input type="text" name="" id="" placeholder='Valor da Despesa:'/>

                            {/* <div className='adiciona-banco'>
                                <select name="Banco" id="">
                                    <option value="">Informe o Banco</option>
                                </select>
                                <button type='button' > + </button> {}
                            </div>                                                      */}
                            
                            
                            <button className="botao-padrao">Salvar</button>
                            
                            
                            <input type="button" id='botao-pagar'  onClick={exibeModal} value="Pagar" />
                            
                        
                            <div className="teste" >
                           {/********************** * Exibe a Modal ao clicar em Pagar****************** */}
                                <Modal isOpen={modal} toggle={toggle}>
                                    <ModalHeader toggle={toggle}>Confirmação de pagamento!</ModalHeader>
                                    <ModalBody>
                                
                                                
                                                <form action="" className="cadBanco">
                                                    <input type="text" name="" id="" placeholder='Descrição da Despesa:' />
                                                    
                                                    <label>Data de Vencimento:</label>
                                                    <input type="date" name="" id="" />
                                                    
                                                    <input type="text" name="" id="" placeholder='Valor da Despesa:'/>
                                                    
                                                    <label>Forma de Pagamento:</label>
                                                    <div className="raio_group">

                                                        <label><input type="radio" name="tipo_pagamento" id="" onClick={handleClickExibeBanco}/>Conta Bancária</label><br />
                                                        <label><input type="radio" name="tipo_pagamento" id="" onClick={handleClickEscondeBanco}/>Carteira</label><br />
                                                        
                                                    </div>
                                                    {show === true &&
                                                        <div className='adiciona-banco'>
                                                                <select name="Banco" id="">
                                                                    <option value="">Informe o Banco</option>
                                                                </select>
                                                                <button type='button' > + </button> {/* Botão servirá para direcionar a tela de cadastro da conta bancária. */}
                                                        </div>
                                                    }

                                                </form>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={toggle}>
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