import React from 'react';
import './style/style.css';
import HeaderMenu from './components/header/HeaderMenu';
import Baseboard from './components/baseboard/Baseboard';
import Login from './components/login/login';


function App() {
  return (
    <div className="App">
       <HeaderMenu/>
        {/* <Login/> */}
    </div>
  );
}

export default App;
