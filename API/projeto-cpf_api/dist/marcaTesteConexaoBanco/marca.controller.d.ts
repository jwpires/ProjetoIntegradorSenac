import { Marca } from "./marca.entity";
import { MarcaService } from "./marca.service";
export declare class MarcaController {
    private readonly marcaService;
    constructor(marcaService: MarcaService);
    listar(): Promise<Marca[]>;
    listarID(id: string): Promise<Marca>;
    removeMarca(id: string): Promise<void>;
}
