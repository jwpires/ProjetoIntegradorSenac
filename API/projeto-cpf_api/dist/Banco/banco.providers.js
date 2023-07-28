"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bancoProviders = void 0;
const banco_entity_1 = require("./banco.entity");
exports.bancoProviders = [
    {
        provide: 'BANCO_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(banco_entity_1.Banco),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=banco.providers.js.map