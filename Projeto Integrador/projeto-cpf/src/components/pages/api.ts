export const api = {

/* Interação da API na pagina HOME com depesas em abertas e saldos de contas bancárias */

    listarDespesasDash: async() => {
        let response =await fetch("http://localhost:3000/relatorios/despesa-dash");
        let json = await response.json();
        return json;
    },

    listarSaldosBancarios: async () => {
        let response =  await fetch("http://localhost:3000/relatorios/saldo");
        let json = await response.json();
        return json; 
    },


 /* Interação de GET, POST com a tela de Cadastro de Banco */
    listarBancos: async () => {

        let response = await fetch("http://localhost:3000/bancos");
        let json = await response.json();
        return json;
    },


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

    /*Informações de POST e GET tela de cadastro de conta corrente.*/
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
    InserirGrupoDespesa: async (nome_: string) => {
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
    },

    /** POST E GET referente a tela de cadastro de lançamento de despesa */
    listarGrupoDespesa: async () => {

        let response = await fetch("http://localhost:3000/grupoDespesa");
        let json = await response.json();


        return json;
    },

    InserirLancamentoDespesa: async (descricao_: string, grupoDespesa_: string, dataLancamento_: Date,
        dataVencimento_: Date, valor_: number, pago_: boolean) => {
        
        let response = await fetch("http://localhost:3000/lancamentoDespesa",
            {
                // por padrão o method do fetch, é o get, por isso não precisamos especificar.
                method: 'POST',
                body: JSON.stringify
                    ({
                        //campos requisitados pela API
                        descricao: descricao_,
                        id_GrupoDespesa: grupoDespesa_,
                        dataLancamento: dataLancamento_,
                        dataVencimento: dataVencimento_,
                        valor: valor_,
                        pago: pago_
                    }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

        let json = await response.json();

        return json;
    },
    /** GETs referente ao relatórios */
    /** GET referente as depesas pagas. */
    listarRelatorioDespesasPagas: async() => {
        let response =await fetch("http://localhost:3000/relatorios/despesas-pagas");
        let json = await response.json();
        return json;
    },

    listarRelatorioDespesasEmAberto: async() => {
        let response =await fetch("http://localhost:3000/relatorios/despesas-em-aberto");
        let json = await response.json();
        return json;
    },

    Logar: async(username: string, password: string) => {
        {
            let response = await fetch('http://localhost:3000/auth/login',
            {
                method: 'POST',
                body: JSON.stringify
                ({
                    username, password
                }),
                headers:{
                    'Content-Type' : 'applications/json; charset=utf-8'
                }
            });
            let json = await response.json();
            console.log(json);
            return json;
        }
    }
}