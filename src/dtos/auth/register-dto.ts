import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class RegisterDto {
   @IsOptional()
   @IsString()
   @ApiProperty({ description: 'Nome do usuário', example: 'João Silva', required: false })
   name?: string;

   @IsEmail()
   @ApiProperty({ description: 'Email do usuário', example: 'joao.silva@example.com' })
   email: string;

   @IsString()
   @MinLength(6)
   @ApiProperty({ description: 'Senha do usuário', example: 'senhadojoao123' })
   password: string;
}
