import { DataSource} from "typeorm";
import { Despesa } from "./despesa.entity";



export const despesaProviders = [
    {
        provide: 'DESPESA_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Despesa),
        inject: ['DATA_SOURCE'],
    },
];