import { Body, Controller, Get, Post } from "@nestjs/common";
import { DespesasArmazenadas } from "./despesa.dm";
import { DespesaEntity } from "./despesa.entity";
import { ListarDespesasDashboardDTO } from "./dto/exibeDespesasDashboard.dto";
import { InserirDespesaDTO } from "./dto/inserirDespesa.dto";
import {v4 as uuid} from 'uuid';

@Controller('/lancamentoDespesa')
export class DespesaController{
    constructor(private armazenaDespesa: DespesasArmazenadas) { }
    
    @Get()
    async RetornoDespesasDash() {
        const listarDespesas = await this.armazenaDespesa.Despesa;
        const retornoDespesas = listarDespesas.map(
            despesa => new ListarDespesasDashboardDTO(
                despesa.descricao,
                despesa.grupoDespesa,
                despesa.dataVencimento,
                despesa.valor,
                despesa.pago
            )
        );
        return retornoDespesas;
    }

    @Post()
    async CriarDespesa(@Body() dadosDespesa: InserirDespesaDTO) {
        const despesa = new DespesaEntity(uuid(), dadosDespesa.descricao, dadosDespesa.grupoDespesa, 
        dadosDespesa.dataLancamento, dadosDespesa.dataVencimento, dadosDespesa.valor, dadosDespesa.pago)

        this.armazenaDespesa.inserirDespesa(despesa);
        let retornoDespesa = {
            dadosDespesa,
            message: "Despesa Cadastrada!"
        }

        return retornoDespesa;
    }
}