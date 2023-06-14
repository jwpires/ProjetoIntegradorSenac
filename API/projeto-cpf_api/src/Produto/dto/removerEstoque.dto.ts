import { IsArray, IsBoolean, IsDecimal, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { isFloat32Array } from "util/types";


export class RemoverEstoqueDTO{
    
        
    @IsInt({message:"Informe a quantidade em estoque"})
    @IsOptional()
    estoque:number;
    
    
}