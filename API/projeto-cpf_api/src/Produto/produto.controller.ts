import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common/decorators";
import { CriarProdutoDTO } from "./dto/produto.dto";
import { ProdutosArmazenados } from "./produto.dm";
import { ProdutoEntity } from "./produto.entity";
import {v4 as uuid} from 'uuid';
import { ListarProdutosDTO } from "./dto/listarProdutos.dto";
import { AlterarProdutoDTO } from "./dto/alterarProduto.dto";
import { ListarMenuVendaDTO } from "./dto/listarMenuVenda.dto";
import { RemoverEstoqueDTO } from "./dto/removerEstoque.dto";


@Controller('/produtos')
export class ProdutoController{
    constructor(private clsArmazenaProduto: ProdutosArmazenados){}

    @Get()
    async RetornoProdutos(){
        const listarProdutos = await this.clsArmazenaProduto.Produto;
        const produtosRetornados = listarProdutos.map(
            produto => new ListarProdutosDTO(
                produto.id,
                produto.nome
            )
        );
        return produtosRetornados;
    }

    @Get('/menu/') /** Função para retornar dados suficientes para uma tela de venda */
    async ExibeMenu(/*@Param('menu') menu: string*/) {
        /*if (menu === 'Menu') {*/
            const produtosAtivos = await this.clsArmazenaProduto.buscarProdutoAtivo();
            const retornoMenu = produtosAtivos.map(
                produto => new ListarMenuVendaDTO(
                    produto.nome,
                    produto.medida,
                    produto.estoque,
                    produto.cor,
                    produto.marca,
                    produto.valor
                )
            );
            return retornoMenu;      
    //    }
        return ["Escreva 'http://localhost:3000/produtos/menu/Menu' para visualizar o cardápio disponível."];
    }



        
    @Get('/:nome')
    async ConsultaPorNome(@Param('nome') nome: string) {

        const listarProdutos = await this.clsArmazenaProduto.buscarPorNome(nome);
        const retornoProdutos = listarProdutos.map(
            produto => new ListarProdutosDTO(
                produto.id,
                produto.nome
            )
        );
        return retornoProdutos;
    }

    @Get('/marca/:marca')
    async ConsultaPorMarca(@Param('marca') marca: string) {

        const listarProdutos = await this.clsArmazenaProduto.buscarPorMarca(marca);

        const retornoProdutos = listarProdutos.map(
            produto => new ListarProdutosDTO(
                produto.id,
                produto.nome
            )
        )
        return retornoProdutos;
    }

    @Get('/tamanho/:tamanho')
    async consultaPorTamanho(@Param('tamanho') tamanho: string) {
        const listarProdutos = await this.clsArmazenaProduto.Produto;
        const produtosRetornados = listarProdutos.filter(
            element => (element.medida.find( e => e ===tamanho))
        ).map(
                produto => new ListarProdutosDTO(
                    produto.id,
                    produto.nome
            )
        );

        return produtosRetornados; 
    }

    @Get('/cor/:cor')
    async consultaPorCor(@Param('cor') cor: string) {
        const listarProdutos = await this.clsArmazenaProduto.Produto;
        const produtosRetornados = listarProdutos.filter(
            element => (element.cor.find( e => e ===cor))
        ).map(
                produto => new ListarProdutosDTO( 
                    produto.id,
                    produto.nome
            )
        );

        return produtosRetornados; 
    }

    @Post()
    async criarProduto(@Body() dadosProduto:CriarProdutoDTO){
        var produto = new ProdutoEntity(uuid(), dadosProduto.nome, dadosProduto.ativo, dadosProduto.valor ,dadosProduto.estoque, 
            dadosProduto.medida, dadosProduto.cor, dadosProduto.marca);

        
        var retornoProduto: any;
            this.clsArmazenaProduto.inserirProduto(produto);
            retornoProduto={
                dadosProduto,
                status:"Produto Criado."
            }
        return retornoProduto;
    }

    @Put('/:id')
    async atualizaProduto(@Param('id') id: string, @Body() novosDados: AlterarProdutoDTO){
        const produtosAtualizado = await this.clsArmazenaProduto.alterarProduto(id,novosDados);
        return ({
            usuario: produtosAtualizado,
            message:'Produto Atualizado'
        });
    }

    @Put('/removerEstoque/:id')
   async removerEstoque(@Param('id') id:string, @Body() quantidade: RemoverEstoqueDTO ){
    const  produtoAtualizado = await this.clsArmazenaProduto.removeEstoque(id,quantidade);

    return ({
        produto: produtoAtualizado,
        message:'Valor de estoque foi retirado'
    });
   }

   @Put('/adicionarEstoque/:id')
   async adicionarEstoque(@Param('id') id:string, @Body() quantidade: RemoverEstoqueDTO ){
    const  produtoAtualizado = await this.clsArmazenaProduto.adicionaEstoque(id,quantidade);

    return ({
        produto: produtoAtualizado,
        message:'Valor de estoque foi adicionado'
    });
   }

    @Delete('/:id')
    async removeProduto(@Param('id') id:string){
        const produtoRemovido = await this.clsArmazenaProduto.excluirProduto(id);
        return({
            produto: produtoRemovido,
            message: 'produto removido'
        })
   }

}