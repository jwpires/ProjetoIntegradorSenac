import {  Injectable } from "@nestjs/common";
import { AgenciaEntity } from "./agencia.entity";

@Injectable()
export class AgenciaArmazenados{
    #agencias : AgenciaEntity[] = [];

    get Agencia(){
        return this.#agencias;
    }

    agenciaJaCadastrada(numConta:string, codBanco:string){
        if(
        this.#agencias.find(
            conta => (conta.numeroConta === numConta && conta.id_banco === codBanco)
        ) )
             return true;
        
        return false
    
    }

    inserirAgencia(agencia: AgenciaEntity) {
        this.#agencias.push(agencia);
    }
    
}