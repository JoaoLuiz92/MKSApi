import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'joao' })
  username!: string;

  @ApiProperty({ example: '123' })
  password!: string;
}
