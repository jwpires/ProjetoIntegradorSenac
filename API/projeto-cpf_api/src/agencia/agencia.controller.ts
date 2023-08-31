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

    @Post()
    async criarAgencia(@Body() dadosAgencia: InserirAgenciaDTO) {

        return this.agenciaService.inserirAgencia(dadosAgencia);
    }

    


}