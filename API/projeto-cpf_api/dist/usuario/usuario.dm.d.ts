import { UsuarioEntity } from "./usuario.entity";
export declare class UsuarioArmazenados {
    #private;
    AdicionarUsuario(usuario: UsuarioEntity): void;
    get Usuarios(): UsuarioEntity[];
    validaEmail(email: string): Promise<boolean>;
}
