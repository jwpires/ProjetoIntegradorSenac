import { Get } from "@nestjs/common";
import { Controller } from "@nestjs/common";
import { DespesasArmazenadas } from "src/LancamentoDespesa/despesa.dm";
import { ListaRelatorioDespesaDTO } from "./dto/listarRelatorioDespesa.dto";
import { RelatorioDespesa } from "./relatorioDepesa.dm";


@Controller('/relatorioDespesa')
export class RelatorioDespesaController{
    constructor(
        private relatorio: RelatorioDespesa
    ){}
    
    @Get()
    async ExibirRelatorio() {
    
    }
}