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
                        <p>Usuario: Nome</p>
                    </div>
                    <div className="Saldo">
                        <p>saldo Banco do Brasil: 152.574,74 </p>
                        <p>saldo Banco Itau: 7.012,92 </p>
                        
                    </div>
                    <div className="Gasto">
                        <p>Projeção despesas do mês: 4.571,23</p>
                        <p>Despesas em aberto: 2.031,87</p>
                        <p>Próximo vencimento: Conta de Luz, Vencimento: 12/06/2023, Valor: 114,74</p>
                    </div>
                    <div className="Evolucao">
                        <p>Gráfico Dispesas X Receitas</p>
                    </div>
    
                </div>
            </div>
        </div>
    );
    
}

export default Home;