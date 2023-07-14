import { Controller, Get } from "@nestjs/common";
import { Delete, Param } from "@nestjs/common/decorators";
import { Marca } from "./marca.entity";
import { MarcaService } from "./marca.service";

@Controller('/marca')
export class MarcaController{
    constructor(private readonly marcaService: MarcaService){
        
    }

    @Get('listar')
   async listar():Promise<Marca[]>{  //Promise<TIPO>: Como é uma função assincronna o sistema promete um retorno do tipo determinado.
        return this.marcaService.listar();    
   }

   @Get('ID:id')
   async listarID(@Param('id') id:string):Promise<Marca>{
    return this.marcaService.buscarPorID(id);
   }

   @Delete('remove-:id')
   async removeMarca(@Param('id') id:string):Promise<void>{
    this.marcaService.remover(id);
   }
}