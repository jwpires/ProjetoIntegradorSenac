import { Module } from "@nestjs/common";
import { GrupoDespesaController } from "./grupoDespesa.controller";
import { ArmazenaGrupoDespesa } from "./grupoDespesa.dm";

@Module({
    controllers:[GrupoDespesaController],
    providers:[ArmazenaGrupoDespesa]
})

export class GrupoDespesaModule{}