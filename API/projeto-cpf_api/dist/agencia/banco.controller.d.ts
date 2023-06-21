import { BancosArmazenados } from "./banco.dm";
import { InserirBancoDTO } from "./dto/inserirBanco.dto";
import { ListarBancos } from "./dto/listarBancos.dto";
export declare class BancoController {
    private armanezaBanco;
    constructor(armanezaBanco: BancosArmazenados);
    RetornaTodosBancos(): Promise<ListarBancos[]>;
    CriarBanco(novoBanco: InserirBancoDTO): Promise<{
        novoBanco: InserirBancoDTO;
        status: string;
    }>;
}
