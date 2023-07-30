import { Agencia } from "./agencia.entity";
import { InserirAgenciaDTO } from "./dto/inserirAgencia.dto";
import { AgenciaService } from "./agencia.service";
import { BancoService } from "src/Banco/banco.service";
export declare class AgenciaController {
    private readonly agenciaService;
    private readonly bancoService;
    constructor(agenciaService: AgenciaService, bancoService: BancoService);
    retornoAgencias(): Promise<Agencia[]>;
    criarAgencia(dadosAgencia: InserirAgenciaDTO): Promise<any>;
}
