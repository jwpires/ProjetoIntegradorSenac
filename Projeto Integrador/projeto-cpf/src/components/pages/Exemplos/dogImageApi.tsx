import { useState } from "react";
import HeaderMenu from "../../header/HeaderMenu";
import { Dog } from "./dogImage";

function DogImageAPI(){

    const [dog, setDog] = useState<Dog[]>([]);

    const carregaDogs = async () => {
        
        let response = await fetch("https://dog.ceo/api/breeds/image/random");
        let json = await response.json();

        setDog(json);
    }

    return(
        <div>
            <button onClick={carregaDogs}>Mudar Foto</button>
            <div>
                {dog.map((item,index) =>(
                    <div>
                        {/* <img src={item.message} alt={item.status} /> */}
                    </div>
                ))}
            </div>
        </div>


    );
}

export default DogImageAPI;