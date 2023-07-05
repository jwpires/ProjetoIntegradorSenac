import '../../style/style.css';
import HeaderMenu from '../header/HeaderMenu';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';

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

        try {
            let response = await fetch("http://localhost:3000/bancos",
                {
                    // por padrão o method do fetch, é o get, por isso não precisamos especificar.
                    method: 'POST',
                    body: JSON.stringify
                        ({
                            //campos requisitados pela API
                            nome: nomeBanco
                        }),
                    headers: {
                        //caso seja necessário o envio de algum
                        //parametro no cabeçalho da requisição, se faz aqui;
                        'Content-Type': 'application/json'
                    }
                });
            // coleta o reotrno do meu metodo post
            let json = await response.json();

            console.log(json);

            alert('Cadastro realizado com sucesso.');

            return json;

        } catch (error) {
            console.log(error);
            alert('Ops, algo deu errado e não foi relizado o registro.')
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