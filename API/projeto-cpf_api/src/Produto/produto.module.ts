import {Module} from "@nestjs/common";
import { ProdutoController } from "./produto.controller";
import { ProdutosArmazenados } from "./produto.dm";



@Module({
    controllers:[ProdutoController], // Monitorador do Post e Get, o que envia e recebe
    providers:[ProdutosArmazenados] // 
})

export class ProdutoModule{
    
}

