import { BancoEntity } from "./banco.entity";
export declare class BancosArmazenados {
    #private;
    get banco(): BancoEntity[];
    inserirBanco(banco: BancoEntity): void;
    private buscaPorId;
    consultarBancoPorNome(nome: string): BancoEntity;
}
