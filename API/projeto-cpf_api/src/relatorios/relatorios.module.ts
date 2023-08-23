import { Module } from "@nestjs/common";
import { agenciaProviders } from "src/agencia/agencia.providers";
import { DatabaseModule } from "src/database/database.module";
import { despesaProviders } from "src/LancamentoDespesa/despesa.providers";
import { RelatorioDespesaService } from "./relatorioDespesa.service";
import { RelatoriosController } from "./relatorios.controller";
import { RelatorioService } from "./relatorios.service";

@Module({
    imports: [DatabaseModule],
    controllers: [RelatoriosController],
    providers: [
        ...despesaProviders,
        ...agenciaProviders,
        RelatorioDespesaService,
        RelatorioService,
    ]
})

export class RelatorioModule{}