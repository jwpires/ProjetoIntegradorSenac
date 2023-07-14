import { DataSource } from "typeorm";
import { Marca } from "./marca.entity";
export declare const marcaProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Marca>;
    inject: string[];
}[];
