import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/user-create.dto';
import { ApiResponse } from '../api-response/api-response';
import { User } from '../entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }

  @Post('register')
  create(@Body() createUserDto: CreateUserDto): Promise<ApiResponse<any>> {
    return this.authService.create(createUserDto);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(id: string): Promise<ApiResponse<User[]>> {
    return this.authService.getProfile(id);
  }
}
