import { UsuarioEntity } from "./usuario.entity";
export declare class UsuarioArmazenados {
    #private;
    AdicionarUsuario(usuario: UsuarioEntity): void;
    get Usuarios(): UsuarioEntity[];
    validaEmail(email: string): Promise<boolean>;
    private buscarPorID;
    atualizaUsuario(id: string, dadosAtualizacao: Partial<UsuarioEntity>): Promise<UsuarioEntity>;
    removeUsuario(id: string): Promise<UsuarioEntity>;
}
