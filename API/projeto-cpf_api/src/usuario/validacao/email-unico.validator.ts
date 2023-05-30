import { Injectable } from "@nestjs/common";
import { ValidationOptions, registerDecorator, ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { async } from "rxjs";
import { UsuarioArmazenados } from "../usuario.dm";

@Injectable()
@ValidatorConstraint({async: true})
export class EmailUnicoValidator implements ValidatorConstraintInterface{
    constructor(private clsUsuarioArmazenados: UsuarioArmazenados){

    }


    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const validarEmail = await this.clsUsuarioArmazenados.validaEmail(value);
        return !validarEmail;
    }

}

export const EmailUnico = (opcoesValidacao: ValidationOptions) => {
    return(objeto: Object, propriedade: string)=>{
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcoesValidacao,
            constraints: [],
            validator: EmailUnicoValidator
        })
    }
}