import { Banco } from "./banco.entity";
export declare class BancosArmazenados {
    #private;
    get banco(): Banco[];
    inserirBanco(banco: Banco): void;
    private buscaPorId;
    consultarBancoPorNome(nome: string): Banco;
}
