import '../../style/style.css';
import HeaderMenu from '../header/HeaderMenu';
import ItemLista from './Exemplos/itemLista';

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


function Sobre() {

    let list = [
        'Acerola',
        'Laranjinha',
        'Dadinho',
        'Zé Pequeno'
    ]

    let listObjeto = [
        {name: 'Nome 1', age: '30'},
        {name: 'Nome 2', age: '54'},
        {name: 'Nome 3', age: '85'},
        {name: 'Nome 4', age: '14'},
        {name: 'Nome 5', age: '24'}
    ]


    return(
        <div>
            <HeaderMenu exibe></HeaderMenu>
            <h2> Lista de Nomes:</h2>

            <ul>
                {
                    list.map(
                        (item, index) => <li key={index}>{item }</li>
                    )
                }
            </ul>

            <h2>Lista Objeto</h2>

            <ul>
                {
                    listObjeto.map(
                        (item, index) => <ItemLista key={index} dados={item}/>
                    )
                }
            </ul>
      </div>
    );
}

export default Sobre;