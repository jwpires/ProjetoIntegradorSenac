"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.marcaProviders = void 0;
const marca_entity_1 = require("./marca.entity");
exports.marcaProviders = [
    {
        provide: 'MARCA_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(marca_entity_1.Marca),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=marca.providers.js.map