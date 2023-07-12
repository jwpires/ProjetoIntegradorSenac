import { IsNotEmpty, IsString } from "class-validator";


export class InserirGrupoDespesaDTO{
    @IsNotEmpty()
    @IsString()
    descricao: string;
}