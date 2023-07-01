
export const api ={
    
    CarregarTodosUsuarios:async () => {

        // Declara a var response separadamente para que possa aguardar o resultado de sua consulta
        let response = await fetch("https://jsonplaceholder.typicode.com/todos");
        // Declara a var json separadamente para que possa aguardar o json da requisição anterior ser preenchido
        let json = await response.json(); 

        return json;
    },

    InserirUsuario:async (title_:string, body_:string) => {

        let response = await fetch('https://jsonplaceholder.typicode.com/todos',
            {
                // por padrão o method do fetch, é o get, por isso não precisamos especificar.
                method: 'POST',
                body: JSON.stringify
                ({
                    //campos requisitados pela API
                    title: title_,
                    body:body_,
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

            return json;
    },

    CarregarUsuarioUnico: async (param:string) => {
        
        let response = await fetch('https://jsonplaceholder.typicode.com/todos' +'/'+ param);
        let json = await response.json();
        return json;
    }
} 