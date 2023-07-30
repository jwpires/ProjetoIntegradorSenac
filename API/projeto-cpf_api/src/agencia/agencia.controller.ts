import { Controller, Get } from "@nestjs/common";
import { Body, Post, } from "@nestjs/common/decorators";
import { AgenciaArmazenados } from "./agencia.dm";
import { Agencia } from "./agencia.entity";
import { InserirAgenciaDTO } from "./dto/inserirAgencia.dto";
import { v4 as uuid } from 'uuid';
import { ListarAgenciaDTO } from "./dto/listarAgencia.dto";
import { ListarAgenciaDashboardDTO } from "./dto/listaAgenciaDashboard.dto";
import { AgenciaService } from "./agencia.service";
import { BancoService } from "src/Banco/banco.service";

@Controller('/agencia')
export class AgenciaController {
    constructor(
        private readonly agenciaService: AgenciaService,
        private readonly bancoService: BancoService, // Injete o serviço do Banco
    ) { }

    @Get()
    async retornoAgencias(): Promise<Agencia[]> {
        return this.agenciaService.listar();
      
    }

    // @Get('/dash')
    // async retornoAgenciaDash() {
    //     const listarAgenciaDash = await this.armanezaAgencia.Agencia;
    //     const retornaAgencias = listarAgenciaDash.map(
    //         agencia => new ListarAgenciaDashboardDTO(
    //             agencia.numeroConta,
    //             agencia.saldo
    //         )
    //     )
    //     return retornaAgencias;
    // }
    

    @Post()
    async criarAgencia(@Body() dadosAgencia: InserirAgenciaDTO) {

        var retornoAgencia: any;

        
        try {
            const banco = await this.bancoService.buscarBancoPorId(dadosAgencia.id_banco); // Busque o objeto Banco pelo ID
            const agencia = new Agencia(
                uuid(),
                banco, // Use o objeto Banco encontrado como valor para id_banco
                dadosAgencia.nomeProprietario,
                dadosAgencia.numeroConta,
                dadosAgencia.tipoConta,
                dadosAgencia.saldo
            );
            await this.agenciaService.inserirAgencia(agencia);
            retornoAgencia = {
                dadosAgencia,
                status: "Agencia Criada."
            };
        } catch (error) {
            retornoAgencia = {
                error: "Erro ao criar Agência."
            };
        }

        return retornoAgencia;
    }


}