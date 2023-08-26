"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioProviders = void 0;
const usuario_entity_1 = require("./usuario.entity");
exports.UsuarioProviders = [
    {
        provide: 'USUARIO_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(usuario_entity_1.Usuario),
        inject: ['DATA_SOURCE'],
    }
];
//# sourceMappingURL=usuario.providers.js.map