import '../../style/style.css';
import HeaderMenu from '../header/HeaderMenu';
import { useNavigate } from 'react-router-dom';

function CadastroGrupoDespesa() {

    const navegacao = useNavigate();

    function handleClickVoltar(){
        navegacao(-1);
    }
    
    return (
        <div className="container-cadDespesa">
            <HeaderMenu exibe={true}></HeaderMenu>
            <div className="container_main_padrao-tela">
                        
                <div className="container_padrao-tela">
                    
                    <header>
                        <h1 className='descricao'>Cadastro de Grupo de Despesa!</h1>
                    </header>

                    <div className="divCadDespesa">
                        <form action="" className="cadDespesa">
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

export default CadastroGrupoDespesa;