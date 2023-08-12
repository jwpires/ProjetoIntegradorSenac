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
exports.MarcaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let MarcaService = class MarcaService {
    constructor(marcaRepository) {
        this.marcaRepository = marcaRepository;
    }
    async listar() {
        return this.marcaRepository.find();
    }
    async inserir(marca) {
    }
    buscarPorID(id) {
        return this.marcaRepository.findOne({
            where: {
                id,
            }
        });
    }
    async remover(id) {
        const user = await this.buscarPorID(id);
        await this.marcaRepository.remove(user);
    }
    async alterar(id, dados) {
        const marca = await this.buscarPorID(id);
        Object.entries(dados).forEach(([chave, valor]) => {
            if (chave === 'id') {
                return;
            }
            marca[chave] = valor;
        });
        return this.marcaRepository.save(marca)
            .then((result) => {
            return {
                id: marca.id,
                message: "Marca alterada!"
            };
        })
            .catch((error) => {
            return {
                id: "",
                message: "Houve um erro ao alterar."
            };
        });
    }
};
MarcaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('MARCA_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], MarcaService);
exports.MarcaService = MarcaService;
//# sourceMappingURL=marca.service.js.map