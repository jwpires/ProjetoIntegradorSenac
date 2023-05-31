import { CriaUsuarioDIO } from "./dto/usuario.dto";
import { UsuarioArmazenados } from "./usuario.dm";
import { ListaUsuarioDTO } from "./dto/listaUsuario.dto";
export declare class UsuarioController {
    private clsUsuariosArmazenados;
    constructor(clsUsuariosArmazenados: UsuarioArmazenados);
    RetornoUsuarios(): Promise<ListaUsuarioDTO[]>;
    criaUsuario(dadosUsuario: CriaUsuarioDIO): Promise<any>;
}
