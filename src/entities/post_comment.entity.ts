/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserPost } from './user_post.entity';
import { User } from './user.entity';
import { GlobalEntity } from './global.entity';

@Entity()
export class PostComment extends GlobalEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  post_id:string;

  @Column()
  user_id:string;

  @Column()
  comment:string;

  @Column({ nullable: true, default: 0 })
  like:number;

  @OneToOne(() => UserPost, {
    eager: false,
  })
  @JoinColumn({ name: 'post_id', referencedColumnName: 'id' })
  public userPost: UserPost;

  @OneToOne(() => User, {
    eager: false,
  })
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  public user: User;
}
