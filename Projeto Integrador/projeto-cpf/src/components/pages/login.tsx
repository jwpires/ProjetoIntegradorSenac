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


    /* ESSA É A FUNÇÃO PARA VALIDAR O ACESSO DE USUÁRIO */
    const RealizarLogin = async () => {
        
        console.log(fUser);
        console.log(fSenha);

        let json = await api.Logar(fUser, fSenha);
        console.log(json);
        if(json.email){
            alert ('Bem vindo,'+ fUser);
            UsuarioLogadoCtx?.setName(fUser);
            navegacao('/home');
        }else{
            
            alert('Usuario/Senha não encontrados.'+json.message);
        }
    }

    return (
        
        <div className="container_main_padrao">
            
            <div className="container_padrao">

                <header>
                    {/* <h1 className='descricao'><Link to={'/cadastro/Usuario'} className='link'>Cadastre-se aqui!</Link></h1> */}
                    <h1 className='descricao'>Suas Finanças em dia!</h1>
                
                </header>

                <div className="campos">
                    <input type="text" className='input-padrao' placeholder='Login' onChange={handlefUserChange} /> 
                    <input type="password" className='input-padrao' placeholder='Senha' onChange={handlefSenhaChange} />
                    <input type="button" className='botao-padrao' value="Acessar" onClick={RealizarLogin}/>
                    
                    {/* <label><Link to={'/cadastro/NovaSenha'} className='link'>Esqueci minha senha.</Link></label> */}

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