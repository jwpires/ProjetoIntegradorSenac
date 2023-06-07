import { Module } from '@nestjs/common';
import { ProdutoModule } from './Produto/produto.module';
import { UsuarioController } from './usuario/usuario.controller';
import { UsuarioModule } from './usuario/usuario.module';


@Module({
  imports: [UsuarioModule,ProdutoModule],
  controllers:[]
})
export class AppModule {}
