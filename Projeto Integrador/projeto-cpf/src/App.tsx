import React from 'react';
import './style/style.css';
import HeaderMenu from './components/header/HeaderMenu';
import {Route, Routes} from 'react-router-dom'
import Baseboard from './components/baseboard/Baseboard';
import Login from './components/pages/login';
import CadastroUsuario from './components/pages/cadastroUsuario';
import CadastroNovaSenha from './components/pages/cadastroNovaSenha';
import Home from './components/pages/home';
import CadastroBanco from './components/pages/cadastroBanco';
import Sobre from './components/pages/sobre';
import NotFound from './components/pages/notfound';
import SobreItemCPF from './components/pages/sobreItemCPF';
import Contador from './components/pages/contador';
import CadastroReceita from './components/pages/cadastroReceita';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cadastroBanco' element={<CadastroBanco/>}/>
        <Route path='/cadastroReceita' element={<CadastroReceita/>}/>
        
        <Route path='/sobre' element={<Sobre/>}/>
          <Route path='/sobre/:parametro' element={<SobreItemCPF/>}/> {/* parametros dinâmicos */}
        
        <Route path='/login' element={<Login/>}/>
          <Route path='/cadastroUsuario' element={<CadastroUsuario/>}/>
          <Route path='/cadastroNovaSenha' element={<CadastroNovaSenha/>}/> {/* */}
        
        <Route path='*' element={<NotFound/>}/>

        <Route path='/contador' element={<Contador/>}/>
      </Routes>
    </div>
  );
}

export default App;
