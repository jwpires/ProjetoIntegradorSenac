export const api = {

    listarBancos: async () => {

        let response = await fetch("http://localhost:3000/bancos");
        let json = await response.json();


        return json;
    },


    /* Interação de GET, POST com a tela de Cadastro de Banco */

    InserirBanco: async (nomeBanco: string) => {

        let response = await fetch("http://localhost:3000/bancos",
            {
                // por padrão o method do fetch, é o get, por isso não precisamos especificar.
                method: 'POST',
                body: JSON.stringify
                    ({
                        //campos requisitados pela API
                        nome: nomeBanco
                    }),
                headers: {
                    //caso seja necessário o envio de algum
                    //parametro no cabeçalho da requisição, se faz aqui;
                    'Content-Type': 'application/json'
                }
            });
        // coleta o retorno do meu metodo post
        let json = await response.json();

        return json;
    },

    InserirContaCorrente: async (idBanco: string, nomeProprietario: string, numeroConta: string, tipoConta: string, saldo: number) => {
        let response = await fetch("http://localhost:3000/agencia",
            {
                // por padrão o method do fetch, é o get, por isso não precisamos especificar.
                method: 'POST',
                body: JSON.stringify
                    ({
                        //campos requisitados pela API
                        id_banco: idBanco,
                        nomeProprietario: nomeProprietario,
                        numeroConta: numeroConta,
                        tipoConta: tipoConta,
                        saldo: saldo
                    }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

        let json = await response.json();

        return json
    },

    /** POST ao que se refere as informações de cadastro de Grupo de Despesa */
    InserirGrupoDespesa: async (nome_:string) => {
        let response = await fetch("http://localhost:3000/grupoDespesa",
            {
                // por padrão o method do fetch, é o get, por isso não precisamos especificar.
                method: 'POST',
                body: JSON.stringify
                    ({
                        //campos requisitados pela API
                        descricao: nome_
                    }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

        let json = await response.json();

        return json;
    }
}