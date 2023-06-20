import { useState } from "react";
import HeaderMenu from "../../header/HeaderMenu";
import { Dog } from "./dogImage";

function DogImageAPI(){

    const [dogs, setDog] = useState<Dog[]>([]);

    const carregaDogs = async () => {
        
        let response = await fetch("https://dog.ceo/api/breeds/image/random");
        let json = await response.json();

        const dataArray = Array.isArray(json) ? json : [json];

        setDog(dataArray);
    }

    return(
        <div>
            <button onClick={carregaDogs}>Mudar Foto</button>
    
            <div>
                { dogs.map((item, idex) => (
                    <div key={idex}>
                         <img src={item.message} />
                    </div>
                )) }
            </div>
        </div>


    );
}

export default DogImageAPI;