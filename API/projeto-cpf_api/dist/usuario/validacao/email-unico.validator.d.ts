import { ValidationArguments, ValidatorConstraintInterface } from "class-validator";
import { UsuarioService } from "src/usuario/usuario.service";
export declare class EmailUnicoValidator implements ValidatorConstraintInterface {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    validate(value: any, validationArguments?: ValidationArguments): Promise<boolean>;
}
export declare const EmailUnico: (opcaoValidacao: ValidationOptions) => (objeto: Object, propriedade: string) => void;
