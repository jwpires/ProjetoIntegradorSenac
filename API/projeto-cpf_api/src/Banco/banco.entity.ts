import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Banco{
    @PrimaryColumn()
    id: string;

    @Column()
    nome: string;
    

     constructor(id: string, nome: string){
         this.id     =   id;
         this.nome   =   nome;
     }
}