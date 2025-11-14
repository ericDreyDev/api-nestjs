import { IsDateString, IsOptional, IsString, IsUrl, Length } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProfileDto {
    @IsOptional()
    @IsString()
    @Length(3, 100)
    @ApiProperty({ description: 'Nome completo do usuário', example: 'João Silva', required: false })
    fullName?: string;

    @IsOptional()
    @IsDateString()
    @ApiProperty({ description: 'Data de nascimento do usuário', example: '1990-01-01', required: false })
    birthDate?: string;

    @IsOptional()
    @IsUrl()
    @ApiProperty({ description: 'URL do avatar do usuário', example: 'https://example.com/avatar.jpg', required: false })
    avatarUrl?: string;
}