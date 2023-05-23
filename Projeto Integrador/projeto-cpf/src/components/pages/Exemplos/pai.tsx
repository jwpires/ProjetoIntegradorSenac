import HeaderMenu from "../../header/HeaderMenu";
import Filho from "./filho";


function Pai(){

    function handleEventoPai(texto: String) {
        alert("Mensagem do Pai: "+texto);
    }

    return(
        <div>
            <HeaderMenu exibe/>
            <h1>Este é o elemento Pai.</h1>
            <Filho onClickFN={handleEventoPai} texto={'Enviado Texto pelo Pai.'}/>
            
        </div>
    );
}

export default Pai;