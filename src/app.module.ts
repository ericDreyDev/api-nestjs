import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({

  imports: [
    //adicionado aqui global o configModule
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
    AuthModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule { }
