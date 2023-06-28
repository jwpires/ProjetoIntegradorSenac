import { AgenciaEntity } from "./agencia.entity";
export declare class AgenciaArmazenados {
    #private;
    get Agencia(): AgenciaEntity[];
    agenciaJaCadastrada(numConta: string, codBanco: string): boolean;
    inserirAgencia(agencia: AgenciaEntity): void;
}
