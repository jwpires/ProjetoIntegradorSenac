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
exports.AlteraUsuarioDTO = void 0;
const class_validator_1 = require("class-validator");
const email_unico_validator_1 = require("../validacao/email-unico.validator");
class AlteraUsuarioDTO {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Nome não pode ser vazio" }),
    __metadata("design:type", String)
], AlteraUsuarioDTO.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(undefined, { message: "Email inválido" }),
    (0, email_unico_validator_1.EmailUnico)({ message: "Já existe usuário cadastrado com esse email." }),
    __metadata("design:type", String)
], AlteraUsuarioDTO.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.MinLength)(6, { message: "O tamano da senha dever conter no mínimo 6 caracteres" }),
    __metadata("design:type", String)
], AlteraUsuarioDTO.prototype, "senha", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: "Idade inválida" }),
    __metadata("design:type", Object)
], AlteraUsuarioDTO.prototype, "idade", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "Cidade inválida." }),
    __metadata("design:type", String)
], AlteraUsuarioDTO.prototype, "cidade", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "Telefone inválido" }),
    __metadata("design:type", String)
], AlteraUsuarioDTO.prototype, "telefone", void 0);
exports.AlteraUsuarioDTO = AlteraUsuarioDTO;
//# sourceMappingURL=atualizaUsuario.dto.js.map