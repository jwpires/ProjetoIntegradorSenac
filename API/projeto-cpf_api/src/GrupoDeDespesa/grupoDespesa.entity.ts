export class GrupoDespesaEntity{
    id: string;
    descricao: string;

    constructor(
        id: string,
        descricao: string
    )
    {
        this.id = id;
        this.descricao = descricao;
    }
}