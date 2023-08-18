import { IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { GrupoDespesa } from "src/GrupoDeDespesa/grupoDespesa.entity";

export class InserirDespesaDTO{

    @IsString()
    @IsNotEmpty()
    descricao:string;

    @IsString()
    @IsNotEmpty()
    id_GrupoDespesa: string;

    @IsDateString()
    @IsNotEmpty()
    dataLancamento:Date;

    @IsDateString()
    @IsNotEmpty()
    dataVencimento:Date;

    @IsNumber()
    @IsNotEmpty()
    valor: number;

    @IsBoolean()
    @IsNotEmpty()
    pago: boolean;

}