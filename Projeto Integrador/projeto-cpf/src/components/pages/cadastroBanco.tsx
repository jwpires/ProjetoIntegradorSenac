import '../../style/style.css';
import HeaderMenu from '../header/HeaderMenu';

function CadastroBanco() {

    return(
        
        <div className="container-cadBanco">
            <HeaderMenu exibe={true}/>

            <div className="cadBanco">
                <form action="" method="post">
                    <div>
                        <select name="Banco" id="TESTE">
                            <option value="">Informe o Banco</option>
                        </select>
                        <button type='button'> + </button> {/* Botão servirá para direcionar a tela de cadastro da conta bancária. */}
                    </div>
                    
                    <input type="text" name="" id="" placeholder='Nome do proprietário da conta:'/>
                    <input type="text" name="" id="" placeholder='Informe número da conta'/>
                    

                </form>
                
            </div>
            
            
        </div>
    );
    
}

export default CadastroBanco;