import { useState } from "react";
import HeaderMenu from "../../header/HeaderMenu";
import { Dog } from "./dogImage";

function DogImageAPI(){

    const [dogs, setDog] = useState<Dog[]>([]);

    const carregaDogs = async () => {
        
        let response = await fetch("https://jsonplaceholder.typicode.com/photos");
        let json = await response.json();

        setDog(json);
    }

    return(
        <div>
            <button onClick={carregaDogs}>Mudar Foto</button>
    
            <div>
                { dogs.map((item, idex) => (
                    <div key={idex}>
                         <img src={item.url} />
                    </div>
                )) }
            </div>
        </div>


    );
}

export default DogImageAPI;