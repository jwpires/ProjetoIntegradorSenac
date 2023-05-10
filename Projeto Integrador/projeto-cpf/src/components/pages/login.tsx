import React from 'react';
import '../../style/style.css';
import { Link, Route, Routes } from 'react-router-dom';
import CadastroUsuario from './cadastroUsuario';
import CadastroNovaSenha from './cadastroNovaSenha';





function Login() {
    return (
        
        <div className="container_main_padrao">
            
            <div className="container_padrao">

                <header>
                    <h1 className='descricao'><Link to={'/cadastroUsuario'} className='link'>Cadastre-se aqui!</Link></h1>
                
                </header>

                <div className="campos">
                    <input type="text" className='input-padrao' placeholder='Login' /> 
                    <input type="password" className='input-padrao' placeholder='Senha' />
                    <input type="submit" className='botao-padrao' value="Acessar" />
                    <label><Link to={'/cadastroNovaSenha'} className='link'>Esqueci minha senha.</Link></label>
                </div> 

            </div>

            <div className="container_imagem">
                <img src={require("../../images/logo.png")} alt="exibe imagem do padrao" />
                <h1 className='descricao'>Controle Pessoal de Finanças</h1>
            </div>
        </div>
    );
}

export default Login;