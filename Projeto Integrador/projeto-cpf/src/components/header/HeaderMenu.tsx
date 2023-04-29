import '../../style/style.css';
import Menu from '../menu/menu';
function HeaderMenu(props:{exibe:boolean}) {

    if(props.exibe==true){
        return (
            <div className="flex-container">
                <Menu opcao1={'Home'} opcao2={'Conta Bancária'} opcao3={'Receita'} opcao4={'Lançamento de Despesa'} 
                opcao5={'Mov. Bancária'} opcao6={'Relatórios'}/>
            </div>
        );
    }

    return(
        <div></div>
    );
    
}

export default HeaderMenu;