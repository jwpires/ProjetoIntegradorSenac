import { Banco } from "src/Banco/banco.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";


@Entity()
export class Agencia{
    @PrimaryColumn()
    id: string;
    
    @ManyToOne(() => Banco, { cascade: true }) // Use o decorador @ManyToOne() para estabelecer o relacionamento com a entidade Banco
    @JoinColumn({ name: "id_banco", referencedColumnName: "id" }) // Especifique o nome da coluna de chave estrangeira na tabela Agencia
    id_banco: Banco; // Substitua "Banco" pelo tipo correto da entidade que representa o banco

    @Column()
    nomeProprietario: string;
    @Column()
    numeroConta: string;
    @Column()
    tipoDeConta: string;
    @Column()
    saldo: number; 

    constructor(
        id: string,
        id_banco: Banco,
        nomeProprietario: string,
        numeroConta: string,
        tipoDeConta: string,
        saldo: number
    )
    {
        this.id     =   id;
        this.id_banco     =   id_banco;
        this.nomeProprietario   =   nomeProprietario;
        this.numeroConta = numeroConta;
        this.tipoDeConta = tipoDeConta;
        this.saldo = saldo;
    }
    

}