import '../../style/style.css';
import HeaderMenu from '../header/HeaderMenu';
import { useNavigate } from 'react-router-dom';

function CadastroBanco() {

    const navegacao = useNavigate();

    function handleClickVoltar(){
        navegacao('/cadastro/contaBanco'); 
    }

    return (
        <div className="container-cadBanco">
            <HeaderMenu exibe={true}></HeaderMenu>
            <div className="container_main_padrao-tela">
                        
                <div className="container_padrao-tela">
                    
                    <header>
                        <h1 className='descricao'>Cadastro do Banco!</h1>
                    </header>

                    <div className="divCadBanco">
                        <form action="" className="cadBanco">
                            <input type="text"  placeholder='Nome:' /> 
                            <button type='submit' className="botao-padrao">Salvar</button>
                            <button onClick={handleClickVoltar} className="botao-padrao">Voltar</button>
                        </form>
                    </div>
                    

                </div>
            </div>
        </div>
    );
}

export default CadastroBanco;