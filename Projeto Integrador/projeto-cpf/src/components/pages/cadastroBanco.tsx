import '../../style/style.css';
import HeaderMenu from '../header/HeaderMenu';

function CadastroBanco() {

    return (
        <div className="container_main_padrao">
                       
            <div className="container_padrao">
                
                <header>
                    <h1 className='descricao'>Cadastre suas Contas!</h1>
                </header>

                <div className="cadBanco">
                    <form action="" method="post">
                        <div>
                            <select name="Banco" id="">
                                <option value="">Informe o Banco</option>
                            </select>
                            <button type='button'> + </button> {/* Botão servirá para direcionar a tela de cadastro da conta bancária. */}
                        </div>
                        
                        <input type="text" name="" id="" placeholder='Nome do proprietário da conta:'/>
                        <input type="text" name="" id="" placeholder='Informe número da conta'/>
                        
                        <div className="raio_group">
                            <label><input type="radio" name="tipo_conta" id="" />Conta Corrente</label>
                            <label><input type="radio" name="tipo_conta" id="" />Conta Salário</label>
                            <label><input type="radio" name="tipo_conta" id="" />Conta Poupança</label>
                            <input type="text" name="" id="" placeholder='Saldo inicial:'/>
                        </div>
                    </form>
                </div>

            </div>

            <div className="container_imagem">
                <img src={require("../../images/logo.png")} alt="exibe imagem do login" />
                <h1 className='descricao'>Controle Pessoal de Finanças</h1>
            </div>
        </div>
        
    );
    
}

export default CadastroBanco;