import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
// import { UsersModule } from '../users/users.module_';
import { UsuarioService } from 'src/usuario/usuario.service';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { usuarioProviders } from 'src/usuario/usuario.providers';

@Module({
  imports: [UsuarioModule],
  controllers: [AuthController],
  providers: [AuthService, UsuarioService, ...usuarioProviders]
})
export class AuthModule {}
