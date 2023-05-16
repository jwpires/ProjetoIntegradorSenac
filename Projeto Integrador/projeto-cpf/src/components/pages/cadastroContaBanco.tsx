import '../../style/style.css';
import HeaderMenu from '../header/HeaderMenu';
import { useNavigate } from 'react-router-dom';

function CadastroContaBanco() {
    const navegacao = useNavigate();

    function handleClickCadBanco(){
        navegacao('/cadastroBanco');    
    }

    return (
        <div className="container-cadBanco">
            <HeaderMenu exibe={true}></HeaderMenu>
        
            <div className="container_main_padrao">

                <div className="container_padrao">
                    
                    <header>
                        <h1 className='descricao'>Cadastro de Conta Bancária!</h1>
                    </header>

                    <div className='divCadBanco'>  
                        <form action="" method="post" className="cadBanco">
                            <div className='adiciona-banco'>
                                <select name="Banco" id="">
                                    <option value="">Informe o Banco</option>
                                </select>
                                <button type='button' onClick={handleClickCadBanco}> + </button> {/* Botão servirá para direcionar a tela de cadastro da conta bancária. */}
                            </div>
                            
                            <input type="text" name="" id="" placeholder='Nome do proprietário da conta:'/>
                            <input type="text" name="" id="" placeholder='Informe número da conta'/>
                            
                            <label>Tipo de Conta:</label>
                            <div className="raio_group">

                                <label><input type="radio" name="tipo_conta" id="" />Conta Corrente</label><br />
                                <label><input type="radio" name="tipo_conta" id="" />Conta Salário</label><br />
                                <label><input type="radio" name="tipo_conta" id="" />Conta Poupança</label>
                            </div>
                            
                            
                            <input type="text" name="" id="" placeholder='Saldo inicial:'/>
                            <input type="submit" id='salvar' value="salvar" />
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

export default CadastroContaBanco;