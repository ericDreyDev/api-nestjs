import { Injectable, BadRequestException, NotFoundException, ConflictException } from '@nestjs/common';
import { CreateProfileDto } from 'src/dtos/create-profile-dto';
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
}
