//dm: significa data module, onde ficará armazenado os dados ou onde será elaborado as querys de inserção ao banco
import { Injectable } from "@nestjs/common/decorators";
import { UsuarioEntity } from "./usuario.entity";

@Injectable()  // Indica a aplicação que essa função pode ser inserida informações.
export class UsuarioArmazenados{
    #usuarios: UsuarioEntity[] = [];
    
    AdicionarUsuario(usuario : UsuarioEntity){
        this.#usuarios.push(usuario);
    }
    
    
    get Usuarios(){
        return this.#usuarios;
    }

    async validaEmail(email: string){
        const possivelUsuario = this.#usuarios.find(
            usuario => usuario.email === email
        );
        return(possivelUsuario !== undefined)
    }
    
    
}