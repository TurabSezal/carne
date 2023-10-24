/* eslint-disable prettier/prettier */
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserPost } from '../entities/user_post.entity';
import { CreateUserPostDto } from './dto/user-post-create.dto';
import { ApiResponse, SuccessResponse } from '../api-response/api-response';

export class UserPostService {
  constructor(
    @InjectRepository(UserPost)
    private readonly userPostRepository: Repository<UserPost>,
  ) {}

    async createPost(createUserPostDto: CreateUserPostDto):Promise<ApiResponse<any>> {
    this.userPostRepository.save({
      ...createUserPostDto
    });
    return new SuccessResponse("Post created successfully");
  }

  async findOne(id:string):Promise<ApiResponse<UserPost>>{
   const post=await this.userPostRepository.findOne({where:{id}});
   return new SuccessResponse(post);
  }

  async findUser(id:string):Promise<ApiResponse<UserPost[]>> {
    const post =await this.userPostRepository.find({where:{user_id:id}});
    return new SuccessResponse(post);
  }

  async delete (id:string):Promise<ApiResponse<any>>{
    const exist=await this.userPostRepository.findOne({where:{id}});
    if (exist==null) {
      return new SuccessResponse("post not found");
    }
    await this.userPostRepository.softDelete({id});
    return new SuccessResponse("Post deleted successfully");
  }
}
