import { Injectable } from "@nestjs/common";
import { DespesaEntity } from "./despesa.entity";

@Injectable()
export class DespesasArmazenadas{
    #despesas : DespesaEntity[];
}