import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { grupoDespesaProviders } from "src/GrupoDeDespesa/grupoDespesa.providers";
import { GrupoDespesaService } from "src/GrupoDeDespesa/grupoDespesa.service";
import { DespesaController } from "./despesa.controller";
import { despesaProviders } from "./despesa.providers";
import { DespesasService } from "./despesa.service";

@Module({
    imports:[DatabaseModule],
    controllers:[DespesaController], // Monitorador do Post e Get, o que envia e recebe
    providers:[
        ...despesaProviders,
        ...grupoDespesaProviders,
        DespesasService,
        GrupoDespesaService
    ]
})


export class DespesaModule{}