import { Agencia } from "src/agencia/agencia.entity";
import { Despesa } from "src/LancamentoDespesa/despesa.entity";
import { ListaRelatorioDespesaDTO } from "./dto/listarRelatorioDespesa.dto";
import { RelatorioDespesaService } from "./relatorioDespesa.service";
import { RelatorioService } from "./relatorios.service";
export declare class RelatoriosController {
    private readonly relatorioService;
    private readonly relatorioSaldoServide;
    constructor(relatorioService: RelatorioDespesaService, relatorioSaldoServide: RelatorioService);
    RetornaListaDespesaDash(): Promise<Despesa[]>;
    RetornaSaldosDash(): Promise<Agencia[]>;
    RetornaListaDespesaEmAberto(): Promise<ListaRelatorioDespesaDTO[]>;
    RetornaListaDespesaPagas(): Promise<ListaRelatorioDespesaDTO[]>;
}
