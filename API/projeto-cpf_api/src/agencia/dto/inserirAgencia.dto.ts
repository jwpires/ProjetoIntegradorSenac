import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class InserirAgenciaDTO{

    @IsString()
    @IsNotEmpty()
    id_banco: string;

    @IsString()
    @IsNotEmpty()
    nomeProprietario: string;

    @IsString()
    @IsNotEmpty()
    numeroConta: string;

    @IsString()
    @IsNotEmpty()
    tipoConta: string;

    @IsNumber()
    @IsNotEmpty()
    saldo: number;

}