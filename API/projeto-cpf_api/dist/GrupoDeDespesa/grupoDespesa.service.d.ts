import { Repository } from "typeorm";
import { GrupoDespesa } from "./grupoDespesa.entity";
export declare class GrupoDespesaService {
    private grupoDespesaRepository;
    constructor(grupoDespesaRepository: Repository<GrupoDespesa>);
    listar(): Promise<GrupoDespesa[]>;
    buscarGrupoDespesaPorId(id: string): Promise<GrupoDespesa>;
    inserirGrupoDespesa(grupoDespesa: GrupoDespesa): Promise<void>;
}
