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

    async listaComFiltro(NOME_MARCA?: string): Promise<ListaRelatorioDespesaDTO[]> {
    
        if (NOME_MARCA != undefined){
          var retorno = await (this.relatorioDespesaDash // select marca.id as ID, marca.nome AS NOME_, pes_f.nome from marca ......
          .createQueryBuilder('despesa')
          .select('despesa.id','ID')
          .addSelect('despesa.descricao','descricao')
          .addSelect('pes_f.nome','nome_fornecedor')
          .leftJoin('for_marca', 'fm','fm.idmarca = marca.id')  
          .leftJoin('fornecedor', 'for','for.id = fm.idfornecedor')    
          .leftJoin('pessoa', 'pes_f','for.idpessoa = pes_f.id')  
          .where('marca.nome like :nomemarca',{ nomemarca: `%${NOME_MARCA}%` })         
          .getRawMany()); 
          
        //   SELECT 
        //     despesa.id as ID, 
        //     despesa.descricao as Despesa, 
        //     gd.descricao as GrupoDespesa,
        //     despesa.datalancamento as DataLanc,
        //     despesa.datavencimento as DataVenc,
        //     despesa.valor
        //     from despesa
        //     inner join grupo_despesa gd
        //     on gd.id = despesa.id_grupodespesa;
          
        }
        else{      
          var retorno = await (this.marcaRepository // select marca.id as ID, marca.nome AS NOME_, pes_f.nome from marca ......
          .createQueryBuilder('marca')
          .select('marca.id','ID')
          .addSelect('marca.nome','nome_marca')
          .addSelect('pes_f.nome','nome_fornecedor')
          .leftJoin('for_marca', 'fm','fm.idmarca = marca.id')  
          .leftJoin('fornecedor', 'for','for.id = fm.idfornecedor')    
          .leftJoin('pessoa', 'pes_f','for.idpessoa = pes_f.id')  
          .getRawMany());      
        }
    
          
    
        const listaRetorno = retorno.map(
          marca => new listaMarcaFornDTO(
            marca.ID,
            marca.nome_marca,
            marca.nome_fornecedor
          )
        );
    
        return listaRetorno;    
      }

}