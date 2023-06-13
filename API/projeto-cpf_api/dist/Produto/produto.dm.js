"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _ProdutosArmazenados_produtos;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutosArmazenados = void 0;
const common_1 = require("@nestjs/common");
let ProdutosArmazenados = class ProdutosArmazenados {
    constructor() {
        _ProdutosArmazenados_produtos.set(this, []);
    }
    get Produto() {
        return __classPrivateFieldGet(this, _ProdutosArmazenados_produtos, "f");
    }
    inserirProduto(produto) {
        __classPrivateFieldGet(this, _ProdutosArmazenados_produtos, "f").push(produto);
    }
    buscarPorID(id) {
        const possivelProduto = __classPrivateFieldGet(this, _ProdutosArmazenados_produtos, "f").find(produtoSalvo => produtoSalvo.id === id);
        if (!possivelProduto) {
            throw new Error('Produto não encontrado');
        }
        return possivelProduto;
    }
    buscarProdutoAtivo() {
        const produtoAtivos = __classPrivateFieldGet(this, _ProdutosArmazenados_produtos, "f").filter(produto => produto.ativo === true);
        if (!produtoAtivos) {
            throw new Error('Produto não encontrado');
        }
        return produtoAtivos;
    }
    buscarPorMarca(marca) {
        const possivelProduto = __classPrivateFieldGet(this, _ProdutosArmazenados_produtos, "f").filter(produtoSalvo => produtoSalvo.marca === marca);
        if (!possivelProduto) {
            throw new Error('Marca não encontrado');
        }
        return possivelProduto;
    }
    buscarPorNome(nome) {
        const possivelProduto = __classPrivateFieldGet(this, _ProdutosArmazenados_produtos, "f").filter(produtoSalvo => produtoSalvo.nome === nome);
        if (!possivelProduto) {
            throw new Error('Produto não encontrado');
        }
        return possivelProduto;
    }
    async alterarProduto(id, dadosParaAtualizar) {
        const produto = this.buscarPorID(id);
        Object.entries(dadosParaAtualizar).forEach(([chave, valor]) => {
            if (chave === 'id') {
                return;
            }
            produto[chave] = valor;
        });
    }
    async excluirProduto(id) {
        const produto = this.buscarPorID(id);
        __classPrivateFieldSet(this, _ProdutosArmazenados_produtos, this.Produto.filter(produtoSalvo => produtoSalvo.id != id), "f");
        return produto;
    }
};
_ProdutosArmazenados_produtos = new WeakMap();
ProdutosArmazenados = __decorate([
    (0, common_1.Injectable)()
], ProdutosArmazenados);
exports.ProdutosArmazenados = ProdutosArmazenados;
//# sourceMappingURL=produto.dm.js.map