import { Controller, Body, Post } from '@nestjs/common';
import { WalletService } from './../services/wallet.service';
import { IRechargeWallet,IGenerateToken,IConfirmPayment } from './../interfaces/wallet.interface';

@Controller('api/wallet')
export class WalletController {

    constructor(private readonly walletService: WalletService) {}

    @Post("recharge-wallet")
    async createPost(@Body() data: IRechargeWallet) {
      return this.walletService.rechargeWallet({...data});
    }

    @Post("generate-token")
    async generateTokens(@Body() data: IGenerateToken) {
      return this.walletService.generateToken({...data});
    }

    @Post("confirm-payment")
    async confirmPay(@Body() data: IConfirmPayment) {
      return this.walletService.confirmPayment({...data});
    }
}
