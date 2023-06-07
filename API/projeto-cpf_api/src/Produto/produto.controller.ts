import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common/decorators";
import { CriarProdutoDTO } from "./dto/produto.dto";
import { ProdutosArmazenados } from "./produto.dm";
import { ProdutoEntity } from "./produto.entity";
import {v4 as uuid} from 'uuid';
import { ListarProdutosDTO } from "./dto/listarProdutos.dto";
import { AlterarProdutoDTO } from "./dto/alterarProduto.dto";


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

    @Post()
    async criarProduto(@Body() dadosProduto:CriarProdutoDTO){
        var produto = new ProdutoEntity(uuid(), dadosProduto.nome, dadosProduto.ativo, dadosProduto.estoque, 
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

    @Delete('/:id')
    async removeProduto(@Param('id') id:string){
        const produtoRemovido = await this.clsArmazenaProduto.excluirProduto(id);
        return({
            produto: produtoRemovido,
            message: 'produto removido'
        })
   }

}