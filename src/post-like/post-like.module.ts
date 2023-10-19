/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PostLikeController } from './post-like.controller';
import { PostLikeService } from './post-like.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostLike } from '../entities/post_like.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PostLike])],
  controllers: [PostLikeController],
  providers: [PostLikeService],
})
export class PostLikeModule {}
