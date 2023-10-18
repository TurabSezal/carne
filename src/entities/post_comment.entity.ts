/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserPost } from './user_post.entity';

@Entity()
export class PostComment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  post_id:string;

  @Column()
  comment:string;

  @Column({ nullable: true, default: 0 })
  like:number;

  @OneToOne(() => UserPost, {
    eager: false,
  })
  @JoinColumn({ name: 'post_id', referencedColumnName: 'id' })
  public userPost: UserPost;
}
