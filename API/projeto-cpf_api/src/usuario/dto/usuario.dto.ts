import { IsString, IsNotEmpty, IsEmail, MinLength, isNotEmpty, IsInt } from "class-validator"


export class CriaUsuarioDIO{
    @IsString()
    @IsNotEmpty({message: "Nome não pode ser vazio"})
    nome: string;

    @IsEmail(undefined,{message:"Email inválido"})
    email: string;

    @MinLength(6,{message:"O tamano da senha dever conter no mínimo 6 caracteres"})
    senha: string;

    @IsInt({message:"Idade inválida"})
    idade:BigInteger;

    @IsString({message:"Cidade inválida."})
    cidade: string;

    @IsString({message:"Telefone inválido"})
    telefone: string;

}