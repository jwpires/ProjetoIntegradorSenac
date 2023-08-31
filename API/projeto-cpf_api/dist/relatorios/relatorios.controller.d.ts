import { RetornoGeralDTO } from "src/agencia/dto/retornoGeral.dto";
import { Despesa } from "src/LancamentoDespesa/despesa.entity";
import { ListaRelatorioDespesaDTO } from "./dto/listarRelatorioDespesa.dto";
import { ListarRelatorioSaldoDTO } from "./dto/listaSaldoDTO";
import { RelatorioDespesaService } from "./relatorioDespesa.service";
import { RelatorioSaldoService } from "./relatorioSaldo.service";
export declare class RelatoriosController {
    private readonly relatorioService;
    private readonly relatorioSaldoServide;
    constructor(relatorioService: RelatorioDespesaService, relatorioSaldoServide: RelatorioSaldoService);
    RetornaListaDespesaDash(): Promise<Despesa[]>;
    RetornaSaldosDash(): Promise<ListarRelatorioSaldoDTO[]>;
    RetornaListaDespesaEmAberto(): Promise<ListaRelatorioDespesaDTO[]>;
    RetornaListaDespesaPagas(): Promise<ListaRelatorioDespesaDTO[]>;
    alteraStatusPagamento(id: string): Promise<RetornoGeralDTO>;
    alteraSaldo(id: string, saldo: number): Promise<RetornoGeralDTO>;
}
