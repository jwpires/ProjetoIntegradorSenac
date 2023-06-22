import { Controller, Get } from "@nestjs/common";
import { Body, Post,} from "@nestjs/common/decorators";
import { AgenciaArmazenados } from "./agencia.dm";
import { AgenciaEntity } from "./agencia.entity";
import { InserirAgenciaDTO } from "./dto/inserirAgencia.dto";
import { ListarAgencia } from "./dto/listarAgencia.dto";
import {v4 as uuid} from 'uuid';

@Controller('/agencia')
export class AgenciaController{
    constructor( private armanezaAgencia: AgenciaArmazenados){}

    @Get()
    async RetornaTodasAgencias(){
        const consulta = this.armanezaAgencia.agencia;
        const retorno = consulta.map(
            agencia => new ListarAgencia(
                agencia.id,
                agencia.id_banco,
                agencia.nomeProprietario,
                agencia.numeroConta,
                agencia.tipoDeConta,
                agencia.saldo
            )
        )
        return retorno;
    }

    @Post()
    async CriarAgencia(@Body() novaAgencia:InserirAgenciaDTO) {
        var agencia = new AgenciaEntity(uuid(), novaAgencia.id_banco, novaAgencia.nomeProprietario, novaAgencia.numeroConta,
                                        novaAgencia.tipoDeConta, novaAgencia.saldo)

        this.armanezaAgencia.inserirAgencia(agencia);

        var retornoAgencia={
            novaAgencia,
            status:'Agencia InseridaS'
        }

        return retornoAgencia;
    }
}