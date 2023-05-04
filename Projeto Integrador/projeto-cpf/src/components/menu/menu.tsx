import React from 'react';
import { isPropertySignature } from 'typescript';
import '../../style/style.css';
import Login from '../pages/login';
import { Link } from 'react-router-dom';

// Menu que será exibido em todas as telas, exceto Login
function Menu(props:{opcao1:String, opcao2:String, opcao3:String, opcao4:String, 
    opcao5:String, opcao6:String, opcao7:String}) {
    return(
        <div className="flex-container-menu">
            <Link to={"/"}><li>{props.opcao1}</li></Link>
            <Link to={"/"}><li>{props.opcao2}</li></Link>
            <Link to={"/"}><li>{props.opcao3}</li></Link>
            <Link to={"/"}><li>{props.opcao4}</li></Link>
            <Link to={"/"}><li>{props.opcao5}</li></Link>
            <Link to={"/"}><li>{props.opcao6}</li></Link>
            <Link to={"/login"}><li>{props.opcao7}</li></Link>
        </div>
    );
}

export default Menu;