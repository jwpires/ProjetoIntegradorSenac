import { IsArray, IsBoolean, IsInt, IsNotEmpty, IsString } from "class-validator";


export class CriarProdutoDTO{
    
    @IsString()
    @IsNotEmpty()    
    nome:string;
    
    @IsBoolean({message:"Informe se está ativo: true (Sim), false (Não)"})
    ativo:boolean;
    
    @IsInt({message:"Informe a quantidade em estoque"})
    estoque:BigInteger;
    
    @IsArray({message:"informe a unidade ou unidades de medidas exemplo: ['UN', 'KG', 'FD',....]"})
    medida:string[];
    
    @IsArray({message:"informe a cor ou cores, exemplo: ['amarelo', 'vermelho', 'preto',....]"})
    cor:string[];
    
    @IsString({message:"informe a marca do produto."})
    marca:string;
}