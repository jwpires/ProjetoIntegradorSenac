import { Agencia } from "src/agencia/agencia.entity";
import { Despesa } from "src/LancamentoDespesa/despesa.entity";
import { RelatorioDespesaService } from "./relatorioDespesa.service";
import { RelatorioSaldoDashService } from "./relatorioSaldoDash.service";
export declare class RelatoriosController {
    private readonly relatorioService;
    private readonly relatorioSaldoServide;
    constructor(relatorioService: RelatorioDespesaService, relatorioSaldoServide: RelatorioSaldoDashService);
    RetornaListaDespesaDash(): Promise<Despesa[]>;
    RetornaSaldosDash(): Promise<Agencia[]>;
    RetornaListaDespesaEmAberto(): Promise<Despesa[]>;
    RetornaListaDespesaPagas(): Promise<Despesa[]>;
}
