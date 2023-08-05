// import {Injectable} from '@nestjs/common';
export type user = any;

// @Injectable()
export class UsersService{
    private readonly users = [
        {
            userId: 1,
            username: 'teste',
            password: '123',
        },
        {
            userId: 2,
            username: 'teste2',
            password: '123456',
        },
    ];
    // async findOne(username: string): Promise<User | undefined>{
    //     return this.users.find( user => user.username === username);
    // }
}
