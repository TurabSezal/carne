import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { UserPost } from '../entities/user_post.entity';
import { CreateUserPostDto } from './dto/user-post-create.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(UserPost)
    private readonly userPostRepository: Repository<UserPost>,
  ) {}

  async create(createUserPostDto: CreateUserPostDto) {
    const user = await this.userPostRepository.save({
      ...createUserPostDto,
    });
    return user;
  }

  async findOne(email: string) {
    const user = await this.userRepository.findOne({ where: { email: email } });
    return user;
  }

  async findUserPost(id: string) {
    const user = await this.userPostRepository.find({
      where: { user_id: id },
    });
    return user;
  }
}
