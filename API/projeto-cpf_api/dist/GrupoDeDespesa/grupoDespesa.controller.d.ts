import { ArmazenaGrupoDespesa } from "./grupoDespesa.dm";
import { GrupoDespesaEntity } from "./grupoDespesa.entity";
import { InserirGrupoDespesaDTO } from "./validacao/dto/inseriGrupoDespesa.dto";
export declare class GrupoDespesaController {
    private armazenaGrupoDespesa;
    constructor(armazenaGrupoDespesa: ArmazenaGrupoDespesa);
    RetornoGrupoDespesa(grupoDespesa: GrupoDespesaEntity): void;
    CriarGrupoDespesa(dadosGrupoDespesa: InserirGrupoDespesaDTO): {
        dadosGrupoDespesa: InserirGrupoDespesaDTO;
        message: string;
    };
}
