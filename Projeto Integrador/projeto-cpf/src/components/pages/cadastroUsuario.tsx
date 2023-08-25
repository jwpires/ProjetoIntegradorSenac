import React, { useState } from 'react';
import '../../style/style.css';
import { Link, useNavigate } from 'react-router-dom';
import { api } from './api';

// function handleClickVoltar() {
//     const navegacao = useNavigate();
//     const [Usuario_Login, setUsuario_Login] = useState('username: string, password: string');
//     navegacao('/login');
// }
// const handleClickSalvar = async () => {
//     console.log(setUsuario_Login);
//     if (!setUsuario_Login) {
//         alert("O campo Nome não pode estar vazio.");
//     } else {
//         try {
//             let json = await api.Logar(setUsuario_Login);
//             alert('Cadastro Inserido com sucesso.');
//             setUsuario_Login('');
//             window.location.reload();
//             return json;
//         } catch (error) {
//             alert('Ocorreu algum erro e o cadastro não pode ser inserido.')
//         }
//     }


    function CadastroUsuario() {
        return (

            <div className="container_main_padrao">

                <div className="container_padrao">

                    <header>
                        <h1 className='descricao'>Cadastre sua conta!</h1>
                        <h3 className='descricao-cad-usuario-h3'>Já está cadastrado? Então faça o <Link to={'/'}>Login</Link></h3>
                    </header>

                    <input type="text" className='input-padrao' placeholder='Nome:' />
                    <input type="text" className='input-padrao' placeholder='Sobrenome:' />
                    <input type='email' className='input-padrao' placeholder='Email' />
                    <input type="password" className='input-padrao' placeholder='Informe sua Senha' />
                    <input type="password" className='input-padrao' placeholder='Confirme sua Senha' />
                    <input type="submit" className='botao-padrao' value="Salvar" />

                </div>

                <div className="container_imagem">
                    <img src={require("../../images/logo.png")} alt="exibe imagem do login" />
                    <h1 className='descricao'>Controle Pessoal de Finanças</h1>
                </div>
            </div>
        );

    }
    export default CadastroUsuario;