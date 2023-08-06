import '../../style/style.css';
import HeaderMenu from '../header/HeaderMenu';
import { useNavigate } from 'react-router-dom';
import { api } from './api';
import { Banco } from '../types/banco';
import { ChangeEvent, useEffect, useState } from 'react';
import { Agencia } from '../types/agencia';

function CadastroContaBanco() {
    const navegacao = useNavigate();
    const [banco, setBanco] = useState<Banco[]>([]); // constante Banco utilizada para armazenar as informações com o mesmo tipo de dados solicitado pela API
    const [agencia,setAgencia] = useState<Agencia[]>([]);

    /*Constantes utilizadas capturar as informações de cadastro da agência digita pelo usuário
    para inserir via API.*/
    const [IdBanco, setSelectValueIdBanco] = useState(''); 
    const [nomeProprietario, setNomeProprietario] = useState('');
    const [numeroConta, setNumeroConta] = useState('');
    const [tipoConta, setTipoConta] = useState('');
    const [saldo, setSaldo] = useState('');

    /*Função que puxa os dados do banco via API.*/
    const carregaBancos = async () => {

            const json = await api.listarBancos();
            const dataArray = Array.isArray(json) ? json : [json];
            setBanco(dataArray);
    }

    /** Função que guiará o usuário a tela de cadastro do Banco */
    function handleClickCadBanco() {
        navegacao('/cadastro/Banco');
    }

    /** Funções para capturar informações para cadastrar agência no banco.*/
    const handleSalvar = async(idBanco: string, nomeProprietario: string, numeroConta: string, tipoConta: string, saldo: number) => {

        if (idBanco && nomeProprietario && numeroConta && tipoConta && saldo) {
            console.log('idBanco: ', idBanco)
            console.log('nomeProprietario: ', nomeProprietario)
            console.log('numeroConta: ', numeroConta)
            console.log('tipoConta: ', tipoConta)
            console.log('saldo: ', saldo)
            try {
                const json = await api.InserirContaCorrente(idBanco, nomeProprietario, numeroConta, tipoConta, saldo);
                const dataArray = Array.isArray(json) ? json : [json];
                setAgencia(dataArray);
                alert("Cadastro efetuado com sucesso");
                window.location.reload();
            } catch {
                alert('Erro ao cadastrar!');
            }
        } else {
            alert("É preciso preencher todos os campos antes de salvar")
        }

    }

    useEffect(() => {
        carregaBancos();
    }, []);

    //console.log(api.listarBancos());

    return (
        <div className="container-cadBanco">
            <HeaderMenu exibe={true}></HeaderMenu>
            
            <div className="container_main_padrao-tela">

                <div className="container_padrao-tela">

                    <header>
                        <h1 className='descricao'>Cadastro de Conta Bancária!</h1>
                    </header>

                    <div className='divCadBanco'>
                        <form action="" method="" className="cadBanco">
                            <div className='adiciona-banco'>
                                <select name="Banco" id="" /*onClick={carregaBancos}*/ onChange={(e) => { setSelectValueIdBanco(e.target.value) }}>
                                    <option key={0} value="" >Informe o Banco</option>
                                    {
                                        banco.map(
                                            (item, chave) => <option key={item.id} value={item.id}>{item.nome}</option>
                                        )
                                    }
                                </select>
                                <button type='button' onClick={handleClickCadBanco}> + </button> {/* Botão servirá para direcionar a tela de cadastro da conta bancária. */}
                            </div>

                            <input type="text" name="" placeholder='Nome do proprietário da conta:' onChange={(e) => { setNomeProprietario(e.target.value) }} />
                            <input type="text" name="" id="" placeholder='Informe número da conta' onChange={(e) => { setNumeroConta(e.target.value) }} />

                            <label>Tipo de Conta:</label>
                            <div className="raio_group">
                                <label><input type="radio" name="tipo_conta" id="" onChange={(e) => { setTipoConta('C') }} />Conta Corrente</label><br />
                                <label><input type="radio" name="tipo_conta" id="" onChange={(e) => { setTipoConta('S') }} />Conta Salário</label><br />
                                <label><input type="radio" name="tipo_conta" id="" onChange={(e) => { setTipoConta('P') }} />Conta Poupança</label>
                            </div>


                            <input type="number" step=".01" name="" placeholder='Saldo inicial:' onChange={(e) => { setSaldo(e.target.value) }} />
                            <button type='button' id='salvar' onClick={e => handleSalvar(IdBanco, nomeProprietario, numeroConta, tipoConta, parseFloat(saldo))}>Salvar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default CadastroContaBanco;