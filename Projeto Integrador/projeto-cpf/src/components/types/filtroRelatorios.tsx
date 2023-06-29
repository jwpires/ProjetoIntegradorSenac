import '../../style/style.css'

function FiltroRelatorio() {

    return (
        <div className="filtros">
            <div className="raio_group">
                <p>Data: <input type="date" name="" id="" /> à <input type="date" name="" id="" /> </p>

                <label><input type="radio" name="tipo_pagamento" id="" />Lançamento</label>
                <label><input type="radio" name="tipo_pagamento" id="" />Vencimento</label><br />
            </div>

            <select className="pesquisar" name="grupoDespesa" id="">
                <option className="pesquisars" value="">Informe o Grupo Despesa</option>
            </select>

            <input className="pesquisar" type="text" name="" placeholder="Pesquisar por Descrição" id="" />
            <img className="imgPesquisa" src={require("../../images/botao-pesquisar.png")} alt="exibe imagem do padrao" />

        </div>
    )
}

export default FiltroRelatorio;