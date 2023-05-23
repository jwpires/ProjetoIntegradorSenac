
type Props = {
    texto?: String;
    onClickFN: (texto:String) => void;
}

function Filho(param: Props) {

     function hundleClick() {
        param.onClickFN("Olá pai, sou seu Filho.");
     }

    return(
        <div>
            <hr /><h1>Este é o elemento Filho</h1>
            Valor da Prop = {param.texto}
            <button onClick={hundleClick}>Clique Aqui!</button>
        </div>
    );
}

export default Filho;