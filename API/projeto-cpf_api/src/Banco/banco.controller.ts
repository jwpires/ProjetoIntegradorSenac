import { Controller, Get } from "@nestjs/common";
import { Body, Post, UseInterceptors,} from "@nestjs/common/decorators";
import { Banco } from "./banco.entity";
import { InserirBancoDTO } from "./dto/inserirBanco.dto";
import {v4 as uuid} from 'uuid';
import { BancoService } from "./banco.service";


@Controller('/bancos')
export class BancoController{
    constructor( private  readonly bancoService: BancoService){}

    @Get() /** Retorna os Bancos cadastrados via API */
    async RetornaTodosBancos():Promise<Banco[]>{
        return this.bancoService.listar();
    }

    @Post() /** Cadastro novo Banco via API */
    async CriarBanco(@Body() novoBanco:InserirBancoDTO) {
        let banco = new Banco(uuid(), novoBanco.nome)

        this.bancoService.inserirBanco(banco);

        var retornoBanco={
            novoBanco,
            status:'Banco Inserido' 
        }

        return retornoBanco;
    }
}