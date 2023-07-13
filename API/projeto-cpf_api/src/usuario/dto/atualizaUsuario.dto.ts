import { IsString, IsNotEmpty, IsEmail, MinLength, isNotEmpty, IsInt, IsOptional } from "class-validator"
import { EmailUnico } from "../validacao/email-unico.validator";


export class AlteraUsuarioDTO{
    @IsString()
    @IsNotEmpty({message: "Nome não pode ser vazio"})
    @IsOptional()
    nome: string;

    @IsEmail(undefined,{message:"Email inválido"})
    @EmailUnico({message:"Já existe usuário cadastrado com esse email."})
    @IsOptional()
    email: string;

    @MinLength(6,{message:"O tamano da senha dever conter no mínimo 6 caracteres"})
    @IsOptional()
    senha: string;
 
    @IsInt({message:"Idade inválida"})
    @IsOptional()
    idade:BigInteger;

    @IsString({message:"Cidade inválida."})
    @IsOptional()
    cidade: string;

    @IsString({message:"Telefone inválido "})
    @IsOptional()
    telefone: string;
}