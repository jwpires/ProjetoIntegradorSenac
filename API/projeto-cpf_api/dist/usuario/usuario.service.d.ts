import { Repository } from "typeorm";
import { Usuario } from "./usuario.entity";
export declare class UsuarioService {
    private USUARIOREPOSITORY;
    constructor(USUARIOREPOSITORY: Repository<Usuario>);
    InserirUsuario(USUARIO_REPOSITORY: Usuario): Promise<void>;
    BuscarUsuario(id: string): Promise<Usuario>;
    ForgotPassword(id: string): Promise<void>;
}
