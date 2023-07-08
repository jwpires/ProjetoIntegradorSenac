import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AgenciaModule } from './agencia/agencia.module';
import { BancoModule } from './Banco/banco.module';
import { DespesaModule } from './LancamentoDespesa/despesa.module';
import { ProdutoModule } from './Produto/produto.module';
import { UsuarioController } from './usuario/usuario.controller';
import { UsuarioModule } from './usuario/usuario.module';


@Module({
<<<<<<< HEAD
  imports: [UsuarioModule,ProdutoModule,BancoModule,AgenciaModule, DespesaModule, HttpModule], 
=======
  imports: [UsuarioModule,ProdutoModule,BancoModule,AgenciaModule, HttpModule],
>>>>>>> 09402edd8a19c6c5309fa8db0f3f5617d4c40984
  controllers:[],
  
})
export class AppModule {}
