import { DataSource } from "typeorm";
import { GrupoDespesa } from "./grupoDespesa.entity";
export declare const grupoDespesaProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<GrupoDespesa>;
    inject: string[];
}[];
