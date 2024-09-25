import { ApiProperty } from '@nestjs/swagger';

export class RechargeWalletDTO {
  @ApiProperty({ description: 'El documento del usuario' })
  document: string;

  @ApiProperty({ description: 'La telefono/celular del usuario' })
  cellphone: string;

  @ApiProperty({ description: 'El valor a recargar' })
  value: number;

}

export class GenerateTokenDto {
  @ApiProperty({ description: 'El documento del usuario' })
  document: string;

  @ApiProperty({ description: 'La telefono/celular del usuario' })
  cellphone: string;

  @ApiProperty({ description: 'El valor ' })
  amount: number;
}

export class ConfirmPaymentDto {
  @ApiProperty({ description: 'ID generado en  generate-token' })
  session_id: string;

  @ApiProperty({ description: 'Tokenm enviado al correo del usuario' })
  token: string;

  @ApiProperty({ description: 'El monto a tranferir' })
  amount: number;

}