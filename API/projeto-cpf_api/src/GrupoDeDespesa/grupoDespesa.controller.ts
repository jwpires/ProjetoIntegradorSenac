import { Body, Controller, Get, Post } from "@nestjs/common/decorators";
import { ArmazenaGrupoDespesa } from "./grupoDespesa.dm";
import { GrupoDespesaEntity } from "./grupoDespesa.entity";
import { InserirGrupoDespesaDTO } from "./validacao/dto/inseriGrupoDespesa.dto";
import { ListarGrupoDespesasDTO } from "./validacao/dto/listarGrupoDespesa.dto";
import {v4 as uuid} from 'uuid';

@Controller('/grupoDespesa')
export class GrupoDespesaController{
    constructor (private armazenaGrupoDespesa: ArmazenaGrupoDespesa){}

    @Get()
    RetornoGrupoDespesa(grupoDespesa: GrupoDespesaEntity){
        let listaGrupoDespesa = this.armazenaGrupoDespesa.GrupoDespesa;
        let retornoGrupoDespesa = listaGrupoDespesa.map(
            gDespesa => new ListarGrupoDespesasDTO(
                gDespesa.id,
                gDespesa.descricao
            )
        );

        return retornoGrupoDespesa;
    }

    @Post()
    CriarGrupoDespesa(@Body() dadosGrupoDespesa:InserirGrupoDespesaDTO){
        const grupoDespesa = new GrupoDespesaEntity(uuid(), dadosGrupoDespesa.descricao);
        this.armazenaGrupoDespesa.inserirGrupoDespesa(grupoDespesa);

        let retornoGrupoDespesa = {
            dadosGrupoDespesa,
            message: 'Grupo de Despesa Cadastrado.'
        }

        return retornoGrupoDespesa
    }


}