/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, UseInterceptors } from '@nestjs/common';
import { UserCarService } from './user-car.service';
import { CreateUserCarDto } from './dto/create-user-car.dto';
import { UuidInterceptor } from '../helper/uuid.interceptor';
import { AuthGuard } from '../auth/auth.guard';
import { UseGuards } from '@nestjs/common';

@UseGuards(AuthGuard)
@Controller('user-car')
export class UserCarController {
  constructor(private readonly userCarService: UserCarService) {}

  @UseInterceptors(UuidInterceptor)
  @Get('/:id')
  findOne(@Param('id')id:string) {
    return this.userCarService.findOne(id);
  }
  @Post()
  create(@Body() createUserCarDto: CreateUserCarDto,){
    return this.userCarService.create(createUserCarDto);
  }
}
