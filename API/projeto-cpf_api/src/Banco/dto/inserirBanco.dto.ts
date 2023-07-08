import { IsNotEmpty, IsString } from "class-validator";

export class InserirBancoDTO{
    @IsString()
    @IsNotEmpty()
    nome: string; 
}