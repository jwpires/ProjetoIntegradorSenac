import { RemoverEstoqueDTO } from "./dto/removerEstoque.dto";
import { ProdutoEntity } from "./produto.entity";
export declare class ProdutosArmazenados {
    #private;
    get Produto(): ProdutoEntity[];
    inserirProduto(produto: ProdutoEntity): void;
    private buscarPorID;
    buscarProdutoAtivo(): ProdutoEntity[];
    buscarPorMarca(marca: string): ProdutoEntity[];
    buscarPorNome(nome: string): ProdutoEntity[];
    alterarProduto(id: string, dadosParaAtualizar: Partial<ProdutoEntity>): Promise<void>;
    removeEstoque(id: string, quantidade: RemoverEstoqueDTO): Promise<void>;
    adicionaEstoque(id: string, quantidade: RemoverEstoqueDTO): Promise<void>;
    excluirProduto(id: string): Promise<ProdutoEntity>;
}
