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
var _AgenciaArmazenados_agencias;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgenciaArmazenados = void 0;
const common_1 = require("@nestjs/common");
let AgenciaArmazenados = class AgenciaArmazenados {
    constructor() {
        _AgenciaArmazenados_agencias.set(this, []);
    }
    get Agencia() {
        return __classPrivateFieldGet(this, _AgenciaArmazenados_agencias, "f");
    }
    agenciaJaCadastrada(numConta, codBanco) {
        const validaConta = __classPrivateFieldGet(this, _AgenciaArmazenados_agencias, "f").find(conta => (conta.numeroConta === numConta && conta.id_banco === codBanco));
    }
    inserirAgencia(agencia) {
        __classPrivateFieldGet(this, _AgenciaArmazenados_agencias, "f").push(agencia);
    }
};
_AgenciaArmazenados_agencias = new WeakMap();
AgenciaArmazenados = __decorate([
    (0, common_1.Injectable)()
], AgenciaArmazenados);
exports.AgenciaArmazenados = AgenciaArmazenados;
//# sourceMappingURL=agencia.dm.js.map