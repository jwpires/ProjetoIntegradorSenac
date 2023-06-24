import { Controller, Get } from "@nestjs/common";
import { Body, Post,} from "@nestjs/common/decorators";
import { AgenciaArmazenados } from "./agencia.dm";
import { AgenciaEntity } from "./agencia.entity";
import { InserirAgenciaDTO } from "./dto/inserirAgencia.dto";
import { ListarAgencia } from "./dto/listarAgencia.dto";
import {v4 as uuid} from 'uuid';

@Controller('/agencia')
export class AgenciaController{
    constructor( private armanezaAgencia: AgenciaArmazenados){}

 

}