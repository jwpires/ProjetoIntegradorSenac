import { DataSource } from "typeorm";
import { UsuarioEntity } from "./usuario.entity";

export const UsuarioProviders = [
    {
        provide: 'USUARIO_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(UsuarioEntity),
        inject: ['DATA_SOURCE'],
    }
];