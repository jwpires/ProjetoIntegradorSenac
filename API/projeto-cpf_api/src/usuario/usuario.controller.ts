import {Body, Controller, Post } from "@nestjs/common";
// import { Body } from "@nestjs/common/decorators";
import { Get } from "@nestjs/common/decorators/http/request-mapping.decorator";
import { CriaUsuarioDIO } from "./dto/usuario.dto";
import { UsuarioEntity } from "./usuario.entity";
import { UsuarioArmazenados } from "./usuario.dm";
import {v4 as uuid} from 'uuid';
import { ListaUsuarioDTO } from "./dto/listaUsuario.dto";

@Controller('/usuarios')
export class UsuarioController{
    
    constructor(private clsUsuariosArmazenados: UsuarioArmazenados){
    }

    @Get()
    async RetornoUsuarios(){
        const usuariosListados = await this.clsUsuariosArmazenados.Usuarios;
        const listaRetorno = usuariosListados.map(
            usuario => new ListaUsuarioDTO(
                usuario.id,
                usuario.nome
            )
        );
        return listaRetorno;
    }


    @Post() /*Depois do Post é obrigatório ter um método, não importa qual é o tipo do método, mas o método deve existir*/
    async criaUsuario(@Body() dadosUsuario: CriaUsuarioDIO){ //Body informa que as informações irão ser capturadas da API
        var usuario = new UsuarioEntity(uuid(),dadosUsuario.nome,dadosUsuario.idade,dadosUsuario.cidade,
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