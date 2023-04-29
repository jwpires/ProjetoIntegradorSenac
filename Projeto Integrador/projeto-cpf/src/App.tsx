import React from 'react';
import './style/style.css';
import HeaderMenu from './components/header/HeaderMenu';
import {Route, Routes} from 'react-router-dom'
import Baseboard from './components/baseboard/Baseboard';
import Login from './components/pages/login';
import Home from './components/pages/home';
import Sobre from './components/pages/sobre';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sobre' element={<Sobre/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route/>
      </Routes>
       
        {/* <Login/> */}
    </div>
  );
}

export default App;
