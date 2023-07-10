import { DespesasArmazenadas } from "./despesa.dm";
import { ListarDespesasDashboardDTO } from "./dto/exibeDespesasDashboard.dto";
import { InserirDespesaDTO } from "./dto/inserirDespesa.dto";
export declare class DespesaController {
    private armazenaDespesa;
    constructor(armazenaDespesa: DespesasArmazenadas);
    RetornoDespesasDash(): Promise<ListarDespesasDashboardDTO[]>;
    CriarDespesa(dadosDespesa: InserirDespesaDTO): Promise<{
        dadosDespesa: InserirDespesaDTO;
        message: string;
    }>;
}
