import { DataSource } from "typeorm";
import { Agencia } from "./agencia.entity";
export declare const agenciaProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Agencia>;
    inject: string[];
}[];
