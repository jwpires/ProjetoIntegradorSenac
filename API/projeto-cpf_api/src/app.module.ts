import { Module } from '@nestjs/common';
import { BancoModule } from './Banco/banco.module';
import { ProdutoModule } from './Produto/produto.module';
import { UsuarioController } from './usuario/usuario.controller';
import { UsuarioModule } from './usuario/usuario.module';


@Module({
  imports: [UsuarioModule,ProdutoModule,BancoModule],
  controllers:[]
})
export class AppModule {}
