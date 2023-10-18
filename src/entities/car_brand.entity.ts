/* eslint-disable prettier/prettier */
import { Entity,Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { CarModel } from "./car_model.entity";
@Entity()
export class CarBrand{
 @PrimaryGeneratedColumn('uuid')
  id: string;

 @Column()
 brand_name:string;

 @OneToMany(
    () => CarModel,
    (carModel) => carModel.carBrand,
    {
      eager: false,
    },
  )
  public carModel: CarModel[];
}