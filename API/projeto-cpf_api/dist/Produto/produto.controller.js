"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoController = void 0;
const decorators_1 = require("@nestjs/common/decorators");
const produto_dto_1 = require("./dto/produto.dto");
const produto_dm_1 = require("./produto.dm");
const produto_entity_1 = require("./produto.entity");
const uuid_1 = require("uuid");
const listarProdutos_dto_1 = require("./dto/listarProdutos.dto");
const alterarProduto_dto_1 = require("./dto/alterarProduto.dto");
let ProdutoController = class ProdutoController {
    constructor(clsArmazenaProduto) {
        this.clsArmazenaProduto = clsArmazenaProduto;
    }
    async RetornoProdutos() {
        const listarProdutos = await this.clsArmazenaProduto.Produto;
        const produtosRetornados = listarProdutos.map(produto => new listarProdutos_dto_1.ListarProdutosDTO(produto.id, produto.nome));
        return produtosRetornados;
    }
    async ConsultaPorNome(nome) {
        const retornoProdutos = await this.clsArmazenaProduto.buscarPorNome(nome);
        return retornoProdutos;
    }
    async criarProduto(dadosProduto) {
        var produto = new produto_entity_1.ProdutoEntity((0, uuid_1.v4)(), dadosProduto.nome, dadosProduto.ativo, dadosProduto.estoque, dadosProduto.medida, dadosProduto.cor, dadosProduto.marca);
        var retornoProduto;
        this.clsArmazenaProduto.inserirProduto(produto);
        retornoProduto = {
            dadosProduto,
            status: "Produto Criado."
        };
        return retornoProduto;
    }
    async atualizaProduto(id, novosDados) {
        const produtosAtualizado = await this.clsArmazenaProduto.alterarProduto(id, novosDados);
        return ({
            usuario: produtosAtualizado,
            message: 'Produto Atualizado'
        });
    }
    async removeProduto(id) {
        const produtoRemovido = await this.clsArmazenaProduto.excluirProduto(id);
        return ({
            produto: produtoRemovido,
            message: 'produto removido'
        });
    }
};
__decorate([
    (0, decorators_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "RetornoProdutos", null);
__decorate([
    (0, decorators_1.Get)('/:nome'),
    __param(0, (0, decorators_1.Param)('nome')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "ConsultaPorNome", null);
__decorate([
    (0, decorators_1.Post)(),
    __param(0, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [produto_dto_1.CriarProdutoDTO]),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "criarProduto", null);
__decorate([
    (0, decorators_1.Put)('/:id'),
    __param(0, (0, decorators_1.Param)('id')),
    __param(1, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, alterarProduto_dto_1.AlterarProdutoDTO]),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "atualizaProduto", null);
__decorate([
    (0, decorators_1.Delete)('/:id'),
    __param(0, (0, decorators_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "removeProduto", null);
ProdutoController = __decorate([
    (0, decorators_1.Controller)('/produtos'),
    __metadata("design:paramtypes", [produto_dm_1.ProdutosArmazenados])
], ProdutoController);
exports.ProdutoController = ProdutoController;
//# sourceMappingURL=produto.controller.js.map