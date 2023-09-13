import { IsString, IsNotEmpty, IsEmail, MinLength, IsInt, IsOptional } from "class-validator"


export class authSignDTO{
    @IsString()
    @IsNotEmpty({message: "Login invalido"})
    username: string;

    @IsString()
    password: string;
}