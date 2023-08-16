import { GrupoDespesa } from "src/GrupoDeDespesa/grupoDespesa.entity";
import { Repository } from "typeorm";
import { Despesa } from "./despesa.entity";
import { InserirDespesaDTO } from "./dto/inserirDespesa.dto";
import { RetornoDespesasDTO } from "./dto/retornoDespesas.dto";
import { GrupoDespesaService } from "src/GrupoDeDespesa/grupoDespesa.service";
export declare class DespesasService {
    private despesaRepository;
    private grupoDespesaRepository;
    private readonly grupoDespesaService;
    constructor(despesaRepository: Repository<Despesa>, grupoDespesaRepository: Repository<GrupoDespesa>, grupoDespesaService: GrupoDespesaService);
    listar(): Promise<Despesa[]>;
    inserirDespesa(dados: InserirDespesaDTO): Promise<RetornoDespesasDTO>;
}
