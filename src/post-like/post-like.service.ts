/* eslint-disable prettier/prettier */
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostLike } from '../entities/post_like.entity';
import { ApiResponse, ErrorResponse, SuccessResponse } from '../api-response/api-response';


export class PostLikeService {
 constructor(
  @InjectRepository(PostLike)
  private readonly postLikeRepository: Repository<PostLike>,
 ) {}

 async create (postLike: PostLike): Promise<ApiResponse<any>> {
  const exist=await this.postLikeRepository.findOne({where:{user_id:postLike.user_id,post_id:postLike.post_id}});
  if (exist!=null) {
   return new ErrorResponse("post already liked");
  }
   await this.postLikeRepository.save({
   user_id: postLike.user_id,
   post_id: postLike.post_id,
  });
  return new SuccessResponse("Post liked successfully");
 }

 async delete (postLike: PostLike): Promise<ApiResponse<any>>{
  const exist=await this.postLikeRepository.findOne({where:{user_id:postLike.user_id,post_id:postLike.post_id}});
  if (exist==null) {
   return new ErrorResponse("post not liked");
  }
  await this.postLikeRepository.delete({user_id:postLike.user_id,post_id:postLike.post_id});
  return new SuccessResponse("Post unliked successfully");
 }
}
