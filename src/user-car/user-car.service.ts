/* eslint-disable prettier/prettier */
import { CreateUserCarDto } from './dto/create-user-car.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserCar } from '../entities/user_car.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserCarService {
  constructor(
    @InjectRepository(UserCar)
    private readonly userCarRepository: Repository<UserCar>,
  ) {}

  async findOne(id:string){
    const rawquery=this.userCarRepository.createQueryBuilder('user_car');
    const querybuilder=await rawquery
    .leftJoinAndSelect('user_car.carModel','carModel')
    .leftJoinAndSelect('carModel.carPackage','carPackage')
    .leftJoinAndSelect('user_car.carBrand','carBrand')
    .where('user_car.user_id=:id',{id})
    .select([
      'user_car.id',
      'carModel.model_name',
      'carBrand.brand_name',
      'carPackage.name',
      'user_car.car_year',
      'user_car.color'
    ])
    .getOne();
    if (querybuilder==null) {
      new NotFoundException('User Not Found');
    }
    const car=[]
    car.push(
      {
        id:querybuilder.id,
        model:querybuilder.carModel.model_name,
        brand:querybuilder.carBrand.brand_name,
        car_year:querybuilder.car_year,
        color:querybuilder.color,
        package:querybuilder.carModel.carPackage,
      }
    )
    return car;
  }

  async create(createUserCarDto:CreateUserCarDto)
  {
    await this.userCarRepository.save({ ...createUserCarDto})
    return null;
  }

  async update(id:string,updateUserCarDto:CreateUserCarDto){
    const car=await this.userCarRepository.findOne({where:{id}})
    if (car==null) {
     new NotFoundException('Not Found')
    }
    await this.userCarRepository.update({id},{
      car_model_id:updateUserCarDto.car_model_id,
      car_brand_id:updateUserCarDto.car_brand_id,
      car_package_id:updateUserCarDto.car_package_id,
      car_year:updateUserCarDto.car_year,
      car_km:updateUserCarDto.car_km,
      license_plate:updateUserCarDto.license_plate,
      color:updateUserCarDto.color
    })
    return car;
  }
}
