import { GrupoDespesaService } from "./grupoDespesa.service";
import { GrupoDespesa } from "./grupoDespesa.entity";
import { InserirGrupoDespesaDTO } from "./dto/inseriGrupoDespesa.dto";
export declare class GrupoDespesaController {
    private readonly grupoDespesaService;
    constructor(grupoDespesaService: GrupoDespesaService);
    RetornoTodosGrupoDespesa(): Promise<GrupoDespesa[]>;
    CriarGrupoDespesa(dadosGrupoDespesa: InserirGrupoDespesaDTO): Promise<{
        dadosGrupoDespesa: InserirGrupoDespesaDTO;
        message: string;
    }>;
}
