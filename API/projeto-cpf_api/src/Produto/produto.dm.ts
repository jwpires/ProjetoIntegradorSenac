import { Injectable } from "@nestjs/common";
import { RemoverEstoqueDTO } from "./dto/removerEstoque.dto";
import { ProdutoEntity } from "./produto.entity";



@Injectable()
export class ProdutosArmazenados{
    #produtos : ProdutoEntity[] = [];

    get Produto(){
        return this.#produtos;
    }

    /** 
    * 
    * Funções Básicas do CRUD
    * 
    */
    inserirProduto( produto: ProdutoEntity){
        this.#produtos.push(produto);
    }

    private buscarPorID(id:string){
        /* Pesquisa o produto que foi passado pelo ID*/
        const possivelProduto = this.#produtos.find(
            produtoSalvo => produtoSalvo.id === id
        );

        if(!possivelProduto){
            throw new Error('Produto não encontrado');
        }
        return possivelProduto;
    }

    buscarProdutoAtivo() {
        const produtoAtivos = this.#produtos.filter(
            produto => produto.ativo === true
        );

        const estoque = produtoAtivos.filter(
            produto => produto.estoque > 0
        );

        if(!produtoAtivos){
            throw new Error('Produto não encontrado');
        }
        return produtoAtivos;
    }

    buscarPorMarca(marca:string){
        /* Pesquisa o produto que foi passado pelo ID*/
        const possivelProduto = this.#produtos.filter(
            produtoSalvo => produtoSalvo.marca === marca
        );

        if(!possivelProduto){
            throw new Error('Marca não encontrado');
        }
        return possivelProduto;
    }



    buscarPorNome(nome:string){
        /* Pesquisa o produto que foi passado pelo ID*/
        const possivelProduto = this.#produtos.filter(
            produtoSalvo => produtoSalvo.nome === nome
        );

        if(!possivelProduto){
            throw new Error('Produto não encontrado');
        }
        return possivelProduto;
    }

    async alterarProduto (id: string,dadosParaAtualizar: Partial<ProdutoEntity>){
        const produto = this.buscarPorID(id);

        Object.entries(dadosParaAtualizar).forEach(
            ([chave, valor]) => {
                if(chave === 'id'){
                    return ;
                }
                produto[chave] = valor;
            }
        )
    }

    async removeEstoque( id: string, quantidade: RemoverEstoqueDTO){
        const produtoEstoqueAtualizado = this.buscarPorID(id);
        produtoEstoqueAtualizado.estoque = produtoEstoqueAtualizado.estoque - quantidade.estoque;
        
       // return produtoEstoqueAtualizado;
    }

    async adicionaEstoque( id: string, quantidade: RemoverEstoqueDTO){
        const produtoEstoqueAtualizado = this.buscarPorID(id);
        produtoEstoqueAtualizado.estoque = produtoEstoqueAtualizado.estoque + quantidade.estoque;
        
       // return produtoEstoqueAtualizado;
    }

    async excluirProduto (id: string){
        const produto = this.buscarPorID(id);

        this.#produtos = this.Produto.filter(
            produtoSalvo => produtoSalvo.id != id
        )

        return produto;
    }

}