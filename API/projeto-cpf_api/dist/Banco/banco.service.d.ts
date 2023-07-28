import { Repository } from "typeorm";
import { Banco } from "./banco.entity";
export declare class BancoService {
    private bancoRepository;
    constructor(bancoRepository: Repository<Banco>);
    listar(): Promise<Banco[]>;
    inserirBanco(banco: Banco): Promise<void>;
    buscaPorId(id: string): Promise<Banco>;
}
