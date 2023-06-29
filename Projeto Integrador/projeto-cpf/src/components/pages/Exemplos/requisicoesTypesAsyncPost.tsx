import { useState, useEffect, ChangeEvent } from "react";
import HeaderMenu from "../../header/HeaderMenu";
import { Usuario } from "./usuarios";
import FormularioPost from "../../formpost/formularioPost";
import UsuarioItem from "./usuarioItem";
import { api } from "./apiExemplo";


// interação com arquivos: 
//frompost/formularioPost.tsx
// usuarios.tsx
//usuarioItem
//api.ts


function RequisicoesTypesAsyncPost () {

    //Criação das constatntes apara armazenar o valorr a ser postado
    const [usuarios , setUsuarios] = useState<Usuario[]>([]); 
    const [loading, setLoading] = useState(false);

    useEffect(() => {} , []);

    
    
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

     const handleAddClick = async(title_: string, body_: string) => {
        
            let json = await api.InserirUsuario(title_, body_);

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
             
                <UsuarioItem data={item}/>

            ) )}
        </div>
     
    </div>
    )
}

export default RequisicoesTypesAsyncPost;