import { Marca } from "./marca.entity";
import { Injectable, Inject} from "@nestjs/common";
import { Repository } from "typeorm";

@Injectable()
export class MarcaService{
    constructor(
        @Inject('MARCA_REPOSITORY')
        private marcaRepository: Repository<Marca>,
    ){}

    async listar(): Promise<Marca[]>{
        return this.marcaRepository.find();
    }

    async inserir(marca: Marca): Promise<void>{

    }

    buscarPorID(id: string):Promise<Marca>{
        return this.marcaRepository.findOne({
            where: {
                id,
            }
        })
    }

    async remover(id: string):Promise<void>{
        const user = await this.buscarPorID(id);
        await this.marcaRepository.remove(user);
    }
}