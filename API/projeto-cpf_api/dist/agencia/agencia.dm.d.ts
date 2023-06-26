import { AgenciaEntity } from "./agencia.entity";
export declare class AgenciaArmazenados {
    #private;
    get Agencia(): AgenciaEntity[];
    inserirAgencia(agencia: AgenciaEntity): void;
}
