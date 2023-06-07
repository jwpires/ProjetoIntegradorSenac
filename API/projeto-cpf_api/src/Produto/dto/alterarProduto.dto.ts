import { IsArray, IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";


export class AlterarProdutoDTO{
    
    @IsString()
    @IsNotEmpty()
    @IsOptional()    
    nome:string;
    
    @IsBoolean({message:"Informe se está ativo: true (Sim), false (Não)"})
    @IsOptional()
    ativo:boolean;
    
    @IsInt({message:"Informe a quantidade em estoque"})
    @IsOptional()
    estoque:BigInteger;
    
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