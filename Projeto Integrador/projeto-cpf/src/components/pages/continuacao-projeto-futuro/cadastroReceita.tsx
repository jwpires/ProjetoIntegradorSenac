import '../../style/style.css';
import HeaderMenu from '../../header/HeaderMenu';
import {useNavigate } from 'react-router-dom';

function CadastroReceita() {
    const navegacao = useNavigate();

    function handleClickCadGrupoReceita() {
        navegacao('/cadastro/GrupoReceita');
    }

    return(
        <div className="container-cadReceita">
            <HeaderMenu exibe={true}></HeaderMenu>

            <div className="container_main_padrao-tela">

                <div className="container_padrao-tela">
                    
                    <header>
                        <h1 className='descricao'>Cadastro de Receita!</h1>
                    </header>

                    <div className='divCadReceita'>  
                        <form action="" method="post" className="cadReceita">
                            
                            <div className='adiciona-receita'>
                                <select name="Receita" id="">
                                    <option value="">Grupo de Receita</option>
                                </select>
                                <button type='button' onClick={handleClickCadGrupoReceita}> + </button> {/* Botão servirá para direcionar a tela de cadastro da conta bancária. */}
                            </div>
                            
                            <input type="text" name="" id="" placeholder='Descrição da Receita' />
                            
                            <button className='botao-padrao' type='submit'>Salvar</button>
                        </form>
                    </div>

                </div>

                {/* <div className="container_imagem">
                    <img src={require("../../images/logo.png")} alt="exibe imagem do login" />
                    <h1 className='descricao'>Controle Pessoal de Finanças</h1>
                </div> */}
            </div>

        </div>
    );
}

export default CadastroReceita;