/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserPost } from './user_post.entity';
import { User } from './user.entity';

@Entity()
export class PostLike {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  post_id: string;

  @Column()
  user_id: string;

  @OneToOne(() => User, {
    eager: false,
  })
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  public user: User;

  @OneToOne(() => UserPost, {
    eager: false,
  })
  @JoinColumn({ name: 'post_id', referencedColumnName: 'id' })
  public userPost: UserPost;
}
