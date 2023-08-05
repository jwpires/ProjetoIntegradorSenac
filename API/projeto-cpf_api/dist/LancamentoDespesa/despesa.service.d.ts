import { Repository } from "typeorm";
import { Despesa } from "./despesa.entity";
export declare class DespesasService {
    private despesaRepository;
    constructor(despesaRepository: Repository<Despesa>);
    inserirDespesa(despesa: Despesa): Promise<void>;
}
