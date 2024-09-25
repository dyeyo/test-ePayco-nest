import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from "rxjs";
import * as xml2js from "xml2js";
import { environment } from "./../../../environment/environment";
import { IUser } from "./../../interfaces/users.interface";

@Injectable()
export class UserService {

  constructor(private readonly httpService: HttpService) {}

  async createUser(data: IUser): Promise<any> {
    try {
      const response:any = await lastValueFrom(
        this.httpService.post(`${environment.url}/register-person`, data)
      );
      const parser = new xml2js.Parser({ explicitArray: false });
      const result = await parser.parseStringPromise(response.data);
      return result;
    } catch (error) {
        console.log(error);
      throw new HttpException(
        "Error al hacer la petición POST",
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
