/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, IsUUID, IsNumber } from 'class-validator';

export class CreateUserCarDto {

  @IsNotEmpty()
  @IsUUID()
  car_model_id:string;
  
  @IsNotEmpty()
  @IsUUID()
  car_brand_id:string;

  @IsNotEmpty()
  @IsUUID()
  car_package_id:string;

  @IsNotEmpty()
  @IsNumber()
  car_year: number;

  @IsNumber()
  @IsNotEmpty()
  car_km:number;

  @IsNotEmpty()
  @IsString()
  license_plate:string;

  @IsNotEmpty()
  @IsString()
  color:string;
}
