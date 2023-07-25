import { AgenciaArmazenados } from "./agencia.dm";
import { InserirAgenciaDTO } from "./dto/inserirAgencia.dto";
import { ListarAgenciaDTO } from "./dto/listarAgencia.dto";
import { ListarAgenciaDashboardDTO } from "./dto/listaAgenciaDashboard.dto";
export declare class AgenciaController {
    private armanezaAgencia;
    constructor(armanezaAgencia: AgenciaArmazenados);
    retornoAgencias(): Promise<ListarAgenciaDTO[]>;
    retornoAgenciaDash(): Promise<ListarAgenciaDashboardDTO[]>;
    criarAgencia(dadosAgencia: InserirAgenciaDTO): Promise<any>;
}
