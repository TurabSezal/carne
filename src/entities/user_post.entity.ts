/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { PostComment } from './post_comment.entity';
import { PostLike } from './post_like.entity';
import { GlobalEntity } from './global.entity';

@Entity()
export class UserPost extends GlobalEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_id:string;

  @Column({nullable:true})
  description:string;

  @Column()
  image: string;

  @ManyToOne(() => User, {
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

  @OneToMany(
    () => PostLike,
    (postLike) => postLike.userPost,
    {
      eager: false,
    },
  )
  public postLike: PostLike[];
}
