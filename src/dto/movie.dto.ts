import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';


export class CreateMovieDto {
  @ApiProperty()
  readonly title!: string;

  @ApiProperty()
  readonly descriptio!: string;

  @ApiProperty()
  readonly directo!: string;

  @ApiProperty()
  readonly releaseDat!: string;
}


export class UpdateMovieDto {
  @ApiPropertyOptional()
  readonly title?: string;

  @ApiPropertyOptional()
  readonly description?: string;

  @ApiPropertyOptional()
  readonly director?: string;

  @ApiPropertyOptional()
  readonly releaseDate?: string;
}

