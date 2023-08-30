import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { RetornoCadastroDTO, RetornoObjDTO } from 'src/dto/retorno.dto';
import { v4 as uuid } from 'uuid';
import { Usuario } from './usuario.entity';
import { CriaUsuarioDIO } from './dto/usuario.dto';
import { AlteraUsuarioDTO } from './dto/atualizaUsuario.dto';
import { ListaUsuarioDTO } from './dto/listaUsuario.dto';
import { usuarioProviders } from './usuario.providers';

@Injectable()
export class UsuarioService {
  constructor(
    @Inject('USUARIO_REPOSITORY')///....
    private usuarioRepository: Repository<Usuario>,
  ) { }

  async listar(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  async inserir(dados: CriaUsuarioDIO): Promise<RetornoCadastroDTO> {

    let usuario = new Usuario();
  
    usuario.id = uuid();
    usuario.nome = dados.nome;
    usuario.email = dados.email;
    usuario.senha = dados.senha

    return this.usuarioRepository.save(usuario)
      .then((result) => {
        return <RetornoCadastroDTO>{
          id: usuario.id,
          message: "Usuario cadastrado!"
        };
      })
      .catch((error) => {
        return <RetornoCadastroDTO>{
          id: "",
          message: "Houve um erro ao cadastrar." + error.message
        };
      })
  }

  async validaEmail(email: string){
    const possivelUsuario = await this.usuarioRepository.findOne({
        where: {
          email,
        },
    });
    return (possivelUsuario !== null);
   }
}





