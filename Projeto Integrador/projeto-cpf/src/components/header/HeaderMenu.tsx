import '../../style/style.css';
import Menu from '../menu/menu';
function HeaderMenu(props:{exibe:boolean}) {

    if(props.exibe==true){
        return (
            <div className="flex-container">
                <Menu home={'Home'} contaBancaria={'Conta Bancária'} /*receita={'Receita'}*/ lancamentoDespesa={'Lançamento de Despesa'} 
                /*movBancaria={'Mov. Bancária'}*/ relatorios={'Relatórios'} sair={'Sair'}/>
            </div>
        );
    }

    return(
        <div>

        </div>
    );
    
}

export default HeaderMenu;