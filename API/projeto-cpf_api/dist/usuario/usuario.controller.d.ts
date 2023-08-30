import { RetornoCadastroDTO } from "src/dto/retorno.dto";
import { CriaUsuarioDIO } from "./dto/usuario.dto";
import { Usuario } from "./usuario.entity";
import { UsuarioService } from "./usuario.service";
export declare class UsuarioController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    listar(id: any): Promise<Usuario[]>;
    cria(dados: CriaUsuarioDIO): Promise<RetornoCadastroDTO>;
}
