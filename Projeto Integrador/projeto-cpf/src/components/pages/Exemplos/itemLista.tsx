
type Prop = {
    dados : {
        name : string,
        age: string
    }
}

function ItemLista({dados}: Prop){
    return(
        <div>
            Está é minha lista:
            <li> Nome: {dados.name} - Age: {dados.age}</li>
        </div>
    );
}

export default ItemLista;