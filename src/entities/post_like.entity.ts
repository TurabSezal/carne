/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserPost } from './user_post.entity';
import { User } from './user.entity';
import { GlobalEntity } from './global.entity';

@Entity()
export class PostLike extends GlobalEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  post_id: string;

  @Column()
  user_id: string;

  @ManyToOne(() => User, {
    eager: false,
  })
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  public user: User;

  @ManyToOne(() => UserPost, {
    eager: false,
  })
  @JoinColumn({ name: 'post_id', referencedColumnName: 'id' })
  public userPost: UserPost;
}
