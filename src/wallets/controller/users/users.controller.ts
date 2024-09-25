import { Controller, Post, Body } from "@nestjs/common";
import { UserService } from "./../../services/user/user.service";
import { IUser } from './../../interfaces/users.interface';

@Controller("api/users")
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Post("register")
  async createPost(@Body() data: IUser) {
    console.log({...data});
    return this.userService.createUser({...data});
  }
}
