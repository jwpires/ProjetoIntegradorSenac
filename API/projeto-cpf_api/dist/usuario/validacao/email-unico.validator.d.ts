import { ValidationArguments, ValidatorConstraintInterface } from "class-validator";
import { UsuarioArmazenados } from "../usuario.dm";
export declare class EmailUnicoValidator implements ValidatorConstraintInterface {
    private clsUsuarioArmazenados;
    constructor(clsUsuarioArmazenados: UsuarioArmazenados);
    validate(value: any, validationArguments?: ValidationArguments): Promise<boolean>;
    defaultMessage?(validationArguments?: ValidationArguments): string;
}
