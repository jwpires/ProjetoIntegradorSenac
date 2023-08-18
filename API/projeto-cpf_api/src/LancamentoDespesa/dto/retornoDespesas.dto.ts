import { GrupoDespesa } from "src/GrupoDeDespesa/grupoDespesa.entity";


export class RetornoDespesasDTO{
    constructor(
        readonly id: string,
        readonly descricao:string
    ){}
}