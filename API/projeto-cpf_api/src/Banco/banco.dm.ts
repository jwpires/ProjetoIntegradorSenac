import {  Injectable } from "@nestjs/common";
import { Banco } from "./banco.entity";
import { InserirBancoDTO } from "./dto/inserirBanco.dto";

@Injectable()
export class BancosArmazenados{
    #bancos : Banco[] = [];

    get banco(){
        return this.#bancos;
    }
    /* função que cadastra um ou mais bancos */
    inserirBanco(banco: Banco){
        this.#bancos.push(banco);
    }

    private buscaPorId(id:string){
        const consulta = this.banco.find(
            banco => banco.id === id
        )

        if (!consulta) {
            throw new Error ('Banco não encontrado.')
        }

        return consulta;
    }

    consultarBancoPorNome(nome: string){
        const consulta = this.#bancos.find(
            banco => banco.nome === nome
        )

        if(!consulta){
            throw new Error("Banco não encontrado.");
        }

        return consulta;
    }
}