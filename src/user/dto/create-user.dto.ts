import { IsInt, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @ApiProperty({ example: 'john', description: 'Name of the user' })
  readonly name: string;

  @IsInt()
  @ApiProperty({ example: 'john@gmail.com', description: 'Email of the user' })
  readonly mobileNumber: number;

  @IsString()
  readonly email: string;
}
