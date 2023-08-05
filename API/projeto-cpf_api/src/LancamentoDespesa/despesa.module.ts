import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { GrupoDespesa } from "src/GrupoDeDespesa/grupoDespesa.entity";
import { grupoDespesaProviders } from "src/GrupoDeDespesa/grupoDespesa.providers";
import { DespesaController } from "./despesa.controller";
import { DespesasArmazenadas } from "./despesa.dm";
import { despesaProviders } from "./despesa.providers";

@Module({
    imports:[DatabaseModule],
    controllers:[DespesaController], // Monitorador do Post e Get, o que envia e recebe
    providers:[
        ...despesaProviders,
        ...grupoDespesaProviders,
        DespesasArmazenadas,
        GrupoDespesa
    ]
})


export class DespesaModule{}