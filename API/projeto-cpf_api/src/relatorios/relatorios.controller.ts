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
    @Get('/saldo/:banco?/:descricao?')
    async RetornaSaldosDash(@Param('banco') banco: string = undefined, @Param('descricao') descricao: string = undefined):Promise<ListarRelatorioSaldoDTO[]> {
        if( banco == 'undefined' && descricao == 'undefined'){
            return this.relatorioSaldoServide.listarRelatorioSaldo(undefined, undefined);
        }else{
            if( banco == 'undefined'){
                return this.relatorioSaldoServide.listarRelatorioSaldo(undefined, descricao);
            }
            else{
                if( descricao == 'undefined'){
                    return this.relatorioSaldoServide.listarRelatorioSaldo(banco, undefined);
                }else{
                    return this.relatorioSaldoServide.listarRelatorioSaldo(banco, descricao);
                }
            }
        }
    } 


    @Get('/despesas-em-aberto=:datainicio=:datafim=:tipo=:pago')
    async RetornaListaDespesaEmAberto(@Param('datainicio') datainicio:string, @Param('datafim') datafim:string, @Param('tipo') tipo:number, @Param('pago') pago:number): Promise<ListaRelatorioDespesaDTO[]>{
        return await this.relatorioService.listarRelatorioDespesa(datainicio, datafim, tipo, pago);
        
        
         
    }

    @Get('/despesas-pagas=:datainicio=:datafim=:tipo=:pago')
    async RetornaListaDespesaPagas(@Param('datainicio') datainicio:string, @Param('datafim') datafim:string, @Param('tipo') tipo:number, @Param('pago') pago:number): Promise<ListaRelatorioDespesaDTO[]>{
        return await this.relatorioService.listarRelatorioDespesa(datainicio, datafim, tipo, pago);
    
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