import { Column, Entity, PrimaryColumn } from "typeorm";
/**Esse arquivo irá substituir os arquivos .entity criado para API */
@Entity()
export class Marca{
    @PrimaryColumn()
    id: string;

    @Column()
    nome: string;

}