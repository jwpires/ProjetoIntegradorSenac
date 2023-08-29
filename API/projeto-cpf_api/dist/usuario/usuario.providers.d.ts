import { DataSource } from 'typeorm';
import { UsuarioEntity } from './usuario.entity';
export declare const usuarioProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<UsuarioEntity>;
    inject: string[];
}[];
