import { Inject } from "@nestjs/common";
import { Injectable } from "@nestjs/common";
import { Despesa } from "src/LancamentoDespesa/despesa.entity";
import { Repository } from "typeorm";

@Injectable()
export class RelatorioDespesaDashService{
    constructor(
        @Inject('DESPESA_REPOSITORY')
        private relatorioDespesaDash: Repository<Despesa>
    ) { }
    
    async listar(): Promise<Despesa[]>{
        return this.relatorioDespesaDash.find();
    }

}