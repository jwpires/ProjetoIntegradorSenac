"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.despesaProviders = void 0;
const despesa_entity_1 = require("./despesa.entity");
exports.despesaProviders = [
    {
        provide: 'DESPESA_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(despesa_entity_1.Despesa),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=despesa.providers.js.map