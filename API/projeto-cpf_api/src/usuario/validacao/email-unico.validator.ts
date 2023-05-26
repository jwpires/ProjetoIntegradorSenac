import { ValidationArguments, ValidatorConstraintInterface } from "class-validator";
import { UsuarioArmazenados } from "../usuario.dm";

export class EmailUnicoValidator implements ValidatorConstraintInterface{
    constructor(private clsUsuarioArmazenados: UsuarioArmazenados){

    }


    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    defaultMessage?(validationArguments?: ValidationArguments): string {
        throw new Error("Method not implemented.");
    }

}