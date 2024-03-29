import { Despesa } from "./despesa.entity";
import { InserirDespesaDTO } from "./dto/inserirDespesa.dto";
import { DespesasService } from "./despesa.service";
import { GrupoDespesaService } from "src/GrupoDeDespesa/grupoDespesa.service";
import { RetornoGeralDTO } from "src/agencia/dto/retornoGeral.dto";
export declare class DespesaController {
    private readonly despesaService;
    private readonly grupoDespesaService;
    constructor(despesaService: DespesasService, grupoDespesaService: GrupoDespesaService);
    listarDespesas(): Promise<Despesa[]>;
    CriarDespesa(dadosDespesa: InserirDespesaDTO): Promise<import("./dto/retornoDespesas.dto").RetornoDespesasDTO>;
    removeDespesa(id: string): Promise<RetornoGeralDTO>;
}
