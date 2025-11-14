import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';
export class LoginDto {
    @IsEmail()
    @ApiProperty({ description: 'Email do usuário', example: 'joao.silva@example.com' })
    email: string;

    @IsString()
    @ApiProperty({ description: 'Senha do usuário', example: 'senhadojoao123' })
    password: string;
}
