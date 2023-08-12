import { Marca } from "./marca.entity";
import { Repository } from "typeorm";
import { CriaMarcaDTO } from "./dto/criamarca.dto";
import { RetornoCadastroDTO } from "src/dto/retorno.dto";
export declare class MarcaService {
    private marcaRepository;
    constructor(marcaRepository: Repository<Marca>);
    listar(): Promise<Marca[]>;
    inserir(marca: Marca): Promise<void>;
    buscarPorID(id: string): Promise<Marca>;
    remover(id: string): Promise<void>;
    alterar(id: string, dados: CriaMarcaDTO): Promise<RetornoCadastroDTO>;
}
