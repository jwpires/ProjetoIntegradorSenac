import { Module } from "@nestjs/common";
import { agenciaProviders } from "src/agencia/agencia.providers";
import { DatabaseModule } from "src/database/database.module";
import { despesaProviders } from "src/LancamentoDespesa/despesa.providers";
import { RelatorioDespesaDashService } from "./relatorioDespesaDash.service";
import { RelatoriosController } from "./relatorios.controller";
import { RelatorioSaldoDashService } from "./relatorioSaldoDash.service";

@Module({
    imports: [DatabaseModule],
    controllers: [RelatoriosController],
    providers: [
        ...despesaProviders,
        ...agenciaProviders,
        RelatorioDespesaDashService,
        RelatorioSaldoDashService,
    ]
})

export class RelatorioModule{}