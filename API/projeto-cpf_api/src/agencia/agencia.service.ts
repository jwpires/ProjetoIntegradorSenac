import { Inject } from "@nestjs/common";
import {  Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Agencia } from "./agencia.entity";

@Injectable()
export class AgenciaService{
    constructor(
        @Inject('AGENCIA_REPOSITORY')
        private agenciaRepository: Repository<Agencia>
    ) { }
    async listar(): Promise<Agencia[]>{
        return this.agenciaRepository.find();
    }

    async inserirAgencia(agencia: Agencia): Promise<void> {
        const id = agencia.id;
        const id_banco = agencia.id_banco;
        const nomeProprietario = agencia.nomeProprietario;
        const numeroConta = agencia.numeroConta;
        const saldo = agencia.saldo;
        const tipoDeConta = agencia.tipoDeConta;
        
        
        const novaAgencia = this.agenciaRepository.create({
            id,
            id_banco,
            nomeProprietario,
            numeroConta,
            tipoDeConta,
            saldo
            
        });

        try {
            const novaAgencia = this.agenciaRepository.create({
                id,
                id_banco,
                nomeProprietario,
                numeroConta,
                tipoDeConta,
                saldo
                
            });
            await this.agenciaRepository.insert(novaAgencia);
            console.log('Agencia cadastrado com sucesso.');

        } catch (error) {
            console.log('Erro ao cadastrar Agencia: ', error.message);
        }
        
    }
    
}