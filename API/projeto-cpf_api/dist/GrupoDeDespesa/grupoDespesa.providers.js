"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.grupoDespesaProviders = void 0;
const grupoDespesa_entity_1 = require("./grupoDespesa.entity");
exports.grupoDespesaProviders = [
    {
        provide: 'GRUPODESPESA_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(grupoDespesa_entity_1.GrupoDespesa),
        inject: ['DATA_SOURCE'],
    }
];
//# sourceMappingURL=grupoDespesa.providers.js.map