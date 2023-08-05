import { GrupoDespesa } from "src/GrupoDeDespesa/grupoDespesa.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";


@Entity()
export class Despesa{
    @PrimaryColumn()
    id: string;

    @Column()
    descricao:string;

    @ManyToOne(() => GrupoDespesa, {cascade: true})
    @JoinColumn({name: "id_grupoDespesa", referencedColumnName: "id"})

    id_grupoDespesa:string;
    @Column()
    dataLancamento:Date;
    @Column()
    dataVencimento:Date;
    @Column()
    valor: number;
    @Column()
    pago: boolean;

    constructor(
        id:string,
        descricao:string,
        id_grupoDespesa:string,
        dataLancamento:Date,
        dataVencimento:Date,
        valor: number,
        pago: boolean
    )
    {
        this.id = id;
        this.descricao = descricao;
        this.id_grupoDespesa = id_grupoDespesa;
        this.dataLancamento = dataLancamento;
        this.dataVencimento = dataVencimento;
        this.valor = valor;
        this.pago = pago;
    }

}