import '../../style/style.css';
import { useState } from 'react';

function Estado(){

    const[numero, setNumero] = useState(0);

    function handleClickSoma(){
        setNumero(numero+1);
    }
    function handleClickSubtrai(){
        setNumero(numero-1);
    }
    return(
        <div>
            <h1>O valor é {numero}</h1>
            <button onClick={handleClickSoma}>Soma</button>
            <button onClick={handleClickSubtrai}>Subtrai</button>
        </div>
    );
}

export default Estado;