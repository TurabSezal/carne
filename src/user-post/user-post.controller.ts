/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { UserPostService } from './user-post.service';
import { AuthGuard } from '../auth/auth.guard';
import { UuidInterceptor } from '../helper/uuid.interceptor';
import { CreateUserPostDto } from './dto/user-post-create.dto';
import { ApiResponse } from '../api-response/api-response';
import { UserPost } from '../entities/user_post.entity';

@UseGuards(AuthGuard)
@Controller('post')
export class UserPostController {
  constructor(private readonly userPostService: UserPostService) {}

  @UseInterceptors(UuidInterceptor)
  @Get('/:id')
  findOne(@Param('id') id: string):Promise<ApiResponse<UserPost>> {
    return this.userPostService.findOne(id);
  }

  @UseInterceptors(UuidInterceptor)
  @Get('/user/:id')
  findUser(@Param('id') id: string):Promise<ApiResponse<UserPost[]>> {
    return this.userPostService.findUser(id);
  }

  @Post()
    createPost(@Body() createUserPostDto: CreateUserPostDto) {
      return this.userPostService.createPost(createUserPostDto);
  }
}

