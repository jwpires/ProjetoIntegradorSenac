import '../../style/style.css';
import { useParams, useNavigate } from 'react-router-dom';



function SobreItemCPF(){
    const params = useParams();
    const navegacao = useNavigate();

    function handleClickVoltar(){
        navegacao(-1); //volta uma página
    }

    function handleClickHome(){
        navegacao('/'); //volta uma página
    }

    return(
        <div>
            <p>Essa página é sobre o aluno <strong>{params.parametro}</strong></p>
            <button onClick={handleClickVoltar}>Voltar</button>
            <button onClick={handleClickHome}>Home</button>
        </div>
    );
}

export default SobreItemCPF;