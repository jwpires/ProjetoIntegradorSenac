import { AgenciaArmazenados } from "./agencia.dm";
import { InserirAgenciaDTO } from "./dto/inserirAgencia.dto";
import { ListarAgencia } from "./dto/listarAgencia.dto";
export declare class AgenciaController {
    private armanezaAgencia;
    constructor(armanezaAgencia: AgenciaArmazenados);
    RetornaTodasAgencias(): Promise<ListarAgencia[]>;
    CriarAgencia(novaAgencia: InserirAgenciaDTO): Promise<{
        novaAgencia: InserirAgenciaDTO;
        status: string;
    }>;
}
