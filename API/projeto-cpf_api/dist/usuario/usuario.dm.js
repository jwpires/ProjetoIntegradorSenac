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
var _UsuarioArmazenados_usuarios;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioArmazenados = void 0;
const decorators_1 = require("@nestjs/common/decorators");
let UsuarioArmazenados = class UsuarioArmazenados {
    constructor() {
        _UsuarioArmazenados_usuarios.set(this, []);
    }
    AdicionarUsuario(usuario) {
        __classPrivateFieldGet(this, _UsuarioArmazenados_usuarios, "f").push(usuario);
    }
    get Usuarios() {
        return __classPrivateFieldGet(this, _UsuarioArmazenados_usuarios, "f");
    }
};
_UsuarioArmazenados_usuarios = new WeakMap();
UsuarioArmazenados = __decorate([
    (0, decorators_1.Injectable)()
], UsuarioArmazenados);
exports.UsuarioArmazenados = UsuarioArmazenados;
//# sourceMappingURL=usuario.dm.js.map