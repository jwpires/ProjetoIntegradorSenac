import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HeaderMenu from './components/header/HeaderMenu';
import Login from './components/login/login';
import App from './App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  
    <App /> 
    
  </React.StrictMode>
);


