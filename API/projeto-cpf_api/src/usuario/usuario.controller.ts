import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { RetornoCadastroDTO, RetornoObjDTO } from "src/dto/retorno.dto";
import { AlteraUsuarioDTO } from "./dto/atualizaUsuario.dto";
import { ListaUsuarioDTO } from "./dto/listaUsuario.dto";
import { CriaUsuarioDIO } from "./dto/usuario.dto";
import { Usuario } from "./usuario.entity";
import { UsuarioService } from "./usuario.service";
import { UsuarioArmazenados } from "./usuario.dm";

@Controller('/usuarios')
export class UsuarioController{
    constructor(private readonly usuarioService: UsuarioService){

    }

    @Get('listar')
    async listar(id): Promise<Usuario[]>{
        return this.usuarioService.listar();
    }


    @Post('')
    async cria(@Body() dados: CriaUsuarioDIO): Promise<RetornoCadastroDTO>{        
        return this.usuarioService.inserir(dados)        
    }

}