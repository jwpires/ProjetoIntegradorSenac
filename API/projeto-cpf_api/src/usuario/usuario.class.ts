
export class Usuario{
    nome: String;
    idade: BigInteger;
    cidade: String;
    email: String;
    telefone: String;
    #senha: String;

    constructor(nome: String, idade: BigInteger, cidade: String, email: String, telefone: String, senha: String){
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade;
        this.email = email;
        this.telefone = telefone;
        this.#senha = senha;
    }

   
    get senha(){
        return "---------------";
    }

    set senha(senhaNova){
        this.#senha = senhaNova;
    }


}