import { useState, useEffect, ChangeEvent } from "react";
import HeaderMenu from "../../header/HeaderMenu";
import { Usuario } from "./usuarios";
import FormularioPost from "../../formpost/formularioPost";



function RequisicoesTypesAsyncPost () {

    //Criação das constatntes apara armazenar o valorr a ser postado
    const [usuarios , setUsuarios] = useState<Usuario[]>([]);    

     const handleAddClick = async(title: string, body: string) => {
        // if(addBodyText && addBodyText){
            let response = await fetch('https://jsonplaceholder.typicode.com/posts',
            {
                // por padrão o method do fetch, é o get, por isso não precisamos especificar.
                method: 'POST',
                body: JSON.stringify
                ({
                    //campos requisitados pela API
                    title: title,
                    body:body,
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


        // else{
        // alert('Preencha as informações.')
        // }
     }


        
    
    
    return (
    <div>
        <HeaderMenu exibe></HeaderMenu>      

       <FormularioPost onAdd={handleAddClick }></FormularioPost>
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

export default RequisicoesTypesAsyncPost;