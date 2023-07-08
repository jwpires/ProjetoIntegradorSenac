import { Module } from "@nestjs/common";
import { DespesaController } from "./despesa.controller";
import { DespesasArmazenadas } from "./despesa.dm";

@Module({
    controllers:[DespesaController], // Monitorador do Post e Get, o que envia e recebe
    providers:[DespesasArmazenadas] //  Dm
})


export class DespesaModule{

}