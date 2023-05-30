import {Module} from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { UsuarioArmazenados } from "./usuario.dm";
import { EmailUnicoValidator } from "./validacao/email-unico.validator";


@Module({
    controllers:[UsuarioController], // Monitorador do Post e Get, o que envia e recebe
    providers:[UsuarioArmazenados, EmailUnicoValidator] // 
})

export class UsuarioModule{
    
}

