import { Body, Controller, Get, Post, Put, Param, ParseIntPipe } from '@nestjs/common';
import { CreateProfileDto } from '../dtos/create-profile-dto';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
  constructor(
    private readonly profileService: ProfileService
  ) { }

  @Post()
  async createProfile(@Body() body: CreateProfileDto) {
    await this.profileService.createProfile(body);
  }

}
