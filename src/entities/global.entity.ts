/* eslint-disable prettier/prettier */
import { Exclude } from 'class-transformer';
import {
  BaseEntity,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class GlobalEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Exclude()
  @CreateDateColumn({
    type: 'timestamp with time zone',
    default: () => 'NOW()',
  })
  created_at: Date;

  @Exclude()
  @UpdateDateColumn({
    type: 'timestamp with time zone',
    default: () => 'NOW()',
    onUpdate: 'NOW()',
  })
  updated_at: Date;

  @Exclude()
  @DeleteDateColumn({
    type: 'timestamp with time zone',
  })
  deleted_at: Date;
}
