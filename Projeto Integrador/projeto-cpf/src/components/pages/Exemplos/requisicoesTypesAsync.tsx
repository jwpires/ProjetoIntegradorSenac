import { useState, useEffect } from "react";
import HeaderMenu from "../../header/HeaderMenu";
import { Usuario } from "./usuarios";
import { api } from "./apiExemplo";

//interagi com arquivo:
//api.ts


function RequisicoesTypesAsync () {

        const [usuarios , setUsuarios] = useState<Usuario[]>([]);

        const [loading, setLoading] = useState(false);

    useEffect(() => { // utilidade: carrega ao abrir a tela
   
    } , []);

    // Para tornar uma função assincrona preparada para esperar sua resposta antes de continuar a execução
    // do sistema, usando o termo sync na declaração da função, assim:

    const carregarUsuarios = async () => {        
        setLoading(true);
        try{
            let json = await api.CarregarTodosUsuarios();
            const dataArray = Array.isArray(json) ? json : [json];
            setUsuarios(dataArray);
            setLoading(false);
        }catch{
            alert('Erro!');
            setLoading(false);
        }

    
    }  

    return (
    <div>
        <HeaderMenu exibe></HeaderMenu>      

        <hr /><br />        

        {/* No carregamento dos elementos de tela, fazemos o tratamento para exibir ou não o conteúdo condicionalmente */}
        {loading && 
            <div>Carregando conteúdo ... </div>
        }

        {!loading &&
            <div>
                <h1>PAGINA EXEMPLO DE REQUISIÇÕES</h1>
                <button onClick={carregarUsuarios}> Carregar Usuarios </button>
                <br />
                Total de Usuarios: {usuarios.length} 
             </div>
        }

        <br /><hr />
        <h1>Lista de Usuarios</h1>
        <div>
            {usuarios.map((item, index) => (
                <div key={index} >                    
                    <br />
                    {item.id}
                    <br />
                    {item.title}
                    <br />
                    {item.userId}
                    <br />                    
                    <hr />
                </div>

            ) )}
        </div>

     
    </div>
    )
}

export default RequisicoesTypesAsync;