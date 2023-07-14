import { Module } from "@nestjs/common";
import { DespesasArmazenadas } from "src/LancamentoDespesa/despesa.dm";
import { RelatorioDespesa } from "./relatorioDepesa.dm";
import { RelatorioDespesaController } from "./relatorioDespesa.controller";

@Module({
    controllers: [RelatorioDespesaController],
    providers:[RelatorioDespesa],
})

export class RelatorioDespesaModule{}