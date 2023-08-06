import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { GrupoDespesa } from "./grupoDespesa.entity";

@Injectable()
export class GrupoDespesaService{
    
    constructor(
        @Inject('GRUPODESPESA_REPOSITORY')
        private grupoDespesaRepository: Repository<GrupoDespesa>
    ){}

    async listar(): Promise<GrupoDespesa[]>{
        return this.grupoDespesaRepository.find();
    }

    async buscarGrupoDespesaPorId(id: string): Promise<GrupoDespesa> { // Renomeado para buscarBancoPorId
        return this.grupoDespesaRepository.findOne({
            where: {
                id,
            }
        });
    }

    async inserirGrupoDespesa(grupoDespesa:GrupoDespesa):Promise<void>{
        const id = grupoDespesa.id;
        const descricao = grupoDespesa.descricao;

        try{
            const novoGrupoDespesa = this.grupoDespesaRepository.create({
                id,
                descricao
            });
            await this.grupoDespesaRepository.insert(novoGrupoDespesa);
            console.log('Grupo de Despesa cadastrado com sucesso.');

        }catch(error){
            console.log('Erro ao cadastrar Grupo de Despesa', error.message);
        }
    }

    
}