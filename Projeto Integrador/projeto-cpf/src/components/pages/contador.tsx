import Estado from "./estado";
import HeaderMenu from "../header/HeaderMenu";

function Contador(){
    
    return(
        <div>
            <HeaderMenu exibe={true}></HeaderMenu>
            <Estado/>
        </div>
    );
}

export default Contador;