import { Inject } from "@nestjs/common";
import { Injectable } from "@nestjs/common";
import { Agencia } from "src/agencia/agencia.entity";
import { RetornoGeralDTO } from "src/agencia/dto/retornoGeral.dto";
import { Repository } from "typeorm";
import { ListaRelatorioDespesaDTO } from "./dto/listarRelatorioDespesa.dto";
import { ListarRelatorioSaldoDTO } from "./dto/listaSaldoDTO";

@Injectable()
export class RelatorioSaldoService {
    constructor(
        @Inject('AGENCIA_REPOSITORY')
        private relatorioSaldoDash: Repository<Agencia>
    ) { }

    async listarRelatorioSaldo(BANCO?: string, DESCRICAO?: string): Promise<ListarRelatorioSaldoDTO[]> {

        if (BANCO !== undefined && DESCRICAO !== undefined) {
            var retornoQuery = (await this.relatorioSaldoDash
                .createQueryBuilder('agencia')
                .addSelect('agencia.ID', 'ID')
                .addSelect('agencia.NOMEPROPRIETARIO', 'NOMEPROPRIETARIO')
                .addSelect('agencia.SALDO', 'SALDO')
                .addSelect('agencia.NUMEROCONTA', 'NUMEROCONTA')
                .addSelect('b.NOME', 'BANCO')
                .innerJoin('banco', 'b', 'b.ID = agencia.ID_BANCO')
                .where('b.NOME = :banco', { banco: BANCO })
                .andWhere('agencia.NOMEPROPRIETARIO like :nome', { nome: `%${DESCRICAO}%` })
                .getRawMany());
        } else {
            if (BANCO !== undefined) {
                var retornoQuery = (await this.relatorioSaldoDash
                    .createQueryBuilder('agencia')
                    .addSelect('agencia.ID', 'ID')
                    .addSelect('agencia.NOMEPROPRIETARIO', 'NOMEPROPRIETARIO')
                    .addSelect('agencia.SALDO', 'SALDO')
                    .addSelect('agencia.NUMEROCONTA', 'NUMEROCONTA')
                    .addSelect('b.NOME', 'BANCO')
                    .innerJoin('banco', 'b', 'b.ID = agencia.ID_BANCO')
                    .where('b.NOME = :banco', { banco: BANCO })
                    .getRawMany());
            } else {
                if (DESCRICAO !== undefined) {
                    var retornoQuery = (await this.relatorioSaldoDash
                        .createQueryBuilder('agencia')
                        .addSelect('agencia.ID', 'ID')
                        .addSelect('agencia.NOMEPROPRIETARIO', 'NOMEPROPRIETARIO')
                        .addSelect('agencia.SALDO', 'SALDO')
                        .addSelect('agencia.NUMEROCONTA', 'NUMEROCONTA')
                        .addSelect('b.NOME', 'BANCO')
                        .innerJoin('banco', 'b', 'b.ID = agencia.ID_BANCO')
                        .where('agencia.NOMEPROPRIETARIO like :nome', { nome: `%${DESCRICAO}%` })
                        .getRawMany());
                } else {

                    var retornoQuery = (await this.relatorioSaldoDash
                        .createQueryBuilder('agencia')
                        .addSelect('agencia.ID', 'ID')
                        .addSelect('agencia.NOMEPROPRIETARIO', 'NOMEPROPRIETARIO')
                        .addSelect('agencia.SALDO', 'SALDO')
                        .addSelect('agencia.NUMEROCONTA', 'NUMEROCONTA')
                        .addSelect('b.NOME', 'BANCO')
                        .innerJoin('banco', 'b', 'b.ID = agencia.ID_BANCO')
                        .getRawMany());
                }

            }
        }


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

    buscarPorID(id: string): Promise<Agencia> {
        return this.relatorioSaldoDash.findOne({
            where: {
                id,
            }
        })
    }



    async alterarSaldo(id: string, valor: number): Promise<RetornoGeralDTO> {

        const agencia = await this.buscarPorID(id);
        let saldo = agencia.saldo;
        agencia.saldo = valor;

        return this.relatorioSaldoDash.save(agencia)

            .then((result) => {

                return <RetornoGeralDTO>{
                    id: agencia.id,
                    descricao: "Saldo alterado de " + saldo + " Para: " + agencia.saldo
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