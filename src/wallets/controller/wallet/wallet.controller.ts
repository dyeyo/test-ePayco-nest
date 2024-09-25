import { GenerateTokenDTO, RechargeWalletDTO, ConfirmPaymentDTO, CheckBalanceDTO } from './../../../swager/walletDTO';
import { IRechargeWallet, IGenerateToken, IConfirmPayment, ICheckBalance } from './../../interfaces/wallet.interface';
import { Controller, Body, Post } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from "@nestjs/swagger";
import { WalletService } from './../../services/wallet/wallet.service';



@Controller("api/wallet")
@ApiTags("Wallet")
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Post("recharge-wallet")
  @ApiOperation({ summary: "Recargar billetera" })
  @ApiBody({
    description: "Datos de recargar o crear una billetera",
    type: RechargeWalletDTO,
  })
  @ApiResponse({ status: 200, description: "Billetera creado correctamente." })
  @ApiResponse({ status: 400, description: "Error al crear la  Billetera." })
  async createPost(@Body() data: IRechargeWallet) {
    return this.walletService.rechargeWallet({ ...data });
  }

  @Post("generate-token")
  @ApiOperation({ summary: "Generar token y ID unico" })
  @ApiBody({ description: "Datos de generar token", type: GenerateTokenDTO })
  @ApiResponse({ status: 200, description: "Token creado correctamente." })
  @ApiResponse({ status: 400, description: "Error al crear el token." })
  async generateTokens(@Body() data: IGenerateToken) {
    return this.walletService.generateToken({ ...data });
  }

  @Post("confirm-payment")
  @ApiOperation({ summary: "Confirmar el pago" })
  @ApiBody({
    description: "Datos la confirmacion del pago",
    type: ConfirmPaymentDTO,
  })
  @ApiResponse({ status: 200, description: "Pago confirmado correctamente." })
  @ApiResponse({ status: 400, description: "Error al hacer la petición POST" })
  async confirmPay(@Body() data: IConfirmPayment) {
    return this.walletService.confirmPayment({ ...data });
  }

  @Post("check-balance")
  @ApiOperation({ summary: "Revisar mi saldo" })
  @ApiBody({ description: "Datos la revisar mi saldo", type: CheckBalanceDTO })
  @ApiResponse({ status: 200, description: "Pago confirmado correctamente." })
  @ApiResponse({ status: 400, description: "Error al hacer la petición POST" })
  async checkedBalance(@Body() data: ICheckBalance) {
    return this.walletService.checkBalance({ ...data });
  }
}
