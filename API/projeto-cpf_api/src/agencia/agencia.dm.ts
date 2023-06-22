import {  Injectable } from "@nestjs/common";
import { AgenciaEntity } from "./agencia.entity";
import { InserirAgenciaDTO } from "./dto/inserirAgencia.dto";

@Injectable()
export class AgenciaArmazenados{
    #agencias : AgenciaEntity[] = [];

    get agencia(){
        return this.#agencias;
    }
    /* função que cadastra um ou mais bancos */
    inserirAgencia(agencia: AgenciaEntity){
        this.#agencias.push(agencia);
    }

    buscaPorNumeroConta(numeroConta:string){
        const consulta = this.agencia.find(
            agencia => agencia.numeroConta === numeroConta
        )

        if (!consulta) {
            throw new Error ('Agência não encontrado.')
        }

        return consulta;
    }

    consultarAgenciaPorProprietario(proprietario: string){
        const consulta = this.#agencias.find(
            agencia => agencia.nomeProprietario === proprietario
        )

        if(!consulta){
            throw new Error("Proprietario não encontrado.");
        }

        return consulta;
    }
}