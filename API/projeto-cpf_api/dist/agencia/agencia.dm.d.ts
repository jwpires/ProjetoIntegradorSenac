import { AgenciaEntity } from "./agencia.entity";
export declare class AgenciaArmazenados {
    #private;
    get agencia(): AgenciaEntity[];
    inserirAgencia(agencia: AgenciaEntity): void;
    buscaPorNumeroConta(numeroConta: string): AgenciaEntity;
    consultarAgenciaPorProprietario(proprietario: string): AgenciaEntity;
}
