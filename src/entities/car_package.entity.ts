/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CarModel } from './car_model.entity';

@Entity()
export class CarPackage {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  car_model_id: string;

  @Column()
  name:string;

  @OneToOne(() => CarModel, {
    eager: false,
  })
  @JoinColumn({ name: 'car_model_id', referencedColumnName: 'id' })
  public carModel: CarModel;
}
