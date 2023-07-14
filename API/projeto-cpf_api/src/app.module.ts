import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AgenciaModule } from './agencia/agencia.module';
import { BancoModule } from './Banco/banco.module';
import { GrupoDespesaModule } from './GrupoDeDespesa/grupoDespesa.module';
import { DespesaModule } from './LancamentoDespesa/despesa.module';
import { MarcaModule } from './marcaTesteConexaoBanco/marca.module';
import { ProdutoModule } from './Produto/produto.module';
import { RelatorioDespesaModule } from './relatorios/relatorioDespesa.module';
import { UsuarioController } from './usuario/usuario.controller';
import { UsuarioModule } from './usuario/usuario.module';


@Module({
  imports: [/*MarcaModule,*/ UsuarioModule, ProdutoModule, BancoModule, AgenciaModule, DespesaModule, GrupoDespesaModule, RelatorioDespesaModule, HttpModule], 
  controllers:[],
})
export class AppModule {}
