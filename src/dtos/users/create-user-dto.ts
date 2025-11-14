import { IsNotEmpty, Length } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDTO {
   @IsNotEmpty()
   @Length(3, 100)
   @ApiProperty({ description: 'Nome do usuário', example: 'João Silva' })
   name: string;


   @IsNotEmpty()
   @ApiProperty({ description: 'Email do usuário', example: 'joao.silva@example.com' })
   email: string;

   @IsNotEmpty()
   @ApiProperty({ description: 'Hash da senha do usuário', example: 'senhadojoao123' })
   passwordHash: string;

}
