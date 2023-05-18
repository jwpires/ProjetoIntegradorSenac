import '../../style/style.css';
import HeaderMenu from '../header/HeaderMenu';
import { useNavigate } from 'react-router-dom';

function ConfirmacaoPagamento(){
    const navegacao = useNavigate();

    function handleClickGrupoVoltar(){
        navegacao(-1);
    }

    function handleClickCadBanco(){
        navegacao('/cadastro/Banco');    
    }

    return(
        <div className="container-cadDespesa">
            <HeaderMenu exibe={true}></HeaderMenu>
        
            <div className="container_main_padrao">

                <div className="container_padrao">
                    
                    <header>
                        <h1 className='descricao'>Confirmação de pagamento!</h1>
                    </header>

                    <div className='divCadBanco'>
                        
                        <form action="" method="post" className="cadBanco">
                            <input type="text" name="" id="" placeholder='Descrição da Despesa:' />
                            
                            <label>Data de Vencimento:</label>
                            <input type="date" name="" id="" />
                            
                            <input type="text" name="" id="" placeholder='Valor da Despesa:'/>
                            
                            <label>Forma de Pagamento:</label>
                            <div className="raio_group">

                                <label><input type="radio" name="tipo_pagamento" id="" />Conta Bancária</label><br />
                                <label><input type="radio" name="tipo_pagamento" id="" />Carteira</label><br />
                                
                            </div>

                            <div className='adiciona-banco'>
                                    <select name="Banco" id="">
                                        <option value="">Informe o Banco</option>
                                    </select>
                                    <button type='button' onClick={handleClickCadBanco}> + </button> {/* Botão servirá para direcionar a tela de cadastro da conta bancária. */}
                            </div>
                                                                               
                            
                            <input type="submit" id='salvar' value="Confirmar" />
                            <button type="submit" className='botao-padrao' onClick={handleClickGrupoVoltar}>Voltar</button>
                        </form>
                    </div>

                </div>

                <div className="container_imagem">
                    <img src={require("../../images/logo.png")} alt="exibe imagem do login" />
                    <h1 className='descricao'>Controle Pessoal de Finanças</h1>
                </div>
            </div>
        </div>
    );
}

export default ConfirmacaoPagamento;