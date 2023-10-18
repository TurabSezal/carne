/* eslint-disable prettier/prettier */
import { Entity,Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, } from "typeorm";
import { CarBrand } from "./car_brand.entity";
import { CarPackage } from "./car_package.entity";

@Entity()
export class CarModel{
 @PrimaryGeneratedColumn('uuid')
  id: string;

 @Column()
 model_name:string;

 @Column()
 car_brand_id:string;

 @OneToOne(() => CarBrand, {
    eager: false,
  })
  @JoinColumn({ name: 'car_brand_id', referencedColumnName: 'id' })
  public carBrand: CarBrand;

  @OneToMany(
    () => CarPackage,
    (carPackage) => carPackage.carModel,
    {
      eager: false,
    },
  )
  public carPackage: CarPackage[];
}