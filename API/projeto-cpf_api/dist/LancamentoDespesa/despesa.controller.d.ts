import { DespesasArmazenadas } from "./despesa.dm";
<<<<<<< HEAD
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
=======
export declare class DespesaController {
    private armazenaDespesa;
    constructor(armazenaDespesa: DespesasArmazenadas);
>>>>>>> 09402edd8a19c6c5309fa8db0f3f5617d4c40984
}
