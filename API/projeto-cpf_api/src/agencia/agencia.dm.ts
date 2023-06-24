import {  Injectable } from "@nestjs/common";
import { AgenciaEntity } from "./agencia.entity";
import { InserirAgenciaDTO } from "./dto/inserirAgencia.dto";

@Injectable()
export class AgenciaArmazenados{
    #agencias : AgenciaEntity[] = [];

    get agencia(){
        return this.#agencias;
    }
    
}