import { async } from "rxjs";
import { DataSource } from "typeorm";


export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'mysql', // qual banco será conectado
                host: 'localhost', // host utilizado
                port: 3306, //porta de conexão
                username: 'root', // usuário do banco
                password: '', // senha do usuário do banco
                database:'integrador_cpf', // nome do banco que será acessado
                entities: [
                    __dirname + '/../**/*.entity{.ts,.js}',  
                ],
                synchronize: false, /**sincroniza sempre o banco com os objetos da API - 
                orientado utilizar somente em ambiente de teste e não de produção */
            });
            return dataSource.initialize();
        }
    }
]