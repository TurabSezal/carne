/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserCarController } from './user-car.controller';
import { UserCarService } from './user-car.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserCar } from '../entities/user_car.entity';

@Module({
 imports:[TypeOrmModule.forFeature([UserCar])],
  controllers: [UserCarController],
  providers: [UserCarService],
  exports:[UserCarService]
})
export class UserCarModule {}
