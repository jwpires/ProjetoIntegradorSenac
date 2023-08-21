export type RelatorioDespesa = {
    id_despesa: string;
    descricao: string;
    nomeGrupoDespesa: string;
    dataLancamento: string;
    dataVencimento  :   string;
    valor: number; 
    pago: boolean;
}   