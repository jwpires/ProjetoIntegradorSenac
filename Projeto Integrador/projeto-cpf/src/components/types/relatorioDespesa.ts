export type RelatorioDespesa = {
    id: string;
    descricao: string;
    id_GrupoDespesa: string;
    dataLancamento: string;
    dataVencimento  :   string;
    valor: number; 
    pago: boolean;
}   