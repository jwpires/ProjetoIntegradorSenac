import { Body, Controller, Get, Post } from "@nestjs/common/decorators";
import { GrupoDespesaService } from "./grupoDespesa.service";
import { GrupoDespesa } from "./grupoDespesa.entity";
import { InserirGrupoDespesaDTO } from "./dto/inseriGrupoDespesa.dto";
import {v4 as uuid} from 'uuid';

@Controller('/grupoDespesa')
export class GrupoDespesaController{
    constructor (private readonly grupoDespesaService: GrupoDespesaService){}

    @Get() /** Retorna os Grupos Despesas cadastrados via API */
    async RetornoTodosGrupoDespesa():Promise<GrupoDespesa[]>{
        return this.grupoDespesaService.listar();
    }

    @Post()
    async CriarGrupoDespesa(@Body() dadosGrupoDespesa:InserirGrupoDespesaDTO){
        let grupoDespesa = new GrupoDespesa(uuid(), dadosGrupoDespesa.descricao);
        
        this.grupoDespesaService.inserirGrupoDespesa(grupoDespesa);

        let retornoGrupoDespesa = {
            dadosGrupoDespesa,
            message: 'Grupo de Despesa Cadastrado.'
        }

        return retornoGrupoDespesa;
    }

}