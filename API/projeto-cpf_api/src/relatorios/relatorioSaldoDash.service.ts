import { Inject } from "@nestjs/common";
import { Injectable } from "@nestjs/common";
import { Agencia } from "src/agencia/agencia.entity";
import { Repository } from "typeorm";

@Injectable()
export class RelatorioSaldoDashService{
    constructor(
        @Inject('AGENCIA_REPOSITORY')
        private relatorioSaldoDash: Repository<Agencia>
    ) { }
    
    async listar(): Promise<Agencia[]>{
        return this.relatorioSaldoDash.find();
    }

}