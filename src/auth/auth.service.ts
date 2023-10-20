import { CreateUserDto } from './../users/dto/user-create.dto';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import {
  ApiResponse,
  CreatedResponse,
  ErrorResponse,
  SuccessResponse,
} from '../api-response/api-response';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<ApiResponse<any>> {
    const exist = await this.userRepository.findOne({
      where: { email: createUserDto.email },
    });
    if (exist != null) {
      return new ErrorResponse(`User exist '${createUserDto.email}'`);
    }
    this.userRepository.save({
      ...createUserDto,
    });
    return new CreatedResponse('User created successfully');
  }
  async signIn(email, pass) {
    const user = await this.usersService.findOne(email);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async getProfile(id: string): Promise<ApiResponse<User[]>> {
    const user = await this.userRepository.findOne({ where: { id } });
    const profile = [];
    profile.push({
      id: user.id,
      email: user.email,
      firstName: user.first_name,
      lastName: user.last_name,
      password: user.password,
    });
    return new SuccessResponse(profile);
  }
}
