import React from 'react';
import './style/style.css';
import HeaderMenu from './components/header/HeaderMenu';
import {Route, Routes} from 'react-router-dom'
import Baseboard from './components/baseboard/Baseboard';
import Login from './components/pages/login';
import CadastroUsuario from './components/pages/cadastroUsuario';
import CadastroNovaSenha from './components/pages/cadastroNovaSenha';
import Home from './components/pages/home';
import CadastroContaBanco from './components/pages/cadastroContaBanco';
import Sobre from './components/pages/sobre';
import NotFound from './components/pages/notfound';
import SobreItemCPF from './components/pages/sobreItemCPF';
import Contador from './components/pages/contador';
import CadastroReceita from './components/pages/cadastroReceita';
import CadastroGrupoReceita from './components/pages/cadastroGrupoReceita';
import CadastroBanco from './components/pages/cadastroBanco';
import LancamentoDespesa from './components/pages/lancamentoDespesa';
import CadastroGrupoDespesa from './components/pages/cadastroGrupoDespesa';
import ConfirmacaoPagamento from './components/pages/confirmacaoPagamento';
import MovimentacaoBancaria from './components/pages/movimentacaoBancaria';
import Pai from './components/pages/Exemplos/pai';
import Relatorio from './components/pages/relatorio';
import RequisicoesTypesAsync from './components/pages/Exemplos/requisicoesTypesAsync';
import DogImageAPI from './components/pages/Exemplos/dogImageApi';



function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home/>}/>
        
        <Route path='/cadastro/ContaBanco' element={<CadastroContaBanco/>}/>
        <Route path='/cadastro/Banco' element={<CadastroBanco/>}/>
        <Route path='/cadastro/Receita' element={<CadastroReceita />} />
          <Route path='/cadastro/GrupoReceita' element={<CadastroGrupoReceita/>}/>
        <Route path='/lancamento/Despesa' element={<LancamentoDespesa/>}/>
          <Route path='/cadastro/GrupoDespesa' element={<CadastroGrupoDespesa/>}/>
            <Route path='/confirmacaoPagamento' element={<ConfirmacaoPagamento />} />
        <Route path='/movimentacaoBancaria' element={<MovimentacaoBancaria/>}/>
        <Route path='/relatorio' element={<Relatorio/>} />

        <Route path='/sobre' element={<Sobre/>}/>
          <Route path='/sobre/:parametro' element={<SobreItemCPF/>}/> {/* parametros dinâmicos */}
        
        <Route path='/' element={<Login/>}/>
          <Route path='/cadastro/Usuario' element={<CadastroUsuario/>}/>
          <Route path='/cadastro/NovaSenha' element={<CadastroNovaSenha/>}/> {/* */}
        
        <Route path='*' element={<NotFound/>}/>

        <Route path='/contador' element={<Contador/>}/>
        <Route path='/paifilho' element={<Pai/>}/>
        <Route path='/requisicao' element={<RequisicoesTypesAsync/>} />
        <Route path='/dog' element={<DogImageAPI/>}/>
      </Routes>
    </div>
  );
}

export default App;
