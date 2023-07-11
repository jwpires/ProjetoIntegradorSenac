import '../../style/style.css';
import HeaderMenu from '../header/HeaderMenu';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';
import { api } from './api';

function CadastroBanco() {
    const [nomeBanco, setNomeBanco] = useState('');
    const navegacao = useNavigate();

    function handleClickVoltar() {
        navegacao('/cadastro/contaBanco');
    }

    const handleParamNome = (e: ChangeEvent<HTMLInputElement>) => {
        setNomeBanco(e.target.value)
    }

    const handleSalvar = async () => {

        if (!nomeBanco) {
            return alert('Campo Nome precisa ser preenchido.')
        } else {

            try {
                let json = await api.InserirBanco(nomeBanco);
                alert('Cadastro realizado com sucesso.')
                return json;

            } catch (error) {
                console.log(error);
                alert('Ops, algo deu errado e não foi relizado o registro.')
            }
        }

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
                            <input type="text" placeholder='Nome:' value={nomeBanco} onChange={handleParamNome} />
                            <button type='submit' className="botao-padrao" onClick={handleSalvar}>Salvar</button>
                            <button onClick={handleClickVoltar} className="botao-padrao">Voltar</button>
                        </form>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default CadastroBanco;