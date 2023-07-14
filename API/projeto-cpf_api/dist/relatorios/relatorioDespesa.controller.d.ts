import { RelatorioDespesa } from "./relatorioDepesa.dm";
export declare class RelatorioDespesaController {
    private relatorio;
    constructor(relatorio: RelatorioDespesa);
    ExibirRelatorio(): Promise<void>;
}
