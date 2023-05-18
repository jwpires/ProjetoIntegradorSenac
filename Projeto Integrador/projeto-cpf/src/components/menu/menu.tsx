import React from 'react';
import { isPropertySignature } from 'typescript';
import '../../style/style.css';
import { Link } from 'react-router-dom';


type Props = {
    home?: String,
    contaBancaria?: String,
    receita?: String,
    lancamentoDespesa?: String,
    movBancaria?: String,
    relatorios?: String,
    sair?: String
}

// Menu que será exibido em todas as telas, exceto Login
function Menu(props: Props) {
    return(
        <div className="flex-container-menu">
            <Link to={"/"}><li>{props.home}</li></Link>
            <Link to={"/cadastro/ContaBanco"}><li>{props.contaBancaria}</li></Link>
            <Link to={"/cadastro/Receita"}><li>{props.receita}</li></Link>
            <Link to={"/lancamento/Despesa"}><li>{props.lancamentoDespesa}</li></Link>
            <Link to={"/"}><li>{props.movBancaria}</li></Link>
            <Link to={"/"}><li>{props.relatorios}</li></Link>
            <Link to={"/login"}><li>{props.sair}</li></Link>
            
        </div>
    );
}

export default Menu;