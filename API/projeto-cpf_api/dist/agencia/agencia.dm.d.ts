import { AgenciaEntity } from "./agencia.entity";
export declare class AgenciaArmazenados {
    #private;
    get Agencia(): AgenciaEntity[];
    agenciaJaCadastrada(numConta: string, codBanco: string): void;
    inserirAgencia(agencia: AgenciaEntity): void;
}
