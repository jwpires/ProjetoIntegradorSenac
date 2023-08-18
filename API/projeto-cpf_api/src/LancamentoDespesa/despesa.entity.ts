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
    grupoDespesa: GrupoDespesa;
    
    @Column()
    dataLancamento:Date;
    @Column()
    dataVencimento:Date;
    @Column('decimal',{precision: 11, scale: 2})
    valor: number;
    @Column()
    pago: boolean;

}