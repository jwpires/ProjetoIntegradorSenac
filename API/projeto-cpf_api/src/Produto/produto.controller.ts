import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common/decorators";
import { CriarProdutoDTO } from "./dto/produto.dto";
import { ProdutosArmazenados } from "./produto.dm";
import { ProdutoEntity } from "./produto.entity";
import {v4 as uuid} from 'uuid';
import { ListarProdutosDTO } from "./dto/listarProdutos.dto";
import { AlterarProdutoDTO } from "./dto/alterarProduto.dto";
import { ListarMenuVendaDTO } from "./dto/listarMenuVenda.dto";


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

    @Get('/menu/:menu')
    async ExibeMenu(@Param('menu') menu: string) {
        if (menu === 'Menu') {
            const produtosAtivos = await this.clsArmazenaProduto.buscarProdutoAtivo();
            const retornoMenu = produtosAtivos.map(
                produto => new ListarMenuVendaDTO(
                    produto.nome,
                    produto.medida,
                    produto.cor,
                    produto.marca,
                    produto.valor
                )
            );
            return retornoMenu;      
        }
        return ["Escreva 'http://localhost:3000/produtos/menu/Menu' para visualizar o cardápio disponível."];
    }



        
    @Get('/:nome')
    async ConsultaPorNome(@Param('nome') nome: string) {

        const retornoProdutos = await this.clsArmazenaProduto.buscarPorNome(nome);

        return retornoProdutos;
    }

    @Get('/marca/:marca')
    async ConsultaPorMarca(@Param('marca') marca: string) {

        const retornoProdutos = await this.clsArmazenaProduto.buscarPorMarca(marca);

        return retornoProdutos;
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

    @Delete('/:id')
    async removeProduto(@Param('id') id:string){
        const produtoRemovido = await this.clsArmazenaProduto.excluirProduto(id);
        return({
            produto: produtoRemovido,
            message: 'produto removido'
        })
   }

}