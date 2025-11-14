import { IsDateString, IsOptional, IsString, IsUrl, Length } from "class-validator";

export class UpdateProfileDto {
    @IsOptional()
    @IsString()
    @Length(3, 100)
    fullName?: string;

    @IsOptional()
    @IsDateString()
    birthDate?: string;

    @IsOptional()
    @IsUrl()
    avatarUrl?: string;
}