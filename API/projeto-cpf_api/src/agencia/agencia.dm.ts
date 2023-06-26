import {  Injectable } from "@nestjs/common";
import { AgenciaEntity } from "./agencia.entity";

@Injectable()
export class AgenciaArmazenados{
    #agencias : AgenciaEntity[] = [];

    get Agencia(){
        return this.#agencias;
    }

    inserirAgencia(agencia: AgenciaEntity) {
        this.#agencias.push(agencia);
    }
    
}