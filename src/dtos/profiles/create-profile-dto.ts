import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, IsUrl, Length, } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateProfileDto {
    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({ description: 'ID do usuário', example: 1 })
    userId: number;

    @IsNotEmpty()
    @IsString()
    @Length(3, 100)
    @ApiProperty({ description: 'Nome completo do usuário', example: 'João Silva' })
    fullName: string;

    @IsOptional()
    @IsDateString()
    @ApiProperty({ description: 'Data de nascimento do usuário', example: '1990-01-01', required: false })
    birthDate?: string;

    @IsOptional()
    @IsUrl()
    @ApiProperty({ description: 'URL do avatar do usuário', example: 'https://example.com/avatar.jpg', required: false })
    avatarUrl?: string;
}