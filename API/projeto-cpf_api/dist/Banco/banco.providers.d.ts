import { DataSource } from "typeorm";
import { Banco } from "./banco.entity";
export declare const bancoProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Banco>;
    inject: string[];
}[];
