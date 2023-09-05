import { Get } from "@nestjs/common";
import { Controller } from "@nestjs/common";
import { Body, Param, Put } from "@nestjs/common/decorators";
import { Agencia } from "src/agencia/agencia.entity";
import { RetornoGeralDTO } from "src/agencia/dto/retornoGeral.dto";
import { Despesa } from "src/LancamentoDespesa/despesa.entity";
import { ListaRelatorioDespesaDTO } from "./dto/listarRelatorioDespesa.dto";
import { ListarRelatorioSaldoDTO } from "./dto/listaSaldoDTO";
import { RelatorioDespesaService } from "./relatorioDespesa.service";
import { RelatorioSaldoService } from "./relatorioSaldo.service";

@Controller('/relatorios')
export class RelatoriosController{
    constructor(
        private readonly relatorioService: RelatorioDespesaService,
        private readonly relatorioSaldoServide: RelatorioSaldoService,
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
    async RetornaSaldosDash():Promise<ListarRelatorioSaldoDTO[]> {
        return this.relatorioSaldoServide.listarRelatorioSaldo();
    }


    @Get('/despesas-em-aberto=:datainicio=:datafim=:tipo')
    async RetornaListaDespesaEmAberto(@Param('datainicio') datainicio:string, @Param('datafim') datafim:string, @Param('tipo') tipo:number): Promise<ListaRelatorioDespesaDTO[]>{
        const relatorios = this.relatorioService.listarRelatorioDespesa(datainicio, datafim, tipo);
        
        const retornoDespesaEmAberto = (await relatorios).filter(
            item => item.pago == false
        )
        
        return retornoDespesaEmAberto; 
    }
//http://localhost:3000/relatorios/despesas-pagas=2023-08-01=2023-08-30=1
    @Get('/despesas-pagas=:datainicio=:datafim=:tipo')
    async RetornaListaDespesaPagas(@Param('datainicio') datainicio:string, @Param('datafim') datafim:string, @Param('tipo') tipo:number): Promise<ListaRelatorioDespesaDTO[]>{
        const relatorios = this.relatorioService.listarRelatorioDespesa(datainicio, datafim, tipo);
        
        const retornoDespesaPaga = (await relatorios).filter(
            item => item.pago == true
        )
        
        return retornoDespesaPaga;
    }

    @Put('alterar-:id')
    async alteraStatusPagamento(@Param('id') id: string): Promise<RetornoGeralDTO>{
        return await this.relatorioService.alterarStatusPagametoDespesa(id);
        
    }

    @Put('alterarSaldo-:id-valor-:saldo')
    async alteraSaldo(@Param('id') id: string, @Param('saldo') saldo: number): Promise<RetornoGeralDTO>{
        return await this.relatorioSaldoServide.alterarSaldo(id, saldo);
        
    }


}