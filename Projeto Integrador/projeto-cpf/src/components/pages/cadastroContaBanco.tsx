import '../../style/style.css';
import HeaderMenu from '../header/HeaderMenu';
import { useNavigate } from 'react-router-dom';
import { api } from './api';
import { Banco } from '../types/banco';
import { ChangeEvent, useState } from 'react';

function CadastroContaBanco() {
    const navegacao = useNavigate();
    const [banco, setBanco] = useState<Banco[]>([]);
    const [agencia, setAgencia] = useState({
        id_banco: '',
        nomeProprietario: '',
        numeroConta: '',
        tipoConta: '',
        saldo: ''
    })

    const carregaBancos = async () => {

        try {
            const json = await api.listarBancos();
            const dataArray = Array.isArray(json) ? json : [json];
            setBanco(dataArray);
        } catch {
            alert('Erro!');
        }
    }

    function handleClickCadBanco() {
        navegacao('/cadastro/Banco');
    }

    const handleParamCampos = (e: ChangeEvent<HTMLInputElement>) =>{
        //criar função
    }

    const handleSalvar = () =>{

    }

    console.log(api.listarBancos());

    return (
        <div className="container-cadBanco">
            <HeaderMenu exibe={true}></HeaderMenu>

            <div className="container_main_padrao-tela">

                <div className="container_padrao-tela">

                    <header>
                        <h1 className='descricao'>Cadastro de Conta Bancária!</h1>
                    </header>

                    <div className='divCadBanco'>
                        <form action="" method="post" className="cadBanco">
                            <div className='adiciona-banco'>
                                <select name="Banco" id="" onClick={carregaBancos}>
                                    <option value="">Informe o Banco</option>
                                    {
                                        banco.map(
                                            (item) => <option value={item.id}>{item.nome}</option>
                                        )
                                    }
                                </select>
                                <button type='button' onClick={handleClickCadBanco}> + </button> {/* Botão servirá para direcionar a tela de cadastro da conta bancária. */}
                            </div>

                            <input type="text" name="" id="" placeholder='Nome do proprietário da conta:' />
                            <input type="text" name="" id="" placeholder='Informe número da conta' />

                            <label>Tipo de Conta:</label>
                            <div className="raio_group">

                                <label><input type="radio" name="tipo_conta" id="" />Conta Corrente</label><br />
                                <label><input type="radio" name="tipo_conta" id="" />Conta Salário</label><br />
                                <label><input type="radio" name="tipo_conta" id="" />Conta Poupança</label>
                            </div>


                            <input type="text" name="" id="" placeholder='Saldo inicial:' />
                            <input type="submit" id='salvar' value="salvar" onClick={handleSalvar}/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default CadastroContaBanco;