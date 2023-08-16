import { GrupoDespesa } from "src/GrupoDeDespesa/grupoDespesa.entity";


export class RetornoDespesasDTO{
    constructor(
        readonly id: string,
        readonly descricao:string,
        readonly id_grupoDespesa:GrupoDespesa,
        readonly dataLancamento: Date,
        readonly dataVencimento:Date,
        readonly valor: number,
        readonly pago: boolean
    ){}
}