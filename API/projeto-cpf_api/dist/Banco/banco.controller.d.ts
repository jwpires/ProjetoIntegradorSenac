import { Banco } from "./banco.entity";
import { InserirBancoDTO } from "./dto/inserirBanco.dto";
import { BancoService } from "./banco.service";
export declare class BancoController {
    private readonly bancoService;
    constructor(bancoService: BancoService);
    RetornaTodosBancos(): Promise<Banco[]>;
    CriarBanco(novoBanco: InserirBancoDTO): Promise<{
        novoBanco: InserirBancoDTO;
        status: string;
    }>;
}
