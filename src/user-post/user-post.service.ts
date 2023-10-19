/* eslint-disable prettier/prettier */
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserPost } from '../entities/user_post.entity';
import { CreateUserPostDto } from './dto/user-post-create.dto';

export class UserPostService {
  constructor(
    @InjectRepository(UserPost)
    private readonly userPostRepository: Repository<UserPost>,
  ) {}

    async createPost(createUserPostDto: CreateUserPostDto) {
    this.userPostRepository.save({
      ...createUserPostDto
    });
    return "user post created";
  }

  async findOne(id:string){
   const post=await this.userPostRepository.findOne({where:{id}});
   return post;
  }

  async findUser(id:string) {
    const post =await this.userPostRepository.find({where:{user_id:id}});
    return post;
  }
}
