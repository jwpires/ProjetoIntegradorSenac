import { Agencia } from "src/agencia/agencia.entity";
import { Repository } from "typeorm";
import { ListarRelatorioSaldoDTO } from "./dto/listaSaldoDTO";
export declare class RelatorioSaldoService {
    private relatorioSaldoDash;
    constructor(relatorioSaldoDash: Repository<Agencia>);
    listarRelatorioSaldo(): Promise<ListarRelatorioSaldoDTO[]>;
}
