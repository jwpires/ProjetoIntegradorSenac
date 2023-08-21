import { Inject } from "@nestjs/common";
import { Injectable } from "@nestjs/common";
import { Despesa } from "src/LancamentoDespesa/despesa.entity";
import { Repository } from "typeorm";
import { ListaRelatorioDespesaDTO } from "./dto/listarRelatorioDespesa.dto";

@Injectable()
export class RelatorioDespesaService{
    constructor(
        @Inject('DESPESA_REPOSITORY')
        private relatorioDespesaDash: Repository<Despesa>
    ) { }
    
    async listar(): Promise<Despesa[]>{
        return this.relatorioDespesaDash.find();
    }

    async listarRelatorioDespesa(): Promise<ListaRelatorioDespesaDTO[]> {
    
           var retorno = await (this.relatorioDespesaDash // select marca.id as ID, marca.nome AS NOME_, pes_f.nome from marca ......
          .createQueryBuilder('despesa')
          .select('despesa.id','ID')
          .addSelect('despesa.descricao','DESCRICAO')
            .addSelect('gd.descricao', 'GRUPODESPESA')
            .addSelect('despesa.datalancamento', 'DATALANC')
            .addSelect('despesa.datavencimento', 'DATAVENC')
            .addSelect('despesa.valor', 'VALOR')
            .addSelect('despesa.pago','PAGO') 
          .innerJoin('grupo_despesa', 'gd','gd.id = despesa.id_grupodespesa')           
          .getRawMany()); 
          
          // SELECT 
          //   despesa.id as ID, 
          //   despesa.descricao as Despesa, 
          //   gd.descricao as GrupoDespesa,
          //   despesa.datalancamento as DataLanc,
          //   despesa.datavencimento as DataVenc,
          //   despesa.valor
          //   from despesa
          //   inner join grupo_despesa gd
          //   on gd.id = despesa.id_grupodespesa;
          
        // }
          
    
        let listaRetorno = retorno.map(
          despesa => new ListaRelatorioDespesaDTO(
            despesa.ID,
            despesa.DESCRICAO,
            despesa.GRUPODESPESA,
            despesa.DATALANC,
            despesa.DATAVENC,
            despesa.VALOR,
            despesa.PAGO
          )
        );
    
        return listaRetorno;    
      }

}