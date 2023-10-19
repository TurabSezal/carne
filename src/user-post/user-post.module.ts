/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserPostController } from './user-post.controller';
import { UserPostService } from './user-post.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPost } from '../entities/user_post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserPost])],
  controllers: [UserPostController],
  providers: [UserPostService],
})
export class UserPostModule {}
