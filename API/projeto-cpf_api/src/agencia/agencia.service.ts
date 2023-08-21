import { Inject } from "@nestjs/common";
import {  Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Agencia } from "./agencia.entity";
import {v4 as uuid} from 'uuid';
import { BancoService } from "src/Banco/banco.service";
import { InserirAgenciaDTO } from "./dto/inserirAgencia.dto";
import { RetornoDespesasDTO } from "src/LancamentoDespesa/dto/retornoDespesas.dto";
import { RetornoGeralDTO } from "./dto/retornoGeral.dto";

@Injectable()
export class AgenciaService{
    constructor(
        @Inject('AGENCIA_REPOSITORY')
        private agenciaRepository: Repository<Agencia>,
        private readonly bancoService: BancoService
    ) { }
    
    async listar(): Promise<Agencia[]>{
        return this.agenciaRepository.find();
    }

    async inserirAgencia(dados: InserirAgenciaDTO): Promise<RetornoGeralDTO> {
      
        let agencia = new Agencia();
        agencia.id = uuid();
        agencia.id_banco = await this.bancoService.buscarBancoPorId(dados.id_banco);
        agencia.nomeProprietario = dados.nomeProprietario;
        agencia.numeroConta = dados.numeroConta;
        agencia.saldo = dados.saldo;
        agencia.tipoDeConta = dados.tipoConta;

        return this.agenciaRepository.save(agencia).
        then(
            (result) => {
                return <RetornoGeralDTO>{
                    id: agencia.id,
                    descricao: agencia.numeroConta,
                    message: "Despesa Cadastrada!" 
                };
            }
        )
        .catch(
            (error) =>{
                return <RetornoGeralDTO>{
                    id: agencia.id,
                    descricao: agencia.numeroConta,
                    message: "Despesa Não Cadastrada devido ao erro: " + error
                };
            }
        )

        
        
    }
    
}