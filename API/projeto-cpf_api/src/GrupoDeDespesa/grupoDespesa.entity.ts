import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class GrupoDespesa{
    @PrimaryColumn()
    id: string;
    
    @Column()
    descricao: string;

    constructor(
        id: string,
        descricao: string
    )
    {
        this.id = id;
        this.descricao = descricao;
    }
}