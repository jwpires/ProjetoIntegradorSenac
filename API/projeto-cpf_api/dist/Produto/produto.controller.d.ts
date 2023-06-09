import { CriarProdutoDTO } from "./dto/produto.dto";
import { ProdutosArmazenados } from "./produto.dm";
import { ProdutoEntity } from "./produto.entity";
import { ListarProdutosDTO } from "./dto/listarProdutos.dto";
import { AlterarProdutoDTO } from "./dto/alterarProduto.dto";
import { ListarMenuVendaDTO } from "./dto/listarMenuVenda.dto";
import { RemoverEstoqueDTO } from "./dto/removerEstoque.dto";
export declare class ProdutoController {
    private clsArmazenaProduto;
    constructor(clsArmazenaProduto: ProdutosArmazenados);
    RetornoProdutos(): Promise<ListarProdutosDTO[]>;
    ExibeMenu(): Promise<string[] | ListarMenuVendaDTO[]>;
    ConsultaPorNome(nome: string): Promise<ListarProdutosDTO[]>;
    ConsultaPorMarca(marca: string): Promise<ListarProdutosDTO[]>;
    consultaPorTamanho(tamanho: string): Promise<ListarProdutosDTO[]>;
    consultaPorCor(cor: string): Promise<ListarProdutosDTO[]>;
    criarProduto(dadosProduto: CriarProdutoDTO): Promise<any>;
    atualizaProduto(id: string, novosDados: AlterarProdutoDTO): Promise<{
        usuario: void;
        message: string;
    }>;
    removerEstoque(id: string, quantidade: RemoverEstoqueDTO): Promise<{
        produto: void;
        message: string;
    }>;
    adicionarEstoque(id: string, quantidade: RemoverEstoqueDTO): Promise<{
        produto: void;
        message: string;
    }>;
    removeProduto(id: string): Promise<{
        produto: ProdutoEntity;
        message: string;
    }>;
}
