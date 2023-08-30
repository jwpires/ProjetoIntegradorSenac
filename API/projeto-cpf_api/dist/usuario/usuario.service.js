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
exports.UsuarioService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const usuario_entity_1 = require("./usuario.entity");
let UsuarioService = class UsuarioService {
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
    async listar() {
        return this.usuarioRepository.find();
    }
    async inserir(dados) {
        let usuario = new usuario_entity_1.Usuario();
        usuario.id = (0, uuid_1.v4)();
        usuario.nome = dados.nome;
        usuario.email = dados.email;
        usuario.senha = dados.senha;
        return this.usuarioRepository.save(usuario)
            .then((result) => {
            return {
                id: usuario.id,
                message: "Usuario cadastrado!"
            };
        })
            .catch((error) => {
            return {
                id: "",
                message: "Houve um erro ao cadastrar." + error.message
            };
        });
    }
    async validaEmail(email) {
        const possivelUsuario = await this.usuarioRepository.findOne({
            where: {
                email,
            },
        });
        return (possivelUsuario !== null);
    }
};
UsuarioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('USUARIO_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UsuarioService);
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=usuario.service.js.map