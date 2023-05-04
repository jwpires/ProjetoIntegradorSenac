import React from 'react';
import '../../style/style.css';
import { Link } from 'react-router-dom';



function CadastroNovaSenha() {
    return (
        
        <div className="container_main_login">
                      
            <div className="container_login">
                
                <header>
                    <h1>Esqueceu sua senha?</h1>
                    <h3>Redefina aqui ou volte para a tela de <Link to={'/login'}>Login</Link></h3>
                </header>

                <input type='email' className='input-login' placeholder='Informe o Email' /> 
                <input type="submit" className='login-acessar' value="Enviar" />

            </div>

            <div className="container_imagem">
                <img src={require("../../images/logo.png")} alt="exibe imagem do login" />
                <h1>Controle Pessoal de Finanças</h1>
            </div>
        </div>
    );
}

export default CadastroNovaSenha;