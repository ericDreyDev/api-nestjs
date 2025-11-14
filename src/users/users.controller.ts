import { Body, Controller, Delete, Get, Post, Put, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateUserDTO } from 'src/dtos/users/create-user-dto';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(
        private service: UsersService
    ) { }

    @Post()
    @ApiOperation({ summary: 'Create a new user' })
    @ApiResponse({ status: 201, description: 'The user has been successfully created.' })
    async createUser(@Body() body: CreateUserDTO) {
        await this.service.createUser(body);
    }


    @Get()
    @ApiOperation({ summary: 'Get all users' })
    @ApiResponse({ status: 200, description: 'The users have been successfully retrieved.' })
    async findAll() {
        return await this.service.getAllUsers();
    }


    @Put(':id')
    @ApiOperation({ summary: 'Update a user by ID' })
    @ApiResponse({ status: 200, description: 'The user has been successfully updated.' })
    @ApiResponse({ status: 404, description: 'User not found.' })
    async update(@Param('id', ParseIntPipe) id: number, @Body() body: CreateUserDTO) {
        await this.service.updateUser(id, body);
    }


    @Delete(':id')
    @ApiOperation({ summary: 'Delete a user by ID' })
    @ApiResponse({ status: 200, description: 'The user has been successfully deleted.' })
    @ApiResponse({ status: 404, description: 'User not found.' })
    async delete(@Param('id', ParseIntPipe) id: number) {
        await this.service.deleteUser(id);
    }

}
