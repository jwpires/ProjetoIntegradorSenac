import { Agencia } from "src/agencia/agencia.entity";
import { RetornoGeralDTO } from "src/agencia/dto/retornoGeral.dto";
import { Repository } from "typeorm";
import { ListarRelatorioSaldoDTO } from "./dto/listaSaldoDTO";
export declare class RelatorioSaldoService {
    private relatorioSaldoDash;
    constructor(relatorioSaldoDash: Repository<Agencia>);
    listarRelatorioSaldo(): Promise<ListarRelatorioSaldoDTO[]>;
    buscarPorID(id: string): Promise<Agencia>;
    alterarSaldo(id: string, valor: number): Promise<RetornoGeralDTO>;
}
