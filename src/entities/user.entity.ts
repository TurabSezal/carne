/* eslint-disable prettier/prettier */
import { Entity, Column,OneToMany,PrimaryGeneratedColumn } from 'typeorm';
import { UserCar } from './user_car.entity';
import { UserPost } from './user_post.entity';
import { PostLike } from './post_like.entity';
import { Chat } from './chat.entity';
import { GlobalEntity } from './global.entity';

@Entity()
export class User extends GlobalEntity {
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

  @OneToMany(
    () => PostLike,
    (postLike) => postLike.user,
    {
      eager: false,
    },
  )
  public postLike: PostLike[];

  @OneToMany(
    () => Chat,
    (chat) => chat.user,
    {
      eager: false,
    },
  )
  public chat: Chat[];
}