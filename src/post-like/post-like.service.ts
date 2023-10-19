/* eslint-disable prettier/prettier */
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostLike } from '../entities/post_like.entity';


export class PostLikeService {
 constructor(
  @InjectRepository(PostLike)
  private readonly postLikeRepository: Repository<PostLike>,
 ) {}

 async create (postLike: PostLike) {
  const exist=await this.postLikeRepository.findOne({where:{user_id:postLike.user_id,post_id:postLike.post_id}});
  if (exist!=null) {
   return "already liked";
  }
  return await this.postLikeRepository.save({
   user_id: postLike.user_id,
   post_id: postLike.post_id,
  });
 }
}
