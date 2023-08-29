import { IsString, IsNotEmpty, IsEmail, MinLength, IsInt, IsOptional } from "class-validator"
import { EmailUnico } from "../validacao/email-unico.validator";


export class CriaUsuarioDIO{
    @IsString()
    @IsNotEmpty({message: "Nome não pode ser vazio"})
    nome: string;

    @IsEmail(undefined,{message:"Email inválido"})
    @EmailUnico({message:"Já existe usuário cadastrado com esse email."})
    email: string;

    @MinLength(6,{message:"O tamano da senha dever conter no mínimo 6 caracteres"})
    senha: string;
}