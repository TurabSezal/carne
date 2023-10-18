/* eslint-disable prettier/prettier */
import { Controller, Get, Param, UseGuards, UseInterceptors } from '@nestjs/common';
import { UserPostService } from './user-post.service';
import { AuthGuard } from '../auth/auth.guard';
import { UuidInterceptor } from '../helper/uuid.interceptor';

@UseGuards(AuthGuard)
@Controller('user-post')
export class UserPostController {
  constructor(private readonly userPostService: UserPostService) {}

  @UseInterceptors(UuidInterceptor)
  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.userPostService.findOne(id);
  }
}
