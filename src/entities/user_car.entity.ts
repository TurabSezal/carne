/* eslint-disable prettier/prettier */
import { Entity, Column,OneToOne,JoinColumn, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import { User } from './user.entity';
import { CarBrand } from './car_brand.entity';
import { CarModel } from './car_model.entity';

@Entity()
export class UserCar{
 @PrimaryGeneratedColumn('uuid')
  id: string;

 @Column()
 car_model_id:string;

 @Column()
 car_brand_id:string;

 @Column()
 car_package_id:string;

 @Column()
 user_id:string;

 @Column()
 car_year:number;

 @Column()
 car_km:number;

 @Column()
 license_plate:string;

 @Column()
 color:string;

 @ManyToOne(() => User, {
    eager: false,
  })
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  public user: User;

  @OneToOne(()=>CarBrand,{
    eager:false,
  })
  @JoinColumn({name:'car_brand_id',referencedColumnName:'id'})
  public carBrand:CarBrand;

  @OneToOne(()=>CarModel,{
    eager:false,
  })
  @JoinColumn({name:'car_model_id',referencedColumnName:'id'})
  public carModel:CarModel;
}