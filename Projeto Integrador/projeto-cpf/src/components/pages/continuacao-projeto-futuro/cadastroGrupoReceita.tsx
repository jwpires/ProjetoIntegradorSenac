import '../../../style/style.css';
import HeaderMenu from '../../header/HeaderMenu';
import { useNavigate } from 'react-router-dom';

function CadastroGrupoReceita() {

    const navegacao = useNavigate();
    function handleClickVoltar(){
        navegacao('/cadastro/Receita');
    }
    
    return (
        <div className="container-cadReceita">
            <HeaderMenu exibe={true}></HeaderMenu>
            <div className="container_main_padrao-tela">
                        
                <div className="container_padrao-tela">
                    
                    <header>
                        <h1 className='descricao'>Cadastro de Grupo de Receita!</h1>
                    </header>

                    <div className="divCadReceita">
                        <form action="" className="cadReceita">
                            <input type="text" className='input-padrao' placeholder='Nome:' /> 
                            <input type="submit" className='botao-padrao' value="Salvar" />
                            <input type="submit" className='botao-padrao' onClick={handleClickVoltar} value="Voltar" />
                        </form>
                    </div>
                    

                </div>

            </div>
        </div>
    );
}

export default CadastroGrupoReceita;