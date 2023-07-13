import { Injectable } from "@nestjs/common";
import { RelatorioDespesaEntity } from "./relatorioDespesa.entity";

@Injectable()
export class RelatorioDespesa{
    #relatorio : RelatorioDespesaEntity[] = []
}