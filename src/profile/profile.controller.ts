import { Body, Controller, Get, Post, Put, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from '../dtos/profiles/create-profile-dto';
import { UpdateProfileDto } from 'src/dtos/profiles/update-profile-dto';

@ApiTags('profile')
@Controller('profile')
export class ProfileController {
  constructor(
    private readonly profileService: ProfileService
  ) { }

  @ApiOperation({ summary: 'Create a new profile' })
  @ApiResponse({ status: 201, description: 'The profile has been successfully created.' })
  @ApiResponse({ status: 404, description: 'User not found.' })
  @ApiResponse({ status: 409, description: 'Profile already exists for this user.' })
  @Post()
  async createProfile(@Body() body: CreateProfileDto) {
    await this.profileService.createProfile(body);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a profile by ID' })
  @ApiResponse({ status: 200, description: 'The profile has been successfully retrieved.' })
  @ApiResponse({ status: 404, description: 'Profile not found.' })
  async getProfile(@Param('id', ParseIntPipe) id: number) {
    return await this.profileService.getProfileById(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a profile by ID' })
  @ApiResponse({ status: 200, description: 'The profile has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'Profile not found.' })
  async updateProfile(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateProfileDto) {
    return await this.profileService.updateProfile(id, body);
  }

}
