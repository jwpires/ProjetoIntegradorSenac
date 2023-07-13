import '../../style/style.css';
import HeaderMenu from '../header/HeaderMenu';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { api } from './api';

function CadastroGrupoDespesa() {

    const navegacao = useNavigate();
    const[nomeGrupoDespesa, setNomeGrupoDespesa] = useState('');

    function handleClickVoltar(){
        navegacao('/lancamento/Despesa');
    }

    const handleClickSalvar = async () => {
        console.log(nomeGrupoDespesa);
        if(!nomeGrupoDespesa){
            alert("O campo Nome não pode estar vazio.");
        }else{
            try {
                let json = await api.InserirGrupoDespesa(nomeGrupoDespesa);
                alert('Cadastro Inserido com sucesso.');
                setNomeGrupoDespesa('');
                window.location.reload();
                return json;
            } catch (error) {
                alert('Ocorreu algum erro e o cadastro não pode ser inserido.')
            }
        }
        
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
                            <input type="text" className='input-padrao' value={nomeGrupoDespesa} placeholder='Nome:' 
                            onChange={(e)=> setNomeGrupoDespesa(e.target.value)}/> 

                            <button type='button'className='botao-padrao' onClick={handleClickSalvar}>Salvar</button>
                            <button type='button' className='botao-padrao' onClick={handleClickVoltar}>Voltar</button>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default CadastroGrupoDespesa;