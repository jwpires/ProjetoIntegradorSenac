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
exports.AlterarProdutoDTO = void 0;
const class_validator_1 = require("class-validator");
class AlterarProdutoDTO {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AlterarProdutoDTO.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)({ message: "Informe se está ativo: true (Sim), false (Não)" }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], AlterarProdutoDTO.prototype, "ativo", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: "Informe a quantidade em estoque" }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], AlterarProdutoDTO.prototype, "estoque", void 0);
__decorate([
    (0, class_validator_1.IsArray)({ message: "informe a unidade ou unidades de medidas exemplo: ['UN', 'KG', 'FD',....]" }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], AlterarProdutoDTO.prototype, "medida", void 0);
__decorate([
    (0, class_validator_1.IsArray)({ message: "informe a cor ou cores, exemplo: ['amarelo', 'vermelho', 'preto',....]" }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], AlterarProdutoDTO.prototype, "cor", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "informe a marca do produto." }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AlterarProdutoDTO.prototype, "marca", void 0);
exports.AlterarProdutoDTO = AlterarProdutoDTO;
//# sourceMappingURL=alterarProduto.dto.js.map