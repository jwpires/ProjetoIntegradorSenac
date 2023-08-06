import { Agencia } from "src/agencia/agencia.entity";
import { Despesa } from "src/LancamentoDespesa/despesa.entity";
import { RelatorioDespesaDashService } from "./relatorioDespesaDash.service";
import { RelatorioSaldoDashService } from "./relatorioSaldoDash.service";
export declare class RelatoriosController {
    private readonly relatorioDashService;
    private readonly relatorioSaldoServide;
    constructor(relatorioDashService: RelatorioDespesaDashService, relatorioSaldoServide: RelatorioSaldoDashService);
    RetornaListaDespesaDash(): Promise<Despesa[]>;
    RetornaSaldosDash(): Promise<Agencia[]>;
}
