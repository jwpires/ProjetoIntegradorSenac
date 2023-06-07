import HeaderMenu from "../header/HeaderMenu";

function Clicou(){
    alert("clicou no botão!");
}

function Home() {
    return(
        <div>
              <HeaderMenu exibe={true}/>
            <div className="container_main_padrao-tela">
            <div className="container_padrao-tela">
                <div className="nomeUsuario">
                    <p>nome de usuario</p>
                </div>
                <div className="Saldo">
                    <p>saldo em conta / saldo no cartão</p>
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Repellat quis quibusdam, eos nam assumenda possimus alias iste distinctio ab sint? Earum, porro autem! 
                        Corrupti nihil pariatur praesentium voluptatum? Magni, enim!</h5>
                </div>
                <div className="Gasto">
                    <p>Gastos</p>
                    <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Ut quisquam, distinctio asperiores vel tempora qui, exercitationem minima expedita 
                        molestiae sequi reprehenderit eaque dolores, quis repellat voluptate neque totam! Dolore, fugit.</h5>
                </div>
                <div className="Evolucao">
                    <p>Evolução de Gastos</p>
                    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Neque perferendis incidunt qui laboriosam mollitia, consequuntur 
                        velit cum doloribus beatae, a, eum sint reprehenderit accusantium maiores consequatur 
                        illo illum modi dolore.</h6>
                </div>
              
                <button onClick={Clicou}>Clique aqui!</button>    
            </div>
            </div>
        </div>
    );
    
}

export default Home;