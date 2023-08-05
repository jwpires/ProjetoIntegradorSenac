import { DataSource } from "typeorm";
import { Despesa } from "./despesa.entity";
export declare const despesaProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Despesa>;
    inject: string[];
}[];
