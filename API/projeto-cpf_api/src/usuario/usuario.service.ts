import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { UsuarioEntity } from "./usuario.entity";
import { promises } from "dns";

@Injectable()
export class UsuarioService{    
    constructor(
        @Inject('USUARIO_REPOSITORY')
         private USUARIOREPOSITORY: Repository<UsuarioEntity>
    ){}

    async InserirUsuario(USUARIO_REPOSITORY:UsuarioEntity):Promise<void>{
      const id = USUARIO_REPOSITORY.id;
      const nome = USUARIO_REPOSITORY.nome;
      const idade = USUARIO_REPOSITORY.idade;
      const cidade = USUARIO_REPOSITORY.cidade;
      const email = USUARIO_REPOSITORY.email;
      const telefone = USUARIO_REPOSITORY.telefone;
      const senha = USUARIO_REPOSITORY.senha;

      try{
          const novoUsuario = this.USUARIOREPOSITORY.create({
              id,
              nome,
              cidade,
              idade,
              email,
              telefone,
              senha
          });
          await this.USUARIOREPOSITORY.insert(novoUsuario);
          console.log('Usuario cadastrado com sucesso.');

      }catch(error){
          console.log('Erro ao cadastrar Usuario', error.message);
        }
    }

    async BuscarUsuario(id: string): Promise<UsuarioEntity> { // Renomeado para BuscarUsuario
        return this.USUARIOREPOSITORY.findOne({
            where: {
                id,
            }
        });
    }

    async ForgotPassword(id: string): Promise<void> {
        this.BuscarUsuario;
    }
}


      
      

