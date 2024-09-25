import { IRechargeWallet, IGenerateToken, IConfirmPayment, ICheckBalance } from './../../interfaces/wallet.interface';
import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { lastValueFrom } from "rxjs";
import * as xml2js from "xml2js";
import { environment } from './../../../environment/environment';


@Injectable()
export class WalletService {
  constructor(private readonly httpService: HttpService) {}

  async rechargeWallet(data: IRechargeWallet): Promise<any> {
    try {
      const response: any = await lastValueFrom(
        this.httpService.post(`${environment.url}/recharge-wallet`, data),
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

  async generateToken(data: IGenerateToken): Promise<any> {
    try {
      const response: any = await lastValueFrom(
        this.httpService.post(`${environment.url}/generate-token`, data),
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

  async confirmPayment(data: IConfirmPayment): Promise<any> {
    try {
      const response: any = await lastValueFrom(
        this.httpService.post(`${environment.url}/confirm-payment`, data),
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
  
  async checkBalance(data: ICheckBalance): Promise<any> {
    try {
      const response: any = await lastValueFrom(
        this.httpService.post(`${environment.url}/wallet/check-balance`, data),
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
