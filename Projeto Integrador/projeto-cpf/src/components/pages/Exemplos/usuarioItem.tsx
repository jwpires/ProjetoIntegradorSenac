import { type } from "@testing-library/user-event/dist/type";
import { Usuario } from "./usuarios";

type Props = {
    data: Usuario;
}

function UsuarioItem({data}: Props){

    return(
        <div>
            <hr />
            User ID: {data.userId}
            <br />
            Titulo: {data.title}
            <br />
            <hr />
        </div>
    )
}

export default UsuarioItem;