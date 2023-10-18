/* eslint-disable prettier/prettier */
import { Entity, Column,OneToMany,PrimaryGeneratedColumn } from 'typeorm';
import { UserCar } from './user_car.entity';
import { UserPost } from './user_post.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(
    () => UserCar,
    (userCar) => userCar.user,
    {
      eager: false,
    },
  )
  public userCar: UserCar[];

  @OneToMany(
    () => UserPost,
    (userPost) => userPost.user,
    {
      eager: false,
    },
  )
  public userPost: UserPost[];
}