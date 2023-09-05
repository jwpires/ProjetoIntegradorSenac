import { Inject } from "@nestjs/common";
import { Injectable } from "@nestjs/common";
import { RetornoGeralDTO } from "src/agencia/dto/retornoGeral.dto";
import { Despesa } from "src/LancamentoDespesa/despesa.entity";
import { Repository } from "typeorm";
import { ListaRelatorioDespesaDTO } from "./dto/listarRelatorioDespesa.dto";

@Injectable()
export class RelatorioDespesaService {
  constructor(
    @Inject('DESPESA_REPOSITORY')
    private relatorioDespesaDash: Repository<Despesa>
  ) { }

  async listar(): Promise<Despesa[]> {
    return this.relatorioDespesaDash.find();
  }

  async listarRelatorioDespesa(DATAINICIO?: string, DATAFIM?: string,  TIPO?: number): Promise<ListaRelatorioDespesaDTO[]> { 

    // var retorno = await (this.relatorioDespesaDash // select marca.id as ID, marca.nome AS NOME_, pes_f.nome from marca ......
    //   .createQueryBuilder('despesa')
    //   .select('despesa.id', 'ID')
    //   .addSelect('despesa.descricao', 'DESCRICAO')
    //   .addSelect('gd.descricao', 'GRUPODESPESA')
    //   .addSelect('despesa.datalancamento', 'DATALANC')
    //   .addSelect('despesa.datavencimento', 'DATAVENC')
    //   .addSelect('despesa.valor', 'VALOR')
    //   .addSelect('despesa.pago', 'PAGO')
    //   .innerJoin('grupo_despesa', 'gd', 'gd.id = despesa.id_grupodespesa')
    //   .getRawMany());

    if (DATAINICIO != "" && DATAFIM != "") {

      if (TIPO == 1) {
        var retorno = await (this.relatorioDespesaDash // select marca.id as ID, marca.nome AS NOME_, pes_f.nome from marca ......
          .createQueryBuilder('despesa')
          .select('despesa.id', 'ID')
          .addSelect('despesa.descricao', 'DESCRICAO')
          .addSelect('gd.descricao', 'GRUPODESPESA')
          .addSelect('despesa.datalancamento', 'DATALANC')
          .addSelect('despesa.datavencimento', 'DATAVENC')
          .addSelect('despesa.valor', 'VALOR')
          .addSelect('despesa.pago', 'PAGO')
          .innerJoin('grupo_despesa', 'gd', 'gd.id = despesa.id_grupodespesa')
          .where('despesa.datalancamento BETWEEN :datainicio AND :datafim', { datainicio: DATAINICIO, datafim: DATAFIM})
          .getRawMany());
      } else {
        var retorno = await (this.relatorioDespesaDash // select marca.id as ID, marca.nome AS NOME_, pes_f.nome from marca ......
          .createQueryBuilder('despesa')
          .select('despesa.id', 'ID')
          .addSelect('despesa.descricao', 'DESCRICAO')
          .addSelect('gd.descricao', 'GRUPODESPESA')
          .addSelect('despesa.datalancamento', 'DATALANC')
          .addSelect('despesa.datavencimento', 'DATAVENC')
          .addSelect('despesa.valor', 'VALOR')
          .addSelect('despesa.pago', 'PAGO')
          .innerJoin('grupo_despesa', 'gd', 'gd.id = despesa.id_grupodespesa')
          .where('despesa.datalancamento BETWEEN :datainicio AND :datafim', { datainicio: DATAINICIO, datafim: DATAFIM})
          .getRawMany());
      }
    }





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

  buscarPorID(id: string): Promise<Despesa> {
    return this.relatorioDespesaDash.findOne({
      where: {
        id,
      }
    })
  }

  async alterarStatusPagametoDespesa(id: string): Promise<RetornoGeralDTO> {

    const despesa = await this.buscarPorID(id);
    despesa.pago == true ? despesa.pago = false : despesa.pago = true;

    // Object.entries(dados).forEach(

    //   ([chave, valor]) => {

    //     if (chave === 'id') {
    //       return;
    //     }
    //     if (chave == 'pago'){
    //       despesa[chave] == true ? despesa[chave] = false : despesa[chave] = true;
    //     }
    //   }
    // )



    return this.relatorioDespesaDash.save(despesa)

      .then((result) => {

        return <RetornoGeralDTO>{
          id: despesa.id,
          descricao: "Despesa alterada!"
        };

      })

      .catch((error) => {
        return <RetornoGeralDTO>{
          id: "",
          descricao: "Houve um erro ao alterar."
        };
      })
  }


}