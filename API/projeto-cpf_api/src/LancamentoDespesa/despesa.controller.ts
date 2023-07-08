import { Controller } from "@nestjs/common";
import { DespesasArmazenadas } from "./despesa.dm";
import { DespesaEntity } from "./despesa.entity";

@Controller('/despesa');
export class DespesaController{
    constructor(private armazenaDespesa:DespesasArmazenadas){}
}