import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { Despesa } from "./despesa.entity";
import { ListarDespesasDashboardDTO } from "./dto/exibeDespesasDashboard.dto";
import { InserirDespesaDTO } from "./dto/inserirDespesa.dto";
import {v4 as uuid} from 'uuid';
import { DespesasService } from "./despesa.service";
import { GrupoDespesaService } from "src/GrupoDeDespesa/grupoDespesa.service";
import { RetornoGeralDTO } from "src/agencia/dto/retornoGeral.dto";

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
    }

    @Delete('remove-:id')
   async removeDespesa(@Param('id') id:string):Promise<RetornoGeralDTO>{
    return this.despesaService.remover(id);
   }
} 