import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './login/login';
import App from './App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Login/>
    {/* <App /> */}
    
  </React.StrictMode>
);


