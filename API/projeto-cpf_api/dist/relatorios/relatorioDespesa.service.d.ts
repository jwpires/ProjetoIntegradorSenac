import { Despesa } from "src/LancamentoDespesa/despesa.entity";
import { Repository } from "typeorm";
export declare class RelatorioDespesaService {
    private relatorioDespesaDash;
    constructor(relatorioDespesaDash: Repository<Despesa>);
    listar(): Promise<Despesa[]>;
}