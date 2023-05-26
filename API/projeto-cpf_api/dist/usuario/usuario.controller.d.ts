import { CriaUsuarioDIO } from "./dto/usuario.dto";
import { UsuarioArmazenados } from "./usuario.dm";
export declare class UsuarioController {
    private clsUsuariosArmazenados;
    constructor(clsUsuariosArmazenados: UsuarioArmazenados);
    RetornoUsuarios(): Promise<any[]>;
    criaUsuario(dadosUsuario: CriaUsuarioDIO): Promise<any>;
}
