import HeaderMenu from "../header/HeaderMenu";

function Clicou(){
    alert("clicou no botão!");
}

function Home() {
    return(
        <div>
            <HeaderMenu exibe={true}/>
            <button onClick={Clicou}>Clique aqui!</button>
        </div>
    );
    
}

export default Home;