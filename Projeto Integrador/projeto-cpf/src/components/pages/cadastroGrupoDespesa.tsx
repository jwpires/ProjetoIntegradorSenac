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
            <div className="container_main_padrao">
                        
                <div className="container_padrao">
                    
                    <header>
                        <h1 className='descricao'>Cadastro de Grupo de Despesa!</h1>
                    </header>

                    <input type="text" className='input-padrao' placeholder='Nome:' /> 
                    <input type="submit" className='botao-padrao' value="Salvar" />
                    <input type="submit" className='botao-padrao' onClick={handleClickVoltar} value="Voltar" />

                </div>

                <div className="container_imagem">
                    <img src={require("../../images/logo.png")} alt="exibe imagem do login" />
                    <h1 className='descricao'>Controle Pessoal de Finanças</h1>
                </div>
            </div>
        </div>
    );
}

export default CadastroGrupoDespesa;