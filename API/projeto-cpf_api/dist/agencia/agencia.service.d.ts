import { Repository } from "typeorm";
import { Agencia } from "./agencia.entity";
import { BancoService } from "src/Banco/banco.service";
import { InserirAgenciaDTO } from "./dto/inserirAgencia.dto";
import { RetornoGeralDTO } from "./dto/retornoGeral.dto";
export declare class AgenciaService {
    private agenciaRepository;
    private readonly bancoService;
    constructor(agenciaRepository: Repository<Agencia>, bancoService: BancoService);
    listar(): Promise<Agencia[]>;
    inserirAgencia(dados: InserirAgenciaDTO): Promise<RetornoGeralDTO>;
}
