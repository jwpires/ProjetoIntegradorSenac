"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AgenciaEntity_saldo;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgenciaEntity = void 0;
class AgenciaEntity {
    constructor(id, id_banco, nomeProprietario, numeroConta, tipoDeConta, saldo) {
        _AgenciaEntity_saldo.set(this, void 0);
        this.id = id;
        this.nomeProprietario = nomeProprietario;
        this.numeroConta = numeroConta;
        this.tipoDeConta = tipoDeConta;
        __classPrivateFieldSet(this, _AgenciaEntity_saldo, saldo, "f");
    }
    set deposito(valor) {
        __classPrivateFieldSet(this, _AgenciaEntity_saldo, __classPrivateFieldGet(this, _AgenciaEntity_saldo, "f") + valor, "f");
    }
    set saque(valor) {
        __classPrivateFieldSet(this, _AgenciaEntity_saldo, __classPrivateFieldGet(this, _AgenciaEntity_saldo, "f") - valor, "f");
    }
    get saldo() {
        return __classPrivateFieldGet(this, _AgenciaEntity_saldo, "f");
    }
}
exports.AgenciaEntity = AgenciaEntity;
_AgenciaEntity_saldo = new WeakMap();
//# sourceMappingURL=agencia.entity.js.map