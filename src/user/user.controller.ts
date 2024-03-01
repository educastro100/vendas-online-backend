import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';

@Controller('user')
export class UserController {

@Post()
async createUser( 
   @Body() createUser: CreateUserDto
   ){
      // Declara o objeto com o DTO
      const newUser = {
         ...createUser,
         password: undefined, // Remove o password do retorno.
      }
      return newUser
}

}


