import { RetornoGeralDTO } from "src/agencia/dto/retornoGeral.dto";
import { Despesa } from "src/LancamentoDespesa/despesa.entity";
import { Repository } from "typeorm";
import { ListaRelatorioDespesaDTO } from "./dto/listarRelatorioDespesa.dto";
export declare class RelatorioDespesaService {
    private relatorioDespesaDash;
    constructor(relatorioDespesaDash: Repository<Despesa>);
    listar(): Promise<Despesa[]>;
    listarRelatorioDespesa(DATAINICIO?: string, DATAFIM?: string, TIPO?: number, PAGO?: number): Promise<ListaRelatorioDespesaDTO[]>;
    buscarPorID(id: string): Promise<Despesa>;
    alterarStatusPagametoDespesa(id: string): Promise<RetornoGeralDTO>;
}
