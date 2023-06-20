import { useState, useEffect, ChangeEvent } from "react";
import HeaderMenu from "../../header/HeaderMenu";
import { Usuario } from "./usuarios";



function RequisicoesTypesAsyncPost () {

    //Criação das constatntes apara armazenar o valorr a ser postado
    const [usuarios , setUsuarios] = useState<Usuario[]>([]);
    const [addTitleText, setAddTitleText] = useState('');
    const [addBodyText, setAddBodyText] = useState('');

    // Funções paa alterar os campos criados na tela
     const handleAddTitleChange = (e: ChangeEvent<HTMLInputElement>) =>{
        setAddTitleText(e.target.value)
     }

     const handleAddBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) =>{
        setAddBodyText(e.target.value)
     }

     const handleAddClick = async() => {
        if(addBodyText && addBodyText){
            let response = await fetch('https://jsonplaceholder.typicode.com/posts',
            {
                // por padrão o method do fetch, é o get, por isso não precisamos especificar.
                method: 'POST',
                body: JSON.stringify
                ({
                    //campos requisitados pela API
                    title: addTitleText,
                    body:addBodyText,
                    userID: 1
                }),
                headers:{
                    //caso seja necessário o envio de algum
                    //parametro no cabeçalho da requisição, se faz aqui;
                    'Content-Type':'application/json'
                }
            });
            // coleta o reotrno do meu metodo post
            let json = await response.json();

            console.log(json);

            if (json.id) {
                alert('Post Adicionado com sucesso')
                setUsuarios((usuarios) =>[...usuarios, json]);
                
            } else {
                alert('Ocorreu alguma falha.')
            }


        }else{
            alert('Preencha as informações.')
        }
     }


        
    
    
    return (
    <div>
        <HeaderMenu exibe></HeaderMenu>      

        <h2>Adiciona Post</h2>
        <br />
        <input 
             value={addTitleText}
             type="text"
             placeholder="Digite um Titulo" 
             onChange={handleAddTitleChange}
        />
        <br />
        <br />

        <textarea 
            name=""
            id=""
            value={addTitleText}
            onChange={handleAddBodyChange}>
        </textarea>

        <button onClick={handleAddClick}>Adicionar</button>
     
    </div>
    )
}

export default RequisicoesTypesAsyncPost;