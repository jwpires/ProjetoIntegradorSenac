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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CriarProdutoDTO = void 0;
const class_validator_1 = require("class-validator");
class CriarProdutoDTO {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CriarProdutoDTO.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)({ message: "Informe se está ativo: true (Sim), false (Não)" }),
    __metadata("design:type", Boolean)
], CriarProdutoDTO.prototype, "ativo", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CriarProdutoDTO.prototype, "valor", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: "Informe a quantidade em estoque" }),
    __metadata("design:type", Number)
], CriarProdutoDTO.prototype, "estoque", void 0);
__decorate([
    (0, class_validator_1.IsArray)({ message: "informe a unidade ou unidades de medidas exemplo: ['UN', 'KG', 'FD',....]" }),
    __metadata("design:type", Array)
], CriarProdutoDTO.prototype, "medida", void 0);
__decorate([
    (0, class_validator_1.IsArray)({ message: "informe a cor ou cores, exemplo: ['amarelo', 'vermelho', 'preto',....]" }),
    __metadata("design:type", Array)
], CriarProdutoDTO.prototype, "cor", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "informe a marca do produto." }),
    __metadata("design:type", String)
], CriarProdutoDTO.prototype, "marca", void 0);
exports.CriarProdutoDTO = CriarProdutoDTO;
//# sourceMappingURL=produto.dto.js.map