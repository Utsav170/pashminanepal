import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @ApiProperty({ example: 'john@gmail.com', description: 'Email of the user' })
  email: string;

  @Column()
  @ApiProperty({ example: 'john', description: 'Name of the user' })
  name: string;

  @Column({ unique: true })
  @ApiProperty({
    example: '19282736467',
    description: 'Mobile number of the user',
  })
  mobileNumber: number;
}
