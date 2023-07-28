import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { BancoController } from "./banco.controller";
import { bancoProviders } from "./banco.providers";
import { BancoService } from "./banco.service";


@Module({
    imports:[DatabaseModule],
    controllers:[BancoController],
    providers: [
        ...bancoProviders,
        BancoService
    ]
})

export class BancoModule{}