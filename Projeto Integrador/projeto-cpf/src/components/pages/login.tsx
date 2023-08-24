import React, { ChangeEvent, useContext, useState } from 'react';
import '../../style/style.css';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import CadastroUsuario from './cadastroUsuario';
import CadastroNovaSenha from './cadastroNovaSenha';
import { api } from './api';
import { UsuarioLogadoContext, UsuarioLogadoProvider } from '../contexts/contextAuth';






function Login() {

    const [fUser, setfUser] = useState('');
    const [fSenha, setfSenha] = useState('');

    const navegacao = useNavigate();

    const acessaHome = () => {
        navegacao('/home');
    } 

    const handlefUserChange = (e: ChangeEvent<HTMLInputElement>) => {
        setfUser(e.target.value);
    }
    
    const handlefSenhaChange = (e: ChangeEvent<HTMLInputElement>) => {
        setfSenha(e.target.value);
    }

    const UsuarioLogadoCtx = useContext(UsuarioLogadoContext);

    const RealizarLogin = async () => {

        let json = await api.Logar(fUser, fSenha);
        if(json.userId){
            alert ('Bem vindo,'+ fUser);
            UsuarioLogadoCtx?.setName(fUser);
            navegacao('/home');
        }else{
            alert('Usuario/Senha não encontrados.');
        }

    }

    return (
        
        <div className="container_main_padrao">
            
            <div className="container_padrao">

                <header>
                    <h1 className='descricao'><Link to={'/cadastro/Usuario'} className='link'>Cadastre-se aqui!</Link></h1>
                
                </header>

                <div className="campos">
                    <input type="text" className='input-padrao' placeholder='Login' /> 
                    <input type="password" className='input-padrao' placeholder='Senha' />
                    <input type="submit" className='botao-padrao' value="Acessar" onClick={acessaHome}/>
                    <label><Link to={'/cadastro/NovaSenha'} className='link'>Esqueci minha senha.</Link></label>

                    {/* <label>TESTES:</label>
                    <br />
                    <input onChange={handlefUserChange} />
                    <br />
                    <input onChange={handlefSenhaChange} />
                    <input type="submit" className='botao-padrao' value="Acessar" onClick={RealizarLogin}/> */}
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