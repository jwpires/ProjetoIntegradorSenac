//dm: significa data module, onde ficará armazenado os dados ou onde será elaborado as querys de inserção ao banco
import { Injectable } from "@nestjs/common/decorators";
import { Usuario } from "./usuario.entity";

@Injectable()  // Indica a aplicação que essa função pode ser inserida informações.
export class UsuarioArmazenados{
    #usuarios: Usuario[] = [];
    
    AdicionarUsuario(usuario : Usuario){
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


    private buscarPorID(id:string){
        /* Pesquisa o usuário que foi passado */
        const possivelUsuario = this.#usuarios.find(
            usuarioSalvo => usuarioSalvo.id === id
        );

        if(!possivelUsuario){
            throw new Error('Usuário não encontrado');
        }
        return possivelUsuario;
    }


    /* Partial<class> diz que o objeto pode ou não ter todos ou alguns campos da classe informada */
    async atualizaUsuario(id:string, dadosAtualizacao: Partial<Usuario>){ 
        
        const usuario = this.buscarPorID(id);

        /** entries: irá pegar os parâmetros e validar  */
        Object.entries(dadosAtualizacao).forEach(
            ([chave, valor]) => {
                if (chave === 'id') {
                    return;                    
                }
                usuario[chave] = valor;
            }
        )

        return usuario;
    }

    async removeUsuario(id:string){
        const usuario = this.buscarPorID(id);
        this.#usuarios = this.Usuarios.filter(
            usuarioSalvo => usuarioSalvo.id !== id
        )
        return usuario;
    }

    
}