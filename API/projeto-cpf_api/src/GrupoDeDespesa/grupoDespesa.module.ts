import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { GrupoDespesaController } from "./grupoDespesa.controller";
import { grupoDespesaProviders } from "./grupoDespesa.providers";
import { GrupoDespesaService } from "./grupoDespesa.service";

@Module({
    imports:[DatabaseModule],
    controllers:[GrupoDespesaController],
    providers:[
        ...grupoDespesaProviders,
        GrupoDespesaService
    ]
})

export class GrupoDespesaModule{}