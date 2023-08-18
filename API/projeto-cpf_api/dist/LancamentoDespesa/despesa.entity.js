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
exports.Despesa = void 0;
const grupoDespesa_entity_1 = require("../GrupoDeDespesa/grupoDespesa.entity");
const typeorm_1 = require("typeorm");
let Despesa = class Despesa {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Despesa.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Despesa.prototype, "descricao", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => grupoDespesa_entity_1.GrupoDespesa, { cascade: true }),
    (0, typeorm_1.JoinColumn)({ name: "id_grupoDespesa", referencedColumnName: "id" }),
    __metadata("design:type", grupoDespesa_entity_1.GrupoDespesa)
], Despesa.prototype, "grupoDespesa", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Despesa.prototype, "dataLancamento", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Despesa.prototype, "dataVencimento", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 11, scale: 2 }),
    __metadata("design:type", Number)
], Despesa.prototype, "valor", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Despesa.prototype, "pago", void 0);
Despesa = __decorate([
    (0, typeorm_1.Entity)()
], Despesa);
exports.Despesa = Despesa;
//# sourceMappingURL=despesa.entity.js.map