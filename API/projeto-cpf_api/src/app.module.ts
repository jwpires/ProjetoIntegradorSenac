import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AgenciaModule } from './agencia/agencia.module';
import { BancoModule } from './Banco/banco.module';
import { DespesaModule } from './LancamentoDespesa/despesa.module';
import { ProdutoModule } from './Produto/produto.module';
import { UsuarioController } from './usuario/usuario.controller';
import { UsuarioModule } from './usuario/usuario.module';


@Module({
  imports: [UsuarioModule,ProdutoModule,BancoModule,AgenciaModule, DespesaModule, HttpModule], 
  controllers:[],
  
})
export class AppModule {}
