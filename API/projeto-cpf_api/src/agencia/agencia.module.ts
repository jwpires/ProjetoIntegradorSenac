import { Module } from "@nestjs/common";
import { BancoController } from "./agencia.controller";
import { BancosArmazenados } from "./agencia.dm";


@Module({
    controllers:[BancoController],
    providers:[BancosArmazenados]
})

export class BancoModule{}