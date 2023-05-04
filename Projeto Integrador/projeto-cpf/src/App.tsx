import React from 'react';
import './style/style.css';
import HeaderMenu from './components/header/HeaderMenu';
import {Route, Routes} from 'react-router-dom'
import Baseboard from './components/baseboard/Baseboard';
import Login from './components/pages/login';
import Home from './components/pages/home';
import Sobre from './components/pages/sobre';
import NotFound from './components/pages/notfound';
import CadastroUsuario from './components/pages/cadastroUsuario';
import CadastroNovaSenha from './components/pages/cadastroNovaSenha';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sobre' element={<Sobre/>}/>
        <Route path='/login' element={<Login/>}/>
          <Route path='/cadastroUsuario' element={<CadastroUsuario/>}/>
          <Route path='/cadastroNovaSenha' element={<CadastroNovaSenha/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route/>
      </Routes>
       
        {/* <Login/> */}
    </div>
  );
}

export default App;
