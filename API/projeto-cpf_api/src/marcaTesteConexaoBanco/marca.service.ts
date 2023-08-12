import { Marca } from "./marca.entity";
import { Injectable, Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { CriaMarcaDTO } from "./dto/criamarca.dto";
import { RetornoCadastroDTO } from "src/dto/retorno.dto";

@Injectable()
export class MarcaService {
    constructor(
        @Inject('MARCA_REPOSITORY')
        private marcaRepository: Repository<Marca>,
    ) { }

    async listar(): Promise<Marca[]> {
        return this.marcaRepository.find();
    }

    async inserir(marca: Marca): Promise<void> {

    }

    buscarPorID(id: string): Promise<Marca> {
        return this.marcaRepository.findOne({
            where: {
                id,
            }
        })
    }

    async remover(id: string): Promise<void> {
        const user = await this.buscarPorID(id);
        await this.marcaRepository.remove(user);
    }

    async alterar(id: string, dados: CriaMarcaDTO): Promise<RetornoCadastroDTO> {

        const marca = await this.buscarPorID(id);

        Object.entries(dados).forEach(

            ([chave, valor]) => {

                if (chave === 'id') {
                    return;
                }
                marca[chave] = valor;

            }
        )

        return this.marcaRepository.save(marca)

            .then((result) => {

                return <RetornoCadastroDTO>{
                    id: marca.id,
                    message: "Marca alterada!"
                };

            })

            .catch((error) => {
                return <RetornoCadastroDTO>{
                    id: "",
                    message: "Houve um erro ao alterar."
                };
            })
    }
}