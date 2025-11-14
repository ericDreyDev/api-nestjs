import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, IsUrl, Length, } from "class-validator";

export class CreateProfileDto {
    @IsNotEmpty()
    @IsNumber()
    userId: number;

    @IsNotEmpty()
    @IsString()
    @Length(3, 100)
    fullName: string;

    @IsOptional()
    @IsDateString()
    birthDate?: string;

    @IsOptional()
    @IsUrl()
    avatarUrl?: string;
}