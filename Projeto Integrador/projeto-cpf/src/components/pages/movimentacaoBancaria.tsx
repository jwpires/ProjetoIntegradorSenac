
import HeaderMenu from "../header/HeaderMenu";
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { useState } from "react";

function MovimentacaoBancaria() {
    const [state, setState] = useState(true);
    
    
    return(
        <div className="container-cadDespesa">
            <HeaderMenu exibe={true}></HeaderMenu>
        
            <div className="container_main_padrao-tela">

                <div className="container_padrao-tela">
                    
                            {/* <Form>
                                <FormGroup switch>
                                    <Input type="switch" checked onClick={() => {setState(!state);}}/>
                                    {state === true &&
                                        <div>
                                            verdadeiro
                                        </div>
                                    }                                    
                                </FormGroup>
                            </Form> */}
                    <header>
                        <h1 className='descricao'>Movimentação Bancária!</h1>
                    </header>

                    <div className='divCadBanco'>
                        
                        <form action="" method="post" className="cadBanco">
                            <label>Data de Lançamento:</label>
                            <input type="date" name="" id="" />

                            <div className="transferenciaEntreContas">
                                <label>Transferência entre contas: </label>
                                <input type="checkbox" checked = {state} onClick={() => {setState(!state);}} />
                            </div>
                                
                            
                            

                            <input type="text" name="" id="" placeholder='Descrição da Despesa:' />
                            <div className='adiciona-banco'>
                                <select name="GrupoDespesa" id="">
                                    <option value="">Grupo de Despesa</option>
                                </select>
                                <button type='button' > + </button> {/* Botão servirá para direcionar a tela de cadastro da conta bancária. */}
                            </div>
                            
                            <label>Data de Vencimento:</label>
                            <input type="date" name="" id="" />
                            <input type="text" name="" id="" placeholder='Valor da Despesa:'/>

                            {/* <div className='adiciona-banco'>
                                <select name="Banco" id="">
                                    <option value="">Informe o Banco</option>
                                </select>
                                <button type='button' > + </button> {}
                            </div>                                                      */}
                            
                            <input type="submit" id='salvar' value="salvar" />
                            <button type="submit" className='botao-padrao' >Pagar</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default MovimentacaoBancaria;