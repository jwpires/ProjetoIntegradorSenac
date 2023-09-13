import { CriarProdutoDTO } from "./dto/produto.dto";
import { ProdutosArmazenados } from "./produto.dm";
import { AlterarProdutoDTO } from "./dto/alterarProduto.dto";
import { RemoverEstoqueDTO } from "./dto/removerEstoque.dto";
export declare class ProdutoController {
    private clsArmazenaProduto;
    constructor(clsArmazenaProduto: ProdutosArmazenados);
    RetornoProdutos(): unknown;
    ExibeMenu(): unknown;
    ConsultaPorNome(nome: string): unknown;
    ConsultaPorMarca(marca: string): unknown;
    consultaPorTamanho(tamanho: string): unknown;
    consultaPorCor(cor: string): unknown;
    criarProduto(dadosProduto: CriarProdutoDTO): unknown;
    atualizaProduto(id: string, novosDados: AlterarProdutoDTO): unknown;
    removerEstoque(id: string, quantidade: RemoverEstoqueDTO): unknown;
    adicionarEstoque(id: string, quantidade: RemoverEstoqueDTO): unknown;
    removeProduto(id: string): unknown;
}
