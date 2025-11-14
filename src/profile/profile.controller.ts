import { Body, Controller, Get, Post, Put, Param, ParseIntPipe } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from '../dtos/profiles/create-profile-dto';
import { UpdateProfileDto } from 'src/dtos/profiles/update-profile-dto';

@Controller('profile')
export class ProfileController {
  constructor(
    private readonly profileService: ProfileService
  ) { }

  @Post()
  async createProfile(@Body() body: CreateProfileDto) {
    await this.profileService.createProfile(body);
  }

  @Get(':id')
  async getProfile(@Param('id', ParseIntPipe) id: number) {
    return await this.profileService.getProfileById(id);
  }

  @Put(':id')
  async updateProfile(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateProfileDto) {
    return await this.profileService.updateProfile(id, body);
  }

}
