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
        private usersService: UsersService
        ) {}


        async sigIn (USUARIO_REPOSITORY): Promise <void>{
          const user = await this.usersService.findOne(USUARIO_REPOSITORY);
          if (user?.password !== password) {
                  throw new UnauthorizedException();
                }
                 const { password, ...result } = user;
                 // TODO: Generate a JWT and return it here
                 // instead of the user object
                 return result;
            }
          }
        
        
    // async signIn (username: string, pass: string): Promise<any> { 
    //   // async sigIn (USUARIO_REPOSITORY, pass: string ): Promise <void>{
    //     const user = await this.usersService.findOne(username);
    //     // const user = await databaseProviders.int.findOne()
        
    //     if (user?.password !== pass) {
    //       throw new UnauthorizedException();
    //     }
    //     const { password, ...result } = user;
    //     // TODO: Generate a JWT and return it here
    //     // instead of the user object
    //     return result;
    //   }

    // async sigIn (USUARIO_REPOSITORY): Promise <any>{
      
    // }
    

