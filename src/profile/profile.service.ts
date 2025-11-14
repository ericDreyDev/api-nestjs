import { Injectable, BadRequestException, NotFoundException, ConflictException } from '@nestjs/common';
import { CreateProfileDto } from 'src/dtos/profiles/create-profile-dto';
import { UpdateProfileDto } from 'src/dtos/profiles/update-profile-dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProfileService {
    constructor(private prisma: PrismaService) { }

    async createProfile(dto: CreateProfileDto) {

        const user = await this.prisma.user.findUnique({ where: { id: dto.userId } });
        if (!user) {
            throw new NotFoundException('User not found');
        }

        const profileExists = await this.prisma.profile.findUnique({ where: { userId: dto.userId } });
        if (profileExists) {
            throw new ConflictException('Profile already exists for this user');
        }

        await this.prisma.profile.create({
            data: {
                userId: dto.userId,
                fullName: dto.fullName,
                birthDate: dto.birthDate ? new Date(dto.birthDate) : null,
                avatarUrl: dto.avatarUrl
            },
        });
    }

    async getProfileById(id: number) {
        const profile = await this.prisma.profile.findUnique({ where: { id } });

        if (!profile) {
            throw new NotFoundException('Profile not found');
        }

        return profile;
    }

    async updateProfile(id: number, dto: UpdateProfileDto) {
        const profile = await this.prisma.profile.findUnique({ where: { id } });

        if (!profile) {
            throw new NotFoundException('Profile not found');
        }

        return await this.prisma.profile.update({
            where: { id },
            data: {
                fullName: dto.fullName,
                birthDate: dto.birthDate ? new Date(dto.birthDate) : null,
                avatarUrl: dto.avatarUrl
            }
        });
    }
}
