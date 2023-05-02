import React from 'react';
import '../../style/style.css';


function Login() {
    return (
        
        <div className="container_main_login">
            <div className="container_imagem">
                <img src={require("../../images/logo.png")} alt="exibe imagem do login" />
            </div>
            
            <div className="container_login">

                <input type="text" className='input-login' placeholder='Login' />  {/* <br /> */}
                <input type="text" className='input-login' placeholder='Password' />

            </div>
        </div>
    );
}

export default Login;