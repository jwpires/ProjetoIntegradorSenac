import { Agencia } from "src/agencia/agencia.entity";
import { Repository } from "typeorm";
export declare class RelatorioSaldoDashService {
    private relatorioSaldoDash;
    constructor(relatorioSaldoDash: Repository<Agencia>);
    listar(): Promise<Agencia[]>;
}