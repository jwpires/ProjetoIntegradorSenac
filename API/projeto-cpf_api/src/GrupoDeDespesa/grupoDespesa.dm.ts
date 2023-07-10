import { Injectable } from "@nestjs/common";
import { GrupoDespesaEntity } from "./grupoDespesa.entity";

@Injectable()
export class ArmazenaGrupoDespesa{
    #grupoDespesa : GrupoDespesaEntity[] = [];

    get GrupoDespesa(){
        return this.#grupoDespesa;
    }

    inserirGrupoDespesa(grupoDespesa_:GrupoDespesaEntity){
        this.#grupoDespesa.push(grupoDespesa_);
    }

    exibeGrupoDespesa(){
        const exibeGrupDespesa = this.GrupoDespesa;
        return exibeGrupDespesa;
    }
}