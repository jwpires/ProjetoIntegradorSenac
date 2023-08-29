import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from "typeorm";

@Entity()
export class UsuarioEntity{
    @PrimaryColumn()
    id: string;

    @Column()
    nome: string;

    @Column()
    email: string;

    @Column()
    senha: string;

}