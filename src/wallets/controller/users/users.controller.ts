import { Controller, Post, Body } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

import { UserService } from "./../../services/user/user.service";
import { IUser } from './../../interfaces/users.interface';
import { CreatePeopleDto } from './../../../swager/usersDTO';

@Controller("api/users")
@ApiTags('Users') 

export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Post("register")
  @ApiOperation({ summary: 'Crea un nueva persona' })
  @ApiBody({ description: 'Datos de la persona a crear', type: CreatePeopleDto })
  @ApiResponse({ status: 200, description: 'Persona creado correctamente.' })
  @ApiResponse({ status: 400, description: 'Error al crear la  persona.' })
  async createPost(@Body() data: IUser) {
    console.log({...data});
    return this.userService.createUser({...data});
  }
}
