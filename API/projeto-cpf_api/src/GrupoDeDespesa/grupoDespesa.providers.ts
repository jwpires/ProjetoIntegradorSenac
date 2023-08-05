import { DataSource } from "typeorm";
import { GrupoDespesa } from "./grupoDespesa.entity";

export const grupoDespesaProviders = [
    {
        provide: 'GRUPODESPESA_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(GrupoDespesa),
        inject: ['DATA_SOURCE'],
    }
];