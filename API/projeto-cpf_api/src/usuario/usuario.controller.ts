import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { RetornoCadastroDTO, RetornoObjDTO } from "src/dto/retorno.dto";
import { AlteraUsuarioDTO } from "./dto/atualizaUsuario.dto";
import { ListaUsuarioDTO } from "./dto/listaUsuario.dto";
import { CriaUsuarioDIO } from "./dto/usuario.dto";
import { Usuario } from "./usuario.entity";
import { UsuarioService } from "./usuario.service";
import { UsuarioArmazenados } from "./usuario.dm";
import { RetornoGeralDTO } from "src/agencia/dto/retornoGeral.dto";
import { RetornoDTO } from "./dto/retornodto";

@Controller('/usuarios')
export class UsuarioController{
    constructor(private readonly usuarioService: UsuarioService){

    }

    @Get('listar')
    async listar(): Promise<Usuario[]>{
        return this.usuarioService.listar(); 
    }

    @Post('')
    async cria(@Body() dados: CriaUsuarioDIO): Promise<RetornoCadastroDTO>{        
        return this.usuarioService.inserir(dados)        
    } 

    // @Get('acesso-login=:email-password=:senha')
    // async acesso(@Param('email')  email:string, @Param('senha') senha: string): Promise<RetornoGeralDTO>{
    //     return this.usuarioService.findOne(email, senha);
    // }

    @Post('acesso-login=:email-password=:senha')
    async Login(@Param('email')  email:string, @Param('senha') senha: string): Promise<RetornoDTO>{
        return this.usuarioService.findOne(email, senha);
}
};