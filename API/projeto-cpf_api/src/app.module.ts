import { Module } from '@nestjs/common';
import { AgenciaModule } from './agencia/agencia.module';
import { BancoModule } from './Banco/banco.module';
import { ProdutoModule } from './Produto/produto.module';
import { UsuarioController } from './usuario/usuario.controller';
import { UsuarioModule } from './usuario/usuario.module';


@Module({
  imports: [UsuarioModule,ProdutoModule,BancoModule,AgenciaModule],
  controllers:[]
})
export class AppModule {}
