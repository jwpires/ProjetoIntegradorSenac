import { Controller, Get } from "@nestjs/common";
import { Body, Post, } from "@nestjs/common/decorators";
import { AgenciaArmazenados } from "./agencia.dm";
import { AgenciaEntity } from "./agencia.entity";
import { InserirAgenciaDTO } from "./dto/inserirAgencia.dto";
import { v4 as uuid } from 'uuid';
import { ListarAgenciaDTO } from "./dto/listarAgencia.dto";

@Controller('/agencia')
export class AgenciaController {
    constructor(private armanezaAgencia: AgenciaArmazenados) { }

    @Get()
    async retornoAgencias() {
        const listarAgencias = await this.armanezaAgencia.Agencia;
        const retornaAgencias = listarAgencias.map(
            agencia => new ListarAgenciaDTO(
                agencia.id,
                agencia.id_banco,
                agencia.nomeProprietario,
                agencia.numeroConta,
                agencia.tipoDeConta,
                agencia.saldo
            )
        );
        return retornaAgencias;
    }

    @Post()
    async criarAgencia(@Body() dadosAgencia: InserirAgenciaDTO) {

        var retornoAgencia: any;

        this.armanezaAgencia.agenciaJaCadastrada(dadosAgencia.numeroConta, dadosAgencia.id_banco)
            let agencia = new AgenciaEntity(
                uuid(),
                dadosAgencia.id_banco,
                dadosAgencia.nomeProprietario,
                dadosAgencia.numeroConta,
                dadosAgencia.tipoConta,
                dadosAgencia.saldo
            )
            this.armanezaAgencia.inserirAgencia(agencia);
            retornoAgencia = {
                dadosAgencia,
                status: "Agencia Criada."
            }        

        return retornoAgencia;
    }


}