import { CriaUsuarioDIO } from "./dto/usuario.dto";
import { UsuarioEntity } from "./usuario.entity";
import { UsuarioArmazenados } from "./usuario.dm";
export declare class UsuarioController {
    private clsUsuariosArmazenados;
    constructor(clsUsuariosArmazenados: UsuarioArmazenados);
    RetornoUsuarios(): Promise<UsuarioEntity[]>;
    criaUsuario(dadosUsuario: CriaUsuarioDIO): Promise<any>;
}
