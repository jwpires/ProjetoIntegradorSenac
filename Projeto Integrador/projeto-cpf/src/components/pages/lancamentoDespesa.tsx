import '../../style/style.css';
import HeaderMenu from '../header/HeaderMenu';


function LancamentoDespesa(){
    return(
        <div className="container-cadDespesa">
            <HeaderMenu exibe={true}></HeaderMenu>
        
            <div className="container_main_padrao">

                <div className="container_padrao">
                    
                    <header>
                        <h1 className='descricao'>Lançamento de Despesa!</h1>
                    </header>

                    <div className='divCadBanco'>
                        
                        <form action="" method="post" className="cadBanco">
                            <input type="text" name="" id="" placeholder='Descrição da Despesa:' />
                            <div className='adiciona-banco'>
                                <select name="GrupoDespesa" id="">
                                    <option value="">Grupo de Despesa</option>
                                </select>
                                <button type='button' > + </button> {/* Botão servirá para direcionar a tela de cadastro da conta bancária. */}
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
                            
                            <input type="submit" id='salvar' value="salvar" />
                            <button type="submit" className='botao-padrao'>Pagar</button>
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

export default LancamentoDespesa;