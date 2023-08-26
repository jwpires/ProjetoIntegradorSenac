"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Usuario_senha;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
class Usuario {
    constructor(id, nome, idade, cidade, email, telefone, senha) {
        _Usuario_senha.set(this, void 0);
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade;
        this.email = email;
        this.telefone = telefone;
        __classPrivateFieldSet(this, _Usuario_senha, senha, "f");
    }
    get senha() {
        return "---------------";
    }
    set senha(senhaNova) {
        __classPrivateFieldSet(this, _Usuario_senha, senhaNova, "f");
    }
}
exports.Usuario = Usuario;
_Usuario_senha = new WeakMap();
//# sourceMappingURL=usuario.entity.js.map