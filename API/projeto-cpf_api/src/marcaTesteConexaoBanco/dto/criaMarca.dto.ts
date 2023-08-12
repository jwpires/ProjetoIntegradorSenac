import { IsNotEmpty, IsString } from "class-validator";


export class CriaMarcaDTO {

    @IsString()

    @IsNotEmpty({ message: "Nome não pode ser vazio" })

    nome: string;

}