import { Injectable, UnauthorizedException  } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { UsuarioService } from 'src/usuario/usuario.service';
import { usuarioProviders } from 'src/usuario/usuario.providers';
import { Usuario } from 'src/usuario/usuario.entity';
import { databaseProviders } from 'src/database/database.providers';
import { UsuarioArmazenados } from 'src/usuario/usuario.dm';
import { promises } from 'dns';

@Injectable()
export class AuthService {

    constructor(
        private usersService: UsuarioService
        ) {}
        

    async signIn (username: string, pass: string): Promise<any> { 
      // async sigIn (USUARIO_REPOSITORY, pass: string ): Promise <void>{
        const user = await this.usersService.findOne(username,pass);
        // const user = await databaseProviders.int.findOne()
        
        if (user?.senha !== pass) {
          throw new UnauthorizedException();
        }
        const { senha, ...result } = user;
        // TODO: Generate a JWT and return it here
        // instead of the user object
        return result;
      }
}
