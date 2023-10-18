/* eslint-disable prettier/prettier */
import { Controller, Get, Param, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { UuidInterceptor } from '../helper/uuid.interceptor';
import { UsersService } from './users.service';

@UseGuards(AuthGuard)
@Controller('user')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @UseInterceptors(UuidInterceptor)
  @Get('/:id')
  findUserPost(@Param('id') id: string) {
    return this.userService.findUserPost(id);
  }
}
