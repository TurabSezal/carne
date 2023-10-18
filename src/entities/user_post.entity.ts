/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { PostComment } from './post_comment.entity';

@Entity()
export class UserPost {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_id:string;

  @Column({ nullable: true, default: 0 })
  like:number;

  @Column()
  description:string;

  @Column({ type: 'bytea' })
  image: Buffer;

  @OneToOne(() => User, {
    eager: false,
  })
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  public user: User;

  @OneToMany(
    () => PostComment,
    (postComment) => postComment.userPost,
    {
      eager: false,
    },
  )
  public postComment: PostComment[];
}
