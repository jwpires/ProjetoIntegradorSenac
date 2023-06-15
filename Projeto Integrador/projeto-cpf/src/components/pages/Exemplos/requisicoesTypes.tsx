import { useState, useEffect } from "react";
import HeaderMenu from "../../header/HeaderMenu";
import RequisicoesTypesAsync from "./requisicoesTypesAsync";
import { Link } from "react-router-dom";

//Importo o meu tipo a ser utilizado.
import { Produto } from "./produto";

function RequisicoesTypes () {

    // Na declaração da minha constante, agora meu STATE será um Array de Movies
    const [produtos , setProdutos] = useState<Produto[]>([]);

    // UseEffects executa a função no momento em que a tela é aberta.
    useEffect(() => {
         carregarProdutos();
    } , []);

    const carregarProdutos = () => {
            fetch("https://fakestoreapi.com/products/")       
            .then((response) => {
                return response.json();
        })        
        .then((json) => {
            setProdutos(json);
        } )          

        // Demonstração do Async/Await
        alert('Executou este processo');
    }   

    return (
    <div>
        <HeaderMenu exibe></HeaderMenu>
        
        <h1>PAGINA EXEMPLO DE REQUISIÇÕES</h1>

        <hr /><br />        
        <button onClick={carregarProdutos}> Carregar Produtos </button>
        <br />        
        Total de produtos: {produtos.length}
        <br /><hr />
        <h1>Lista de Produtos</h1>
        <div>
            {produtos.map((item, index) => (
                <div key={index} >                    
                    {item.title}
                    <br />
                    {item.description}
                    <br />                    
                    <hr />
                </div>

            ) )}
        </div>
        <br /><hr />
        <button> <Link to="../requisicoesTypesAsync">Ir para Requisições Assincronas</Link> </button>

     
    </div>
    )
}

export default RequisicoesTypes;