import { Body, Controller, Get, Post } from "@nestjs/common";
import { Despesa } from "./despesa.entity";
import { ListarDespesasDashboardDTO } from "./dto/exibeDespesasDashboard.dto";
import { InserirDespesaDTO } from "./dto/inserirDespesa.dto";
import {v4 as uuid} from 'uuid';
import { DespesasService } from "./despesa.service";
import { GrupoDespesaService } from "src/GrupoDeDespesa/grupoDespesa.service";

@Controller('/lancamentoDespesa')
export class DespesaController{
    constructor(
        private readonly despesaService: DespesasService,
        private readonly grupoDespesaService: GrupoDespesaService
    ) { }
    
    @Get()
    async listarDespesas():Promise<Despesa[]> {
        return this.despesaService.listar();
    }

    @Post()
    async CriarDespesa(@Body() dadosDespesa: InserirDespesaDTO) {
       
        return this.despesaService.inserirDespesa(dadosDespesa);

        // let retornoDespesa: any;

        // try {
        //     const grupoDespesa = await this.grupoDespesaService.buscarGrupoDespesaPorId(dadosDespesa.id_GrupoDespesa)

        //     const despesa = new Despesa(
        //         uuid(),
        //         dadosDespesa.descricao,
        //         grupoDespesa,
        //         dadosDespesa.dataLancamento,
        //         dadosDespesa.dataVencimento,
        //         dadosDespesa.valor,
        //         dadosDespesa.pago
        //     );
        //     await this.despesaService.inserirDespesa(despesa);
        //     retornoDespesa = {
        //         dadosDespesa,
        //         message: "Despesa Cadastrada!"
        //     }
        // } catch (error) {
        //     retornoDespesa = {
        //         error: "Erro ao cadastrar Despesa"
        //     } 
        // }
        // return retornoDespesa;
    }
} 