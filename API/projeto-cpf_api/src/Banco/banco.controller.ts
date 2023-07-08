import { Controller, Get } from "@nestjs/common";
import { Body, Post, UseInterceptors,} from "@nestjs/common/decorators";
import { BancosArmazenados } from "./banco.dm";
import { BancoEntity } from "./banco.entity";
import { InserirBancoDTO } from "./dto/inserirBanco.dto";
import { ListarBancos } from "./dto/listarBancos.dto";
import {v4 as uuid} from 'uuid';


@Controller('/bancos')
export class BancoController{
    constructor( private armanezaBanco: BancosArmazenados){}

    @Get()
    async RetornaTodosBancos(){
        const consulta = this.armanezaBanco.banco;
        const retorno = consulta.map(
            banco => new ListarBancos(
                banco.id,
                banco.nome
            )
        )
        return retorno;
    }

    @Post()
    async CriarBanco(@Body() novoBanco:InserirBancoDTO) {
        var banco = new BancoEntity(uuid(), novoBanco.nome)

        this.armanezaBanco.inserirBanco(banco);

        var retornoBanco={
            novoBanco,
            status:'Banco Inserido'
        }

        return retornoBanco;
    }
}