import { UsersService } from '../users/users.service';
export declare class AuthService {
    private usersService;
    constructor(usersService: UsersService);
    sigIn(USUARIO_REPOSITORY: any): Promise<void>;
}
