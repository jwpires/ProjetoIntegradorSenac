import '../../style/style.css';
import Menu from '../menu/menu';
function HeaderMenu() {

    return (
        <div className="flex-container">
            <Menu opcao1={'Home'} opcao2={'Conta Bancária'} opcao3={'Receita'} opcao4={'Lançamento de Despesa'} opcao5={'Mov. Bancária'}/>
        </div>
    );
    
}

export default HeaderMenu;