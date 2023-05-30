import {Body, Controller, Post } from "@nestjs/common";
// import { Body } from "@nestjs/common/decorators";
import { Get } from "@nestjs/common/decorators/http/request-mapping.decorator";
import { CriaUsuarioDIO } from "./dto/usuario.dto";
import { UsuarioEntity } from "./usuario.entity";
import { UsuarioArmazenados } from "./usuario.dm";

@Controller('/usuarios')
export class UsuarioController{
    
    constructor(private clsUsuariosArmazenados: UsuarioArmazenados){
    }

    @Get()
    async RetornoUsuarios(){
        return this.clsUsuariosArmazenados.Usuarios;
    }


    @Post() /*Depois do Post é obrigatório ter um método, não importa qual é o tipo do método, mas o método deve existir*/
    async criaUsuario(@Body() dadosUsuario: CriaUsuarioDIO){ //Body informa que as informações irão ser capturadas da API
        var usuario = new UsuarioEntity(dadosUsuario.nome,dadosUsuario.idade,dadosUsuario.cidade,
            dadosUsuario.email,dadosUsuario.telefone,dadosUsuario.senha);

        var retornoUsuario:any;
        
            this.clsUsuariosArmazenados.AdicionarUsuario(usuario)
            retornoUsuario={
                dadosUsuario,
                status:"Usuário Criado."
            }

            return retornoUsuario;
    }
}