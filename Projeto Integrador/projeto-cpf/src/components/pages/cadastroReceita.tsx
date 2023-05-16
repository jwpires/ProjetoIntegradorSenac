import '../../style/style.css';
import HeaderMenu from '../header/HeaderMenu';

function CadastroReceita(){
    return(
        <div className="container-cadReceita">
            <HeaderMenu exibe={true}></HeaderMenu>

            <div className="container_main_padrao">

                <div className="container_padrao">
                    
                    <header>
                        <h1 className='descricao'>Cadastro de Receita!</h1>
                    </header>

                    <div className='divCadReceita'>  
                        <form action="" method="post" className="cadReceita">
                            
                            <input type="text" name="" id="" placeholder='Descrição da Receita'/>
                            <div className='adiciona-receita'>
                                <select name="Receita" id="">
                                    <option value="">Grupo de Receita</option>
                                </select>
                                <button type='button'> + </button> {/* Botão servirá para direcionar a tela de cadastro da conta bancária. */}
                            </div>
                            
                            <label>Data:</label><input type="date" name="" id="" />
                            <label>Data de lançamento:</label><input type="date" name="" id="" />                           
                            
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

export default CadastroReceita;