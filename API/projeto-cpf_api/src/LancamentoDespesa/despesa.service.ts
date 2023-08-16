import { Inject, Injectable } from "@nestjs/common";
import { RetornoCadastroDTO } from "src/dto/retorno.dto";
import { GrupoDespesa } from "src/GrupoDeDespesa/grupoDespesa.entity";
import { Repository } from "typeorm";
import { Despesa } from "./despesa.entity";
import { InserirDespesaDTO } from "./dto/inserirDespesa.dto";
import { RetornoDespesasDTO } from "./dto/retornoDespesas.dto";
import { GrupoDespesaService } from "src/GrupoDeDespesa/grupoDespesa.service";
import { deprecate } from "util";
import {v4 as uuid} from 'uuid';

@Injectable()
export class DespesasService{
    constructor(
        @Inject('DESPESA_REPOSITORY')
        private despesaRepository: Repository<Despesa>,
        @Inject('GRUPODESPESA_REPOSITORY')
        private grupoDespesaRepository: Repository<GrupoDespesa>,
        private readonly grupoDespesaService: GrupoDespesaService
    ) { }
    
    async listar(): Promise<Despesa[]>{
        return this.despesaRepository.find();
    }
    
    async inserirDespesa(dados: InserirDespesaDTO): Promise<RetornoDespesasDTO> { 

        let despesa = new Despesa();
            despesa.id = uuid();
            despesa.descricao = dados.descricao;
            despesa.grupoDespesa = await this.grupoDespesaService.buscarGrupoDespesaPorId(dados.id_GrupoDespesa);
            despesa.dataLancamento = dados.dataLancamento;
            despesa.dataVencimento = dados.dataVencimento;
            despesa.valor = dados.valor;
            despesa.pago = dados.pago;

        return this.despesaRepository.save(despesa).
        then(
            (result) => {
                return <RetornoDespesasDTO>{
                    id: despesa.id,
                    descricao: despesa.descricao,
                    id_grupoDespesa: despesa.grupoDespesa, 
                    dataLancamento: despesa.dataLancamento,
                    dataVencimento: despesa.dataVencimento,
                    valor: despesa.valor,
                    pago: despesa.pago,
                    message: "Despesa Cadastrada!" 
                };
            }
        )
        .catch(
            (error) =>{
                return <RetornoDespesasDTO>{
                    id: despesa.id,
                    descricao: despesa.descricao,
                    id_grupoDespesa: despesa.grupoDespesa,
                    dataLancamento: despesa.dataLancamento,
                    dataVencimento: despesa.dataVencimento,
                    valor: despesa.valor,
                    pago: despesa.pago,
                    message: "Despesa Cadastrada!"
                };
            }
        )
            
        // const id = despesa.id;
        // const descricao = despesa.descricao;
        // const id_grupoDespesa = despesa.id_grupoDespesa;
        // const dataLancamento = despesa.dataLancamento;
        // const dataVencimento = despesa.dataVencimento;
        // const valor = despesa.valor;
        // const pago = despesa.pago;

        // try {
        //     const novaDespesa = this.despesaRepository.create({
        //         id,
        //         descricao,
        //         id_grupoDespesa,
        //         dataLancamento,
        //         dataVencimento,
        //         valor, 
        //         pago
        //     })
        //     await this.despesaRepository.insert(novaDespesa);
        //     console.log('Despesas cadastrada com sucesso.')
        // } catch (error) {
        //     console.log('Erro ao cadastrar Despesa'+ error.message)
        // }
        
    }

}