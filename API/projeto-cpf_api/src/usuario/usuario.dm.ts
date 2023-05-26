//dm: significa data module, onde ficará armazenado os dados ou onde será elaborado as querys de inserção ao banco
import { Injectable } from "@nestjs/common/decorators";
import { Usuario } from "./usuario.class";

@Injectable()  // Indica a aplicação que essa função pode ser inserida informações.
export class UsuarioArmazenados{
    #usuarios = [];
    
    AdicionarUsuario(usuario : Usuario){
        this.#usuarios.push(usuario);
    }
    
    
    get Usuarios(){
        return this.#usuarios;
    }
    
    
}