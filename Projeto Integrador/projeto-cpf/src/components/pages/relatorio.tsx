import HeaderMenu from "../header/HeaderMenu";
import '../../style/style.css';

function Relatorio() {
    return(
        <div>
            <HeaderMenu exibe={true}/>
                <div className="container_main_padrao-tela">
                    <div className="container_padrao-tela">
                        <div className="Personal">
                            <input type="button" value="Personalizar Relatorios" />
                            <input type="button" value="Relatorio Completo" />
                        </div>
                        <div className="Graficos">
                            <br /><br /><br /><br />
                            <p>Grafico Pizza - Grafico Barra</p>
                            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                        </div>
                        
                    </div>
                </div>
        </div>
    );
    
}

export default Relatorio;