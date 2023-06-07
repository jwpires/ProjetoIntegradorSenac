import { CriarProdutoDTO } from "./dto/produto.dto";
import { ProdutosArmazenados } from "./produto.dm";
import { ProdutoEntity } from "./produto.entity";
import { ListarProdutosDTO } from "./dto/listarProdutos.dto";
import { AlterarProdutoDTO } from "./dto/alterarProduto.dto";
export declare class ProdutoController {
    private clsArmazenaProduto;
    constructor(clsArmazenaProduto: ProdutosArmazenados);
    RetornoProdutos(): Promise<ListarProdutosDTO[]>;
    criarProduto(dadosProduto: CriarProdutoDTO): Promise<any>;
    atualizaProduto(id: string, novosDados: AlterarProdutoDTO): Promise<{
        usuario: void;
        message: string;
    }>;
    removeProduto(id: string): Promise<{
        produto: ProdutoEntity;
        message: string;
    }>;
}
