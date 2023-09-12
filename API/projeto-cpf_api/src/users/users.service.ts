import { Injectable } from '@nestjs/common';
// This should be a real class/interface representing a user entity
import { databaseProviders } from 'src/database/database.providers';
import { usuarioProviders } from 'src/usuario/usuario.providers';

export type User = any;

@Injectable()
export class UsersService {
  
  private readonly users = [
    {
      userId: 1,
      username: 'teste',
      password: '123',
    },
    {
       userId: 2,
       username: 'teste2',
       password: '456',
    },
   
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  } 
};
