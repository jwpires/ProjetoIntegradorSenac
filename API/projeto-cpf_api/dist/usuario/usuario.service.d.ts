import { Repository } from 'typeorm';
import { RetornoCadastroDTO } from 'src/dto/retorno.dto';
import { UsuarioEntity } from './usuario.entity';
import { CriaUsuarioDIO } from './dto/usuario.dto';
export declare class UsuarioService {
    private usuarioRepository;
    constructor(usuarioRepository: Repository<UsuarioEntity>);
    listar(): Promise<UsuarioEntity[]>;
    inserir(dados: CriaUsuarioDIO): Promise<RetornoCadastroDTO>;
    validaEmail(email: string): Promise<boolean>;
}
