/* eslint-disable prettier/prettier */
import { PostLike } from './../entities/post_like.entity';
import { Body, Controller, Post } from '@nestjs/common';
import { PostLikeService } from './post-like.service';
import { ApiResponse } from '../api-response/api-response';

@Controller('post-like')
export class PostLikeController {
 constructor(
  private readonly postLikeService: PostLikeService,
 ) {}
 @Post()
 create(@Body() postLike:PostLike):Promise<ApiResponse<any>> {
  return this.postLikeService.create(postLike);
 }
}
