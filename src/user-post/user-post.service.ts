/* eslint-disable prettier/prettier */
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserPost } from '../entities/user_post.entity';

export class UserPostService {
  constructor(
    @InjectRepository(UserPost)
    private readonly userPostRepository: Repository<UserPost>,
  ) {}

  async findOne(id:string){
   const post=await this.userPostRepository.findOne({where:{id}});
   return post;
  }

  async findUser(id:string) {
    const post =await this.userPostRepository.find({where:{user_id:id}});
    return post;
  }
}
