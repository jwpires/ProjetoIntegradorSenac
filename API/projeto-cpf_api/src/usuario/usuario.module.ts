import {Module} from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { UsuarioArmazenados } from "./usuario.dm";


@Module({
    controllers:[UsuarioController], // Monitorador do Post e Get, o que envia e recebe
    providers:[UsuarioArmazenados] // 
})

export class UsuarioModule{
    
}

