import { Repository } from "typeorm";
import { Agencia } from "./agencia.entity";
export declare class AgenciaService {
    private agenciaRepository;
    constructor(agenciaRepository: Repository<Agencia>);
    listar(): Promise<Agencia[]>;
    inserirAgencia(agencia: Agencia): Promise<void>;
}
