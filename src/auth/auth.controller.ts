import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDTO } from 'src/dtos/users/create-user-dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private auth: AuthService) { }


    @Post('login')
    @ApiOperation({ summary: 'Login do usuário' })
    @ApiResponse({ status: 200, description: 'Usuário logado com sucesso.' })
    @ApiResponse({ status: 401, description: 'Credenciais inválidas.' })
    login(@Body() dto: { email: string; password: string }) {
        return this.auth.login(dto.email, dto.password);
    }
    @Post('register')
    @ApiOperation({ summary: 'Registro de novo usuário' })
    @ApiResponse({ status: 201, description: 'Usuário registrado com sucesso.' })
    @ApiResponse({ status: 400, description: 'Dados inválidos.' })
    register(@Body() dto: CreateUserDTO) {
        return this.auth.register(dto);
    }
}
