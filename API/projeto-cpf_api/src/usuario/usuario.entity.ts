import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from "typeorm";

@Entity()
export class Usuario{
    @PrimaryColumn()
    id: string;

    @Column()
    nome: string;

    @Column()
    email: string;

    @Column()
    senha: string;

}