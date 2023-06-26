import { AgenciaArmazenados } from "./agencia.dm";
import { InserirAgenciaDTO } from "./dto/inserirAgencia.dto";
import { ListarAgenciaDTO } from "./dto/listarAgencia.dto";
export declare class AgenciaController {
    private armanezaAgencia;
    constructor(armanezaAgencia: AgenciaArmazenados);
    retornoAgencias(): Promise<ListarAgenciaDTO[]>;
    criarAgencia(dadosAgencia: InserirAgenciaDTO): Promise<void>;
}
