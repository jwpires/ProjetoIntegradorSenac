import { RetornoCadastroDTO } from "src/dto/retorno.dto";
import { CriaUsuarioDIO } from "./dto/usuario.dto";
import { Usuario } from "./usuario.entity";
import { UsuarioService } from "./usuario.service";
import { RetornoDTO } from "./dto/retornodto";
export declare class UsuarioController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    listar(): Promise<Usuario[]>;
    cria(dados: CriaUsuarioDIO): Promise<RetornoCadastroDTO>;
    Login(email: string, senha: string): Promise<RetornoDTO>;
}
