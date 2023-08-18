import { Despesa } from "src/LancamentoDespesa/despesa.entity";
import { Repository } from "typeorm";
import { ListaRelatorioDespesaDTO } from "./dto/listarRelatorioDespesa.dto";
export declare class RelatorioDespesaService {
    private relatorioDespesaDash;
    constructor(relatorioDespesaDash: Repository<Despesa>);
    listar(): Promise<Despesa[]>;
    listaComFiltro(NOME_MARCA?: string): Promise<ListaRelatorioDespesaDTO[]>;
}
