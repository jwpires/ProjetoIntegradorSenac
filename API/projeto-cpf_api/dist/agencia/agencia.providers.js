"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agenciaProviders = void 0;
const agencia_entity_1 = require("./agencia.entity");
exports.agenciaProviders = [
    {
        provide: 'AGENCIA_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(agencia_entity_1.Agencia),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=agencia.providers.js.map