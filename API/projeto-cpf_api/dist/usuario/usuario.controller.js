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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const common_1 = require("@nestjs/common");
const request_mapping_decorator_1 = require("@nestjs/common/decorators/http/request-mapping.decorator");
const usuario_dto_1 = require("./dto/usuario.dto");
const usuario_class_1 = require("./usuario.class");
const usuario_dm_1 = require("./usuario.dm");
let UsuarioController = class UsuarioController {
    constructor(clsUsuariosArmazenados) {
        this.clsUsuariosArmazenados = clsUsuariosArmazenados;
    }
    async RetornoUsuarios() {
        return this.clsUsuariosArmazenados.Usuarios;
    }
    async criaUsuario(dadosUsuario) {
        var usuario = new usuario_class_1.Usuario(dadosUsuario.nome, dadosUsuario.idade, dadosUsuario.cidade, dadosUsuario.email, dadosUsuario.telefone, dadosUsuario.senha);
        var retornoUsuario;
        this.clsUsuariosArmazenados.AdicionarUsuario(usuario);
        retornoUsuario = {
            dadosUsuario,
            status: "Usuário Criado."
        };
        return retornoUsuario;
    }
};
__decorate([
    (0, request_mapping_decorator_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "RetornoUsuarios", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [usuario_dto_1.CriaUsuarioDIO]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "criaUsuario", null);
UsuarioController = __decorate([
    (0, common_1.Controller)('/usuarios'),
    __metadata("design:paramtypes", [usuario_dm_1.UsuarioArmazenados])
], UsuarioController);
exports.UsuarioController = UsuarioController;
//# sourceMappingURL=usuario.controller.js.map