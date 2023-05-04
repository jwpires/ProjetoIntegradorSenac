import React from 'react';
import '../../style/style.css';
import { Link } from 'react-router-dom';



function CadastroUsuario() {
    return (
        
        <div className="container_main_login">
                       
            <div className="container_login">
                
                <header>
                    <h1>Cadastre sua conta!</h1>
                    <h3>Já está cadastrado? Então faça o <Link to={'/login'} className='link'>Login</Link></h3>
                </header>

                <input type="text" className='input-login' placeholder='Login' /> 
                <input type='email' className='input-login' placeholder='Email' /> 
                <input type="password" className='input-login' placeholder='Informe sua Senha' />
                <input type="password" className='input-login' placeholder='Confirme sua Senha' />
                <input type="submit" className='login-acessar' value="Salvar" />

            </div>

            <div className="container_imagem">
                <img src={require("../../images/logo.png")} alt="exibe imagem do login" />
                <h1>Controle Pessoal de Finanças</h1>
            </div>
        </div>
    );
}

export default CadastroUsuario;