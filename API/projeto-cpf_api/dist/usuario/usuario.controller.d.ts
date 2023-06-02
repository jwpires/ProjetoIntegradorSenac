import { CriaUsuarioDIO } from "./dto/usuario.dto";
import { UsuarioEntity } from "./usuario.entity";
import { UsuarioArmazenados } from "./usuario.dm";
import { ListaUsuarioDTO } from "./dto/listaUsuario.dto";
import { AlteraUsuarioDTO } from "./dto/atualizaUsuario.dto";
export declare class UsuarioController {
    private clsUsuariosArmazenados;
    constructor(clsUsuariosArmazenados: UsuarioArmazenados);
    RetornoUsuarios(): Promise<ListaUsuarioDTO[]>;
    criaUsuario(dadosUsuario: CriaUsuarioDIO): Promise<any>;
    atualizaUsuario(id: string, novosDados: AlteraUsuarioDTO): Promise<{
        usuario: UsuarioEntity;
        message: string;
    }>;
    removeUsuario(id: string): Promise<{
        usuario: UsuarioEntity;
        message: string;
    }>;
}
