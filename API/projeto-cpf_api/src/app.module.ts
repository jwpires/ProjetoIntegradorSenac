import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AgenciaModule } from './agencia/agencia.module';
import { BancoModule } from './Banco/banco.module';
import { GrupoDespesaModule } from './GrupoDeDespesa/grupoDespesa.module';
import { DespesaModule } from './LancamentoDespesa/despesa.module';
import { ProdutoModule } from './Produto/produto.module';
import { RelatorioModule } from './relatorios/relatorios.module';
import { UsuarioModule } from './usuario/usuario.module';


@Module({
  imports: [/*MarcaModule,*/ 
        UsuarioModule, 
        ProdutoModule, 
        BancoModule, 
        AgenciaModule, 
        DespesaModule, 
    GrupoDespesaModule,
        RelatorioModule,
        HttpModule], 
  controllers:[],
})
export class AppModule {}
