import { Repository } from 'typeorm';
import { RetornoCadastroDTO } from 'src/dto/retorno.dto';
import { Usuario } from './usuario.entity';
import { CriaUsuarioDIO } from './dto/usuario.dto';
export declare class UsuarioService {
    private usuarioRepository;
    constructor(usuarioRepository: Repository<Usuario>);
    listar(): Promise<Usuario[]>;
    inserir(dados: CriaUsuarioDIO): Promise<RetornoCadastroDTO>;
    validaEmail(email: string): Promise<boolean>;
}
