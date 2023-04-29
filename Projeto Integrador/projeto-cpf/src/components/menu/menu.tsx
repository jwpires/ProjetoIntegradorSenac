import React from 'react';
import { isPropertySignature } from 'typescript';
import '../../style/style.css';
import Login from '../pages/login';
// Menu que será exibido em todas as telas, exceto Login
function Menu(props:{opcao1:String, opcao2:String, opcao3:String, opcao4:String, 
    opcao5:String, opcao6:String}) {
    return(
        <div className="flex-container-menu">
        
            <a href="http://"  rel="noopener noreferrer"><li>{props.opcao1}</li></a>
            <a href="http://"  rel="noopener noreferrer"><li>{props.opcao2}</li></a>
            <a href="http://"  rel="noopener noreferrer"><li>{props.opcao3}</li></a>
            <a href="http://"  rel="noopener noreferrer"><li>{props.opcao4}</li></a>
            <a href="http://"  rel="noopener noreferrer"><li>{props.opcao5}</li></a>
            <a href="http://"  rel="noopener noreferrer"><li>{props.opcao6}</li></a>
        </div>
    );
}

export default Menu;