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
exports.Agencia = void 0;
const banco_entity_1 = require("../Banco/banco.entity");
const typeorm_1 = require("typeorm");
let Agencia = class Agencia {
    constructor(id, id_banco, nomeProprietario, numeroConta, tipoDeConta, saldo) {
        this.id = id;
        this.id_banco = id_banco;
        this.nomeProprietario = nomeProprietario;
        this.numeroConta = numeroConta;
        this.tipoDeConta = tipoDeConta;
        this.saldo = saldo;
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Agencia.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => banco_entity_1.Banco, { cascade: true }),
    (0, typeorm_1.JoinColumn)({ name: "id_banco", referencedColumnName: "id" }),
    __metadata("design:type", banco_entity_1.Banco)
], Agencia.prototype, "id_banco", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Agencia.prototype, "nomeProprietario", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Agencia.prototype, "numeroConta", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Agencia.prototype, "tipoDeConta", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Agencia.prototype, "saldo", void 0);
Agencia = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [String, banco_entity_1.Banco, String, String, String, Number])
], Agencia);
exports.Agencia = Agencia;
//# sourceMappingURL=agencia.entity.js.map