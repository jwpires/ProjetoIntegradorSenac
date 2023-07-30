import { Module } from "@nestjs/common";
import { bancoProviders } from "src/Banco/banco.providers";
import { BancoService } from "src/Banco/banco.service";
import { DatabaseModule } from "src/database/database.module";
import { AgenciaController } from "./agencia.controller";
import { agenciaProviders } from "./agencia.providers";
import { AgenciaService } from "./agencia.service";


@Module({
    imports:[DatabaseModule],
    controllers:[AgenciaController],
    providers: [
        ...agenciaProviders,
        ...bancoProviders,
        AgenciaService, BancoService
    ]
})

export class AgenciaModule{}