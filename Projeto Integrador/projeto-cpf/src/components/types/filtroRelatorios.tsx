import { useEffect, useState } from 'react';
import '../../style/style.css'
import { api } from '../pages/api';
import { Banco } from './banco';
import { GrupoDespesa } from './grupoDespesa';



function FiltroRelatorio(props: { tipoFiltro: string }) {

    const [banco, setBanco] = useState<Banco[]>([]);
    const [grupoDespesa, setGrupoDespesa] = useState<GrupoDespesa[]>([]);
    const [idGrupoDespesa, setIdGrupoDespesa] = useState('');
    const [IdBanco, setSelectValueIdBanco] = useState('');

    /*Função GET que puxa os dados do grupo de despesa via API.*/
    const carregaGrupoDespesa = async () => {

        const json = await api.listarGrupoDespesa();
        const dataArray = Array.isArray(json) ? json : [json];
        setGrupoDespesa(dataArray);

    }

    const carregaBancos = async () => {

        const json = await api.listarBancos();
        const dataArray = Array.isArray(json) ? json : [json];
        setBanco(dataArray);
    }

    useEffect(() => {
        carregaGrupoDespesa();
        carregaBancos();
    })


    return (
        <div className="filtros">
            <div className="raio_group">
                <p>Data: <input type="date" name="" id="" /> à <input type="date" name="" id="" /> </p>

                <label><input type="radio" name="tipo_pagamento" id="" />Lançamento</label>
                <label><input type="radio" name="tipo_pagamento" id="" checked />Vencimento</label><br />
            </div>

            {props.tipoFiltro === 'GD' &&

                <select className="pesquisar" name="GrupoDespesa" id="" value={idGrupoDespesa} onChange={(e) => setIdGrupoDespesa(e.target.value)}  >
                    <option key={0} value="" >Grupo de Despesa</option >
                    {
                        grupoDespesa.map(
                            (valor, index) => <option key={valor.id} value={valor.id}>{valor.descricao}</option>
                        )
                    }
                </select>


            }
            {props.tipoFiltro === 'BC' &&

                <select className="pesquisar" name="Banco" id="" /*onClick={carregaBancos}*/ onChange={(e) => { setSelectValueIdBanco(e.target.value) }}>
                    <option key={0} value="" >Informe o Banco</option>
                    {
                        banco.map(
                            (item, chave) => <option key={item.id} value={item.id}>{item.nome}</option>
                        )
                    }
                </select>

            }


            <input className="pesquisar" type="text" name="" placeholder="Pesquisar por Descrição" id="" />
            <img className="imgPesquisa" src={require("../../images/botao-pesquisar.png")} alt="exibe imagem do padrao" />

        </div>
    )
}

export default FiltroRelatorio;