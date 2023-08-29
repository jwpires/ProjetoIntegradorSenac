import { Usuario } from "./usuario.entity";
export declare class UsuarioArmazenados {
    #private;
    AdicionarUsuario(usuario: Usuario): void;
    get Usuarios(): Usuario[];
    validaEmail(email: string): Promise<boolean>;
    private buscarPorID;
    atualizaUsuario(id: string, dadosAtualizacao: Partial<Usuario>): Promise<Usuario>;
    removeUsuario(id: string): Promise<Usuario>;
}
