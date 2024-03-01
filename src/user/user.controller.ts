import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserService } from './user.service';
import { User } from './interfaces/user.interface';

@Controller('user')
export class UserController {

constructor(private readonly userService: UserService){}

// Função de cadastro
@Post()
async createUser( 
   @Body() createUser: CreateUserDto){
      // Declara o objeto com o DTO
      return this.userService.createUser(createUser)
}

// Função de listar
@Get()
async getAllUser() : Promise<User[]>{
   return this.userService.getAllUser();
}

}


