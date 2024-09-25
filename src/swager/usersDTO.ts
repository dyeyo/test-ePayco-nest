import { ApiProperty } from '@nestjs/swagger';

export class CreatePeopleDto {
  @ApiProperty({ description: 'El documento del usuario' })
  document: string;

  @ApiProperty({ description: 'La nombre del usuario' })
  name: string;

  @ApiProperty({ description: 'El correo del usuario' })
  email: string;

  @ApiProperty({ description: 'La celular del usuario' })
  cellphone: number;
}