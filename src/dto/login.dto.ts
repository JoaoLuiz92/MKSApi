// src/dto/login.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'joao' })
  username: string;

  @ApiProperty({ example: '123' })
  password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}
