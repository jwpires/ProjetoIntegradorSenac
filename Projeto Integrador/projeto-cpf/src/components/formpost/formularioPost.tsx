import { ChangeEvent ,useState } from "react";

type Props = {
    onAdd: (title: string, body:string) => void
}

    function FormularioPost({onAdd}:Props){

    const [addTitleText, setAddTitleText] = useState('');
    const [addBodyText, setAddBodyText] = useState('');

    // Funções paa alterar os campos criados na tela
    const handleAddTitleChange = (e: ChangeEvent<HTMLInputElement>) =>{
        setAddTitleText(e.target.value)
     }

     const handleAddBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) =>{
        setAddBodyText(e.target.value)
     }

     function handleClickBtn(){
        if(addTitleText && addBodyText){
            onAdd(addTitleText, addBodyText);
        } else alert("Preencha todos os campos.")
        
     }

    return(
        <div>
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
             value={addBodyText}
             onChange={handleAddBodyChange}
            >
        </textarea>

        <button onClick={handleClickBtn}>Adicionar</button>
        </div>
    );
}

export default FormularioPost;