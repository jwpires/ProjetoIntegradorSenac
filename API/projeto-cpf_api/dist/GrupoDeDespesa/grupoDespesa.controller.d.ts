import { ArmazenaGrupoDespesa } from "./grupoDespesa.dm";
import { GrupoDespesaEntity } from "./grupoDespesa.entity";
import { InserirGrupoDespesaDTO } from "./dto/inseriGrupoDespesa.dto";
import { ListarGrupoDespesasDTO } from "./dto/listarGrupoDespesa.dto";
export declare class GrupoDespesaController {
    private armazenaGrupoDespesa;
    constructor(armazenaGrupoDespesa: ArmazenaGrupoDespesa);
    RetornoGrupoDespesa(grupoDespesa: GrupoDespesaEntity): ListarGrupoDespesasDTO[];
    CriarGrupoDespesa(dadosGrupoDespesa: InserirGrupoDespesaDTO): {
        dadosGrupoDespesa: InserirGrupoDespesaDTO;
        message: string;
    };
}
