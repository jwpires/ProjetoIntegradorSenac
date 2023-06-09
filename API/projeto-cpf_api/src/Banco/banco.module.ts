import { Module } from "@nestjs/common";
import { BancoController } from "./banco.controller";
import { BancosArmazenados } from "./banco.dm";


@Module({
    controllers:[BancoController],
    providers:[BancosArmazenados]
})

export class BancoModule{}