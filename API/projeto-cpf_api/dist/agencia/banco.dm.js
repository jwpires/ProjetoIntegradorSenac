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
var _BancosArmazenados_bancos;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BancosArmazenados = void 0;
const common_1 = require("@nestjs/common");
let BancosArmazenados = class BancosArmazenados {
    constructor() {
        _BancosArmazenados_bancos.set(this, []);
    }
    get banco() {
        return __classPrivateFieldGet(this, _BancosArmazenados_bancos, "f");
    }
    inserirBanco(banco) {
        __classPrivateFieldGet(this, _BancosArmazenados_bancos, "f").push(banco);
    }
    buscaPorId(id) {
        const consulta = this.banco.find(banco => banco.id === id);
        if (!consulta) {
            throw new Error('Banco não encontrado.');
        }
        return consulta;
    }
    consultarBancoPorNome(nome) {
        const consulta = __classPrivateFieldGet(this, _BancosArmazenados_bancos, "f").find(banco => banco.nome === nome);
        if (!consulta) {
            throw new Error("Banco não encontrado.");
        }
        return consulta;
    }
};
_BancosArmazenados_bancos = new WeakMap();
BancosArmazenados = __decorate([
    (0, common_1.Injectable)()
], BancosArmazenados);
exports.BancosArmazenados = BancosArmazenados;
//# sourceMappingURL=banco.dm.js.map