import { Inject } from "@nestjs/common";
import {  Injectable } from "@nestjs/common";
import { appendFile } from "fs";
import { databaseProviders } from "src/database/database.providers";
import { Repository } from "typeorm";
import { Banco } from "./banco.entity";

@Injectable()
export class BancoService{

    constructor(
        @Inject('BANCO_REPOSITORY')
        private bancoRepository: Repository<Banco>
    ) { }
    
    async listar(): Promise<Banco[]>{
        return this.bancoRepository.find();
    }

    /* função que cadastra um ou mais bancos */
    async inserirBanco(banco: Banco): Promise<void>{
        const id = banco.id;
        const nome = banco.nome;

        try {
            const novoBanco = this.bancoRepository.create({
                id,
                nome
            });
            await this.bancoRepository.insert(novoBanco);
            console.log('Banco cadastrado com sucesso.');

        } catch (error) {
            console.log('Erro ao cadastrar Banco: ', error.message);
        }

        
    }
 
    async buscarBancoPorId(id: string): Promise<Banco> { // Renomeado para buscarBancoPorId
        return this.bancoRepository.findOne({
            where: {
                id,
            }
        });
    }

}