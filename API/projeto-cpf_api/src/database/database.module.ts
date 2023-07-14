import { Module } from "@nestjs/common";
import { databaseProviders } from "./database.providers";


@Module({
 providers:[...databaseProviders], /* exporta as informações de conexão que haverá com o banco para a memória*/
 exports:[...databaseProviders],   /*exporta as informações "dados" para a memória*/
})

export class DatabaseModule{}