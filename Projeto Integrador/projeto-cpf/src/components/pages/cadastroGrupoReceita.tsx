import '../../style/style.css';
import HeaderMenu from '../header/HeaderMenu';


function CadastroGrupoReceita() {
    return (
        <div className="container-cadReceita">
            <HeaderMenu exibe={true}></HeaderMenu>
            <div className="container_main_padrao">
                        
                <div className="container_padrao">
                    
                    <header>
                        <h1 className='descricao'>Cadastro de Grupo de Receita!</h1>
                    </header>

                    <input type="text" className='input-padrao' placeholder='Nome:' /> 
                    <input type="submit" className='botao-padrao' value="Salvar" />

                </div>

                <div className="container_imagem">
                    <img src={require("../../images/logo.png")} alt="exibe imagem do login" />
                    <h1 className='descricao'>Controle Pessoal de Finanças</h1>
                </div>
            </div>
        </div>
    );
}

export default CadastroGrupoReceita;