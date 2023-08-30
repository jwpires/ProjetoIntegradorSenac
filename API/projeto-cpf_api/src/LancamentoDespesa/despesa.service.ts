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
import { RetornoGeralDTO } from "src/agencia/dto/retornoGeral.dto";

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
                    valor: despesa.valor,
                    message: "Despesa Cadastrada!" 
                };
            }
        )
        .catch(
            (error) =>{
                return <RetornoDespesasDTO>{
                    id: despesa.id,
                    descricao: despesa.descricao,
                    message: "Despesa Não Cadastrada devido ao erro: " + error
                };
            }
        )        
    }


    buscarPorID(id: string): Promise<Despesa> {
        return this.despesaRepository.findOne({
            where: {
                id,
            }
        })
    }

    async remover(id: string): Promise<RetornoGeralDTO> {

        try {
            const despesa = await this.buscarPorID(id);
            await this.despesaRepository.remove(despesa);
            return <RetornoGeralDTO>{
                id: id,
                descricao: "Despesa removida com sucesso."
            }
        } catch (error) {
            return <RetornoGeralDTO>{
                id: id,
                descricao: "Erro ao tentar remover despesa."
            }
        }

        
    }

}