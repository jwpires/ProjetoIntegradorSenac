import { Module } from "@nestjs/common";
import { AgenciaController } from "./agencia.controller";
import { AgenciaArmazenados } from "./agencia.dm";


@Module({
    controllers:[AgenciaController],
    providers:[AgenciaArmazenados]
})

export class AgenciaModule{}