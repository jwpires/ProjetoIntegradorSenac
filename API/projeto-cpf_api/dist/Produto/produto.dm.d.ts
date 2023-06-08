import { ProdutoEntity } from "./produto.entity";
export declare class ProdutosArmazenados {
    #private;
    get Produto(): ProdutoEntity[];
    inserirProduto(produto: ProdutoEntity): void;
    private buscarPorID;
    buscarPorNome(nome: string): ProdutoEntity;
    alterarProduto(id: string, dadosParaAtualizar: Partial<ProdutoEntity>): Promise<void>;
    excluirProduto(id: string): Promise<ProdutoEntity>;
}
