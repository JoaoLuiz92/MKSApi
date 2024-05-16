import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'joao' })
  username!: string;

  @ApiProperty({ example: '123' })
  password!: string;
}
