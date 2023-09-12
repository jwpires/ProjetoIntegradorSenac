import { UsuarioService } from 'src/usuario/usuario.service';
export declare class AuthService {
    private usersService;
    constructor(usersService: UsuarioService);
    signIn(username: string, pass: string): Promise<any>;
}
