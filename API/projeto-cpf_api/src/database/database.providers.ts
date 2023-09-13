import { DataSource } from "typeorm";

// usuario: vitali04_cpf
// senha:  Jos&102030
// hostname: 
// porta: 3306

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'mysql', // qual banco será conectado
                host: 'ns582.hostgator.com.br', // host utilizado
                port: 3306, //porta de conexão
                username: 'vitali04_cpf', // usuário do banco
                password: 'Jos&102030', // senha do usuário do banco
                database:'vitali04_cpf', // nome do banco que será acessado
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