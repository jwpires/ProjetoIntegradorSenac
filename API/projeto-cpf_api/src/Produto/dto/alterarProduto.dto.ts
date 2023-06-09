import { IsArray, IsBoolean, IsDecimal, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { isFloat32Array } from "util/types";


export class AlterarProdutoDTO{
    
    @IsString()
    @IsNotEmpty()
    @IsOptional()    
    nome:string;
    
    @IsBoolean({message:"Informe se está ativo: true (Sim), false (Não)"})
    @IsOptional()
    ativo: boolean;
    
    @IsNumber()
    @IsOptional({message:"Informe o valor do produto"})
    valor: number;
    
    @IsInt({message:"Informe a quantidade em estoque"})
    @IsOptional()
    estoque:number;
    
    @IsArray({message:"informe a unidade ou unidades de medidas exemplo: ['UN', 'KG', 'FD',....]"})
    @IsOptional()
    medida:string[];
    
    @IsArray({message:"informe a cor ou cores, exemplo: ['amarelo', 'vermelho', 'preto',....]"})
    @IsOptional()
    cor:string[];
    
    @IsString({message:"informe a marca do produto."})
    @IsOptional()
    marca:string;
}