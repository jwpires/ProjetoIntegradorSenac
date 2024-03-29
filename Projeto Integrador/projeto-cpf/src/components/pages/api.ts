export const api = {

/* Interação da API na pagina HOME com depesas em abertas e saldos de contas bancárias */

    listarDespesasDash: async() => {
        let response =await fetch("https://cpfservice.onrender.com/relatorios/despesa-dash");
        let json = await response.json();
        return json;
    },

    listarSaldosBancarios: async (banco?: string, descricao?: string) => {
        let indefinido: string = 'undefined';
        if (banco == "" && descricao == "") {
            var response =  await fetch("https://cpfservice.onrender.com/relatorios/saldo/"+indefinido+"/"+indefinido); 
        } else {
            if (banco == "") {
               var response =  await fetch("https://cpfservice.onrender.com/relatorios/saldo/"+indefinido+"/"+descricao); 
            } else {
                if (descricao == "") {
                    var response =  await fetch("https://cpfservice.onrender.com/relatorios/saldo/"+banco+"/"+indefinido); 
                } else {
                    var response =  await fetch("https://cpfservice.onrender.com/relatorios/saldo/"+banco+"/"+descricao);
                 }
            }
        }

        //let response =  await fetch("https://cpfservice.onrender.com/relatorios/saldo/"+a+"/"+a);
        let json = await response.json();
        return json; 
    },

 /* Interação de GET, POST com a tela de Cadastro de Banco */
    listarBancos: async () => {

        let response = await fetch("https://cpfservice.onrender.com/bancos");
        let json = await response.json();
        return json;
    },

    InserirBanco: async (nomeBanco: string) => {

        let response = await fetch("https://cpfservice.onrender.com/bancos",
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
        let response = await fetch("https://cpfservice.onrender.com/agencia",
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
        let response = await fetch("https://cpfservice.onrender.com/grupoDespesa",
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

        let response = await fetch("https://cpfservice.onrender.com/grupoDespesa");
        let json = await response.json();


        return json;
    },

    InserirLancamentoDespesa: async (descricao_: string, grupoDespesa_: string, dataLancamento_: Date,
        dataVencimento_: Date, valor_: number, pago_: boolean) => {
        
        let response = await fetch("https://cpfservice.onrender.com/lancamentoDespesa",
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

    /** referente ao relatórios */
    removerDespesa: async(id: string) => {

        let response = await fetch("https://cpfservice.onrender.com/lancamentoDespesa/remove-"+id,
            {
                // por padrão o method do fetch, é o get, por isso não precisamos especificar.
                method: 'DELETE',
                body: JSON.stringify
                    ({
                        //campos requisitados pela API
                        id
                    }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

        let json = await response.json();

        return json;
    },

    alterarStatusPagamentoDespesa: async(id: string) => {
        let response = await fetch("https://cpfservice.onrender.com/relatorios/alterar-"+id,
            {
                // por padrão o method do fetch, é o get, por isso não precisamos especificar.
                method: 'PUT',
                body: JSON.stringify
                    ({
                        //campos requisitados pela API
                        id
                    }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

        let json = await response.json();

        return json;
    },

    alterarSaldo: async(id: string, valor: number) => {
        let response = await fetch("https://cpfservice.onrender.com/relatorios/alterarSaldo-"+id+"-valor-"+valor,
            {
                // por padrão o method do fetch, é o get, por isso não precisamos especificar.
                method: 'PUT',
                body: JSON.stringify
                    ({
                        //campos requisitados pela API
                        id,
                        valor
                    }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

        let json = await response.json();

        return json;
    },

    /** GET referente as depesas pagas. */
    listarRelatorioDespesasPagas: async (dataInicio: string, dataFim: string, tipo: number, pago: number, gdespesa: string, descricao: string) => {
        
        let indefinido: string = 'undefined';
    
        if (gdespesa != "" && descricao != "") {
            var response =await fetch("https://cpfservice.onrender.com/relatorios/despesas-pagas/"+dataInicio+"/"+dataFim+"/"+tipo+"/"+pago+"/"+gdespesa+"/"+descricao);
        } else {
            if (gdespesa == "") {
                var response =await fetch("https://cpfservice.onrender.com/relatorios/despesas-pagas/"+dataInicio+"/"+dataFim+"/"+tipo+"/"+pago+"/"+indefinido+"/"+descricao);
            } else {
                if (descricao == "") {
                    var response = await fetch("https://cpfservice.onrender.com/relatorios/despesas-pagas/" + dataInicio + "/" + dataFim + "/" + tipo + "/" + pago + "/" + gdespesa + "/" + indefinido);
                } else {
                    var response = await fetch("https://cpfservice.onrender.com/relatorios/despesas-pagas/" + dataInicio + "/" + dataFim + "/" + tipo + "/" + pago + "/" + indefinido+ "/" + indefinido);
                }
            }
        }

        let json = await response.json();
        return json;
    },

    listarRelatorioDespesasEmAberto: async (dataInicio: string, dataFim: string, tipo: number, pago: number, gdespesa:string, descricao: string) => {
        let indefinido: string = 'undefined';
    
        if (gdespesa != "" && descricao != "") {
            var response =await fetch("https://cpfservice.onrender.com/relatorios/despesas-em-aberto/"+dataInicio+"/"+dataFim+"/"+tipo+"/"+pago+"/"+gdespesa+"/"+descricao);
        } else {
            if (gdespesa == "") {
                var response =await fetch("https://cpfservice.onrender.com/relatorios/despesas-em-aberto/"+dataInicio+"/"+dataFim+"/"+tipo+"/"+pago+"/"+indefinido+"/"+descricao);
            } else {
                if (descricao == "") {
                    var response =await fetch("https://cpfservice.onrender.com/relatorios/despesas-em-aberto/"+dataInicio+"/"+dataFim+"/"+tipo+"/"+pago+"/"+gdespesa+"/"+indefinido);
                } else {
                    var response =await fetch("https://cpfservice.onrender.com/relatorios/despesas-em-aberto/"+dataInicio+"/"+dataFim+"/"+tipo+"/"+pago+"/"+indefinido+"/"+indefinido);
                }   
            }
        }

        let json = await response.json();
        return json;
    },

    Logar: async(login: string, senha: string) => {
        {
            console.log("dentro da função POST")
            console.log('login: ',login);
            console.log('senha: ',senha)
            let response = await fetch('https://cpfservice.onrender.com/auth/login',
            {
                method: 'POST',
                body: JSON.stringify 
                ({
                    username: login, 
                    password: senha,
                }),
                headers:{
                    'Content-Type' : 'application/json; charset=utf-8'
                }
            });
            
            let json = await response.json();
            //console.log(json);
            return json;
        }
    }
}