import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Despesa } from "./despesa.entity";

@Injectable()
export class DespesasService{
    constructor(
        @Inject('DESPESA_REPOSITORY')
        private despesaRepository: Repository<Despesa>
    ) { }
    
    async listar(): Promise<Despesa[]>{
        return this.despesaRepository.find();
    }
    
    async inserirDespesa(despesa: Despesa): Promise<void> {
        const id = despesa.id;
        const descricao = despesa.descricao;
        const id_grupoDespesa = despesa.id_grupoDespesa;
        const dataLancamento = despesa.dataLancamento;
        const dataVencimento = despesa.dataVencimento;
        const valor = despesa.valor;
        const pago = despesa.pago;

        try {
            const novaDespesa = this.despesaRepository.create({
                id,
                descricao,
                id_grupoDespesa,
                dataLancamento,
                dataVencimento,
                valor, 
                pago
            })
            await this.despesaRepository.insert(novaDespesa);
            console.log('Despesas cadastrada com sucesso.')
        } catch (error) {
            console.log('Erro ao cadastrar Despesa'+ error.message)
        }

        
    }

}