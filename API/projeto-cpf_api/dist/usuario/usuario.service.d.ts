import { Repository } from 'typeorm';
import { RetornoCadastroDTO } from 'src/dto/retorno.dto';
import { Usuario } from './usuario.entity';
import { CriaUsuarioDIO } from './dto/usuario.dto';
import { RetornoGeralDTO } from 'src/agencia/dto/retornoGeral.dto';
export declare class UsuarioService {
    private usuarioRepository;
    constructor(usuarioRepository: Repository<Usuario>);
    listar(): Promise<Usuario[]>;
    inserir(dados: CriaUsuarioDIO): Promise<RetornoCadastroDTO>;
    validaEmail(email: string): Promise<boolean>;
    findOne(email: string, senha: string): Promise<RetornoGeralDTO>;
}
