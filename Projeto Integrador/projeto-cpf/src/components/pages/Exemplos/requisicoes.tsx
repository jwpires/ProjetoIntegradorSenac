import { useState } from "react";
import HeaderMenu from "../../header/HeaderMenu";
import { Link } from "react-router-dom";

function Requisicoes () {

    const [produtos , setProdutos] = useState([]);

    const carregarProdutos = () => {
        // O comando fetch serve para executarmos nativamente a conexão entre 
        //    uma API externa e exibir suas informações no contexto interno.
        fetch("https://fakestoreapi.com/products/")
        // .then representa o que deve ser realizado a partir da conexão com o link informado.
        //  Neste caso, armazena a resposta obtida pela API externa, num JSON.
            .then((response) => {
                return response.json();
        })
        // Após obter a resposta da API externa, o fetch deverá setar o valor na variável produtos que é um array.
        // Fará isso por meio do setProdutos, declarado previamente.
        .then((json) => {
            setProdutos(json);
        } )  
    }
   
    return (
    <div>
        <HeaderMenu exibe></HeaderMenu>
        
        <h1>PAGINA EXEMPLO DE REQUISIÇÕES</h1>

        <hr /><br />
        {/* Criando botão para aplicação da função de busca mediante ao clique. */}
        <button onClick={carregarProdutos}> Carregar Produtos </button>
        <br />
        {/* Apenas exibe a quantidade de registros retornados. */}
        Total de produtos: {produtos.length}
        <br /><hr />
        <button> <Link to="../requisicoestype">Ir para Requisições com Types</Link> </button>

     
    </div>
    )
}

export default Requisicoes;