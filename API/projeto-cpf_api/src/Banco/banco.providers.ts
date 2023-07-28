import { DataSource} from "typeorm";
import { Banco } from "./banco.entity";


export const bancoProviders = [
    {
        provide: 'BANCO_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Banco),
        inject: ['DATA_SOURCE'],
    },
];