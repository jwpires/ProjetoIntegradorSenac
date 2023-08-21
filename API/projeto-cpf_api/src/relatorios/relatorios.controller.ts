import { Get } from "@nestjs/common";
import { Controller } from "@nestjs/common";
import { Agencia } from "src/agencia/agencia.entity";
import { Despesa } from "src/LancamentoDespesa/despesa.entity";
import { ListaRelatorioDespesaDTO } from "./dto/listarRelatorioDespesa.dto";
import { RelatorioDespesaService } from "./relatorioDespesa.service";
import { RelatorioSaldoDashService } from "./relatorioSaldoDash.service";

@Controller('/relatorios')
export class RelatoriosController{
    constructor(
        private readonly relatorioService: RelatorioDespesaService,
        private readonly relatorioSaldoServide: RelatorioSaldoDashService
    ) { }
    
    /** Retorno das despesas apresentadas no Dashboard da página Home */
    @Get('/despesa-dash')
    async RetornaListaDespesaDash():Promise<Despesa[]> {
        const relatorios = this.relatorioService.listar();
        
        const retornoRelatorioDash = (await relatorios).filter(
            item => item.pago === false
        )
        
        return retornoRelatorioDash;
    }

     /** Retorno dos saldos apresentadas no Dashboard da página Home */ 
    @Get('/saldo')
    async RetornaSaldosDash():Promise<Agencia[]> {
        return this.relatorioSaldoServide.listar();
    }


    @Get('/despesas-em-aberto')
    async RetornaListaDespesaEmAberto(): Promise<ListaRelatorioDespesaDTO[]>{
        const relatorios = this.relatorioService.listarRelatorioDespesa();
        
        const retornoDespesaEmAberto = (await relatorios).filter(
            item => item.pago == false
        )
        
        return retornoDespesaEmAberto; 
    }

    @Get('/despesas-pagas')
    async RetornaListaDespesaPagas(): Promise<ListaRelatorioDespesaDTO[]>{
        const relatorios = this.relatorioService.listarRelatorioDespesa();
        
        const retornoDespesaPaga = (await relatorios).filter(
            item => item.pago === true
        )
        
        return retornoDespesaPaga;
    }
}