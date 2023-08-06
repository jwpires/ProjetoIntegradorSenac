import { Get } from "@nestjs/common";
import { Controller } from "@nestjs/common";
import { Agencia } from "src/agencia/agencia.entity";
import { Despesa } from "src/LancamentoDespesa/despesa.entity";
import { RelatorioDespesaDashService } from "./relatorioDespesaDash.service";
import { RelatorioSaldoDashService } from "./relatorioSaldoDash.service";

@Controller('/relatorios')
export class RelatoriosController{
    constructor(
        private readonly relatorioDashService: RelatorioDespesaDashService,
        private readonly relatorioSaldoServide: RelatorioSaldoDashService
    ) { }
    
    @Get('/despesa-dash')
    async RetornaListaDespesaDash():Promise<Despesa[]> {
        const relatorios = this.relatorioDashService.listar();
        
        const retornoRelatorioDash = (await relatorios).filter(
            item => item.pago === false
        )
        
        return retornoRelatorioDash;
    }
    
    @Get('/saldo')
    async RetornaSaldosDash():Promise<Agencia[]> {
        return this.relatorioSaldoServide.listar();

    }
}