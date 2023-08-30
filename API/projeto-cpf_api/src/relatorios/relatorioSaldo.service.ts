import { Inject } from "@nestjs/common";
import { Injectable } from "@nestjs/common";
import { Agencia } from "src/agencia/agencia.entity";
import { RetornoGeralDTO } from "src/agencia/dto/retornoGeral.dto";
import { Repository } from "typeorm";
import { ListaRelatorioDespesaDTO } from "./dto/listarRelatorioDespesa.dto";
import { ListarRelatorioSaldoDTO } from "./dto/listaSaldoDTO";

@Injectable()
export class RelatorioSaldoService{
    constructor(
        @Inject('AGENCIA_REPOSITORY')
        private relatorioSaldoDash: Repository<Agencia>
    ) { }
    
   async listarRelatorioSaldo(): Promise<ListarRelatorioSaldoDTO[]>{
    
    let retornoQuery = (await this.relatorioSaldoDash
    .createQueryBuilder('agencia')
    .addSelect('agencia.ID', 'ID')
    .addSelect('agencia.NOMEPROPRIETARIO','NOMEPROPRIETARIO')
    .addSelect('agencia.SALDO','SALDO')
    .addSelect('agencia.NUMEROCONTA','NUMEROCONTA')
    .addSelect('b.NOME','BANCO')
    .innerJoin('banco','b','b.ID = agencia.ID_BANCO')
    .getRawMany());
    
    // SELECT agencia.ID, agencia.NOMEPROPRIETARIO, agencia.SALDO, b.NOME
    // from agencia 
    // INNER JOIN banco b
    // ON b.ID = agencia.ID_BANCO;
    
    let listaRetorno = retornoQuery.map(
        info => new ListarRelatorioSaldoDTO(
            info.ID,
            info.NOMEPROPRIETARIO,
            info.BANCO,
            info.NUMEROCONTA,
            info.SALDO
        )
    );

        return listaRetorno;
   }

}