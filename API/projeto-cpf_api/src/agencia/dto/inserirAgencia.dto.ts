import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class InserirAgenciaDTO{

    @IsString()
    @IsNotEmpty()
    id_banco: string;

    @IsString()
    nomeProprietario: string;

    @IsString()
    numeroConta: string;

    @IsString()
    tipoDeConta: string;

    @IsNumber()
    saldo: number;

}